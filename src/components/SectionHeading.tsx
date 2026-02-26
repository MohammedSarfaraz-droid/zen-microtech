import ScrollReveal from "./ScrollReveal";

interface Props {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: Props) => (
  <ScrollReveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-16`}>
    {label && (
      <span className="inline-block text-sm font-semibold tracking-wider uppercase text-accent mb-3">
        {label}
      </span>
    )}
    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
      {title}
    </h2>
    {description && (
      <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
    )}
  </ScrollReveal>
);

export default SectionHeading;
