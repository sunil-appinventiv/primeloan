import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import lapHero from "@/assets/lap-hero.jpg";
import lapHouseModel from "@/assets/lap-house-model.jpg";
import lapIllustration from "@/assets/lap-illustration.jpg";

const benefits = [
  "Loan up to 75% of property value",
  "Interest rates starting @ 7.00% p.a.",
  "Tenure up to 20 years",
  "Minimal documentation required",
  "Use funds for any purpose",
  "Quick disbursement within 2 days",
];

const LoanAgainstProperty = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Loan Against Property
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Unlock Your <span className="text-primary">Property's Value</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get funds for business expansion, education, or personal needs by leveraging your property.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-card-hover col-span-2">
              <img src={lapHero} alt="Loan against property" className="w-full h-56" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={lapHouseModel} alt="Property valuation" className="w-full h-40" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={lapIllustration} alt="LAP illustration" className="w-full h-40" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Why Choose Our LAP?
            </h3>
            <div className="grid gap-3 mb-8">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
            <Button variant="accent" size="lg" onClick={scrollToContact} className="group">
              Apply for LAP
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanAgainstProperty;
