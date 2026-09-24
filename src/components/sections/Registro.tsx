import { useEffect, useState, type FormEvent } from "react";
import { GraduationCap, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { guardarRegistro, leerRegistros, type Registro, type RolRegistro } from "@/lib/registro";

export default function Registro() {
  const [rol, setRol] = useState<RolRegistro>("estudiante");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [cursoMateria, setCursoMateria] = useState("");
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [registros, setRegistros] = useState<Registro[]>([]);

  useEffect(() => {
    setRegistros(leerRegistros());
  }, []);

  const enviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (!nombre.trim() || !correo.trim() || !cursoMateria.trim()) {
      setMensaje("Completa todos los campos para registrarte.");
      return;
    }
    guardarRegistro({
      rol,
      nombre: nombre.trim(),
      correo: correo.trim(),
      cursoMateria: cursoMateria.trim(),
    });
    setMensaje(rol === "estudiante" ? "¡Estudiante registrado!" : "¡Docente registrado!");
    setNombre("");
    setCorreo("");
    setCursoMateria("");
    setRegistros(leerRegistros());
  };

  const esEstudiante = rol === "estudiante";
  const etiquetaCurso = esEstudiante ? "Curso" : "Materia";
  const ultimosRegistros = registros.slice(0, 3);

  return (
    <section id="aula" className="bg-secondary px-6 py-28 sm:py-36 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-16 lg:grid-cols-[1fr_2fr]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Aula · Registro
          </p>
          <div>
            <h2 className="max-w-4xl text-5xl font-normal leading-none tracking-tight sm:text-7xl">
              Únete a la comunidad del proyecto y{" "}
              <em className="text-muted-foreground">crece con nosotros.</em>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Los estudiantes y docentes pueden registrarse para participar del proyecto, recibir
              los materiales y compartir lecturas y retos.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="liquid-glass rounded-xl p-6 sm:p-10">
            <Tabs
              defaultValue="estudiante"
              onValueChange={(valor) => {
                setRol(valor as RolRegistro);
                setMensaje(null);
              }}
            >
              <TabsList className="w-full">
                <TabsTrigger value="estudiante" className="flex-1">
                  <User className="size-4" />
                  Estudiante
                </TabsTrigger>
                <TabsTrigger value="docente" className="flex-1">
                  <GraduationCap className="size-4" />
                  Docente
                </TabsTrigger>
              </TabsList>

              <TabsContent value="estudiante">
                <form onSubmit={enviar} className="mt-4 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="registro-nombre">Nombre completo</Label>
                    <Input
                      id="registro-nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Escribe tu nombre"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="registro-correo">Correo electrónico</Label>
                      <Input
                        id="registro-correo"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="tu@correo.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registro-curso">Curso</Label>
                      <Input
                        id="registro-curso"
                        value={cursoMateria}
                        onChange={(e) => setCursoMateria(e.target.value)}
                        placeholder="Ej. 6to “A”"
                      />
                    </div>
                  </div>
                  <Button variant="glass" type="submit" className="w-full">
                    Registrarme como estudiante
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="docente">
                <form onSubmit={enviar} className="mt-4 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="registro-docente-nombre">Nombre completo</Label>
                    <Input
                      id="registro-docente-nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Escribe tu nombre"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="registro-docente-correo">Correo electrónico</Label>
                      <Input
                        id="registro-docente-correo"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="tu@correo.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registro-docente-materia">Materia</Label>
                      <Input
                        id="registro-docente-materia"
                        value={cursoMateria}
                        onChange={(e) => setCursoMateria(e.target.value)}
                        placeholder="Ej. Lenguaje"
                      />
                    </div>
                  </div>
                  <Button variant="glass" type="submit" className="w-full">
                    Registrarme como docente
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {mensaje && <p className="mt-5 text-sm text-emerald-300">{mensaje}</p>}
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Comunidad
            </p>
            <div className="mt-4 divide-y divide-border border border-border rounded-lg">
              {ultimosRegistros.length === 0 ? (
                <p className="px-6 py-8 text-sm leading-relaxed text-muted-foreground">
                  Aún no hay registros. Sé la primera persona en unirse a esta comunidad de
                  aprendizaje.
                </p>
              ) : (
                ultimosRegistros.map((registro) => (
                  <div
                    key={registro.id}
                    className="flex items-center justify-between gap-4 px-6 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-sm text-foreground">{registro.nombre}</p>
                        <p className="text-xs text-muted-foreground">
                          {registro.rol === "estudiante" ? "Estudiante" : "Docente"} ·{" "}
                          {registro.cursoMateria}
                        </p>
                      </div>
                      <span className="text-muted-foreground">
                        {registro.rol === "estudiante" ? (
                          <User className="size-5" />
                        ) : (
                          <GraduationCap className="size-5" />
                        )}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {registros.length > 0
                ? `${registros.length} persona${registros.length === 1 ? "" : "s"} registrada${registros.length === 1 ? "" : "s"} en el aula ${etiquetaCurso.toLowerCase() === "curso" ? "de nuestro proyecto" : `de nuestra comunidad`}.`
                : "Tu registro se guarda en este dispositivo y quedará conectado a la base de datos del proyecto cuando esté disponible."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
