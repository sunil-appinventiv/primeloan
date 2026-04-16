import { Building2, Phone, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Home Loan", href: "#loans" },
  { name: "Plot Loan", href: "#loans" },
  { name: "Commercial Loan", href: "#loans" },
  { name: "Balance Transfer", href: "#loans" },
  { name: "EMI Calculator", href: "#calculator" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-primary-foreground relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <Button variant="hero" size="icon" className="w-12 h-12 rounded-full shadow-lg animate-bounce-subtle" onClick={scrollToTop}>
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center shadow-md">
                <Building2 className="w-7 h-7 text-gold-foreground" />
              </div>
              <div>
                <span className="text-xl font-heading font-bold">EasyCapital<span className="text-gold">Loan</span></span>
                <p className="text-xs text-primary-foreground/60">Lowest Rates Guaranteed</p>
              </div>
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              India's most trusted mortgage partner offering the lowest interest rates on all types of property loans.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Loan Products</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(link.href)} className="text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-primary-foreground/70">+91 872 790 2141</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-primary-foreground/70">vermaom8727@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/60 text-center">
            © 2024 EasyCapitalLoan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
