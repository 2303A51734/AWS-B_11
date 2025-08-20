import { Card, CardContent } from "@/components/ui/card";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief AI Researcher",
      organization: "MIT Technology Labs",
      expertise: "Artificial Intelligence & Machine Learning",
      bio: "Leading researcher in AI ethics and machine learning applications in healthcare.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Prof. Michael Chen",
      title: "Director of Cybersecurity",
      organization: "Stanford Research Institute",
      expertise: "Cybersecurity & Privacy",
      bio: "Expert in cybersecurity frameworks and privacy-preserving technologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Senior IoT Architect",
      organization: "Google Research",
      expertise: "Internet of Things & Smart Systems",
      bio: "Pioneer in IoT infrastructure and smart city solutions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    },
    {
      name: "Prof. David Kim",
      title: "Sustainability Tech Lead",
      organization: "UC Berkeley",
      expertise: "Sustainable Technology & Green Computing",
      bio: "Research focused on energy-efficient computing and sustainable technology solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Dr. Lisa Thompson",
      title: "Quantum Computing Researcher",
      organization: "IBM Research",
      expertise: "Quantum Computing & Algorithms",
      bio: "Leading developments in quantum algorithms and practical quantum computing applications.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      name: "Prof. James Wilson",
      title: "Robotics & Automation Expert",
      organization: "Carnegie Mellon University",
      expertise: "Robotics & Automation",
      bio: "Expert in autonomous systems and human-robot interaction technologies.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Distinguished Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry leaders and renowned researchers who are shaping 
            the future of technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {speaker.name}
                </h3>
                <div className="text-primary font-semibold mb-1">
                  {speaker.title}
                </div>
                <div className="text-muted-foreground text-sm mb-3">
                  {speaker.organization}
                </div>
                <div className="bg-gradient-accent text-white text-xs px-3 py-1 rounded-full mb-4 inline-block">
                  {speaker.expertise}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {speaker.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;