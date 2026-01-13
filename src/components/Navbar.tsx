import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Building2 } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Loan Types", href: "#loans" },
  { name: "EMI Calculator", href: "#calculator" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Building2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-foreground">
                Prime<span className="text-accent">Loan</span>
              </span>
              <p className="text-xs text-muted-foreground -mt-1">Lowest Rates Guaranteed</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+918727902141" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 8727902141</span>
            </a>
            <Button variant="hero" onClick={() => scrollToSection("#contact")}>
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-4 text-left text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button variant="hero" className="mt-4" onClick={() => scrollToSection("#contact")}>
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
