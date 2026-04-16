import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingModern from "@/assets/building-modern.jpg";
import buildingBlue from "@/assets/building-blue.jpg";
import buildingTall from "@/assets/building-tall-1.jpeg";

const properties = [
  {
    image: buildingModern,
    title: "Modern Apartments",
    subtitle: "Premium Residential Financing",
    description: "Get the best home loan rates for modern apartment complexes with flexible EMI options.",
    rate: "7.30%",
  },
  {
    image: buildingBlue,
    title: "Luxury Residences",
    subtitle: "Dream Home Loans",
    description: "Finance your luxury residence with India's lowest interest rates and quick approvals.",
    rate: "7.50%",
  },
  {
    image: buildingTall,
    title: "High-Rise Home",
    subtitle: "Plot + Construction Loans",
    description: "Combined financing for high-rise developments with stage-wise disbursement options.",
    rate: "7.30%",
  },
];

const PropertyShowcase = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % properties.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + properties.length) % properties.length);
  const next = () => setCurrent((c) => (c + 1) % properties.length);
  const property = properties[current];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Property Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Finance Your <span className="text-primary">Dream Property</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From apartments to high-rises, we finance every type of residential property.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 bg-card rounded-3xl overflow-hidden shadow-card-hover border border-border">
            {/* Image */}
            <div className="relative h-72 sm:h-96 lg:h-[480px] overflow-hidden">
              <img
                key={current}
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {properties.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-white w-8" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-sm font-semibold text-accent mb-2">{property.subtitle}</span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                {property.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{property.description}</p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <p className="text-xs text-muted-foreground">Interest Rate From</p>
                  <p className="text-3xl font-bold text-accent">{property.rate}</p>
                  <p className="text-xs text-muted-foreground">per annum</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground">Tenure Up To</p>
                  <p className="text-3xl font-bold text-foreground">20</p>
                  <p className="text-xs text-muted-foreground">years</p>
                </div>
              </div>
              <Button variant="accent" size="lg" className="w-fit" onClick={scrollToContact}>
                Apply Now →
              </Button>
            </div>
          </div>

          {/* Nav buttons */}
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-colors">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-background transition-colors">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
