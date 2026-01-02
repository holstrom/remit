import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Launch Pack",
    description: "Perfect for getting started",
    features: {
      customerWeb: true,
      customerMobile: false,
      adminPortal: true,
      agentPortal: false,
      sourceCode: false,
      resale: false,
      loyalty: false,
      futureUpdates: false,
    },
    popular: false,
  },
  {
    name: "Code Freedom",
    description: "Full development access",
    features: {
      customerWeb: true,
      customerMobile: true,
      adminPortal: true,
      agentPortal: true,
      sourceCode: true,
      resale: false,
      loyalty: false,
      futureUpdates: false,
    },
    popular: true,
  },
  {
    name: "Power Pack",
    description: "Enterprise-ready solution",
    features: {
      customerWeb: true,
      customerMobile: true,
      adminPortal: true,
      agentPortal: true,
      sourceCode: true,
      resale: true,
      loyalty: false,
      futureUpdates: true,
    },
    popular: false,
  },
  {
    name: "Loyalty Pro",
    description: "Complete ecosystem",
    features: {
      customerWeb: true,
      customerMobile: true,
      adminPortal: true,
      agentPortal: true,
      sourceCode: true,
      resale: true,
      loyalty: true,
      futureUpdates: true,
    },
    popular: false,
  },
];

const featureLabels = [
  { key: "customerWeb", label: "Customer - Web" },
  { key: "customerMobile", label: "Customer - Mobile" },
  { key: "adminPortal", label: "Admin Portal" },
  { key: "agentPortal", label: "Agent Portal" },
  { key: "sourceCode", label: "Source Code" },
  { key: "resale", label: "Re-sale Rights" },
  { key: "loyalty", label: "Loyalty Program" },
  { key: "futureUpdates", label: "Future Updates*" },
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Sales Packages
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose the plan that fits your business needs and maximize
            operational efficiency with the EasyRemit Suite.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? "bg-gradient-to-b from-navy to-navy-light text-white shadow-xl scale-105"
                  : "bg-card border border-border shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan to-teal rounded-full text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`text-xl font-heading font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm ${
                    pkg.popular ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {featureLabels.map(({ key, label }) => {
                  const hasFeature =
                    pkg.features[key as keyof typeof pkg.features];
                  return (
                    <li key={key} className="flex items-center gap-3 text-sm">
                      {hasFeature ? (
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                      ) : (
                        <div
                          className={`w-5 h-5 rounded-full ${
                            pkg.popular ? "bg-white/10" : "bg-muted"
                          } flex items-center justify-center`}
                        >
                          <X
                            className={`w-3 h-3 ${
                              pkg.popular
                                ? "text-white/30"
                                : "text-muted-foreground/50"
                            }`}
                          />
                        </div>
                      )}
                      <span
                        className={
                          hasFeature
                            ? ""
                            : `${
                                pkg.popular
                                  ? "text-white/50"
                                  : "text-muted-foreground/50"
                              }`
                        }
                      >
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* <Button
                className="w-full"
                variant={pkg.popular ? "hero" : "outline"}
              >
                Get Started
              </Button> */}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          *Future updates availability depends on the selected plan and support
          agreement.
        </p>
      </div>
    </section>
  );
};
