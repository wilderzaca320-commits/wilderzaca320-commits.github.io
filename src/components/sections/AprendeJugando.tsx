import { Clapperboard, Play } from "lucide-react";

import IconoEducativo from "@/components/IconoEducativo";
import { Button } from "@/components/ui/button";
import CuriousFact from "@/components/sections/CuriousFact";
import Lecturas from "@/components/sections/Lecturas";
import MemoryGame from "@/components/sections/MemoryGame";
import Quiz from "@/components/sections/Quiz";
import RetoFinal from "@/components/sections/RetoFinal";
import { juegosAccesos, videoEducativo } from "@/lib/blog-content";

export default function AprendeJugando() {
  return (
    <section id="aprende" className="bg-secondary px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Aprende jugando
          </p>
          <div>
            <h2 className="max-w-4xl text-5xl font-normal leading-none tracking-tight sm:text-7xl">
              Aprender también <em className="text-muted-foreground">puede ser divertido.</em>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              En esta parte del blog puedes participar, descubrir datos y comprobar cuánto
              aprendiste.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {juegosAccesos.map((juego) => (
            <Button
              key={juego.href}
              variant="glass"
              asChild
              className="h-auto flex-col items-start gap-3 rounded-xl p-8 text-left"
            >
              <a href={juego.href}>
                <IconoEducativo nombre={juego.icon} className="size-10" />
                <span className="text-2xl font-normal">{juego.title}</span>
                <span className="text-sm font-normal leading-relaxed text-muted-foreground">
                  {juego.copy}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Ir a participar
                </span>
              </a>
            </Button>
          ))}
        </div>

        <div className="mt-16 grid gap-10">
          <MemoryGame />
          <Quiz />
          <CuriousFact />
          <RetoFinal />

          <div className="liquid-glass rounded-xl p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Mira y aprende
                </p>
                <h3 className="mt-2 flex items-center gap-3 text-3xl font-normal">
                  <Clapperboard className="size-8" />
                  Video educativo
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Explora videos relacionados con el aprendizaje para profundizar antes de nuestra
                  exposición.
                </p>
              </div>
            </div>
            <Button variant="glass" asChild className="mt-6">
              <a href={videoEducativo} target="_blank" rel="noreferrer">
                <Play className="size-4" />
                Buscar video educativo
              </a>
            </Button>
          </div>

          <Lecturas />
        </div>
      </div>
    </section>
  );
}
