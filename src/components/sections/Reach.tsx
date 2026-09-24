import { Button } from "@/components/ui/button";
import { reachImagenes } from "@/lib/blog-content";

export default function Reach() {
  return (
    <section id="reach" className="bg-surface px-6 pb-8 pt-28 sm:pt-40 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          La próxima idea es tuya
        </p>
        <h2 className="mx-auto mt-8 max-w-5xl text-6xl font-normal leading-[0.95] tracking-tight sm:text-8xl">
          Haz espacio para lo que quiere <em className="text-muted-foreground">crecer.</em>
        </h2>
        <Button variant="glass" asChild className="mt-12 h-auto px-14 py-5 text-base">
          <a href="mailto:hello@velorah.design">Comenzar</a>
        </Button>
        <div className="mx-auto mt-16 max-w-3xl">
          {reachImagenes.map((imagen) => (
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
      <footer className="mx-auto mt-28 flex max-w-7xl flex-col gap-5 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="font-display text-2xl text-foreground">
          Proyecto educativo<sup className="text-[0.55rem]">®</sup>
        </a>
        <p>Herramientas para aprender y crecer con curiosidad.</p>
        <p>© 2026 · Aprender es crecer</p>
      </footer>
    </section>
  );
}
