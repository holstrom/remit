import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const pillars = [
  {
    title: "Regulatory Coverage",
    description:
      "Easy Remit Solutions partners with licensed financial institutions and complies with U.S. federal and state money transmission requirements, EU/UK e-money directives, and FATF-aligned anti-money laundering standards.",
  },
  {
    title: "Risk & Controls",
    description:
      "We maintain independent risk, compliance, and security functions with board-level oversight, standardized policies, and quarterly testing of internal controls.",
  },
  {
    title: "Audit & Reporting",
    description:
      "SOC 2-aligned security controls, vendor risk management, and regulator-ready reporting ensure transparency across customer journeys and payout corridors.",
  },
];

const frameworks = [
  {
    heading: "Anti-Money Laundering",
    bullets: [
      "Automated screening against OFAC, UN, EU, HMT, DFAT, and other sanctions lists.",
      "Risk-based customer due diligence with enhanced screening for high-risk geographies and industries.",
      "Real-time monitoring rules for structuring, rapid velocity, and abnormal corridor activity.",
    ],
  },
  {
    heading: "Data Protection",
    bullets: [
      "Encryption of customer data in transit (TLS 1.2+) and at rest (AES-256).",
      "Zero-trust access policies with hardware security keys for privileged accounts.",
      "GDPR and CCPA alignment with documented data-subject rights workflows.",
    ],
  },
  {
    heading: "Business Continuity",
    bullets: [
      "Multi-region deployment across SOC 1/2-compliant cloud infrastructure.",
      "Documented incident response plans with 24/7 monitoring and tabletop exercises.",
      "RPO < 1 hour and RTO < 4 hours for core remittance services.",
    ],
  },
];

const Compliance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy-light to-navy text-white text-center">
        <div className="container max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold">
            Compliance Program
          </h1>
          <p className="text-white/80 mt-4">Last updated: January 2, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl space-y-12">
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm"
              >
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {pillar.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {frameworks.map((framework) => (
              <article
                key={framework.heading}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {framework.heading}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {framework.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="bg-secondary/40 border border-border rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">
              Need additional documentation (policies, SOC reports,
              penetration-test summaries)? Email support@easyremitsolutions.com
              and our team will respond within two business days.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Compliance;
