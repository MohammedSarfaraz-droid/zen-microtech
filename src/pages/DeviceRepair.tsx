import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone, Monitor, Tv, Settings, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import phoneRepairImg from "@/assets/phone-repair.jpg";
import laptopRepairImg from "@/assets/laptop-repair.jpg";
import tvRepairImg from "@/assets/tv-repair.jpg";
import heroImg from "@/assets/hero-tech-lab.jpg";

const services = [
  { icon: Smartphone, title: "Phone Repair", description: "Screen replacement, battery swap, water damage recovery, charging port repair, and software fixes for all smartphone brands.", image: phoneRepairImg },
  { icon: Monitor, title: "Computer & Laptop Repair", description: "Hardware diagnostics, SSD upgrades, motherboard repair, virus removal, OS installation, and performance optimization.", image: laptopRepairImg },
  { icon: Tv, title: "TV Repair", description: "LED/LCD panel replacement, power supply repair, smart TV software updates, and audio troubleshooting.", image: tvRepairImg },
  { icon: Settings, title: "Software & Performance", description: "System optimization, data recovery, cloud setup, software installation, and security hardening.", image: heroImg },
];

const faqs = [
  { q: "How long does a typical repair take?", a: "Most smartphone repairs are completed within 1-2 hours. Computer and TV repairs typically take 24-48 hours depending on the complexity and parts availability." },
  { q: "Do you offer a warranty on repairs?", a: "Yes, all our repairs come with a minimum 90-day warranty covering parts and labor. Screen replacements include a 6-month warranty." },
  { q: "Can I get a quote before committing?", a: "Absolutely. We provide free diagnostics and transparent quotes before any work begins. No hidden fees, no surprises." },
  { q: "Do you use genuine parts?", a: "We use OEM and high-quality aftermarket parts. We always discuss options with you before proceeding so you can choose what fits your budget." },
  { q: "Do you offer pickup and delivery?", a: "Yes, we offer pickup and delivery services for businesses within our service area. Contact us for details." },
];

const DeviceRepair = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative pt-28 pb-20 gradient-bg-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent mb-4">Device Repair</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Expert Device <span className="gradient-text">Repair Services</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              From cracked screens to complex motherboard issues, our certified technicians bring your devices back to life with precision and care.
            </p>
            <Button asChild size="lg" className="gradient-bg text-accent-foreground rounded-full px-8 shadow-glow">
              <Link to="/contact">Book a Repair</Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img src={heroImg} alt="Repair lab" className="rounded-2xl shadow-premium w-full h-[350px] object-cover" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading label="Services" title="What We Repair" description="Comprehensive repair services for all your devices." />
        <div className="space-y-16">
          {services.map((s, i) => (
            <ScrollReveal key={s.title}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
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

    {/* FAQ */}
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionHeading label="FAQ" title="Common Questions" />
        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                <AccordionTrigger className="text-left font-heading font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>

    {/* Booking Form */}
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <SectionHeading label="Book Now" title="Schedule Your Repair" description="Fill out the form and we'll get back to you within 2 hours." />
        <ScrollReveal>
          <form className="bg-card rounded-2xl p-8 shadow-premium border border-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="rounded-xl" />
              <Input placeholder="Phone Number" className="rounded-xl" />
            </div>
            <Input placeholder="Email Address" type="email" className="rounded-xl" />
            <Input placeholder="Device Type (e.g. iPhone 15, Dell XPS)" className="rounded-xl" />
            <Textarea placeholder="Describe the issue..." className="rounded-xl min-h-[120px]" />
            <Button type="submit" className="w-full gradient-bg text-accent-foreground rounded-full shadow-glow">
              Submit Repair Request <ArrowRight className="ml-2" size={16} />
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default DeviceRepair;
