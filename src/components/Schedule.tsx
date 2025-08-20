import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Schedule = () => {
  const scheduleData = [
    {
      date: "March 15, 2024",
      day: "Day 1",
      events: [
        { time: "09:00 - 10:00", title: "Registration & Welcome Coffee", type: "registration" },
        { time: "10:00 - 11:00", title: "Opening Ceremony & Keynote Address", type: "keynote", speaker: "Dr. Sarah Johnson" },
        { time: "11:30 - 12:30", title: "AI & Machine Learning Track", type: "technical" },
        { time: "14:00 - 15:30", title: "Poster Session A", type: "poster" },
        { time: "16:00 - 17:00", title: "Industry Panel Discussion", type: "panel" }
      ]
    },
    {
      date: "March 16, 2024", 
      day: "Day 2",
      events: [
        { time: "09:00 - 10:00", title: "Cybersecurity & Privacy Track", type: "technical" },
        { time: "10:30 - 11:30", title: "IoT & Smart Systems", type: "technical" },
        { time: "12:00 - 13:00", title: "Research Presentation Awards", type: "award" },
        { time: "14:30 - 15:30", title: "Networking Lunch", type: "networking" },
        { time: "16:00 - 17:00", title: "Future Technologies Symposium", type: "keynote" }
      ]
    },
    {
      date: "March 17, 2024",
      day: "Day 3", 
      events: [
        { time: "09:00 - 10:00", title: "Sustainable Technology Track", type: "technical" },
        { time: "10:30 - 11:30", title: "Student Research Showcase", type: "showcase" },
        { time: "12:00 - 13:00", title: "Closing Ceremony", type: "ceremony" },
        { time: "13:00 - 14:00", title: "Farewell Lunch", type: "networking" }
      ]
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "keynote": return "bg-primary text-primary-foreground";
      case "technical": return "bg-secondary text-secondary-foreground";
      case "poster": return "bg-accent text-accent-foreground";
      case "panel": return "bg-muted text-muted-foreground";
      case "networking": return "bg-conference-gold text-conference-dark";
      case "award": return "bg-conference-purple text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conference Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three days packed with innovative presentations, networking opportunities, 
            and knowledge-sharing sessions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {scheduleData.map((day, dayIndex) => (
            <Card key={dayIndex} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardHeader className="bg-gradient-hero text-white rounded-t-lg">
                <CardTitle className="text-center">
                  <div className="text-2xl font-bold">{day.day}</div>
                  <div className="text-lg opacity-90">{day.date}</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="border-l-4 border-primary pl-4 py-2">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        {event.time}
                      </div>
                      <Badge className={getEventColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {event.title}
                    </h4>
                    {event.speaker && (
                      <p className="text-sm text-muted-foreground">
                        Speaker: {event.speaker}
                      </p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;