import IconoEducativo from "@/components/IconoEducativo";
import { compromisos, compromisosImagenes, recursos } from "@/lib/blog-content";

export default function Compromisos() {
  return (
    <section id="compromisos" className="bg-secondary px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Compromisos
            </p>
            <div className="mt-12">
              {compromisosImagenes.map((imagen) => (
                <figure key={imagen.src}>
                  <img
                    src={imagen.src}
                    alt={imagen.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
                  />
                  <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                    {imagen.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div>
            <h2 className="max-w-4xl text-5xl font-normal leading-none tracking-tight sm:text-7xl">
              Pequeños acuerdos que hacen del aula{" "}
              <em className="text-muted-foreground">un espacio de respeto y colaboración.</em>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Para que todos podamos aprender y crecer, asumimos compromisos que nos ayudan a
              avanzar juntos.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {compromisos.map((c) => (
            <article key={c.title} className="border border-border rounded-lg p-8">
              <IconoEducativo nombre={c.icon} className="size-7 text-muted-foreground" />
              <h3 className="mt-4 text-2xl font-normal">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Recursos
          </p>
          <div className="liquid-glass mt-4 rounded-lg p-6">
            {recursos.map((recurso) => (
              <div
                key={recurso.label}
                className="flex items-center gap-3 border-b border-border py-3 text-sm last:border-b-0 sm:text-base"
              >
                <IconoEducativo
                  nombre={recurso.icon}
                  className="size-5 shrink-0 text-muted-foreground"
                />
                <span className="leading-relaxed text-muted-foreground">{recurso.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
