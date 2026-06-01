import LegalPage from "./LegalPage.jsx";

// Plain language privacy policy. Review with your own advisor before
// relying on it, and adjust to match your real data practices.
export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Gyro Governance Ethical Travel handles your data when you visit this site."
      path="/privacy"
      updated="June 2026"
      sections={[
        {
          heading: "The short version",
          paragraphs: [
            "We run a content website about ethical travel. We do not ask you to create an account, and we do not sell your personal data. This page explains what is collected when you visit and why.",
          ],
        },
        {
          heading: "What we collect",
          paragraphs: [
            "We collect very little directly. Like most websites, our hosting and analytics may record standard technical information such as your approximate location, browser type, the pages you view, and the link that brought you here.",
            "We do not collect names, addresses, or payment details on this site. When you click a booking link, you leave our site and any details you enter are handled by that partner under their own privacy policy.",
          ],
        },
        {
          heading: "Affiliate links",
          paragraphs: [
            "Some links on this site are affiliate links through Travelpayouts. If you click one and make a booking, the partner may set a cookie so the booking can be credited to us. This lets us earn a small commission at no extra cost to you. We only recommend services that fit our ethical travel principles.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "We use a small number of cookies and similar technologies for basic functionality, analytics, and affiliate tracking. You can read the details on our Cookie Policy page and control cookies through your browser settings.",
          ],
        },
        {
          heading: "Third parties",
          paragraphs: [
            "We rely on a few trusted third parties to run the site, including our web host and the Travelpayouts affiliate network. These providers process limited data on our behalf or as independent controllers under their own policies.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You can browse this site without giving us any personal information. You can clear or block cookies in your browser at any time. Depending on where you live, you may have rights to access or delete data held about you.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "If you have a question about privacy on this site, please contact Gyro Governance through the channels listed on our About page.",
          ],
        },
      ]}
    />
  );
}
