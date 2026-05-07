import { useApp } from "@/contexts/AppContext";
import { Moon, Sun } from "lucide-react";

const SwedishFlag = () => (
  <svg viewBox="0 0 16 10" className="w-5 h-3.5 rounded-sm shadow-sm" aria-hidden="true">
    <rect width="16" height="10" fill="#006AA7" />
    <rect x="5" width="2" height="10" fill="#FECC00" />
    <rect y="4" width="16" height="2" fill="#FECC00" />
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 60 30" className="w-5 h-3.5 rounded-sm shadow-sm overflow-hidden" aria-hidden="true">
    <clipPath id="uk-c"><rect width="60" height="30" /></clipPath>
    <g clipPath="url(#uk-c)">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
      <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export default function ControlsBar({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, theme, toggleTheme } = useApp();

  return (
    <div className={`flex items-center gap-2 ${compact ? "" : ""}`}>
      <div className="flex items-center rounded-full border border-border bg-background/40 backdrop-blur p-0.5">
        <button
          onClick={() => setLang("en")}
          aria-label="English"
          className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
            lang === "en" ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <UKFlag />
          <span className="hidden sm:inline">EN</span>
        </button>
        <button
          onClick={() => setLang("sv")}
          aria-label="Svenska"
          className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
            lang === "sv" ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <SwedishFlag />
          <span className="hidden sm:inline">SV</span>
        </button>
      </div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="p-2 rounded-full border border-border bg-background/40 backdrop-blur hover:bg-background/60 transition-colors"
      >
        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </div>
  );
}
