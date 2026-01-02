import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Users,
  ShieldCheck,
  Rocket,
  Globe,
  Target,
  Building2,
} from "lucide-react";

const stats = [
  { value: "180+", label: "Active corridors" },
  { value: "$12B+", label: "Payments safeguarded" },
  { value: "50+", label: "Banking partnerships" },
  { value: "24/7", label: "Compliance monitoring" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Compliance First",
    description:
      "We build every workflow with regulator-ready controls so our customers can scale without surprises.",
  },
  {
    icon: Rocket,
    title: "Builder Mindset",
    description:
      "We prototype fast, listen to customers weekly, and ship improvements that compound.",
  },
  {
    icon: Users,
    title: "Human Trust",
    description:
      "Remittances exist because of people. We obsess over clarity, empathy, and reliability.",
  },
];

const leadership = [
  {
    name: "Amelia Navarro",
    title: "Chief Executive Officer",
    bio: "Former head of cross-border strategy at a top-5 global bank with 15 years leading remittance innovation.",
  },
  {
    name: "Caleb Mensah",
    title: "Chief Technology Officer",
    bio: "Built high-volume payment systems at multiple unicorn fintechs; open-standard evangelist.",
  },
  {
    name: "Priya Ramaswami",
    title: "Chief Compliance & Risk Officer",
    bio: "Licensed compliance officer who previously ran AML programs spanning 60+ jurisdictions.",
  },
  {
    name: "Leo Park",
    title: "Head of Customer Experience",
    bio: "Scaled partner enablement and support operations for global payout platforms serving millions of users.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Idea to Blueprint",
    detail:
      "Mapped the gaps slowing global payouts and started Easy Remit Solutions in a Brooklyn coworking space.",
  },
  {
    year: "2020",
    title: "First Corridors Live",
    detail:
      "Launched EasyRemit Core with carrier-grade redundancy across North America, LATAM, and EMEA.",
  },
  {
    year: "2023",
    title: "Compliance Fabric",
    detail:
      "Released EasyRemit Shield and Identity, providing unified due diligence and monitoring for partners.",
  },
  {
    year: "2025",
    title: "Global Platform",
    detail:
      "Expanded to 180+ corridors with instant settlement rails, embedded FX, and configurable agent tooling.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-navy text-white">
        <div className="container max-w-4xl text-center">
          <p className="uppercase tracking-[0.3em] text-white/70 text-sm mb-4">
            About Easy Remit Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Purpose-built infrastructure for modern remittance leaders
          </h1>
          <p className="text-white/80 text-lg mt-6">
            We help banks, fintech builders, and payout networks launch
            compliant, customer-ready experiences in weeks—not years. Our team
            blends deep regulatory expertise with product craftsmanship.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm">
              Our Story
            </p>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Engineering trust across every transfer
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Easy Remit Solutions was founded by operators who previously
              wrestled with fragmented vendor stacks, manual compliance
              workflows, and brittle payout rails. We believed remittance teams
              deserved a platform that honored strict regulations while enabling
              rapid product iteration.
            </p>
            <p className="text-muted-foreground">
              Today we power everything from white-label consumer apps to
              embedded enterprise payouts, with a network of banking, FX, and
              cash-out partners spanning five continents.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-heading font-bold text-primary">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Our Values
            </p>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Principles that guide every launch
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-transform"
              >
                <value.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                Leadership
              </p>
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Operators who have built it before
              </h2>
            </div>
            <p className="text-muted-foreground md:max-w-xl">
              Our leadership team spans banking, cloud infrastructure, AML, and
              customer experience—ensuring every Easy Remit rollout balances
              innovation with accountability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {leader.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {leader.title}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-secondary/40">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Milestones
            </p>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Building momentum year after year
            </h2>
          </div>
          <div className="space-y-6">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center md:gap-8"
              >
                <div className="text-primary font-heading text-2xl md:w-32">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {milestone.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-4xl text-center bg-gradient-to-br from-cyan/10 to-teal/10 border border-primary/20 rounded-3xl p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Work With Us
          </p>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Ready to launch your next corridor?
          </h2>
          <p className="text-muted-foreground mb-6">
            Partner with Easy Remit Solutions for compliance-ready remittance
            infrastructure, embedded FX, and real-time monitoring from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="/enrollment">Schedule Consultation</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Talk to Sales</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
