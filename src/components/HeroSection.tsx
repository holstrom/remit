import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center bg-hero overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[100%] h-full">
          <img
            src="https://images.unsplash.com/photo-1739989934265-b46240484890?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional using global money transfer"
            className="w-full h-full bg-cover bg-center object-cover opacity-30 lg:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container px-4 max-w-[1200px] relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-gold" />
            <span className="text-sm text-white/90 font-medium">
              Instant Money Transfer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6 animate-slide-up">
            Cross-Border Payment{" "}
            <span className="text-gradient">Enterprise Suite</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg  text-white/80 leading-relaxed mb-8 max-w-xl animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Easy Remit Solutions is redefining how the world moves money. We
            deliver secure, affordable, and accessible global transfers for
            businesses and individuals—powered by cutting-edge fintech.
          </p>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap gap-6 mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="w-5 h-5 text-teal" />
              <span className="text-sm">Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Zap className="w-5 h-5 text-gold" />
              <span className="text-sm">Instant Transfers</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Globe className="w-5 h-5 text-cyan" />
              <span className="text-sm">180+ Countries</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" /> */}
    </section>
  );
};
