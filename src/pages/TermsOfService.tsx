import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. Agreement",
    content:
      'These Terms of Service ("Terms") govern your access to and use of Easy Remit Solutions\' websites, APIs, applications, and services (collectively, the "Services"). By using the Services you agree to these Terms and our Privacy Policy.',
  },
  {
    title: "2. Eligibility & Accounts",
    content:
      "You must be at least 18 years old and authorized to represent your organization. You are responsible for safeguarding login credentials, maintaining accurate account information, and restricting access to authorized personnel only.",
  },
  {
    title: "3. Acceptable Use",
    content:
      "You will use the Services in accordance with all applicable laws, sanctions programs, card network rules, and Easy Remit's compliance standards. Prohibited activities include:",
    items: [
      "Submitting false or misleading information during onboarding or transaction processing.",
      "Attempting to probe, scan, or test system vulnerabilities without authorization.",
      "Engaging in fraudulent, abusive, or high-risk activity without our prior written consent.",
      "Reselling or sublicensing the Services unless otherwise agreed in writing.",
    ],
  },
  {
    title: "4. Fees & Payment",
    content:
      "We may charge implementation, subscription, or transaction-based fees as outlined in your order form or master services agreement. Unless otherwise stated, fees are due net 15 days. Late payments may incur interest and suspension of Services.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "Easy Remit Solutions retains all intellectual property rights to the Services, documentation, and brand elements. You receive a limited, non-transferable license to use the Services for your internal business purposes during the term of your agreement.",
  },
  {
    title: "6. Confidentiality",
    content:
      "Each party agrees to protect confidential information disclosed in connection with the Services and to use it solely for fulfilling obligations under the applicable agreement. This obligation survives termination for three (3) years.",
  },
  {
    title: "7. Disclaimer & Liability",
    content:
      'The Services are provided on an "as is" basis. To the maximum extent permitted by law, Easy Remit disclaims implied warranties and limits aggregate liability to the fees paid in the twelve (12) months preceding the claim.',
  },
  {
    title: "8. Termination",
    content:
      "Either party may terminate for convenience with 30 days’ notice or immediately for cause if the other party breaches these Terms. Upon termination you must cease using the Services and delete any confidential information received from Easy Remit.",
  },
  {
    title: "9. Governing Law",
    content:
      "These Terms are governed by the laws of the State of New York, excluding its conflicts-of-law rules. The parties consent to the exclusive jurisdiction of state and federal courts located in New York County.",
  },
];

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy-light to-navy text-white text-center">
        <div className="container max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold">Terms of Service</h1>
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
              Your continued use of the Services after updates to these Terms
              constitutes acceptance of the revised version. Material changes
              will be communicated via email or in-app notices.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsOfService;
