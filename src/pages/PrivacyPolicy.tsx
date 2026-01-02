import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. Overview",
    content:
      'This Privacy Policy explains how Easy Remit Solutions ("Easy Remit", "we", "us") collects, uses, shares, and protects personal information when you interact with our website, mobile apps, and professional services.',
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect information that helps us operate our remittance platform, deliver compliance-ready experiences, and support you throughout the onboarding process.",
    items: [
      "Identity data such as full name, date of birth, nationality, and government-issued identifiers (when applicable).",
      "Contact data including email, mobile number, messaging handles, and physical address.",
      "Transactional data covering payout instructions, corridor preferences, and activity logs.",
      "Financial and compliance documentation submitted during enrollment, due diligence, or ongoing monitoring.",
      "Technical data (device type, browser, IP, analytics events) gathered via cookies and SDKs.",
    ],
  },
  {
    title: "3. How We Use Information",
    content:
      "We process personal information under legitimate interest, contractual necessity, and regulatory compliance obligations. Typical purposes include:",
    items: [
      "Provisioning customer portals, APIs, and operational tooling.",
      "Executing KYC/KYB checks, sanctions screening, and transaction monitoring.",
      "Personalizing communications, demos, and onboarding workflows.",
      "Improving platform reliability, threat detection, and user experience.",
      "Meeting legal, tax, audit, and supervisory requirements in supported jurisdictions.",
    ],
  },
  {
    title: "4. Sharing & Disclosures",
    content:
      "Easy Remit Solutions does not sell personal information. We may disclose data to vetted service providers (cloud hosting, identity verification, analytics), banking partners, or regulators when required to deliver the services or comply with law.",
  },
  {
    title: "5. Data Retention & Security",
    content:
      "We retain information only for as long as necessary to fulfill the purposes above, resolve disputes, and satisfy regulatory obligations. We apply layered security controls: encryption in transit and at rest, strict role-based access, logging, penetration tests, and incident response procedures.",
  },
  {
    title: "6. Your Rights",
    content:
      "Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, or port your personal data. Submit verified requests to support@easyremitsolutions.com and we will respond within the timelines mandated by applicable law.",
  },
  {
    title: "7. Contact",
    content:
      "Questions about this policy or our data practices can be sent to support@easyremitsolutions.com or Easy Remit Solutions, 400 Broome St, New York, NY 10013.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy-light to-navy text-white text-center">
        <div className="container max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold">Privacy Policy</h1>
          <p className="text-white/80 mt-4">Last updated: January 2, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl space-y-8">
          {sections.map((section) => (
            <article
              key={section.title}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
              {section.items && (
                <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
          <div className="bg-secondary/40 border border-border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">
              Easy Remit Solutions may update this Privacy Policy to reflect new
              regulations or platform improvements. We will post revisions on
              this page and update the “Last updated” date above.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
