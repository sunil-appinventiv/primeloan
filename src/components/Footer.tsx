import { Building2, Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Home Loan", href: "#loans" },
  { name: "Plot Loan", href: "#loans" },
  { name: "Commercial Loan", href: "#loans" },
  { name: "Balance Transfer", href: "#loans" },
  { name: "EMI Calculator", href: "#calculator" },
];

const companyLinks = [
  { name: "About Us", href: "#why-us" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-dark text-primary-foreground relative">
      {/* Back to Top Button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <Button
          variant="hero"
          size="icon"
          className="w-12 h-12 rounded-full shadow-lg animate-bounce-subtle"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center shadow-md">
                <Building2 className="w-7 h-7 text-gold-foreground" />
              </div>
              <div>
                <span className="text-xl font-heading font-bold">
                  Prime<span className="text-gold">Loan</span>
                </span>
                <p className="text-xs text-primary-foreground/60">Lowest Rates Guaranteed</p>
              </div>
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              India's most trusted mortgage partner offering the lowest interest rates 
              on all types of property loans.
            </p>
            {/* <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-gold hover:text-gold-foreground rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Loan Products</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

         

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70">
                  <p>+91 872 790 2141</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-primary-foreground/70">
                  <p>omverma763@gmail.com</p>
                </div>
              </li>
              {/* <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-primary-foreground/70">
                  123 Financial Hub,<br />
                  Chandigarh, India 160102
                </p>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 PrimeLoan. All rights reserved.
            </p>
            {/* <p className="text-sm text-primary-foreground/60">
              Made with ❤️ in India | Regulated by RBI
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
