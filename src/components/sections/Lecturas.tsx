import { useState } from "react";
import { Check, BookOpen } from "lucide-react";

import IconoEducativo from "@/components/IconoEducativo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { lecturas } from "@/lib/blog-content";

const TOTAL = lecturas.length;

export default function Lecturas() {
  const [leidas, setLeidas] = useState<number[]>([]);

  const alternar = (indice: number) => {
    setLeidas((actual) =>
      actual.includes(indice) ? actual.filter((i) => i !== indice) : [...actual, indice],
    );
  };

  return (
    <div id="lecturas" className="liquid-glass rounded-xl p-6 sm:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Lecturas
          </p>
          <h3 className="mt-2 flex items-center gap-3 text-3xl font-normal">
            <BookOpen className="size-8" />
            Pequeñas lecturas para crecer
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Lee cada texto y márcalo como completado cuando lo comprendas.
          </p>
        </div>
        <div className="text-xs text-muted-foreground">
          {leidas.length} de {TOTAL} lecturas completadas
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {lecturas.map((lectura, indice) => {
          const leida = leidas.includes(indice);
          return (
            <article
              key={lectura.titulo}
              className={cn(
                "flex flex-col gap-4 border rounded-lg p-6 transition-colors",
                leida ? "border-foreground/30 bg-foreground/5" : "border-border",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <IconoEducativo nombre={lectura.icon} className="size-8 text-muted-foreground" />
                {leida && <Check className="size-5 text-emerald-300" />}
              </div>
              <h4 className="text-xl font-normal">{lectura.titulo}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{lectura.texto}</p>
              <Button
                variant="outline"
                size="sm"
                className={cn("mt-auto w-fit", leida && "border-foreground/30")}
                onClick={() => alternar(indice)}
              >
                <BookOpen className="size-4" />
                {leida ? "Marcada como leída" : "Marcar como leída"}
              </Button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
