import { 
  Home, 
  MapPin, 
  Construction, 
  Landmark, 
  PaintBucket, 
  RefreshCw, 
  TrendingUp, 
  Building2, 
  Wallet,
  GraduationCap,
  Hotel,
  Factory
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const loanTypes = [
  {
    icon: Home,
    title: "Home Loan",
    description: "Lowest rates for your dream home purchase with flexible tenures up to 30 years.",
    rate: "7.30%",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Plot Loan",
    description: "Finance your land purchase with easy documentation and quick disbursement.",
    rate: "7.30%",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Construction,
    title: "Plot + Construction",
    description: "Combined financing for land and construction with stage-wise disbursement.",
    rate: "7.30%",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Landmark,
    title: "Loan Against Property",
    description: "Unlock your property's value for business or personal needs at attractive rates.",
    rate: "9.00%",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: PaintBucket,
    title: "Home Renovation",
    description: "Transform your space with hassle-free renovation financing options.",
    rate: "7.30%",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: RefreshCw,
    title: "Balance Transfer",
    description: "Switch your existing loan to us and save more with lower interest rates.",
    rate: "7.30%",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: TrendingUp,
    title: "Top-up Loan",
    description: "Get additional funds on your existing loan without extra paperwork.",
    rate: "7.50%",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Building2,
    title: "Commercial Property",
    description: "Finance your business premises with competitive commercial rates.",
    rate: "9.15%",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Wallet,
    title: "Overdraft Facility",
    description: "Flexible overdraft against property for your business cash flow needs.",
    rate: "9.50%",
    color: "bg-rose-500/10 text-rose-600",
  },
  
 
 
];

const LoanTypes = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="loans" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Loan Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Lowest Rates on{" "}
            <span className="text-primary">Every Type</span> of Loan
          </h2>
          <p className="text-lg text-muted-foreground">
            From residential to commercial, we offer the most competitive mortgage rates 
            in India. Choose from our comprehensive range of property financing solutions.
          </p>
        </div>

        {/* Loan Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loanTypes.map((loan, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl ${loan.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <loan.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {loan.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {loan.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="text-xl font-bold text-accent">{loan.rate}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:text-accent"
                    onClick={scrollToContact}
                  >
                    Apply →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 sm:p-12 bg-hero-gradient rounded-3xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground mb-4">
              Not sure which loan is right for you?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Our experts will help you find the perfect loan product that matches your needs and budget.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;
