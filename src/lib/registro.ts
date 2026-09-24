export type RolRegistro = "estudiante" | "docente";

export type Registro = {
  id: string;
  rol: RolRegistro;
  nombre: string;
  correo: string;
  cursoMateria: string;
  fecha: string;
};

const STORAGE_KEY = "velorah_aula_registros";

export function leerRegistros(): Registro[] {
  if (typeof window === "undefined") {
    return [];
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw) as Registro[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function guardarRegistro(datos: Omit<Registro, "id" | "fecha">): Registro {
  const nuevo: Registro = {
    ...datos,
    id: crypto.randomUUID(),
    fecha: new Date().toISOString(),
  };
  const actuales = leerRegistros();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([nuevo, ...actuales]));
  return nuevo;
}
