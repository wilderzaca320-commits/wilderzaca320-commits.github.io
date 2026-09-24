import { useState, type ChangeEvent } from "react";
import { Sprout, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Frases = {
  aprender: string;
  crecer: string;
  juntos: string;
};

const FRASES_INICIALES: Frases = { aprender: "", crecer: "", juntos: "" };

export default function RetoFinal() {
  const [frases, setFrases] = useState<Frases>(FRASES_INICIALES);
  const [completado, setCompletado] = useState(false);
  const [mostrarAviso, setMostrarAviso] = useState(false);

  const actualizar = (campo: keyof Frases) => (evento: ChangeEvent<HTMLInputElement>) => {
    setCompletado(false);
    setMostrarAviso(false);
    setFrases((actual) => ({ ...actual, [campo]: evento.target.value }));
  };

  const terminado = () => {
    const completo = frases.aprender.trim() && frases.crecer.trim() && frases.juntos.trim();
    if (!completo) {
      setMostrarAviso(true);
      return;
    }
    setCompletado(true);
  };

  const reiniciar = () => {
    setFrases(FRASES_INICIALES);
    setCompletado(false);
    setMostrarAviso(false);
  };

  return (
    <div id="reto" className="liquid-glass rounded-xl p-6 sm:p-10">
      <div className="border-b border-border pb-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Reto final
        </p>
        <h3 className="mt-2 flex items-center gap-3 text-3xl font-normal">
          <Target className="size-8" />
          Completa las tres frases
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Escribe tu propio cierre y confirma cuánto has aprendido con el proyecto.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="reto-aprender">Aprender es…</Label>
          <Input
            id="reto-aprender"
            value={frases.aprender}
            onChange={actualizar("aprender")}
            placeholder="Escribe aquí"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reto-crecer">Crecer significa…</Label>
          <Input
            id="reto-crecer"
            value={frases.crecer}
            onChange={actualizar("crecer")}
            placeholder="Escribe aquí"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reto-juntos">Juntos podemos…</Label>
          <Input
            id="reto-juntos"
            value={frases.juntos}
            onChange={actualizar("juntos")}
            placeholder="Escribe aquí"
          />
        </div>
      </div>

      {mostrarAviso && (
        <p className="mt-5 text-sm text-rose-300">
          Completa las tres frases para terminar el reto.
        </p>
      )}
      {completado && (
        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="flex items-center justify-center gap-2 font-display text-2xl sm:text-3xl">
            <Sprout className="size-8 text-emerald-300" />
            ¡Reto completado! Sigue aprendiendo y creciendo.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            “Aprender es {frases.aprender.trim()} · Crecer significa {frases.crecer.trim()} · Juntos
            podemos {frases.juntos.trim()}.”
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4">
        <Button variant="glass" onClick={terminado}>
          Terminé mi reto
        </Button>
        <Button variant="outline" onClick={reiniciar}>
          Reiniciar
        </Button>
      </div>
    </div>
  );
}
