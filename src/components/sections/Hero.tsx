import { ArrowDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/blog-content";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-3xl tracking-tight text-foreground"
          aria-label="Proyecto educativo, inicio"
        >
          Proyecto educativo<sup className="text-xs">®</sup>
        </a>

        <nav
          className="hidden flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-2 md:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={
                index === 0
                  ? "text-sm text-foreground"
                  : "text-sm text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="glass" size="lg" asChild className="hidden px-6 py-2.5 md:inline-flex">
          <a href="#studio">Comenzar</a>
        </Button>

        <Button
          variant="glass"
          size="icon"
          className="rounded-full md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>

        {menuOpen && (
          <nav
            className="liquid-glass absolute left-6 right-6 top-20 flex max-h-[60vh] flex-col overflow-y-auto rounded-lg p-3 md:hidden"
            aria-label="Navegación móvil"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-[90px] text-center">
        <h1 className="animate-fade-rise max-w-7xl font-display text-5xl font-normal leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl">
          Donde los <em className="not-italic text-muted-foreground">sueños</em> crecen{" "}
          <em className="not-italic text-muted-foreground">en el silencio.</em>
        </h1>
        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Estamos creando un espacio para mentes curiosas, creadores valientes y aprendices
          constantes. En medio del ruido, cultivamos un lugar para aprender, descubrir y crecer.
        </p>
        <Button
          variant="glass"
          asChild
          className="animate-fade-rise-delay-2 mt-12 h-auto px-14 py-5 text-base"
        >
          <a href="#studio">Comenzar</a>
        </Button>
      </div>

      <a
        href="#studio"
        aria-label="Explorar el proyecto"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  );
}
