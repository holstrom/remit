import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Send,
  UserCheck,
  ScanLine,
  ArrowLeftRight,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const products = [
  {
    icon: Send,
    name: "EasyRemit Core",
    description:
      "Central remittance engine orchestrating compliance, payouts, and settlement across every corridor.",
    color: "text-cyan",
    bgColor: "bg-cyan/10",
  },
  {
    icon: UserCheck,
    name: "EasyRemit Identity",
    description:
      "Unified KYC/KYB orchestration with reusable profiles and jurisdiction-specific workflows.",
    color: "text-teal",
    bgColor: "bg-teal/10",
  },
  {
    icon: ScanLine,
    name: "EasyRemit Shield",
    description:
      "Adaptive AML, sanctions, and fraud monitoring with configurable rules and explainable alerts.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: ArrowLeftRight,
    name: "EasyRemit FX",
    description:
      "Live FX desk with smart routing, rate automation, and margin controls for every transfer.",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: Smartphone,
    name: "EasyRemit Wallet",
    description:
      "Mobile-first wallets and customer portals for instant send, receive, and bill pay experiences.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: ShieldCheck,
    name: "EasyRemit Vault",
    description:
      "Tokenized data sandbox enabling secure testing, analytics, and red-teaming without exposing PII.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background  mx-auto px-4">
      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            EasyRemit Product Suite
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to power global remittance operations with Easy
            Remit Solutions—from compliance to customer experience.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.name}
              variant="product"
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 rounded-xl ${product.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <product.icon className={`w-7 h-7 ${product.color}`} />
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
