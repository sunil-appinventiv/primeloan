import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const loanOptions = [
  "Home Loan",
  "Plot Loan",
  "Plot + Construction",
  "Loan Against Property (LAP)",
  "Home Renovation",
  "Balance Transfer (BT)",
  "Top-up Loan",
  "Commercial Property Loan",
  "Overdraft Facility",
  "Specialized Property Loan",
];

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "",
    loanAmount: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      loanType: "",
      loanAmount: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Apply for Your <span className="text-primary">Loan Today</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and our expert team will get back to you 
            with the best loan options within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-hero-gradient text-primary-foreground border-0 shadow-card-hover">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">Call Us</p>
                      <p className="font-semibold">+91 8727902141</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">Email Us</p>
                      <p className="font-semibold">omverma763@gmail.com</p>
                     </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">Visit Us</p>
                      <p className="font-semibold">123 Financial Hub,</p>
                      <p className="font-semibold">Chandigarh, India 160102</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 mb-1">Business Hours</p>
                      <p className="font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="font-semibold">Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Benefits */}
            <div className="p-6 bg-card rounded-2xl border border-border shadow-card">
              <h4 className="font-heading font-bold text-foreground mb-4">Why Apply With Us?</h4>
              <ul className="space-y-3">
                {[
                  "Free consultation with loan experts",
                  "Compare rates from 15+ banks",
                  "No hidden charges or fees",
                  "Doorstep document collection",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 bg-card shadow-card-hover border-border">
            <CardHeader>
              <CardTitle className="text-xl font-heading">Loan Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Loan Type *
                    </label>
                    <Select
                      value={formData.loanType}
                      onValueChange={(value) => handleChange("loanType", value)}
                    >
                      <SelectTrigger className="h-12 bg-background">
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent className="bg-card">
                        {loanOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Loan Amount (₹)
                    </label>
                    <Input
                      placeholder="e.g., 50,00,000"
                      value={formData.loanAmount}
                      onChange={(e) => handleChange("loanAmount", e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Additional Message
                  </label>
                  <Textarea
                    placeholder="Tell us more about your requirements..."
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Submit
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy. 
                  We'll never share your information with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
