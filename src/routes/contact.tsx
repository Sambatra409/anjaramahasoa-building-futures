import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Association Anjaramahasoa" },
      { name: "description", content: "Contactez l'Association Anjaramahasoa. Partenaires et bailleurs bienvenus." },
      { property: "og:title", content: "Contact — Anjaramahasoa" },
      { property: "og:description", content: "Échangeons sur le projet EPP Ambatofahavalo." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="container-page py-20">
      <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange">Contact</span>
      <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-primary">Échangeons</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Partenaires et bailleurs bienvenus. Écrivez-nous pour échanger sur le projet ou organiser une visite.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-4">
          {[
            { icon: MapPin, label: "Adresse", value: "Région Analamanga, Madagascar" },
            { icon: Mail, label: "Email", value: "contact@anjaramahasoa.org" },
            { icon: Phone, label: "Téléphone", value: "+261 00 000 000" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl bg-card p-5 ring-1 ring-border">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><Icon className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-orange">{label}</div>
                <div className="mt-1 break-words text-foreground">{value}</div>
              </div>
            </div>
          ))}
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <p className="font-display text-lg italic">« Part du Bien Commun »</p>
            <p className="mt-2 text-sm text-white/85">Une réponse vous parviendra sous 48h ouvrées.</p>
          </div>
        </aside>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl bg-card p-8 ring-1 ring-border shadow-sm space-y-5"
        >
          {sent ? (
            <div className="text-center py-8">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full text-primary-foreground" style={{ background: "var(--gradient-warm)" }}>
                <Send className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-primary">Merci pour votre message</h2>
              <p className="mt-2 text-muted-foreground">Nous reviendrons vers vous très prochainement.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom complet" name="name" required />
                <Field label="Organisation" name="org" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Téléphone" name="phone" type="tel" />
              </div>
              <div>
                <label className="text-sm font-semibold text-primary">Vous êtes</label>
                <select name="profile" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary">
                  <option>Bailleur institutionnel</option>
                  <option>Entreprise / mécène</option>
                  <option>Particulier / donateur</option>
                  <option>Presse / média</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-primary">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  maxLength={1500}
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Parlez-nous de votre intérêt pour le projet…"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Envoyer le message <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-primary">{label}{required && <span className="text-accent-orange"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
