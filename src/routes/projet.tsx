import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Users, Sun, Droplets, Hammer, ShieldCheck, Download, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-school.jpg";
import construction from "@/assets/construction.jpg";
import wash from "@/assets/wash.jpg";
import solar from "@/assets/solar.jpg";
import classroom from "@/assets/classroom.jpg";
import before from "@/assets/before.jpg";
import students from "@/assets/students.jpg";

export const Route = createFileRoute("/projet")({
  head: () => ({
    meta: [
      { title: "Projet prioritaire — Ambatofahavalo | Anjaramahasoa" },
      { name: "description", content: "EPP Ambatofahavalo : finalisation du bâtiment, solaire, eau, latrines et mobilier pour 111 élèves." },
      { property: "og:title", content: "Éducation inclusive et durable à Ambatofahavalo" },
      { property: "og:description", content: "111 élèves, une communauté mobilisée, un projet concret." },
    ],
  }),
  component: Project,
});

function Project() {
  return (
    <>
      <section className="relative">
        <img src={hero} alt="EPP Ambatofahavalo" className="h-[45vh] min-h-[320px] w-full object-cover" width={1600} height={1100} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="container-page pb-12 text-primary-foreground">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Projet prioritaire</span>
            <h1 className="mt-2 max-w-3xl font-display text-4xl md:text-5xl font-bold">
              Éducation inclusive et durable à Ambatofahavalo
            </h1>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: MapPin, label: "Localisation", value: "Commune rurale d'Ambatofahavalo — piste de 14 km, zone enclavée." },
            { icon: Users, label: "Bénéficiaires", value: "111 élèves (53 garçons, 58 filles), enseignants et communauté." },
            { icon: ShieldCheck, label: "Objectif", value: "Sécuriser et finaliser un environnement scolaire digne et durable." },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary text-primary"><Icon className="h-5 w-5" /></div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">{label}</div>
              <p className="mt-1 text-foreground leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Composantes du projet</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            { img: construction, icon: Hammer, title: "Bâti & structure", text: "Finalisation du nouveau bâtiment, réhabilitation de l'ancien, renforcement structurel et toiture étanche." },
            { img: solar, icon: Sun, title: "Énergie solaire autonome", text: "Installation d'un système solaire pour l'éclairage et l'usage pédagogique." },
            { img: wash, icon: Droplets, title: "Eau & assainissement (WASH)", text: "Latrines séparées par genre, point d'eau et kits de lavage des mains." },
            { img: classroom, icon: Users, title: "Mobilier & cadre pédagogique", text: "Tables-bancs, cloisons de séparation et aménagement des salles de classe." },
          ].map((c) => (
            <article key={c.title} className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[180px_minmax(0,1fr)] gap-5 rounded-3xl bg-card p-5 ring-1 ring-border">
              <img src={c.img} alt="" className="h-44 sm:h-full w-full object-cover rounded-2xl" loading="lazy" width={1200} height={900} />
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-primary">
                  <c.icon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Composante</span>
                </div>
                <h3 className="mt-1 font-display text-xl font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 mt-10">
        <div className="container-page py-20">
          <h2 className="font-display text-3xl font-bold text-primary">Ce que nous avons déjà accompli</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Avant toute demande de soutien, l'association a engagé ses propres moyens sur le terrain.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Fourniture de tables-bancs",
              "Cloisons de séparation",
              "Kits de lavage des mains",
              "Travaux de peinture de protection",
            ].map((t) => (
              <div key={t} className="rounded-2xl bg-card p-5 ring-1 ring-border">
                <div className="text-2xl">✓</div>
                <p className="mt-2 font-medium text-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="font-display text-3xl font-bold text-primary">Avant / Pendant</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <figure>
            <img src={before} alt="Ancien bâtiment" className="rounded-2xl shadow-md" loading="lazy" width={1200} height={900} />
            <figcaption className="mt-3 text-sm text-muted-foreground"><strong className="text-primary">Avant</strong> — Ancien bâtiment à renforcer.</figcaption>
          </figure>
          <figure>
            <img src={students} alt="Élèves dans la cour" className="rounded-2xl shadow-md" loading="lazy" width={1200} height={900} />
            <figcaption className="mt-3 text-sm text-muted-foreground"><strong className="text-primary">Pendant</strong> — Les élèves continuent d'apprendre.</figcaption>
          </figure>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl p-10 text-foreground" style={{ background: "var(--gradient-warm)" }}>
          <h2 className="font-display text-3xl font-bold">Téléchargez la proposition complète</h2>
          <p className="mt-3 max-w-2xl text-foreground/80">Document détaillé : budget, calendrier, équipe et indicateurs de suivi.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3 font-semibold shadow hover:shadow-lg transition">
              <Download className="h-4 w-4" /> Télécharger (PDF)
            </a>
            <Link to="/soutenir" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-7 py-3 font-semibold text-foreground hover:bg-foreground/10 transition">
              Soutenir le projet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
