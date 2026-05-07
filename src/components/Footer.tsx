import { useApp } from "@/contexts/AppContext";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Nordic Reach Group. {t("footer.rights")}</span>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-foreground transition-colors">{t("nav.services")}</a>
          <a href="#about" className="hover:text-foreground transition-colors">{t("nav.about")}</a>
          <a href="#contact" className="hover:text-foreground transition-colors">{t("nav.contact")}</a>
        </div>
      </div>
    </footer>
  );
}
