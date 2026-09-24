import { useState } from "react";
import { Lightbulb, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { curiousFacts } from "@/lib/blog-content";

const TOTAL = curiousFacts.length;

export default function CuriousFact() {
  const [dato, setDato] = useState<string | null>(null);
  const [orden, setOrden] = useState(0);

  const descubrir = () => {
    const siguiente = orden + 1;
    setOrden(siguiente);
    setDato(curiousFacts[(siguiente - 1) % TOTAL] ?? curiousFacts[0] ?? "");
  };

  return (
    <div id="dato" className="liquid-glass rounded-xl p-6 sm:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Dato curioso
          </p>
          <h3 className="mt-2 flex items-center gap-3 text-3xl font-normal">
            <Lightbulb className="size-8" />
            Datos que inspiran
          </h3>
        </div>
        <Button variant="glass" onClick={descubrir}>
          <Sparkles className="size-4" />
          Descubrir dato
        </Button>
      </div>

      <div className="mt-8 min-h-28">
        {dato ? (
          <p className="font-display text-2xl leading-relaxed sm:text-3xl">{dato}</p>
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Toca “Descubrir dato” y conoce algo nuevo sobre el aprendizaje.
          </p>
        )}
      </div>

      {dato && (
        <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
          Has descubierto {Math.min(orden, TOTAL)} de {TOTAL} datos · Dato curioso nº {orden}
        </div>
      )}
    </div>
  );
}
