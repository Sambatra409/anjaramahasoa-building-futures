import { createFileRoute } from "@tanstack/react-router";
import { Award, AlertTriangle, Sparkles } from "lucide-react";
import classroom from "@/assets/classroom.jpg";
import construction from "@/assets/construction.jpg";
import wash from "@/assets/wash.jpg";
import solar from "@/assets/solar.jpg";
import students from "@/assets/students.jpg";
import community from "@/assets/community.jpg";

const gallery = [classroom, construction, wash, solar, students, community];

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact & Réalisations — Anjaramahasoa" },
      { name: "description", content: "100% de réussite au CEPE, mobilisation communautaire et besoins urgents identifiés." },
      { property: "og:title", content: "Impact & Réalisations" },
      { property: "og:description", content: "Résultats concrets et besoins urgents à Ambatofahavalo." },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <section className="container-page py-20">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Impact</span>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-primary">Résultats, besoins, approche</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Des indicateurs concrets et une lecture honnête de ce qu'il reste à accomplir.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl p-8 text-foreground" style={{ background: "var(--gradient-warm)" }}>
            <Award className="h-8 w-8" />
            <div className="mt-4 font-display text-5xl font-bold">100%</div>
            <p className="mt-2 font-medium">Taux de réussite au CEPE — malgré des conditions extrêmes.</p>
          </article>

          <article className="rounded-3xl bg-primary p-8 text-primary-foreground">
            <AlertTriangle className="h-8 w-8 text-accent" />
            <h3 className="mt-4 font-display text-xl font-bold">Besoins urgents</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li>• Toiture étanche</li>
              <li>• Renforcement structurel de l'ancien bâtiment</li>
              <li>• Latrines séparées par genre</li>
              <li>• Électricité solaire</li>
              <li>• Point d'eau</li>
            </ul>
          </article>

          <article className="rounded-3xl bg-card p-8 ring-1 ring-border">
            <Sparkles className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-xl font-bold text-primary">Notre approche</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Forte mobilisation communautaire associée à un apport concret déjà sur le terrain :
              tables-bancs, cloisons, kits WASH et peinture de protection.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page py-20">
          <h2 className="font-display text-3xl font-bold text-primary">Galerie du chantier</h2>
          <p className="mt-2 text-muted-foreground">Photos du terrain à Ambatofahavalo.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((src, i) => (
              <img key={i} src={src} alt={`Chantier ${i + 1}`} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm hover:shadow-lg hover:-translate-y-1 transition" loading="lazy" width={1200} height={900} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <blockquote className="mx-auto max-w-3xl rounded-3xl bg-card p-10 text-center ring-1 ring-border">
          <p className="font-display text-2xl md:text-3xl italic text-primary leading-snug">
            « De l'urgence à la durabilité : un projet concret et transparent. »
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">— Association Anjaramahasoa</footer>
        </blockquote>
      </section>
    </>
  );
}
