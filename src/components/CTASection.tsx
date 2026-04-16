import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import homeHandSky from "@/assets/home-hand-sky.jpg";

const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-primary-foreground/10">
              <img 
                src={homeHandSky} 
                alt="Your dream home" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Get the Lowest Rate?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Don't wait! Our expert loan advisors are ready to help you secure the best mortgage rates in the market. 
              Get personalized quotes within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button variant="hero" size="xl" onClick={scrollToContact} className="group">
                Apply Now - It's Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={scrollToContact}>
                <Phone className="mr-2 h-5 w-5" />
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
