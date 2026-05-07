import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { useApp } from "@/contexts/AppContext";

export default function ContactSection() {
  const { t } = useApp();
  return (
    <section id="contact" className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 text-pretty">{t("contact.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:hello@nordicreachgroup.com" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <Mail className="w-4 h-4" />
              hello@nordicreachgroup.com
            </a>
            <Button variant="hero" size="lg" asChild>
              <a href="#signup">{t("contact.cta")}</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
