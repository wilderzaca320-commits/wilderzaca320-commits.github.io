import { Lightbulb } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { objetivoFilas, objetivoImagenes } from "@/lib/blog-content";

export default function Objetivo() {
  return (
    <section id="objetivo" className="bg-secondary px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Objetivo
          </p>
          <h2 className="max-w-4xl text-5xl font-normal leading-none tracking-tight sm:text-7xl">
            Comprender que el aprendizaje{" "}
            <em className="text-muted-foreground">no termina en el aula.</em>
          </h2>
        </div>

        <div className="mt-14">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Pregunta</TableHead>
                <TableHead>Respuesta</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {objetivoFilas.map((fila) => (
                <TableRow key={fila.pregunta}>
                  <TableCell className="text-sm font-medium text-foreground">
                    {fila.pregunta}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{fila.respuesta}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="liquid-glass mt-10 rounded-lg p-8 text-center sm:p-10">
            <p className="mx-auto flex max-w-2xl items-center justify-center gap-3 text-base leading-relaxed sm:text-lg">
              <Lightbulb className="size-6 shrink-0 text-muted-foreground" />
              Aprender nos ayuda a conocer más, pero también a conocernos y a mejorarnos.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {objetivoImagenes.map((imagen) => (
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
    </section>
  );
}
