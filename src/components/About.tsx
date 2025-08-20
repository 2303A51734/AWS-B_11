import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About the Symposium
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A premier platform for academic excellence, innovation, and collaboration 
            in the realm of technology and engineering.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Advancing Knowledge Through Collaboration
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our National Technical Symposium serves as a catalyst for innovation, 
              bringing together the brightest minds from universities, research institutions, 
              and industry leaders across the country.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              This three-day event features keynote presentations, technical sessions, 
              poster presentations, and networking opportunities designed to foster 
              meaningful connections and drive technological advancement.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Technical Sessions</div>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Expert Speakers</div>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">8</div>
                <div className="text-sm text-muted-foreground">Research Tracks</div>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Universities</div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-gradient-hero text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4">Innovation Focus</h4>
              <p className="text-white/90">
                Cutting-edge research presentations covering AI, IoT, 
                Cybersecurity, and emerging technologies.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4">Industry Connect</h4>
              <p className="text-white/90">
                Direct interaction with industry experts and potential 
                collaboration opportunities.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4">Academic Excellence</h4>
              <p className="text-white/90">
                Peer-reviewed research papers and presentations by 
                leading academic institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;