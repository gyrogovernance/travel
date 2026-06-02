#!/usr/bin/env python3
import argparse
import csv
import json
import os
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path


UNSPLASH_SEARCH_URL = "https://api.unsplash.com/search/photos"
PEXELS_SEARCH_URL = "https://api.pexels.com/v1/search"
COMMONS_API_URL = "https://commons.wikimedia.org/w/api.php"
WIKITRAVEL_API_URL = "https://wikitravel.org/wiki/en/api.php"


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def fetch_json(url: str, headers: dict | None = None, timeout: int = 30) -> tuple[dict, dict]:
    base_headers = {"User-Agent": "travel-image-fetcher/1.0 (+local-script)"}
    if headers:
        base_headers.update(headers)
    req = urllib.request.Request(url, headers=base_headers)
    with urllib.request.urlopen(req, timeout=timeout) as res:
        data = res.read().decode("utf-8")
        return json.loads(data), dict(res.headers.items())


def download_file(url: str, destination: Path, timeout: int = 60) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": "travel-image-fetcher/1.0"})
    with urllib.request.urlopen(req, timeout=timeout) as res:
        destination.write_bytes(res.read())


def parse_destinations(markdown_path: Path) -> list[dict]:
    lines = markdown_path.read_text(encoding="utf-8").splitlines()
    rows = []
    region = None
    order = 0
    for line in lines:
        m_region = re.match(r"^###\s+(Asia|Africa|Europe|Americas|Oceania)\s*$", line.strip())
        if m_region:
            region = m_region.group(1)
            continue
        m_dest = re.match(r"^-\s+\[([^\]]+)\]\(([^)]+)\),\s+(.+)\.$", line.strip())
        if m_dest and region:
            order += 1
            destination = m_dest.group(1).strip()
            page_link = m_dest.group(2).strip()
            country = m_dest.group(3).strip()
            page_file = Path(urllib.parse.unquote(page_link)).name
            page_slug = page_file.replace(".md", "")
            rows.append(
                {
                    "order": order,
                    "destination": destination,
                    "country": country,
                    "region": region,
                    "page_slug": page_slug,
                }
            )
    return rows


def search_unsplash(query: str, access_key: str) -> tuple[dict | None, int | None]:
    params = {
        "query": query,
        "orientation": "landscape",
        "per_page": 1,
        "content_filter": "high",
    }
    url = f"{UNSPLASH_SEARCH_URL}?{urllib.parse.urlencode(params)}"
    payload, headers = fetch_json(url, headers={"Authorization": f"Client-ID {access_key}"})
    remaining = headers.get("X-Ratelimit-Remaining")
    remaining_count = int(remaining) if remaining and remaining.isdigit() else None
    results = payload.get("results", [])
    if not results:
        return None, remaining_count
    return results[0], remaining_count


def search_pexels(query: str, api_key: str) -> tuple[dict | None, int | None]:
    params = {
        "query": query,
        "orientation": "landscape",
        "per_page": 1,
        "page": 1,
    }
    url = f"{PEXELS_SEARCH_URL}?{urllib.parse.urlencode(params)}"
    payload, headers = fetch_json(url, headers={"Authorization": api_key})
    remaining = headers.get("X-Ratelimit-Remaining")
    remaining_count = int(remaining) if remaining and remaining.isdigit() else None
    photos = payload.get("photos", [])
    if not photos:
        return None, remaining_count
    return photos[0], remaining_count


def search_wikimedia_commons(query: str) -> dict | None:
    params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srnamespace": 6,
        "srlimit": 5,
        "srsearch": f"{query} skyline OR landmark OR city",
    }
    search_url = f"{COMMONS_API_URL}?{urllib.parse.urlencode(params)}"
    payload, _ = fetch_json(search_url)
    hits = payload.get("query", {}).get("search", [])
    if not hits:
        return None

    title = hits[0]["title"]
    info_params = {
        "action": "query",
        "format": "json",
        "prop": "imageinfo",
        "iiprop": "url|extmetadata",
        "titles": title,
    }
    info_url = f"{COMMONS_API_URL}?{urllib.parse.urlencode(info_params)}"
    info_payload, _ = fetch_json(info_url)
    pages = info_payload.get("query", {}).get("pages", {})
    if not pages:
        return None
    page = next(iter(pages.values()))
    image_info = (page.get("imageinfo") or [{}])[0]
    image_url = image_info.get("url")
    if not image_url:
        return None
    ext = image_info.get("extmetadata", {})
    return {
        "title": title,
        "image_url": image_url,
        "author": ((ext.get("Artist") or {}).get("value") or "").strip(),
        "license": ((ext.get("LicenseShortName") or {}).get("value") or "").strip(),
        "source": ((ext.get("Credit") or {}).get("value") or "").strip(),
    }


def lookup_wikitravel(query: str) -> str:
    params = {
        "action": "opensearch",
        "search": query,
        "limit": 1,
        "namespace": 0,
        "format": "json",
    }
    url = f"{WIKITRAVEL_API_URL}?{urllib.parse.urlencode(params)}"
    try:
        payload, _ = fetch_json(url)
        links = payload[3] if isinstance(payload, list) and len(payload) > 3 else []
        return links[0] if links else ""
    except Exception:
        return ""


def inject_image_into_page(page_path: Path, relative_image_path: str, alt_text: str) -> None:
    text = page_path.read_text(encoding="utf-8")
    if "" in text:
        return
    insert_block = (
        "\n\n"
        f"![{alt_text}]({relative_image_path})\n\n"
    )
    marker = "## Why It Is Mainstream"
    if marker in text:
        text = text.replace(marker, insert_block + marker, 1)
    else:
        text += "\n\n" + insert_block
    page_path.write_text(text, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Fetch destination images from Unsplash and Wikimedia Commons.")
    parser.add_argument("--main-file", required=True, help="Path to the top-level markdown with destination bullets.")
    parser.add_argument("--pages-dir", required=True, help="Directory containing destination markdown pages.")
    parser.add_argument("--assets-dir", required=True, help="Directory where images should be stored.")
    parser.add_argument("--attribution-csv", required=True, help="Path to output attribution CSV.")
    parser.add_argument("--batch-size", type=int, default=20, help="How many destinations to process this run.")
    parser.add_argument("--start-offset", type=int, default=0, help="Starting index into parsed destination list.")
    parser.add_argument("--inject", action="store_true", help="Insert hero image blocks into destination pages.")
    parser.add_argument("--pause-seconds", type=float, default=1.0, help="Pause between requests.")
    args = parser.parse_args()

    unsplash_access_key = os.getenv("UNSPLASH_ACCESS_KEY", "").strip()
    pexels_api_key = os.getenv("PEXELS_API_KEY", "").strip()

    main_file = Path(args.main_file)
    pages_dir = Path(args.pages_dir)
    assets_dir = Path(args.assets_dir)
    attribution_csv = Path(args.attribution_csv)

    assets_dir.mkdir(parents=True, exist_ok=True)
    attribution_csv.parent.mkdir(parents=True, exist_ok=True)

    destinations = parse_destinations(main_file)
    subset = destinations[args.start_offset : args.start_offset + args.batch_size]
    if not subset:
        print("No destinations selected for this run.")
        return

    write_header = not attribution_csv.exists()
    with attribution_csv.open("a", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        if write_header:
            writer.writerow(
                [
                    "order",
                    "destination",
                    "country",
                    "region",
                    "provider",
                    "image_url",
                    "author",
                    "license",
                    "source_url",
                    "wikitravel_url",
                    "local_file",
                ]
            )

        for item in subset:
            destination = item["destination"]
            country = item["country"]
            region = item["region"]
            order = item["order"]
            page_slug = item["page_slug"]
            query = f"{destination} {country}"
            local_name = f"{slugify(page_slug)}.jpg"
            local_path = assets_dir / local_name
            wikitravel_url = lookup_wikitravel(destination)

            provider = ""
            image_url = ""
            author = ""
            license_name = ""
            source_url = ""
            remaining = None

            if pexels_api_key:
                try:
                    photo, remaining = search_pexels(query, pexels_api_key)
                    if photo:
                        provider = "pexels"
                        image_url = photo.get("src", {}).get("landscape") or photo.get("src", {}).get("large")
                        source_url = photo.get("url", "")
                        author = photo.get("photographer", "")
                        license_name = "Pexels License"
                        if image_url:
                            download_file(image_url, local_path)
                        else:
                            provider = ""
                except Exception as e:
                    print(f"Pexels error for {destination}: {e}")
                    provider = ""

            if not provider and unsplash_access_key:
                try:
                    photo, remaining = search_unsplash(query, unsplash_access_key)
                    if photo:
                        provider = "unsplash"
                        image_url = photo["urls"]["regular"]
                        source_url = photo["links"]["html"]
                        user = photo.get("user", {})
                        author = user.get("name", "")
                        license_name = "Unsplash License"
                        download_file(image_url, local_path)
                except Exception as e:
                    print(f"Unsplash error for {destination}: {e}")
                    provider = ""

            if not provider:
                try:
                    commons = search_wikimedia_commons(query)
                    if commons:
                        provider = "wikimedia_commons"
                        image_url = commons["image_url"]
                        source_url = f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(commons['title'])}"
                        author = commons.get("author", "")
                        license_name = commons.get("license", "")
                        download_file(image_url, local_path)
                except Exception as e:
                    print(f"Commons error for {destination}: {e}")
                    provider = ""

            if provider:
                if args.inject:
                    page_path = pages_dir / f"{page_slug}.md"
                    if page_path.exists():
                        relative_image = f"assets/{local_name}"
                        inject_image_into_page(
                            page_path,
                            relative_image_path=relative_image,
                            alt_text=f"{destination}, {country}",
                        )

                writer.writerow(
                    [
                        order,
                        destination,
                        country,
                        region,
                        provider,
                        image_url,
                        author,
                        license_name,
                        source_url,
                        wikitravel_url,
                        str(local_path),
                    ]
                )
                print(f"OK  {order:03d} {destination} ({provider})")
            else:
                writer.writerow(
                    [
                        order,
                        destination,
                        country,
                        region,
                        "not_found",
                        "",
                        "",
                        "",
                        "",
                        wikitravel_url,
                        "",
                    ]
                )
                print(f"MISS {order:03d} {destination}")

            if remaining is not None:
                print(f"API remaining: {remaining}")
                if remaining <= 1:
                    print("Rate limit nearly exhausted. Stopping early.")
                    break
            time.sleep(args.pause_seconds)


if __name__ == "__main__":
    main()
