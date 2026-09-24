import IconoEducativo from "@/components/IconoEducativo";
import { proyectoPilares, proyectosImagenes } from "@/lib/blog-content";

export default function Proyecto() {
  return (
    <section id="proyecto" className="bg-background px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            El proyecto · Lenguaje · 6to “A”
          </p>
          <div>
            <h2 className="max-w-4xl text-5xl font-normal leading-none tracking-tight sm:text-7xl">
              Aprender no es solo saber más,{" "}
              <em className="text-muted-foreground">es crecer como personas.</em>
            </h2>
            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                El proyecto “Aprender es crecer” nace de la idea de que aprender no significa
                únicamente memorizar información. Cada conocimiento, experiencia y esfuerzo puede
                ayudarnos a transformarnos y crecer como personas.
              </p>
              <p>
                Cuando descubrimos algo nuevo, resolvamos una duda o aprendemos de un error,
                desarrollamos nuestras capacidades. Por eso, estudiar también significa ganar
                confianza, responsabilidad, valores y autonomía.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3">
          {proyectoPilares.map((pilar) => (
            <article
              key={pilar.title}
              className="border-b border-border py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <IconoEducativo nombre={pilar.icon} className="size-10 text-muted-foreground" />
              <h3 className="mt-6 text-3xl font-normal">{pilar.title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {pilar.copy}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {proyectosImagenes.map((imagen) => (
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
    </section>
  );
}
