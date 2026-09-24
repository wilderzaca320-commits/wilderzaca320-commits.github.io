import { Sprout } from "lucide-react";

import { conclusionImagenes } from "@/lib/blog-content";

export default function Conclucion() {
  return (
    <section id="conclusion" className="bg-background px-6 py-28 sm:py-40 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Conclusión
          </p>
          <div>
            <h2 className="max-w-4xl text-5xl font-normal leading-none tracking-tight sm:text-7xl">
              Cada día aprendemos algo nuevo, y cada cosa nueva{" "}
              <em className="text-muted-foreground">nos hace crecer un poco más.</em>
            </h2>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Aprender no es solo saber más:{" "}
                <span className="text-foreground">aprender es crecer</span>. Este proyecto nos
                invita a mirar el estudio no como una obligación, sino como una oportunidad para ser
                mejores personas.
              </p>
              <p>
                A veces aprendemos de una clase, otras veces de nuestros compañeros, de una
                experiencia o incluso de un error. Lo importante es seguir avanzando, compartir lo
                que sabemos y valorar cada pequeño progreso.
              </p>
            </div>
            <div className="liquid-glass mt-10 rounded-xl p-8 text-center sm:p-10">
              <p className="font-display text-3xl leading-snug sm:text-4xl">
                “Cada conocimiento nos hace crecer un poco más.”
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Leer · Descubrir · Crecer
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {conclusionImagenes.map((imagen) => (
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
        </div>

        <div className="mt-20 text-center">
          <p className="flex items-center justify-center gap-3 text-center font-display text-5xl leading-none tracking-tight sm:text-7xl">
            ¡Gracias por aprender y crecer juntos!{" "}
            <Sprout className="size-10 text-muted-foreground sm:size-12" />
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Proyecto educativo · Lenguaje · 6to “A” · Aprender es crecer
          </p>
        </div>
      </div>
    </section>
  );
}
