import { useState } from "react";
import { BookOpen } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { journalArticulos } from "@/lib/blog-content";

const CLAVE_LECTURAS = "velorah_aula_lecturas";

function leerLeidas(): string[] {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_LECTURAS) ?? "[]") as string[];
  } catch {
    return [];
  }
}

export default function Journal() {
  const [leidas, setLeidas] = useState<string[]>(() => {
    const guardadas = leerLeidas();
    const base = journalArticulos.filter((articulo) => articulo.leido).map((a) => a.titulo);
    return Array.from(new Set([...guardadas, ...base]));
  });
  const [indiceAbierto, setIndiceAbierto] = useState<number | null>(null);

  const articulo = indiceAbierto === null ? null : (journalArticulos[indiceAbierto] ?? null);

  const marcarLeido = (titulo: string) => {
    setLeidas((actual) => {
      const nuevas = actual.includes(titulo) ? actual : [...actual, titulo];
      localStorage.setItem(CLAVE_LECTURAS, JSON.stringify(nuevas));
      return nuevas;
    });
  };

  return (
    <section id="journal" className="bg-background px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between border-b border-border pb-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Bitácora
            </p>
            <h2 className="mt-5 text-5xl font-normal sm:text-6xl">Notas desde la calma.</h2>
          </div>
          <BookOpen className="hidden size-6 text-muted-foreground sm:block" />
        </div>
        <div>
          {journalArticulos.map((entrada, indice) => {
            const leido = leidas.includes(entrada.titulo);
            return (
              <button
                key={entrada.titulo}
                type="button"
                onClick={() => setIndiceAbierto(indice)}
                className="group grid w-full gap-5 border-b border-border py-8 text-left transition-colors hover:bg-foreground/5 sm:grid-cols-[10rem_1fr_2.4fr_auto] sm:items-center sm:px-4"
              >
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span
                    className={cn(
                      "size-2 rounded-full",
                      leido ? "bg-emerald-400" : "bg-muted-foreground/40",
                    )}
                    aria-hidden="true"
                  />
                  {entrada.categoria}
                </span>
                <figure className="hidden sm:block">
                  <img
                    src={entrada.imagen}
                    alt={entrada.titulo}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
                  />
                </figure>
                <div>
                  <h3 className="text-2xl font-normal group-hover:text-muted-foreground sm:text-3xl">
                    {entrada.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entrada.resumen}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {entrada.fecha} · {entrada.minutos} min{leido ? " · Leído" : ""}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog
        open={articulo !== null}
        onOpenChange={(abierto) => {
          if (!abierto) {
            setIndiceAbierto(null);
          }
        }}
      >
        {articulo && (
          <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {articulo.categoria} · {articulo.fecha} · {articulo.minutos} min de lectura
              </p>
              <DialogTitle className="pr-6 text-2xl font-normal leading-snug sm:text-3xl">
                {articulo.titulo}
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed sm:text-base">
                {articulo.resumen}
              </DialogDescription>
            </DialogHeader>
            <img
              src={articulo.imagen}
              alt={articulo.titulo}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-lg border border-border object-cover"
            />
            <div className="space-y-4 border-t border-border pt-6">
              {articulo.parrafos.map((parrafo, indice) => (
                <p
                  key={indice}
                  className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  {parrafo}
                </p>
              ))}
            </div>
            <button
              type="button"
              onClick={() => marcarLeido(articulo.titulo)}
              className={cn(
                "w-fit rounded-lg border px-4 py-2 text-sm transition-colors",
                leidas.includes(articulo.titulo)
                  ? "border-emerald-400/50 text-emerald-200"
                  : "border-border text-muted-foreground hover:border-foreground/30",
              )}
            >
              {leidas.includes(articulo.titulo) ? "✓ Marcada como leída" : "Marcar como leída"}
            </button>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
