export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "#home" },
  { label: "El proyecto", href: "#studio" },
  { label: "Convicción", href: "#about" },
  { label: "Proyecto", href: "#proyecto" },
  { label: "Objetivo", href: "#objetivo" },
  { label: "Plan", href: "#plan" },
  { label: "Compromisos", href: "#compromisos" },
  { label: "Valoración", href: "#valoracion" },
  { label: "Juegos", href: "#aprende" },
  { label: "Lecturas", href: "#lecturas" },
  { label: "Registro", href: "#aula" },
  { label: "Bitácora", href: "#journal" },
  { label: "Conclusión", href: "#conclusion" },
  { label: "Contacto", href: "#reach" },
];

export const memorySymbols = [
  "book",
  "book",
  "brain",
  "brain",
  "pencil",
  "pencil",
  "sprout",
  "sprout",
];

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "¿Qué significa aprender en nuestro proyecto?",
    options: [
      "Solo memorizar información",
      "Adquirir conocimientos, habilidades y valores",
      "Nunca equivocarse",
    ],
    correctIndex: 1,
  },
  {
    question: "¿Qué significa crecer?",
    options: [
      "Madurar y desarrollar valores y autonomía",
      "Saberlo todo",
      "Trabajar siempre en soledad",
    ],
    correctIndex: 0,
  },
  {
    question: "¿Qué nos ayuda a aprender juntos?",
    options: [
      "No hacer preguntas",
      "Respetarnos, ayudarnos y escucharnos",
      "Ignorar a los compañeros",
    ],
    correctIndex: 1,
  },
  {
    question: "¿Qué hacemos con los errores?",
    options: ["Los vemos como parte del aprendizaje", "Los escondemos", "Dejamos de aprender"],
    correctIndex: 0,
  },
];

export const curiousFacts: string[] = [
  "Aprender algo nuevo puede ayudarnos a desarrollar nuevas habilidades y formas de resolver problemas.",
  "Preguntar cuando no entendemos algo también es una forma importante de aprender.",
  "Compartir conocimientos permite que otras personas también puedan aprender de nosotros.",
  "Los errores pueden ayudarnos a reconocer qué necesitamos practicar o comprender mejor.",
  "Aprender no ocurre solamente en el aula: también aprendemos mediante experiencias y convivencia.",
];

export const proyectoPilares = [
  {
    icon: "book-open",
    title: "Aprender",
    copy: "Adquirir conocimientos, habilidades y nuevas formas de comprender lo que nos rodea.",
  },
  {
    icon: "trending-up",
    title: "Crecer",
    copy: "Madurar, desarrollar valores, confianza, responsabilidad y autonomía.",
  },
  {
    icon: "users",
    title: "Compartir",
    copy: "Avanzar juntos, ayudándonos, escuchándonos y respetándonos durante el aprendizaje.",
  },
];

export const proyectosImagenes = [
  {
    src: "/images/proyecto/ninos-leyendo.webp",
    alt: "Niños y niñas reunidos escuchando el cuento narrado.",
  },
  {
    src: "/images/proyecto/trabajo-en-equipo.webp",
    alt: "Estudiantes colaboran en equipo dentro del aula.",
  },
  {
    src: "/images/proyecto/plantando-arbol.webp",
    alt: "Escolares plantan un árbol en su escuela.",
  },
];

export const studioImagenes = [
  {
    src: "/images/studio/estudiante-enfoque.webp",
    alt: "Una estudiante se concentra en escribir en su cuaderno.",
  },
];

export const aboutImagenes = [
  {
    src: "/images/about/cuaderno-notas.webp",
    alt: "Una estudiante toma notas con dedicación en su libreta.",
  },
];

export const objetivoImagenes = [
  {
    src: "/images/objetivo/aula-leyendo.webp",
    alt: "Una docente lee en voz alta y sus estudiantes escuchan atentos.",
  },
  {
    src: "/images/objetivo/pizarra-colegial.webp",
    alt: "Las niñas y los niños más pequeños se acercan a la pizarra para aprender.",
  },
];

export const planImagenes = [
  {
    src: "/images/plan/estudiando.webp",
    alt: "Una estudiante investiga con su tableta durante el plan de trabajo.",
  },
];

export const compromisosImagenes = [
  {
    src: "/images/compromisos/ayuda-mutua.webp",
    alt: "Una docente brinda apoyo cercano para que nadie se quede atrás.",
  },
];

export const valoracionImagenes = [
  {
    src: "/images/valoracion/exposicion.webp",
    alt: "Estudiantes presentan con confianza lo aprendido durante el proyecto.",
  },
];

export const conclusionImagenes = [
  {
    src: "/images/conclusion/brote-nuevo.webp",
    alt: "Un brote nuevo anuncia crecimiento y buenas cosechas.",
  },
  {
    src: "/images/conclusion/luz-manana.webp",
    alt: "La luz de la mañana abre el camino a un nuevo comienzo.",
  },
];

export const reachImagenes = [
  {
    src: "/images/reach/amanecer.webp",
    alt: "Sale el sol: cada día hace espacio para crecer.",
  },
];

export const objetivoFilas = [
  {
    pregunta: "¿Qué es?",
    respuesta: "Desarrollar conocimientos, habilidades y valores de forma integrada.",
  },
  {
    pregunta: "¿Para qué?",
    respuesta: "Para entender que aprender nos hace crecer por dentro y nos prepara para la vida.",
  },
  {
    pregunta: "¿Por qué?",
    respuesta:
      "Porque cada conocimiento puede transformarnos y el aprendizaje es un camino de crecimiento continuo.",
  },
  {
    pregunta: "¿Cómo?",
    respuesta:
      "Mediante actividades prácticas, trabajo en equipo, reflexiones, participación y respeto al aprender.",
  },
];

export const etapasPlan = [
  {
    etapa: "Inicio",
    actividad:
      "Presentación del proyecto, reflexión “¿Qué significa para mí aprender?” y acuerdos de convivencia.",
    tiempo: "1 sesión",
    proposito: "Compartir el propósito y comprometernos.",
  },
  {
    etapa: "Desarrollo",
    actividad:
      "Actividades de aprendizaje, trabajo colaborativo y reflexión sobre avances, dificultades y retos.",
    tiempo: "3–4 sesiones",
    proposito: "Aprender contenidos y practicar valores.",
  },
  {
    etapa: "Cierre",
    actividad:
      "Compartir lo aprendido, reconocer logros y responder: “¿Cómo he crecido con lo que aprendí?”",
    tiempo: "1 sesión",
    proposito: "Valorar el camino recorrido.",
  },
];

export const pasosPlan = [
  {
    numero: "01",
    titulo: "Nos preguntamos",
    texto: "Qué sabemos y qué queremos aprender.",
  },
  {
    numero: "02",
    titulo: "Trabajamos",
    texto: "Investigamos, practicamos, compartimos ideas y nos ayudamos.",
  },
  {
    numero: "03",
    titulo: "Reflexionamos",
    texto: "Reconocemos qué aprendimos y cómo ese aprendizaje nos hizo crecer.",
  },
];

export const compromisos = [
  {
    icon: "ear",
    title: "Escuchamos",
    copy: "Escuchamos con respeto las ideas y opiniones de nuestros compañeros.",
  },
  {
    icon: "hand-heart",
    title: "Ayudamos",
    copy: "Ayudamos unos a otros y entendemos que todos podemos aprender de los demás.",
  },
  {
    icon: "circle-help",
    title: "Preguntamos",
    copy: "No tenemos miedo de preguntar cuando algo no está claro.",
  },
  {
    icon: "refresh-ccw",
    title: "Aprendemos de los errores",
    copy: "Comprendemos que equivocarse puede formar parte del proceso de aprendizaje.",
  },
  {
    icon: "trophy",
    title: "Celebramos el progreso",
    copy: "Valoramos todos los avances, sean grandes o pequeños.",
  },
  {
    icon: "trending-up",
    title: "Crecemos a nuestro ritmo",
    copy: "Respetamos que cada persona tiene su propio proceso para aprender y mejorar.",
  },
];

export const recursos: Array<{ icon: string; label: string }> = [
  { icon: "file-text", label: "Hojas y materiales de escritura" },
  { icon: "pencil", label: "Lápices y colores" },
  { icon: "palette", label: "Cartulinas y marcadores" },
  { icon: "book-open", label: "Materiales de la materia" },
  { icon: "users", label: "Disposición para compartir y aprender juntos" },
];

export const criteriosValoracion = [
  { criterio: "Participación", descripcion: "Participa activamente y respeta a los demás." },
  {
    criterio: "Reflexión",
    descripcion: "Comprende que aprender también significa crecer como persona.",
  },
  {
    criterio: "Trabajo en equipo",
    descripcion: "Colabora, escucha y apoya a sus compañeros.",
  },
  { criterio: "Progreso", descripcion: "Muestra avances durante el desarrollo del proyecto." },
  {
    criterio: "Presentación",
    descripcion: "Expone sus ideas con claridad, orden y creatividad.",
  },
];

export const valorarDestacados = [
  { icon: "message-square", title: "Participar", copy: "Expresar nuestras ideas." },
  { icon: "brain", title: "Reflexionar", copy: "Comprender lo que aprendimos." },
  { icon: "sprout", title: "Crecer", copy: "Reconocer nuestros avances." },
];

export const juegosAccesos = [
  {
    icon: "brain",
    href: "#memoria",
    title: "Juego de memoria",
    copy: "Encuentra las parejas relacionadas con el aprendizaje.",
  },
  {
    icon: "lightbulb",
    href: "#quiz",
    title: "Quiz rápido",
    copy: "Responde preguntas sobre nuestro proyecto.",
  },
  {
    icon: "search",
    href: "#dato",
    title: "Datos curiosos",
    copy: "Toca el botón y descubre algo nuevo.",
  },
];

export const lecturas = [
  {
    icon: "sprout",
    titulo: "El valor de las preguntas",
    texto:
      "Cada pregunta abre una puerta. Cuando algo no está claro, preguntar no es señal de debilidad: es la forma más honesta de aprender y de crecer un poco más.",
  },
  {
    icon: "book",
    titulo: "Aprender de los errores",
    texto:
      "Equivocarse no significa fallar. Un error nos muestra qué necesitamos practicar, y cada intento nuevo nos acerca un paso más a comprender mejor.",
  },
  {
    icon: "hand-heart",
    titulo: "Aprender juntos",
    texto:
      "Compartir lo que sabemos multiplica el aprendizaje. Cuando ayudamos a otros, también ordenamos nuestras propias ideas y descubrimos cosas nuevas.",
  },
  {
    icon: "lightbulb",
    titulo: "Crecer cada día",
    texto:
      "No hace falta un gran salto para crecer: los pequeños avances de cada día se suman. Leer, escuchar, practicar y reflexionar nos van formando poco a poco.",
  },
];

export const videoEducativo =
  "https://www.youtube.com/results?search_query=aprender+es+crecer+educativo+ni%C3%B1os";

export type ArticuloJournal = {
  fecha: string;
  categoria: string;
  minutos: number;
  titulo: string;
  resumen: string;
  parrafos: string[];
  imagen: string;
  leido: boolean;
};

export const journalArticulos: ArticuloJournal[] = [
  {
    fecha: "12 sep",
    categoria: "Reflexión",
    minutos: 4,
    titulo: "Por qué la calma abre espacio a las ideas originales",
    resumen:
      "En un mundo lleno de estímulos, la calma no es vacío: es espacio para que las ideas crezcan.",
    parrafos: [
      "En un mundo lleno de estímulos, la calma no es vacío: es espacio. Cuando bajamos el ritmo, las ideas comienzan a encontrarse y a crecer de maneras inesperadas.",
      "Aprender despacio nos permite escuchar mejor. Quien se toma su tiempo para leer, escribir y observar construye una base más sólida que quien intenta abarcar todo a la vez.",
      "La originalidad no aparece cuando hacemos más, sino cuando damos lugar a la reflexión. El silencio es el jardín donde la curiosidad planta sus semillas.",
    ],
    imagen: "/images/journal/calma-lectura.webp",
    leido: true,
  },
  {
    fecha: "19 sep",
    categoria: "Práctica",
    minutos: 7,
    titulo: "Aprender con inteligencia sin perder el instinto",
    resumen:
      "La técnica organiza el estudio, pero la curiosidad sostiene el aprendizaje a lo largo del tiempo.",
    parrafos: [
      "La inteligencia no es solo saber responder: es saber cuándo preguntar y cuándo dudar. La curiosidad guía nuestro aprendizaje mejor que la prisa por tener razón.",
      "Conservar el instinto significa escuchar lo que nos llama la atención, seguir una intuición y confiar en el proceso. La técnica organiza, pero la pasión sostiene.",
      "Para practicar con inteligencia conviene dividir lo grande en pasos pequeños, celebrar cada logro y volver a empezar con lo que aún no comprendemos.",
    ],
    imagen: "/images/journal/notas-escritura.webp",
    leido: false,
  },
  {
    fecha: "26 sep",
    categoria: "Apuntes",
    minutos: 5,
    titulo: "Una forma más serena de imaginar y crear",
    resumen:
      "Crear no es una carrera: las mejores ideas aparecen cuando estamos tranquilos y observamos el mundo.",
    parrafos: [
      "Crear no es una carrera. Las mejores ideas suelen aparecer cuando estamos tranquilos, dibujando, escribiendo o simplemente observando el mundo.",
      "La serenidad nos ayuda a mirar los errores como capas de un dibujo que aún se está construyendo: cada corrección añade profundidad.",
      "Imaginar y crear con calma nos devuelve el placer de aprender por el simple gusto de descubrir.",
    ],
    imagen: "/images/journal/creatividad-lapices.webp",
    leido: false,
  },
];
