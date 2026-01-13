import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, IndianRupee, Calendar, Percent, PiggyBank } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculations = useMemo(() => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = tenure * 12;

    const emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    const totalPayment = emi * time;
    const totalInterest = totalPayment - principal;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principalPercentage: Math.round((principal / totalPayment) * 100),
      interestPercentage: Math.round((totalInterest / totalPayment) * 100),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    } else {
      return `₹${value.toLocaleString("en-IN")}`;
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Plan Your Finances
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            EMI <span className="text-primary">Calculator</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Calculate your monthly EMI and plan your finances better. 
            Get instant estimates with our easy-to-use calculator.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <Card className="bg-card shadow-card-hover border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-heading">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                Adjust Your Loan Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <IndianRupee className="w-4 h-4 text-muted-foreground" />
                    Loan Amount
                  </label>
                  <span className="text-lg font-bold text-primary">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={500000}
                  max={50000000}
                  step={100000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>₹5 L</span>
                  <span>₹5 Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Percent className="w-4 h-4 text-muted-foreground" />
                    Interest Rate (p.a.)
                  </label>
                  <span className="text-lg font-bold text-primary">
                    {interestRate.toFixed(2)}%
                  </span>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={6}
                  max={18}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>6%</span>
                  <span>18%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    Loan Tenure
                  </label>
                  <span className="text-lg font-bold text-primary">
                    {tenure} Years
                  </span>
                </div>
                <Slider
                  value={[tenure]}
                  onValueChange={(value) => setTenure(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="bg-hero-gradient text-primary-foreground shadow-card-hover border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-heading text-primary-foreground">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <PiggyBank className="w-5 h-5" />
                </div>
                Your EMI Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Monthly EMI */}
              <div className="text-center py-6 bg-primary-foreground/10 rounded-2xl">
                <p className="text-sm text-primary-foreground/70 mb-2">Monthly EMI</p>
                <p className="text-4xl sm:text-5xl font-bold text-gold">
                  ₹{calculations.emi.toLocaleString("en-IN")}
                </p>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary-foreground/10 rounded-xl text-center">
                  <p className="text-xs text-primary-foreground/70 mb-1">Principal Amount</p>
                  <p className="text-lg font-bold">{formatCurrency(loanAmount)}</p>
                </div>
                <div className="p-4 bg-primary-foreground/10 rounded-xl text-center">
                  <p className="text-xs text-primary-foreground/70 mb-1">Total Interest</p>
                  <p className="text-lg font-bold">{formatCurrency(calculations.totalInterest)}</p>
                </div>
              </div>

              {/* Total Payment */}
              <div className="p-4 bg-primary-foreground/10 rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-primary-foreground/70">Total Payment</span>
                  <span className="text-xl font-bold">{formatCurrency(calculations.totalPayment)}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3 bg-primary-foreground/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent-gradient rounded-full transition-all duration-500"
                    style={{ width: `${calculations.principalPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs mt-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Principal ({calculations.principalPercentage}%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary-foreground/40 rounded-full" />
                    Interest ({calculations.interestPercentage}%)
                  </span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" onClick={scrollToContact}>
                Apply for This Loan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
