import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Layers,
  Cpu,
  Puzzle,
  Database,
  Code2,
  CreditCard,
  UserCheck,
  TrendingUp,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multiple Channels",
    description:
      "Mobile, Web, IMTO, DMTO, Wallets, Agents, and Branch networks.",
  },
  {
    icon: Cpu,
    title: "Core Processing",
    description:
      "Centralized Compliance, AML, Treasury, Operations, and Audit.",
  },
  {
    icon: Puzzle,
    title: "Microservice Architecture",
    description: "Enhanced scalability and resilience with modular design.",
  },
  {
    icon: Database,
    title: "Universal Compatibility",
    description: "Works with any OS, Cloud, Database, or third-party system.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Vue.js, Python FastAPI, MySQL, AWS S3, and MongoDB.",
  },
];

const capabilities = [
  { icon: CreditCard, label: "Payment Gateway" },
  { icon: UserCheck, label: "eKYC" },
  { icon: TrendingUp, label: "Live Rates" },
  { icon: Users, label: "Partners" },
  { icon: Shield, label: "AML" },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

      <div className="container max-w-[1200px] px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Enterprise-Grade Fintech Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Easy Remit Solutions designs purpose-built infrastructure for
              regulated finance teams. Our platform handles millions of
              transactions with bank-grade security and compliance.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/enrollment" className="flex items-center gap-2">
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Right Content - Capabilities */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6 text-center">
                Integrated Capabilities
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {capabilities.map((cap, index) => (
                  <div
                    key={cap.label}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <cap.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">
                      {cap.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    99.9%
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Uptime SLA
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    180+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Countries
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">
                    1M+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Transactions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
