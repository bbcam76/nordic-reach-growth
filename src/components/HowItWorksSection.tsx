import ScrollReveal from "./ScrollReveal";

const steps = [
  { number: "01", title: "We understand your business", description: "Deep dive into your goals, market, and ideal customer profile." },
  { number: "02", title: "We generate leads", description: "Targeted outreach to fill your pipeline with qualified prospects." },
  { number: "03", title: "We close deals", description: "Our trained reps convert conversations into revenue." },
  { number: "04", title: "You scale", description: "Focus on growth while we handle the sales engine." },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-pretty">
            A simple, transparent process from kickoff to results.
          </p>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass-card rounded-2xl p-6 sm:p-8 flex gap-6 items-start transition-shadow duration-300 hover:shadow-lg">
                <span className="text-3xl font-extrabold text-primary/25 shrink-0 leading-none select-none">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
