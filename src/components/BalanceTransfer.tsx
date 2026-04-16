import { ArrowRight, TrendingDown, Percent, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import btHowWorks from "@/assets/bt-how-works.jpg";
import btBanks from "@/assets/bt-banks.jpg";
import btScale from "@/assets/bt-scale.jpg";
import btCoins from "@/assets/bt-coins.jpg";

const steps = [
  { icon: Percent, title: "Compare Rates", desc: "We find rates lower than your current EMI" },
  { icon: TrendingDown, title: "Save Money", desc: "Reduce your monthly EMI significantly" },
  { icon: Clock, title: "Quick Process", desc: "Seamless transfer within 7–10 working days" },
  { icon: ShieldCheck, title: "Zero Hassle", desc: "We handle all the paperwork for you" },
];

const BalanceTransfer = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Balance Transfer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Switch & <span className="text-primary">Save More</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transfer your existing home loan to us and enjoy lower interest rates with better terms.
          </p>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-14">
          {[
            { src: btHowWorks, alt: "How balance transfer works" },
            { src: btBanks, alt: "Bank to bank transfer" },
            { src: btScale, alt: "Balance transfer savings" },
            { src: btCoins, alt: "Save with lower EMI" },
          ].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow border border-border">
              <img src={img.src} alt={img.alt} className="w-full h-44 object-cover" />
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center p-6 bg-card rounded-2xl border border-border shadow-card">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" onClick={scrollToContact} className="group">
            Check Your Savings
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BalanceTransfer;
