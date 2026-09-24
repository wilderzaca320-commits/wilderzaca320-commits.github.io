import { createFileRoute } from "@tanstack/react-router";

import About from "@/components/sections/About";
import AprendeJugando from "@/components/sections/AprendeJugando";
import Compromisos from "@/components/sections/Compromisos";
import Conclucion from "@/components/sections/Conclucion";
import Hero from "@/components/sections/Hero";
import Journal from "@/components/sections/Journal";
import Objetivo from "@/components/sections/Objetivo";
import Plan from "@/components/sections/Plan";
import Proyecto from "@/components/sections/Proyecto";
import Reach from "@/components/sections/Reach";
import Registro from "@/components/sections/Registro";
import Studio from "@/components/sections/Studio";
import Valoracion from "@/components/sections/Valoracion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aprender es crecer — Proyecto educativo" },
      {
        name: "description",
        content:
          "Proyecto educativo para mentes curiosas, creadores valientes y aprendices constantes.",
      },
      {
        property: "og:title",
        content: "Aprender es crecer — Cada conocimiento nos hace crecer un poco más",
      },
      {
        property: "og:description",
        content: "Un espacio para aprender, descubrir y crecer juntos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Hero />
      <Studio />
      <About />
      <Proyecto />
      <Objetivo />
      <Plan />
      <Compromisos />
      <Valoracion />
      <AprendeJugando />
      <Conclucion />
      <Registro />
      <Journal />
      <Reach />
    </main>
  );
}
