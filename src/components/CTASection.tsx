import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Smartphone className="w-4 h-4 text-cyan" />
            <span className="text-sm text-white/90 font-medium">
              Available on iOS, Android & Huawei
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Find All Features You Need in One App
          </h2>

          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Experience seamless international money transfers with the Easy
            Remit Solutions mobile suite. Send money to loved ones, track
            transactions in real-time, and manage your finances—all from your
            pocket.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/enrollment" className="flex items-center gap-2">
                Download Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/enrollment">Schedule Demo</Link>
            </Button>
          </div>

          {/* App Store Badges (Visual representation) */}
          <div className="flex justify-center gap-4 mt-10">
            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              App Store
            </div>
            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              Google Play
            </div>
            <div className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              Huawei AppGallery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
