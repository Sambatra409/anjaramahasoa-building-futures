import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { to: "/projet", label: "Projet prioritaire" },
  { to: "/impact", label: "Impact" },
  { to: "/soutenir", label: "Nous soutenir" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo Anjaramahasoa" className="h-14 w-14 shrink-0" width={56} height={56} />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-lg font-bold text-primary">Anjaramahasoa</div>
            <div className="truncate text-xs text-muted-foreground italic">Part du Bien Commun</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "rounded-full px-3 py-2 text-sm font-semibold bg-secondary text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/soutenir" className="btn-primary ml-2 !py-2 !px-5 text-sm">
            Soutenir
          </Link>
        </nav>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-base font-medium text-foreground/90 border-b border-border/60 last:border-0"
                activeProps={{ className: "px-2 py-3 text-base font-semibold text-primary border-b border-border/60 last:border-0" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
