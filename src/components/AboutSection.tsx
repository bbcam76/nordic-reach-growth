import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Built on Trust, Not Pressure
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              Nordic Reach Group was founded with a clear conviction: sales should be fair, transparent, and performance-driven. We saw too many companies struggle with expensive in-house teams or agencies that over-promised and under-delivered.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              So we built something different — remote sales teams that are trained to represent your brand with integrity, compensated for results, and committed to long-term partnerships. No hidden fees. No lock-in contracts. Just honest growth.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: "48+", label: "Active clients" },
                { value: "3.2M", label: "Revenue generated" },
                { value: "97%", label: "Retention rate" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-5">
                  <div className="text-2xl font-extrabold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
