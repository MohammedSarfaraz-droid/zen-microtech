import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@zenmicrotech.com" },
  { icon: MapPin, label: "Address", value: "123 Tech Lane, Innovation City, CA 94000" },
  { icon: Clock, label: "Business Hours", value: "Mon–Fri: 9AM–6PM | Sat: 10AM–4PM" },
];

const Contact = () => (
  <div className="overflow-hidden">
    <section className="relative pt-28 pb-20 gradient-bg-subtle">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <ScrollReveal>
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent mb-4">Contact Us</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a question or need a quote? Reach out to us and we'll respond within 2 hours during business hours.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <ScrollReveal>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="rounded-xl" />
                <Input placeholder="Phone Number" className="rounded-xl" />
              </div>
              <Input placeholder="Email Address" type="email" className="rounded-xl" />
              <Input placeholder="Subject" className="rounded-xl" />
              <Textarea placeholder="Your message..." className="rounded-xl min-h-[140px]" />
              <Button type="submit" className="gradient-bg text-accent-foreground rounded-full px-8 shadow-glow">
                Send Message <ArrowRight className="ml-2" size={16} />
              </Button>
            </form>
          </ScrollReveal>

          {/* Info */}
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="gradient-bg rounded-xl w-11 h-11 flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">{c.label}</h4>
                      <p className="text-muted-foreground text-sm">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-border h-[250px] bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin size={32} className="mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">Interactive Map</p>
                  <p className="text-xs">123 Tech Lane, Innovation City</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Live Chat */}
            <ScrollReveal delay={0.3}>
              <button className="mt-6 gradient-bg text-accent-foreground rounded-full px-6 py-3 flex items-center gap-2 shadow-glow hover:opacity-90 transition-opacity">
                <MessageCircle size={18} />
                <span className="font-medium text-sm">Start Live Chat</span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
