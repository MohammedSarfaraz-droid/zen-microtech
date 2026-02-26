import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="gradient-bg w-9 h-9 rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-lg">Z</span>
            </div>
            <span className="font-heading font-bold text-xl">Zen Microtech</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Precision tech repair, seamless connectivity, and smarter solutions for businesses and individuals.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <Link to="/device-repair" className="hover:text-primary-foreground transition-colors">Device Repair</Link>
            <Link to="/networking" className="hover:text-primary-foreground transition-colors">Networking & Security</Link>
            <Link to="/refurbished" className="hover:text-primary-foreground transition-colors">Refurbished Devices</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>hello@zenmicrotech.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>123 Tech Lane, Innovation City</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
        © {new Date().getFullYear()} Zen Microtech. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
