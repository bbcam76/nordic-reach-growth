import { Phone, Target, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useApp } from "@/contexts/AppContext";

export default function ServicesSection() {
  const { t } = useApp();
  const services = [
    { icon: Phone, title: t("services.s1.title"), description: t("services.s1.desc"), benefits: [t("services.s1.b1"), t("services.s1.b2"), t("services.s1.b3")] },
    { icon: Target, title: t("services.s2.title"), description: t("services.s2.desc"), benefits: [t("services.s2.b1"), t("services.s2.b2"), t("services.s2.b3")] },
    { icon: TrendingUp, title: t("services.s3.title"), description: t("services.s3.desc"), benefits: [t("services.s3.b1"), t("services.s3.b2"), t("services.s3.b3")] },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-pretty">{t("services.subtitle")}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="rounded-2xl p-8 h-full transition-all duration-300 group bg-[hsla(225,60%,55%,0.12)] border border-[hsla(225,60%,55%,0.25)] shadow-[0_4px_24px_hsla(225,60%,55%,0.1),inset_0_1px_0_hsla(0,0%,100%,0.5)] hover:border-[hsl(var(--glow-gold))] hover:shadow-[0_0_16px_hsla(var(--glow-gold),0.25),0_4px_24px_hsla(var(--glow-gold),0.15)]">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary/15">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.description}</p>
                <ul className="space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
