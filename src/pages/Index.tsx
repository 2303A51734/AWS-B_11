import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Schedule Section */}
      <section id="schedule">
        <Schedule />
      </section>
      
      {/* Speakers Section */}
      <section id="speakers">
        <Speakers />
      </section>
      
      {/* Registration Section */}
      <section id="registration">
        <Registration />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
