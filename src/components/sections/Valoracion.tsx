import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IconoEducativo from "@/components/IconoEducativo";
import { criteriosValoracion, valoracionImagenes, valorarDestacados } from "@/lib/blog-content";

export default function Valoracion() {
  return (
    <section id="valoracion" className="bg-background px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Valoración
            </p>
            <div className="mt-12">
              {valoracionImagenes.map((imagen) => (
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
              Valoramos el esfuerzo, la participación{" "}
              <em className="text-muted-foreground">y el crecimiento.</em>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              La valoración nos permite observar no solamente el resultado final, sino también el
              esfuerzo, la participación y el crecimiento durante el proyecto.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Criterio</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {criteriosValoracion.map((criterio) => (
                <TableRow key={criterio.criterio}>
                  <TableCell className="text-sm font-medium text-foreground">
                    {criterio.criterio}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {criterio.descripcion}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {valorarDestacados.map((item) => (
            <article key={item.title} className="border border-border rounded-lg p-8 text-center">
              <IconoEducativo
                nombre={item.icon}
                className="mx-auto size-10 text-muted-foreground"
              />
              <h3 className="mt-4 text-2xl font-normal">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
