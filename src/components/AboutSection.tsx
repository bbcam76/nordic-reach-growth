import ScrollReveal from "./ScrollReveal";
import { useApp } from "@/contexts/AppContext";

export default function AboutSection() {
  const { t } = useApp();
  return (
    <section id="about" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance">
              {t("about.title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">{t("about.p1")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <p className="text-muted-foreground leading-relaxed text-pretty">{t("about.p2")}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: "48+", label: t("about.stat1") },
                { value: "3.2M", label: t("about.stat2") },
                { value: "97%", label: t("about.stat3") },
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
