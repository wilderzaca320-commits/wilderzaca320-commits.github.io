import { useState } from "react";
import { Sprout, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { quizQuestions } from "@/lib/blog-content";

const TOTAL = quizQuestions.length;

export default function Quiz() {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState<number | null>(null);
  const [puntaje, setPuntaje] = useState(0);
  const [terminado, setTerminado] = useState(false);

  const pregunta = quizQuestions[indice];

  const reiniciar = () => {
    setIndice(0);
    setSeleccion(null);
    setPuntaje(0);
    setTerminado(false);
  };

  const responder = (opcion: number) => {
    if (seleccion !== null || !pregunta) {
      return;
    }
    setSeleccion(opcion);
    if (opcion === pregunta.correctIndex) {
      setPuntaje((actual) => actual + 1);
    }
  };

  const siguiente = () => {
    if (indice + 1 >= TOTAL) {
      setTerminado(true);
      return;
    }
    setIndice((actual) => actual + 1);
    setSeleccion(null);
  };

  return (
    <div id="quiz" className="liquid-glass rounded-xl p-6 sm:p-10">
      <div className="border-b border-border pb-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Quiz
        </p>
        <h3 className="mt-2 flex items-center gap-3 text-3xl font-normal">
          <Trophy className="size-8" />
          Quiz: ¿Cuánto aprendiste?
        </h3>
      </div>

      {terminado || !pregunta ? (
        <div className="mt-8 text-center">
          <p className="font-display text-4xl sm:text-5xl">
            {puntaje} <span className="text-muted-foreground">de {TOTAL}</span>
          </p>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {puntaje === TOTAL
              ? "¡Increíble! Domina cada idea del proyecto."
              : "¡Gracias por participar! Recuerda: cada conocimiento nos hace crecer un poco más."}
          </p>
          <Button variant="glass" size="lg" onClick={reiniciar} className="mt-8">
            Intentar de nuevo
          </Button>
        </div>
      ) : (
        <div className="mt-8">
          <p className="text-xs text-muted-foreground">
            Pregunta {indice + 1} de {TOTAL}
          </p>
          <h4 className="mt-4 font-display text-2xl font-normal leading-snug sm:text-3xl">
            {pregunta.question}
          </h4>

          <div className="mt-6 space-y-3">
            {pregunta.options.map((opcion, opcionIndex) => {
              const esRespuesta = seleccion === opcionIndex;
              const esCorrecta = opcionIndex === pregunta.correctIndex;
              return (
                <Button
                  key={opcion}
                  type="button"
                  variant="outline"
                  onClick={() => responder(opcionIndex)}
                  disabled={seleccion !== null}
                  className={cn(
                    "h-auto w-full justify-start px-5 py-3.5 text-left text-sm",
                    seleccion === null && "hover:border-foreground/30",
                    seleccion !== null && esCorrecta && "border-emerald-400/70 text-emerald-200",
                    seleccion !== null &&
                      esRespuesta &&
                      !esCorrecta &&
                      "border-rose-400/70 text-rose-200",
                    seleccion !== null && !esRespuesta && !esCorrecta && "text-muted-foreground",
                  )}
                >
                  <span className="flex-1">{opcion}</span>
                  {seleccion !== null && esCorrecta && <span>✓</span>}
                  {seleccion !== null && esRespuesta && !esCorrecta && <span>✗</span>}
                </Button>
              );
            })}
          </div>

          {seleccion !== null && (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                {seleccion === pregunta.correctIndex ? (
                  <>
                    <Sprout className="size-4 text-emerald-300" />
                    ¡Correcto!
                  </>
                ) : (
                  "Casi. ¡Sigue aprendiendo!"
                )}
              </p>
              <Button variant="glass" onClick={siguiente}>
                {indice + 1 >= TOTAL ? "Ver resultado" : "Siguiente pregunta"}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
