import { Target, Eye, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import teamImg from "@/assets/team.jpg";
import heroImg from "@/assets/hero-tech-lab.jpg";

const values = [
  { icon: Target, title: "Our Mission", description: "To deliver accessible, reliable, and premium technology solutions that empower businesses and individuals to thrive in a connected world." },
  { icon: Eye, title: "Our Vision", description: "To be the most trusted technology partner for communities and businesses — known for precision, integrity, and innovation." },
  { icon: Users, title: "Our Team", description: "A passionate team of certified technicians, networking engineers, and customer success specialists dedicated to excellence." },
  { icon: Award, title: "Quality Commitment", description: "Every repair, installation, and refurbished device meets our rigorous quality standards backed by comprehensive warranties." },
];

const About = () => (
  <div className="overflow-hidden">
    <section className="relative pt-28 pb-20 gradient-bg-subtle">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <ScrollReveal>
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent mb-4">About Us</span>
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Precision. Innovation.{" "}
            <span className="gradient-text">Trust.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Zen Microtech was founded with a simple belief: technology should work for everyone. We combine deep expertise with genuine care to deliver solutions that make a difference.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover-lift">
                <div className="gradient-bg rounded-xl w-14 h-14 flex items-center justify-center mb-5">
                  <v.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <SectionHeading label="Our People" title="Meet the Team Behind Zen Microtech" description="Dedicated professionals who bring expertise and passion to every project." />
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-premium max-w-4xl mx-auto">
            <img src={teamImg} alt="Zen Microtech team" className="w-full h-[400px] object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img src={heroImg} alt="Our workspace" className="rounded-2xl shadow-premium w-full h-[350px] object-cover" />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Built on Trust, Driven by Innovation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since our founding, we've helped hundreds of businesses and thousands of individuals with their technology needs. From a simple screen replacement to a full enterprise network deployment, we approach every project with the same level of care and precision.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our state-of-the-art repair lab and certified team ensure that every device we touch and every system we install meets the highest standards of quality and reliability.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default About;
