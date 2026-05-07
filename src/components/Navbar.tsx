import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import ControlsBar from "./ControlsBar";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useApp();

  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.how"), href: "#how-it-works" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Nordic Reach Group" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <ControlsBar />
          <Button variant="hero" size="default" asChild>
            <a href="#signup">{t("nav.cta")}</a>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ControlsBar compact />
          <button className="p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="default" className="w-full" asChild>
            <a href="#signup" onClick={() => setOpen(false)}>{t("nav.cta")}</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
