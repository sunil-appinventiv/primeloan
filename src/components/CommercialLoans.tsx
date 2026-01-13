import { Building, Hotel, GraduationCap, Warehouse, Heart, TreePine, Factory, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const specializedLoans = [
  {
    icon: GraduationCap,
    title: "School & Colleges",
    description: "Educational institution financing with flexible terms",
  },
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    description: "Hospitality sector loans with competitive rates",
  },
  {
    icon: PartyPopper,
    title: "Banquet & Marriage Halls",
    description: "Event venue financing solutions",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Godowns",
    description: "Storage facility loans for logistics businesses",
  },
  {
    icon: Heart,
    title: "Nursing Homes & Hospitals",
    description: "Healthcare facility financing options",
  },
  {
    icon: TreePine,
    title: "Marriage Gardens",
    description: "Outdoor venue and farmhouse loans",
  },
  {
    icon: Factory,
    title: "Industrial Property",
    description: "Manufacturing unit and factory financing",
  },
  {
    icon: Building,
    title: "Commercial Complex",
    description: "Shopping malls and office building loans",
  },
];

const CommercialLoans = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Specialized Financing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Commercial & Specialized Property Loans
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock funding for unique properties with our specialized commercial loan programs. 
            From educational institutions to industrial complexes, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {specializedLoans.map((loan, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <loan.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {loan.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {loan.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card border border-border rounded-2xl p-6 shadow-lg">
            <div className="text-left">
              <h3 className="text-lg font-bold text-foreground">Have a Unique Property?</h3>
              <p className="text-sm text-muted-foreground">Get customized loan solutions for any commercial property type</p>
            </div>
            <Button variant="accent" size="lg" onClick={scrollToContact}>
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialLoans;
