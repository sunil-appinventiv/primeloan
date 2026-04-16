import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoanTypes from "@/components/LoanTypes";
import PropertyShowcase from "@/components/PropertyShowcase";
import LoanAgainstProperty from "@/components/LoanAgainstProperty";
import BalanceTransfer from "@/components/BalanceTransfer";
import CommercialLoans from "@/components/CommercialLoans";
import EMICalculator from "@/components/EMICalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LoanTypes />
      <PropertyShowcase />
      <LoanAgainstProperty />
      <BalanceTransfer />
      <CommercialLoans />
      <EMICalculator />
      <WhyChooseUs />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
