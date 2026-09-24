import { aboutImagenes } from "@/lib/blog-content";

export default function About() {
  return (
    <section id="about" className="bg-secondary px-6 py-28 sm:py-40 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Nuestra convicción
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            El mejor aprendizaje se integra en el ritmo de descubrir y compartir.
          </p>
          <div className="mt-12">
            {aboutImagenes.map((imagen) => (
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
          <p className="font-display text-5xl leading-[1.04] tracking-tight sm:text-7xl">
            Más espacio para la curiosidad y menos barreras{" "}
            <em className="text-muted-foreground">entre la duda y la certeza.</em>
          </p>
          <div className="mt-16 flex flex-wrap gap-x-16 gap-y-8 border-t border-border pt-8 text-sm">
            <p>
              <span className="block text-muted-foreground">Pensado para</span>
              <span className="mt-2 block">Mentes curiosas</span>
            </p>
            <p>
              <span className="block text-muted-foreground">Guiado por</span>
              <span className="mt-2 block">Instinto por aprender</span>
            </p>
            <p>
              <span className="block text-muted-foreground">Hecho con</span>
              <span className="mt-2 block">Constancia y respeto</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
