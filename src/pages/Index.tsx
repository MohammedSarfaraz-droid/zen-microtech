import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, Wifi, Shield, Monitor, CheckCircle, ArrowRight, Clock, Wrench, Headphones, DollarSign, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-tech-lab.jpg";
import phoneRepairImg from "@/assets/phone-repair.jpg";
import networkingImg from "@/assets/networking.jpg";
import refurbishedImg from "@/assets/refurbished-devices.jpg";
import refurbPhone from "@/assets/refurb-phone.jpg";
import refurbLaptop from "@/assets/refurb-laptop.jpg";
import refurbTablet from "@/assets/refurb-tablet.jpg";

const floatingCards = [
  { icon: Smartphone, label: "Phone Repair", delay: 0.2 },
  { icon: Wifi, label: "Networking", delay: 0.4 },
  { icon: Shield, label: "Security Systems", delay: 0.6 },
  { icon: Monitor, label: "Refurbished Devices", delay: 0.8 },
];

const services = [
  {
    title: "Tech Repair Experts",
    description: "Cracked screens, battery issues, software problems, smart TVs, computers — we fix it all with precision.",
    image: phoneRepairImg,
    link: "/device-repair",
  },
  {
    title: "Networking & Security",
    description: "Consultation, design, installation, and maintenance of enterprise networking and CCTV systems.",
    image: networkingImg,
    link: "/networking",
  },
  {
    title: "Refurbished Premium Devices",
    description: "Tested. Certified. Affordable. Eco-conscious technology that doesn't compromise on quality.",
    image: refurbishedImg,
    link: "/refurbished",
  },
];

const whyChoose = [
  { icon: Award, title: "Certified Technicians", description: "Skilled professionals with industry certifications" },
  { icon: Clock, title: "Fast Turnaround", description: "Most repairs completed within 24-48 hours" },
  { icon: DollarSign, title: "Transparent Pricing", description: "No hidden fees, upfront honest quotes" },
  { icon: Users, title: "Business Focused", description: "Tailored solutions for small businesses" },
  { icon: Wifi, title: "Scalable Systems", description: "Networking that grows with your business" },
  { icon: CheckCircle, title: "Quality Tested", description: "Strict 50-point testing for refurbished devices" },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "We listen, understand, and plan" },
  { step: "02", title: "Diagnosis", description: "Thorough analysis and transparent quote" },
  { step: "03", title: "Repair", description: "Expert repair with genuine parts" },
  { step: "04", title: "Delivery", description: "Quality checked and delivered to you" },
];

const refurbishedProducts = [
  { name: "iPhone 14 Pro", condition: "Excellent", price: "$649", image: refurbPhone },
  { name: "MacBook Air M2", condition: "Like New", price: "$899", image: refurbLaptop },
  { name: "iPad Pro 11\"", condition: "Very Good", price: "$549", image: refurbTablet },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center gradient-bg-subtle">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] -top-40 -right-40 rounded-full bg-accent/10 blur-3xl animate-mesh-move" />
          <div className="absolute w-[400px] h-[400px] bottom-0 left-0 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent mb-4">
                Trusted Technology Partner
              </span>
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Precision Tech Repair.{" "}
                <span className="gradient-text">Seamless Connectivity.</span>{" "}
                Smarter Solutions.
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Expert device repair, business networking, security camera systems, and premium refurbished tech — all in one trusted place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-bg text-accent-foreground rounded-full px-8 shadow-glow hover:opacity-90 text-base">
                  <Link to="/contact">Get a Repair Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base">
                  <Link to="/device-repair">Explore Services <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-premium">
                <img src={heroImg} alt="Premium technology repair lab" className="w-full h-[400px] lg:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-6 top-8 flex flex-col gap-3">
                {floatingCards.slice(0, 2).map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: card.delay, duration: 0.5 }}
                    className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
                    style={{ animationDelay: `${i * 1.5}s` }}
                  >
                    <div className="gradient-bg rounded-lg p-2">
                      <card.icon size={16} className="text-accent-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">{card.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="absolute -right-6 bottom-12 flex flex-col gap-3">
                {floatingCards.slice(2).map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: card.delay, duration: 0.5 }}
                    className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 animate-float"
                    style={{ animationDelay: `${(i + 2) * 1.5}s` }}
                  >
                    <div className="gradient-bg rounded-lg p-2">
                      <card.icon size={16} className="text-accent-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">{card.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading label="Our Services" title="What We Do Best" description="From device repair to enterprise networking, we deliver premium technology solutions with precision and care." />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.15}>
                <Link to={s.link} className="group block">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-premium hover-lift border border-border">
                    <div className="overflow-hidden h-56">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">{s.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
                      <span className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-6">
          <SectionHeading label="Why Us" title="Why Choose Zen Microtech" description="We combine expertise, transparency, and innovation to deliver technology solutions you can trust." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-xl p-6 shadow-sm hover-lift border border-border">
                  <div className="gradient-bg rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <item.icon size={20} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <SectionHeading label="Our Process" title="How It Works" description="A simple, transparent process from start to finish." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.15}>
                <div className="text-center relative">
                  <div className="gradient-text font-heading font-extrabold text-5xl mb-4">{step.step}</div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8">
                      <ArrowRight className="text-accent/30" size={20} />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Refurbished Showcase */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-6">
          <SectionHeading label="Featured Products" title="Certified Refurbished Devices" description="Premium devices, rigorously tested and certified. Like new, at a fraction of the price." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {refurbishedProducts.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.15}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-premium hover-lift border border-border group">
                  <div className="bg-muted/30 p-8 flex items-center justify-center h-64">
                    <img src={product.image} alt={product.name} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-foreground">{product.name}</h3>
                      <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">{product.condition}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-xl text-primary">{product.price}</span>
                      <Button variant="outline" size="sm" className="rounded-full text-xs">View Details</Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/refurbished">Browse All Products <ArrowRight className="ml-2" size={16} /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="gradient-bg rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute w-64 h-64 -top-20 -left-20 rounded-full bg-accent-foreground/10 blur-3xl" />
                <div className="absolute w-64 h-64 -bottom-20 -right-20 rounded-full bg-accent-foreground/10 blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-accent-foreground mb-6 leading-tight">
                  Technology Should Work For You —<br />Not Against You.
                </h2>
                <p className="text-accent-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Let our experts handle the complexity so you can focus on what matters most.
                </p>
                <Button asChild size="lg" className="bg-accent-foreground text-primary hover:bg-accent-foreground/90 rounded-full px-10 text-base shadow-lg">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
