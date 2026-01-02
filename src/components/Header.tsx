import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#home", isSection: true },
  { label: "About", href: "/about", isSection: false },
  // { label: "Products", href: "#products", isSection: true },
  { label: "Services", href: "#services", isSection: true },
  { label: "Solutions", href: "#solutions", isSection: true },
  // { label: "Consultation", href: "/enrollment", isSection: false },
  { label: "FAQ", href: "#faq", isSection: true },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: { href: string; isSection: boolean }) => {
    setIsMobileMenuOpen(false);

    if (link.isSection) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.href);
    }
  };

  const isOffHomepage = location.pathname !== "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOffHomepage
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled || isOffHomepage
                ? "bg-gradient-to-br from-cyan to-teal"
                : "bg-white/20 backdrop-blur-sm"
            }`}
          >
            <Leaf className={`w-6 h-6 text-white`} />
          </div>
          <div>
            <span
              className={`font-heading font-bold text-lg transition-colors ${
                isScrolled || isOffHomepage ? "text-navy" : "text-white"
              }`}
            >
              Easy Remit Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isScrolled || isOffHomepage
                  ? "text-foreground hover:text-primary hover:bg-secondary"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant={isScrolled || isOffHomepage ? "outline" : "hero-outline"}
            size="default"
            onClick={() =>
              handleNavClick({ href: "#contact", isSection: true })
            }
          >
            Contact Us
          </Button>
          <Button
            variant="hero"
            size="default"
            onClick={() =>
              handleNavClick({ href: "/enrollment", isSection: false })
            }
          >
            Work With Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={`w-6 h-6 ${
                isScrolled || isOffHomepage ? "text-navy" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                isScrolled || isOffHomepage ? "text-navy" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t animate-slide-up">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="px-4 py-3 text-left rounded-lg text-foreground hover:bg-secondary transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <hr className="my-2 border-border" />
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                handleNavClick({ href: "#contact", isSection: true })
              }
            >
              Contact Us
            </Button>
            <Button
              variant="hero"
              className="w-full"
              onClick={() =>
                handleNavClick({ href: "/enrollment", isSection: false })
              }
            >
              Work With Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
