import LegalPage from "./LegalPage.jsx";

// Plain language cookie policy. Adjust to match your real setup.
export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How and why Gyro Governance Ethical Travel uses cookies and similar technologies."
      path="/cookies"
      updated="June 2026"
      sections={[
        {
          heading: "What cookies are",
          paragraphs: [
            "Cookies are small text files that a website stores in your browser. They help sites remember things, understand how pages are used, and, in our case, credit bookings made through affiliate links.",
          ],
        },
        {
          heading: "How we use cookies",
          paragraphs: [
            "We keep cookies to a minimum and group them into three kinds:",
            [
              "Essential: needed for the site to work and to remember that you have seen our cookie notice.",
              "Analytics: help us understand which pages and guides are useful so we can improve them.",
              "Affiliate: set when you click a booking link, so a booking can be credited to us at no extra cost to you.",
            ],
          ],
        },
        {
          heading: "Affiliate cookies in detail",
          paragraphs: [
            "When you click an affiliate link, our partner Travelpayouts and the travel brand may set cookies to track that the visit came from us. These cookies typically last from a few days to a few months depending on the program. They do not give us access to your personal account or payment details.",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "You can control or delete cookies through your browser settings at any time. Most browsers let you block all cookies or clear existing ones. If you block them, some parts of the site may not work as smoothly, and we may not be credited for bookings you make.",
          ],
        },
        {
          heading: "Our cookie notice",
          paragraphs: [
            "On your first visit we show a short notice that we use cookies. It disappears automatically once you start scrolling or when you dismiss it, and we remember your choice so you do not see it again.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "If you have a question about cookies on this site, please contact Gyro Governance through the channels listed on our About page.",
          ],
        },
      ]}
    />
  );
}
