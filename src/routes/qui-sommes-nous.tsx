import { createFileRoute } from "@tanstack/react-router";
import { Heart, Handshake, Target, Eye } from "lucide-react";
import village from "@/assets/village.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Association Anjaramahasoa" },
      { name: "description", content: "Organisation malgache engagée dans le développement rural en Région Analamanga." },
      { property: "og:title", content: "Qui sommes-nous — Anjaramahasoa" },
      { property: "og:description", content: "Éducation, eau, énergie et assainissement pour les communautés rurales." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative">
        <img src={village} alt="Village rural d'Analamanga" className="h-[40vh] min-h-[300px] w-full object-cover" width={1600} height={900} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="container-page pb-10 text-primary-foreground">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Association</span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold">Qui sommes-nous</h1>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary">Une organisation malgache, ancrée localement</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              L'Association Anjaramahasoa est engagée dans le développement communautaire rural
              en Région Analamanga, à Madagascar.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Notre mission : offrir aux enfants des zones enclavées un accès à une éducation
              de qualité à travers l'amélioration des infrastructures scolaires, l'électrification,
              l'eau potable et l'assainissement. Nous travaillons en étroite collaboration avec
              les communautés, les parents (FAF) et les autorités locales.
            </p>
            <p className="mt-6 font-display italic text-xl text-primary">« Part du Bien Commun »</p>
          </div>
          <img src={community} alt="Communauté villageoise" className="rounded-3xl shadow-lg" loading="lazy" width={1200} height={900} />
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="container-page grid gap-6 py-20 md:grid-cols-4">
          {[
            { icon: Target, title: "Mission", text: "Améliorer durablement les conditions de vie rurales." },
            { icon: Eye, title: "Vision", text: "Des communautés autonomes, instruites et en bonne santé." },
            { icon: Heart, title: "Valeurs", text: "Engagement, transparence, proximité et durabilité." },
            { icon: Handshake, title: "Méthode", text: "Co-construction avec les FAF, les parents et les autorités." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-card p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-warm)" }}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
