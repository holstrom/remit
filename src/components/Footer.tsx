import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoIcon } from "@/components/LogoIcon";

const footerLinks = {
  products: [
    { label: "EasyRemit Core", href: "#products" },
    { label: "EasyRemit Identity", href: "#products" },
    { label: "EasyRemit Shield", href: "#products" },
    { label: "EasyRemit FX", href: "#products" },
    { label: "EasyRemit Wallet", href: "#products" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/enrollment" },
    { label: "Contact", href: "/enrollment" },
    // { label: "Blog", href: "#" },
    // { label: "Press", href: "#" },
  ],
  // resources: [
  //   { label: "Documentation", href: "#" },
  //   { label: "API Reference", href: "#" },
  //   { label: "Partner Portal", href: "#" },
  //   { label: "Support", href: "#" },
  //   { label: "Status", href: "#" },
  // ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Compliance", href: "/compliance" },
  ],
};

export const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderFooterLink = (link: { label: string; href: string }) => {
    const className =
      "text-sm text-white/70 hover:text-white transition-colors";
    if (link.href.startsWith("/")) {
      return (
        <Link to={link.href} className={className} onClick={scrollToTop}>
          {link.label}
        </Link>
      );
    }
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  };

  return (
    <footer id="contact" className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <LogoIcon className="w-10 h-10" />
              <div>
                <span className="font-heading font-bold text-lg text-white">
                  Easy Remit Solutions
                </span>
                <span className="block text-xs font-medium -mt-1 text-white/70">
                  easyremitsolutions.com
                </span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              Easy Remit Solutions powers compliant, customer-ready cross-border
              payouts for banks, fintech builders, and ambitious payment teams.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {/* <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-cyan" />
                <span>442-284-8726</span>
              </div> */}
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-cyan" />
                <span>support@easyremitsolutions.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-cyan" />
                <span>400 Broome St, New York, NY 10013</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </div>
          {/* 
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {renderFooterLink(link)}
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>{renderFooterLink(link)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Easy Remit Solutions. All rights
            reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/easyremitsolutions"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white/70" />
            </a>
            <a
              href="https://facebook.com/easyremitsolutions"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5 text-white/70" />
            </a>
            <a
              href="https://twitter.com/EasyRemitHQ"
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <Twitter className="w-5 h-5 text-white/70" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
