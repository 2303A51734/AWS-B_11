import { Mail, MapPin, Phone, Calendar, University } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-conference-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Event Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-conference-gold">
              Event Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-conference-gold" />
                <div>
                  <div className="font-semibold">March 15-17, 2024</div>
                  <div className="text-sm text-white/70">3 Days Conference</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-conference-gold" />
                <div>
                  <div className="font-semibold">University Convention Center</div>
                  <div className="text-sm text-white/70">Main Campus, Academic Hall</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-conference-gold">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-conference-gold" />
                <div>
                  <div className="font-semibold">symposium@university.edu</div>
                  <div className="text-sm text-white/70">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-conference-gold" />
                <div>
                  <div className="font-semibold">+1 (555) 123-4567</div>
                  <div className="text-sm text-white/70">Registration Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-conference-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><a href="#schedule" className="text-white/70 hover:text-conference-gold transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="text-white/70 hover:text-conference-gold transition-colors">Speakers</a></li>
              <li><a href="#registration" className="text-white/70 hover:text-conference-gold transition-colors">Registration</a></li>
              <li><a href="#venue" className="text-white/70 hover:text-conference-gold transition-colors">Venue</a></li>
              <li><a href="#accommodation" className="text-white/70 hover:text-conference-gold transition-colors">Accommodation</a></li>
              <li><a href="#travel" className="text-white/70 hover:text-conference-gold transition-colors">Travel Info</a></li>
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-conference-gold">
              Organized By
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <University className="h-6 w-6 text-conference-gold" />
                <div>
                  <div className="font-semibold">Department of Computer Science</div>
                  <div className="text-sm text-white/70">University of Technology</div>
                </div>
              </div>
              <div className="text-sm text-white/70">
                In collaboration with leading technology institutions and industry partners across the nation.
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h3 className="text-xl font-bold mb-6 text-conference-gold text-center">
            Supported By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="text-center text-sm font-semibold">IEEE</div>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="text-center text-sm font-semibold">ACM</div>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="text-center text-sm font-semibold">Google</div>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <div className="text-center text-sm font-semibold">Microsoft</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="text-white/70">
            © 2024 National Technical Symposium. All rights reserved.
          </div>
          <div className="text-sm text-white/50 mt-2">
            Powered by University of Technology, Department of Computer Science
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;