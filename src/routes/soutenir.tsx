import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Heart, HandCoins, Download, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/soutenir")({
  head: () => ({
    meta: [
      { title: "Nous soutenir — Bailleurs & partenaires | Anjaramahasoa" },
      { name: "description", content: "Devenez partenaire, bailleur ou donateur du projet EPP Ambatofahavalo." },
      { property: "og:title", content: "Comment nous soutenir" },
      { property: "og:description", content: "Partenaires et bailleurs bienvenus." },
    ],
  }),
  component: Support,
});

function Support() {
  return (
    <>
      <section className="container-page py-20">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Nous soutenir</span>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-primary">
          Partenaires et bailleurs bienvenus
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Chaque contribution compte pour sécuriser l'avenir de 111 enfants. Nous avons commencé —
          aidez-nous à terminer.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Building2, title: "Bailleurs institutionnels", text: "Co-financement du projet sur tout ou partie des composantes (bâti, WASH, solaire)." },
            { icon: HandCoins, title: "Mécénat d'entreprise", text: "Sponsoring d'une composante (toiture, mobilier, latrines) avec visibilité dédiée." },
            { icon: Heart, title: "Dons & particuliers", text: "Soutien direct au programme et à son suivi communautaire." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-warm)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-primary">{title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary">Pourquoi soutenir Anjaramahasoa</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Projet concret, déjà engagé sur le terrain",
                "Gouvernance locale en co-construction avec la communauté",
                "Indicateurs de suivi et reporting réguliers",
                "Impact mesurable sur 111 élèves dès l'année scolaire en cours",
                "Approche intégrée : éducation + WASH + énergie",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> <span className="text-foreground">{t}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-10 text-primary-foreground" style={{ background: "var(--gradient-warm)" }}>
            <h3 className="font-display text-2xl font-bold">Proposition complète</h3>
            <p className="mt-3 text-white/90">Document détaillé : contexte, budget, calendrier, suivi.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3 font-semibold shadow hover:shadow-lg transition">
              <Download className="h-4 w-4" /> Télécharger le PDF
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Discutons de votre engagement</h2>
        <p className="mt-3 text-muted-foreground">Notre équipe revient vers vous sous 48h.</p>
        <Link to="/contact" className="btn-primary mt-8">Contacter l'association <ArrowRight className="h-4 w-4" /></Link>
      </section>
    </>
  );
}
