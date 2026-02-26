import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Leaf, Shield, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import refurbishedImg from "@/assets/refurbished-devices.jpg";
import refurbPhone from "@/assets/refurb-phone.jpg";
import refurbLaptop from "@/assets/refurb-laptop.jpg";
import refurbTablet from "@/assets/refurb-tablet.jpg";

const qualitySteps = [
  "Visual inspection & cosmetic grading",
  "Battery health analysis (80%+ capacity)",
  "Display & touch calibration testing",
  "Speaker, microphone & camera checks",
  "Connectivity tests (WiFi, Bluetooth, Cellular)",
  "Factory reset & clean OS installation",
];

const products = [
  { name: "iPhone 14 Pro", condition: "Excellent", price: "$649", image: refurbPhone },
  { name: "iPhone 13", condition: "Very Good", price: "$449", image: refurbPhone },
  { name: "MacBook Air M2", condition: "Like New", price: "$899", image: refurbLaptop },
  { name: "MacBook Pro 14\"", condition: "Excellent", price: "$1,249", image: refurbLaptop },
  { name: "iPad Pro 11\"", condition: "Very Good", price: "$549", image: refurbTablet },
  { name: "iPad Air", condition: "Excellent", price: "$399", image: refurbTablet },
];

const Refurbished = () => (
  <div className="overflow-hidden">
    <section className="relative pt-28 pb-20 gradient-bg-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent mb-4">Refurbished Tech</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Certified Refurbished{" "}
              <span className="gradient-text">Technology</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Premium devices, rigorously tested and certified. Experience like-new quality at a fraction of the price, with warranty included.
            </p>
            <Button asChild size="lg" className="gradient-bg text-accent-foreground rounded-full px-8 shadow-glow">
              <Link to="/contact">Inquire Now</Link>
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <img src={refurbishedImg} alt="Refurbished devices" className="rounded-2xl shadow-premium w-full h-[350px] object-cover" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Quality Process */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading label="Quality" title="Our 50-Point Testing Process" description="Every device undergoes rigorous testing before earning our certified refurbished badge." />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-4">
              {qualitySteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
                  <CheckCircle size={20} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border text-center shadow-sm">
                <Shield size={32} className="text-accent mx-auto mb-3" />
                <h4 className="font-heading font-bold text-foreground">Warranty</h4>
                <p className="text-muted-foreground text-sm mt-1">Minimum 6-month warranty on all refurbished devices</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border text-center shadow-sm">
                <Leaf size={32} className="text-accent mx-auto mb-3" />
                <h4 className="font-heading font-bold text-foreground">Eco-Friendly</h4>
                <p className="text-muted-foreground text-sm mt-1">Reduce e-waste by choosing refurbished technology</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Products Grid */}
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <SectionHeading label="Shop" title="Available Devices" description="Browse our current selection of certified refurbished devices." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ScrollReveal key={`${p.name}-${i}`} delay={i * 0.1}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-premium hover-lift border border-border group">
                <div className="bg-muted/30 p-8 flex items-center justify-center h-56">
                  <img src={p.image} alt={p.name} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-foreground">{p.name}</h3>
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">{p.condition}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xl text-primary">{p.price}</span>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">View Details</Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Refurbished;
