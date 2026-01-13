import { Building2 } from "lucide-react";

const banks = [
  { name: "State Bank of India", short: "SBI" },
  { name: "HDFC Bank", short: "HDFC" },
  { name: "ICICI Bank", short: "ICICI" },
  { name: "Axis Bank", short: "AXIS" },
  { name: "Punjab National Bank", short: "PNB" },
  { name: "Bank of Baroda", short: "BOB" },
  { name: "Kotak Mahindra", short: "KOTAK" },
  { name: "Yes Bank", short: "YES" },
  { name: "IndusInd Bank", short: "INDUS" },
  { name: "Federal Bank", short: "FED" },
];

const PartnerBanks = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Trusted Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partnered with India's Leading Banks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with 30+ banks and NBFCs to get you the lowest interest rates and best loan terms
          </p>
        </div>

        {/* Bank logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <span className="text-lg font-bold text-primary">{bank.short}</span>
              <span className="text-xs text-muted-foreground text-center mt-1">{bank.name}</span>
            </div>
          ))}
        </div>

        {/* Additional trust message */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-accent font-semibold">30+ Partner Banks</span> • 
            <span className="text-accent font-semibold mx-2">Lowest Rates Guaranteed</span> • 
            <span className="text-accent font-semibold">100% Transparent Process</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;
