import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sun, Droplets, BookOpen, Users, Download, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-school.jpg";
import classroom from "@/assets/classroom.jpg";
import construction from "@/assets/construction.jpg";
import wash from "@/assets/wash.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anjaramahasoa — 111 enfants attendent une école digne" },
      { name: "description", content: "Finalisation et sécurisation de l'EPP Ambatofahavalo : éducation, solaire, eau et assainissement. Soutenez le projet." },
      { property: "og:title", content: "111 enfants attendent une école digne à Ambatofahavalo" },
      { property: "og:description", content: "Nous avons commencé. Aidez-nous à terminer." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Enfants devant l'école d'Ambatofahavalo"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container-page py-24 md:py-36 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent ring-1 ring-white/20">
            Projet prioritaire · Madagascar
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            111 enfants attendent une école digne à <span className="text-accent">Ambatofahavalo</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">
            Nous avons déjà commencé avec nos propres moyens. Avec votre soutien, nous finalisons
            un environnement scolaire sûr, équipé en solaire, eau et assainissement.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/soutenir" className="btn-primary">
              Soutenir le projet <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projet" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3 font-semibold text-white hover:bg-white/10 transition">
              Découvrir le projet
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary/60">
        <div className="container-page grid gap-6 py-14 md:grid-cols-4">
          {[
            { value: "111", label: "Élèves bénéficiaires" },
            { value: "100%", label: "Réussite au CEPE" },
            { value: "14 km", label: "De piste enclavée" },
            { value: "1", label: "Communauté mobilisée" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-card p-6 text-center shadow-sm">
              <div className="font-display text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Notre mission</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary">
              Améliorer durablement la vie en milieu rural
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              L'Association Anjaramahasoa œuvre dans la Région Analamanga pour donner aux enfants
              des zones enclavées un accès à une éducation de qualité, en agissant aussi sur
              l'électrification, l'eau potable et l'assainissement.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: BookOpen, label: "Éducation" },
                { icon: Sun, label: "Énergie solaire" },
                { icon: Droplets, label: "Eau & WASH" },
                { icon: Users, label: "Communauté" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={classroom} alt="Salle de classe" className="rounded-3xl shadow-lg" loading="lazy" width={1200} height={900} />
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-card p-5 shadow-xl ring-1 ring-border max-w-xs">
              <p className="text-sm italic text-muted-foreground">« 100 % de réussite au CEPE malgré des conditions extrêmes. »</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJET HIGHLIGHT */}
      <section className="bg-gradient-to-b from-cream to-beige">
        <div className="container-page py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Projet prioritaire</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-primary">
              Éducation inclusive et durable à Ambatofahavalo
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Finalisation du nouveau bâtiment, réhabilitation de l'ancien, électricité solaire,
              latrines séparées par genre et mobilier scolaire — pour offrir un environnement
              d'apprentissage sûr et pérenne.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { img: construction, title: "Chantier en cours", desc: "Renforcement structurel, toiture étanche et finitions du nouveau bâtiment." },
              { img: wash, title: "Eau & assainissement", desc: "Kits de lavage des mains et latrines séparées garçons / filles." },
              { img: community, title: "Mobilisation locale", desc: "Parents, FAF et autorités engagés aux côtés de l'association." },
            ].map((c) => (
              <article key={c.title} className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
                <img src={c.img} alt={c.title} className="h-52 w-full object-cover" loading="lazy" width={1200} height={900} />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/projet" className="btn-primary">En savoir plus <ArrowRight className="h-4 w-4" /></Link>
            <a href="#" className="btn-outline">
              <Download className="h-4 w-4" /> Télécharger la proposition complète
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="overflow-hidden rounded-3xl bg-primary p-10 md:p-16 text-primary-foreground relative">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full" style={{ background: "var(--gradient-warm)", opacity: 0.25 }} />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Nous avons commencé. <span className="text-accent">Aidez-nous à terminer.</span>
            </h2>
            <p className="mt-4 text-white/85 leading-relaxed">
              Chaque contribution compte pour sécuriser l'avenir de 111 enfants. Partenaires,
              bailleurs et donateurs sont les bienvenus.
            </p>
            <ul className="mt-6 space-y-2 text-white/90">
              {["Projet concret et transparent", "Apport déjà réalisé sur le terrain", "Suivi communautaire et reporting régulier"].map((t) => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/soutenir" className="btn-primary">Devenir partenaire</Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3 font-semibold text-white hover:bg-white/10 transition">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
