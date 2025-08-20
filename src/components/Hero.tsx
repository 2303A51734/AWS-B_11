import { Button } from "@/components/ui/button";
import heroImage from "@/assets/conference-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            National Technical
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Symposium 2024
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Bringing together brilliant minds from across the nation to explore cutting-edge innovations, 
            share groundbreaking research, and shape the future of technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-conference-gold hover:bg-conference-gold/90 text-conference-dark font-semibold px-8 py-6 text-lg shadow-glow animate-glow"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-conference-dark px-8 py-6 text-lg backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-conference-gold">March 15-17</div>
              <div className="text-lg">2024</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-conference-gold">500+</div>
              <div className="text-lg">Participants</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-conference-gold">50+</div>
              <div className="text-lg">Research Papers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;