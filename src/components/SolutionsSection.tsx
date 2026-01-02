import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Smartphone, Users, Globe, Settings } from "lucide-react";

const solutions = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native iOS, Android, and Huawei apps for seamless international remittance on the go.",
    features: [
      "Biometric authentication",
      "Real-time notifications",
      "Multi-language support",
    ],
  },
  {
    icon: Users,
    title: "Agent Portal",
    description:
      "Versatile platform for branch users, third-party agents, and partners to manage operations.",
    features: [
      "Transaction management",
      "Balance tracking",
      "Commission reports",
    ],
  },
  {
    icon: Globe,
    title: "Customer Portal",
    description:
      "Web-based platform for comprehensive management of international remittance services.",
    features: [
      "Self-service transfers",
      "Transaction history",
      "Recipient management",
    ],
  },
  {
    icon: Settings,
    title: "Admin Portal",
    description:
      "Centralized control center for administrators to manage all remittance operations.",
    features: [
      "User management",
      "Compliance monitoring",
      "System configuration",
    ],
  },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Solutions Access
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Seamless Access Across Platforms
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The EasyRemit Suite provides comprehensive solutions for every
            stakeholder in your remittance ecosystem.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              variant="feature"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/20 to-teal/20 flex items-center justify-center mb-4">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="text-base">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
