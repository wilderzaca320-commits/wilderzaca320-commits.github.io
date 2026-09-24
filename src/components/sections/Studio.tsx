import { studioImagenes } from "@/lib/blog-content";

const capabilities = [
  {
    number: "01",
    title: "Información de la actividad",
    copy: (
      <>
        Materia · Lenguaje
        <br />
        Curso · 6.º A
        <br />
        Profesora · Graciela
        <br />
        Fecha · 23/09/26
      </>
    ),
  },
  {
    number: "02",
    title: "Integrantes del equipo",
    copy: <>Nuestro equipo lo forman Eron, Elías, Gustavo, Lina, Ronald, Grable, Samuel y Paola.</>,
  },
  {
    number: "03",
    title: "Aprendizaje y propósito",
    copy: (
      <>
        Aprender juntos nos permite compartir lo que sabemos y descubrir lo que otros saben.
        Trabajar en equipo nos ayuda a escuchar, participar y crecer, porque cada aporte suma a
        nuestro aprendizaje.
      </>
    ),
  },
];

export default function Studio() {
  return (
    <section id="studio" className="bg-background px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              El proyecto
            </p>
            <div className="mt-12">
              {studioImagenes.map((imagen) => (
                <figure key={imagen.src}>
                  <img
                    src={imagen.src}
                    alt={imagen.alt}
                    className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
                  />
                  <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                    {imagen.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <h2 className="max-w-4xl text-5xl font-normal leading-none tracking-tight sm:text-7xl">
            Aprender es crecer:{" "}
            <em className="text-muted-foreground">
              cada conocimiento nos hace crecer un poco más.
            </em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="group min-h-80 border-b border-border py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs text-muted-foreground">{item.number}</span>
              <div className="mt-28">
                <h3 className="text-3xl font-normal">{item.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
