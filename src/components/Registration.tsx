import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Registration = () => {
  const pricingTiers = [
    {
      name: "Student",
      price: "$99",
      description: "Perfect for undergraduate and graduate students",
      features: [
        "Access to all sessions",
        "Conference materials",
        "Lunch & coffee breaks",
        "Poster session participation",
        "Certificate of attendance"
      ],
      popular: false
    },
    {
      name: "Academic",
      price: "$199",
      description: "For faculty and research professionals",
      features: [
        "All Student benefits",
        "Research paper submission",
        "Access to exclusive networking events",
        "Proceedings publication",
        "Workshop participation",
        "Priority seating"
      ],
      popular: true
    },
    {
      name: "Industry",
      price: "$299",
      description: "For industry professionals and executives",
      features: [
        "All Academic benefits",
        "Industry showcase opportunity",
        "Premium networking sessions",
        "One-on-one meetings",
        "Exhibition space access",
        "VIP reception invitation"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Registration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your spot at this prestigious symposium. Early bird discounts 
            available until February 15, 2024.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-accent text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {tier.name}
                </CardTitle>
                <div className="text-4xl font-bold text-primary mt-4">
                  {tier.price}
                </div>
                <p className="text-muted-foreground mt-2">
                  {tier.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-accent text-white hover:opacity-90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-hero text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Early Bird Special</h3>
          <p className="text-xl mb-6 opacity-90">
            Register before February 15, 2024 and save 20% on all registration types!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-conference-gold hover:bg-conference-gold/90 text-conference-dark font-semibold px-8 py-6 text-lg"
            >
              Register with Early Bird Discount
            </Button>
            <div className="text-sm opacity-80">
              Offer expires in 45 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;