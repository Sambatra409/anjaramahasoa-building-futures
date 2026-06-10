import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-14 w-14 bg-white/95 rounded-full p-1" width={56} height={56} loading="lazy" />
            <div>
              <div className="font-display text-xl font-bold">Anjaramahasoa</div>
              <div className="text-sm text-primary-foreground/70 italic">Part du Bien Commun</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/80 leading-relaxed">
            Association malgache engagée pour l'éducation, l'eau, l'électrification
            et l'assainissement dans les zones rurales de la Région Analamanga.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/qui-sommes-nous" className="hover:text-accent">Qui sommes-nous</Link></li>
            <li><Link to="/projet" className="hover:text-accent">Projet prioritaire</Link></li>
            <li><Link to="/impact" className="hover:text-accent">Impact</Link></li>
            <li><Link to="/soutenir" className="hover:text-accent">Nous soutenir</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> Région Analamanga, Madagascar</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> contact@anjaramahasoa.org</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> +261 00 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-sm text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Association Anjaramahasoa</p>
          <p className="italic font-display">« Part du Bien Commun »</p>
        </div>
      </div>
    </footer>
  );
}
