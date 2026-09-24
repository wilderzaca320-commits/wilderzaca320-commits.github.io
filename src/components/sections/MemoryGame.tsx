import { useEffect, useState } from "react";
import { Sparkles, Trophy } from "lucide-react";

import IconoEducativo from "@/components/IconoEducativo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { memorySymbols } from "@/lib/blog-content";

const nombresSimbolos: Record<string, string> = {
  book: "Libro",
  brain: "Cerebro",
  pencil: "Lápiz",
  sprout: "Brote",
};

type MemoryCard = {
  id: number;
  symbol: string;
};

function crearCartas(): MemoryCard[] {
  return memorySymbols
    .map((symbol, index) => ({ id: index, symbol }))
    .sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [cartas, setCartas] = useState<MemoryCard[]>(() => crearCartas());
  const [volteadas, setVolteadas] = useState<number[]>([]);
  const [coincidencias, setCoincidencias] = useState<number[]>([]);
  const [bloqueado, setBloqueado] = useState(false);
  const [movimientos, setMovimientos] = useState(0);

  useEffect(() => {
    if (volteadas.length !== 2) {
      return;
    }
    setBloqueado(true);
    setMovimientos((actual) => actual + 1);
    const [primera, segunda] = volteadas;
    if (primera === undefined || segunda === undefined) {
      setBloqueado(false);
      return;
    }
    const cartaA = cartas.find((carta) => carta.id === primera);
    const cartaB = cartas.find((carta) => carta.id === segunda);
    if (cartaA && cartaB && cartaA.symbol === cartaB.symbol) {
      setCoincidencias((actual) => [...actual, primera, segunda]);
      setVolteadas([]);
      setBloqueado(false);
      return;
    }
    const temporizador = setTimeout(() => {
      setVolteadas([]);
      setBloqueado(false);
    }, 800);
    return () => clearTimeout(temporizador);
  }, [volteadas, cartas]);

  const completado = coincidencias.length === memorySymbols.length;

  const voltear = (id: number) => {
    if (bloqueado || volteadas.includes(id) || coincidencias.includes(id)) {
      return;
    }
    setVolteadas((actual) => [...actual, id]);
  };

  const reiniciar = () => {
    setCartas(crearCartas());
    setVolteadas([]);
    setCoincidencias([]);
    setBloqueado(false);
    setMovimientos(0);
  };

  return (
    <div id="memoria" className="liquid-glass rounded-xl p-6 sm:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Juego
          </p>
          <h3 className="mt-2 flex items-center gap-3 text-3xl font-normal">
            <IconoEducativo nombre="brain" className="size-8" />
            Juego de memoria
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Encuentra las 4 parejas relacionadas con el aprendizaje.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground">Movimientos: {movimientos}</span>
          <Button variant="glass" size="sm" onClick={reiniciar}>
            Reiniciar
          </Button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-4">
        {cartas.map((carta) => {
          const visible = volteadas.includes(carta.id) || coincidencias.includes(carta.id);
          const emparejada = coincidencias.includes(carta.id);
          return (
            <button
              key={carta.id}
              type="button"
              onClick={() => voltear(carta.id)}
              aria-label={
                visible ? (nombresSimbolos[carta.symbol] ?? carta.symbol) : "Carta oculta"
              }
              className={cn(
                "flex aspect-[4/3] items-center justify-center rounded-xl transition-transform duration-300",
                visible ? "text-foreground" : "text-muted-foreground/40 hover:scale-[1.04]",
                emparejada && "bg-foreground/5",
              )}
            >
              {visible ? (
                <IconoEducativo nombre={carta.symbol} className="size-8 sm:size-10" />
              ) : (
                <Sparkles className="size-5" />
              )}
            </button>
          );
        })}
      </div>

      {completado && (
        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="flex items-center justify-center gap-2 text-base sm:text-lg">
            <Trophy className="size-5 text-emerald-300" />
            ¡Muy bien! Encontraste todas las parejas en {movimientos} movimientos.
          </p>
        </div>
      )}
    </div>
  );
}
