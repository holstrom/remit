import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "1. What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit our website or open the Easy Remit Solutions portal. They help us remember preferences, understand usage, and secure your session.",
  },
  {
    title: "2. Cookies We Use",
    content:
      "We rely on a blend of first-party and third-party cookies. The major categories include:",
    items: [
      "Essential cookies that keep you signed in, route traffic, and prevent fraud.",
      "Analytics cookies (e.g., privacy-friendly product analytics) that measure adoption and performance trends.",
      "Preference cookies that remember language, theme, and corridor selections.",
      "Marketing cookies used sparingly to understand campaign effectiveness for prospective partners.",
    ],
  },
  {
    title: "3. Managing Cookies",
    content:
      "Most browsers allow you to block or delete cookies through settings. Doing so may impact certain features such as secure dashboards or embedded support widgets. You can also adjust consent settings in our cookie banner.",
  },
  {
    title: "4. Do Not Track",
    content:
      "Our platform currently does not respond to Do Not Track signals. We limit third-party scripts, avoid unnecessary trackers, and offer opt-out choices where required by law.",
  },
  {
    title: "5. Contact",
    content:
      "Questions about cookies or tracking technologies can be directed to support@easyremitsolutions.com.",
  },
];

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy via-navy-light to-navy text-white text-center">
        <div className="container max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-heading font-bold">Cookie Policy</h1>
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
