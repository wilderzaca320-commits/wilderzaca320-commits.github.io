import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { etapasPlan, pasosPlan, planImagenes } from "@/lib/blog-content";

export default function Plan() {
  return (
    <section id="plan" className="bg-background px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Plan de trabajo
            </p>
            <div className="mt-12">
              {planImagenes.map((imagen) => (
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
              En cada etapa buscamos{" "}
              <em className="text-muted-foreground">aprender, participar y reconocer.</em>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              El proyecto se organiza en diferentes momentos. En cada etapa buscamos aprender,
              participar y reconocer nuestro propio progreso.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Etapa</TableHead>
                <TableHead>Actividad</TableHead>
                <TableHead className="w-1/5">Tiempo</TableHead>
                <TableHead className="w-1/5">Propósito</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {etapasPlan.map((etapa) => (
                <TableRow key={etapa.etapa}>
                  <TableCell className="text-sm font-medium text-foreground">
                    {etapa.etapa}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{etapa.actividad}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{etapa.tiempo}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{etapa.proposito}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pasosPlan.map((paso) => (
            <div key={paso.numero} className="border border-border rounded-lg p-8">
              <span className="font-display text-5xl text-muted-foreground">{paso.numero}</span>
              <h3 className="mt-4 text-2xl font-normal">{paso.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{paso.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
