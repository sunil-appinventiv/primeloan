import { 
  BadgePercent, 
  Clock, 
  Shield, 
  HeadphonesIcon, 
  FileCheck, 
  Users,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: BadgePercent,
    title: "Lowest Interest Rates",
    description: "We guarantee the most competitive rates in the market, starting from just 8.35% p.a.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Get your loan sanctioned within 24-48 hours with our streamlined digital process.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data is protected with bank-grade encryption and strict privacy policies.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileCheck,
    title: "Minimal Documentation",
    description: "Simple paperwork with digital document verification for hassle-free processing.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated team is available round the clock to assist you at every step.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Get personalized advice from our experienced loan specialists for the best deal.",
    color: "from-rose-500 to-orange-500",
  },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "₹20 Cr+", label: "Loans Disbursed" },
  { value: "15+", label: "Banking Partners" },
  { value: "98%", label: "Approval Rate" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Your Trusted <span className="text-primary">Loan Partner</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to making your loan journey smooth, transparent, and rewarding. 
            Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-hero-gradient rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />
          
          <div className="relative z-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold text-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/80 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Partnered with India's Leading Banks</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["HDFC", "ICICI", "Axis", "Kotak", "Yes Bank", "Bajaj"].map((bank, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground/70">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="font-semibold">{bank}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
