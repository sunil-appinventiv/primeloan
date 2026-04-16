import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, BadgePercent, TrendingDown } from "lucide-react";
import heroLoanImg from "@/assets/hero-loan.jpg";
import homeCoinsImg from "@/assets/home-hand-sky.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <TrendingDown className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground">
                India's Lowest Interest Rates Starting @ 7.30% p.a.
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6 animate-slide-up">
              Get the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold">Lowest Loan</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--gold))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              <br />
              Rates in India
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From home loans to commercial properties, we offer the most competitive rates 
              on every type of mortgage. Your dream property is just one application away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" onClick={() => scrollToSection("#calculator")}>
                Calculate Your EMI
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("#loans")}>
                Explore Loan Types
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {[
                { icon: BadgePercent, value: "7.30%", label: "Starting Rate" },
                { icon: Clock, value: "24 Hrs", label: "Quick Approval" },
                { icon: Shield, value: "100%", label: "Secure Process" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10">
                  <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <p className="text-xl sm:text-2xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image Collage */}
          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
                <img 
                  src={heroLoanImg} 
                  alt="Loan consultation with house model" 
                  className="w-full h-[420px]"
                />
              </div>
              {/* Floating smaller image */}
              <div className="absolute -bottom-8 -left-8 w-48 h-30 rounded-2xl overflow-hidden shadow-xl border-4 border-primary-foreground/20 animate-float">
                <img 
                  src={homeCoinsImg} 
                  alt="Home investment with coins" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl" />
              <div className="absolute top-1/2 -right-6 bg-accent/90 text-accent-foreground rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
