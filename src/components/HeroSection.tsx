import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useApp } from "@/contexts/AppContext";
import heroEn from "@/assets/hero-en.jpg";
import heroSv from "@/assets/hero-sv.png";

export default function HeroSection() {
  const { t, lang } = useApp();
  const heroImg = lang === "sv" ? heroSv : heroEn;

  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden pt-20">
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-primary/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-sm font-semibold tracking-wide text-accent uppercase mb-4">
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground text-balance mb-6"
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 text-pretty"
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#signup">{t("hero.primary")}</a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#services">{t("hero.secondary")}</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass-card-glow rounded-2xl p-2 overflow-hidden">
              <img
                key={lang}
                src={heroImg}
                alt={lang === "sv" ? "Nordic Reach Group — Vi hjälper företag att växa" : "Nordic Reach Group — Helps companies grow"}
                className="w-full h-auto rounded-xl"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
