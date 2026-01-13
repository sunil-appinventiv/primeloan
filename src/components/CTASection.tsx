import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-navy-light to-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Get the Lowest Rate?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Don't wait! Our expert loan advisors are ready to help you secure the best mortgage rates in the market. 
            Get personalized quotes within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Apply Now - It's Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={scrollToContact}
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to an Expert
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-gold mb-2">₹500Cr+</div>
              <p className="text-primary-foreground/70 text-sm">Loans Disbursed</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-gold mb-2">15,000+</div>
              <p className="text-primary-foreground/70 text-sm">Happy Customers</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-gold mb-2">24 Hours</div>
              <p className="text-primary-foreground/70 text-sm">Quick Approval</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
