import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Wifi, Shield, Server, Wrench, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import networkingImg from "@/assets/networking.jpg";
import cctvImg from "@/assets/cctv-installation.jpg";
import wifiImg from "@/assets/wifi-setup.jpg";

const sections = [
  { icon: Server, title: "Network Infrastructure Setup", description: "Complete network design and installation — structured cabling, switches, routers, and firewalls for businesses of all sizes.", image: networkingImg },
  { icon: Wifi, title: "Business WiFi Solutions", description: "High-performance enterprise WiFi with full coverage mapping, access point placement, and seamless roaming across your facility.", image: wifiImg },
  { icon: Shield, title: "CCTV & Security Cameras", description: "HD and 4K surveillance systems with remote viewing, night vision, motion detection, and cloud storage integration.", image: cctvImg },
  { icon: Wrench, title: "Ongoing Maintenance", description: "Proactive monitoring, regular health checks, firmware updates, and rapid response support to keep your systems running smoothly.", image: networkingImg },
];

const Networking = () => (
  <div className="overflow-hidden">
    <section className="relative pt-28 pb-20 gradient-bg-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent mb-4">Networking & Security</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Reliable Networking &{" "}
              <span className="gradient-text">Advanced Security</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Enterprise-grade networking infrastructure and security camera systems designed, installed, and maintained by certified professionals.
            </p>
            <Button asChild size="lg" className="gradient-bg text-accent-foreground rounded-full px-8 shadow-glow">
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img src={networkingImg} alt="Server room" className="rounded-2xl shadow-premium w-full h-[350px] object-cover" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading label="Solutions" title="Our Networking Services" description="End-to-end networking and security solutions for modern businesses." />
        <div className="space-y-16">
          {sections.map((s, i) => (
            <ScrollReveal key={s.title}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="gradient-bg rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <s.icon size={20} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img src={s.image} alt={s.title} className="rounded-2xl shadow-premium w-full h-[280px] object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6 max-w-2xl">
        <SectionHeading label="Get Started" title="Request a Consultation" description="Tell us about your networking needs and we'll design the perfect solution." />
        <ScrollReveal>
          <form className="bg-card rounded-2xl p-8 shadow-premium border border-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Business Name" className="rounded-xl" />
              <Input placeholder="Contact Person" className="rounded-xl" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Email" type="email" className="rounded-xl" />
              <Input placeholder="Phone" className="rounded-xl" />
            </div>
            <Textarea placeholder="Describe your networking or security requirements..." className="rounded-xl min-h-[120px]" />
            <Button type="submit" className="w-full gradient-bg text-accent-foreground rounded-full shadow-glow">
              Submit Request <ArrowRight className="ml-2" size={16} />
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Networking;
