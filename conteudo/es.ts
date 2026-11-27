import type { Conteudo } from "./tipos";

/**
 * Español latinoamericano: "celular", "computadora", "ustedes".
 * Mismo producto, contado a quien evalúa una plataforma en la nube.
 */
export const es: Conteudo = {
  meta: {
    titulo: "ORBIA — el sistema operativo de ventas con IA",
    descricao:
      "CRM, atención y cobros en un solo sistema. La IA lee, decide y actúa con todo registrado — en la nube, sin planilla paralela y sin perder una venta en el camino.",
  },
  nav: { comoFunciona: "Cómo funciona", prova: "Prueba", instalar: "Cloud", preco: "Plan", ctaInstalar: "Empezar en Cloud", curso: "Curso", guias: "Centro de ayuda", guiasCurto: "Ayuda", changelog: "Novedades", idioma: "Idioma" },
  hero: {
    sobretitulo: "ORBIA · sistema operativo de ventas",
    h1a: "Tu empresa en órbita. ",
    h1b: "Con IA a tu lado.",
    sub: "CRM, atención y cobros conectados. La IA trabaja a tu favor con cada decisión registrada — sin planilla paralela, sin venta perdida en el camino.",
    ctaPrimario: "Empezar en Cloud",
    ctaSecundario: "Ver cómo funciona",
    microcopy: "En la nube · sin instalación · sin cobro por usuario",
  },
  viloes: {
    titulo: "No pierdes ventas por falta de leads.",
    itens: [
      {
        titulo: "El CRM que se volvió una planilla bonita",
        texto:
          "Entra el lead, alguien lo carga y no pasa nada. Cuando te das cuenta, desapareció — y nadie sabe decir en qué momento ni por qué. El sistema guardó el nombre y perdió la historia.",
        alt: "Un campo punteado con piezas desconectadas y un punto cayendo por un hueco.",
      },
      {
        titulo: "La IA que responde y desaparece",
        texto:
          "Contesta rápido, dice cualquier cosa y desaparece. Si prometió un plazo que no existe, te enteras por el cliente. No puedes auditar lo que dijo — mucho menos por qué lo dijo.",
        alt: "Un punto aislado emitiendo ondas sobre un fragmento que termina abruptamente.",
      },
    ],
    fecho: { antes: "Los dos tienen la misma raíz: ", forte: "el sistema no se hace responsable de lo que pasa después." },
  },
  virada: {
    sobretitulo: "La categoría",
    tituloA: "Un sistema operativo de ventas ",
    tituloDestaque: "vivo",
    sub: "Vivo tiene definición. Son cinco reglas que toda parte de ORBIA tiene que cumplir para entrar — del primer mensaje al cobro.",
    regras: [
      { regra: "Nada es una isla", prova: "CRM, atención y cobros comparten una sola historia. Una conversación no se vuelve planilla en otro lado." },
      { regra: "Ningún lead muere sin diagnóstico", prova: "La demanda detenida aparece en el Radar, clasificada por riesgo — antes de volverse pérdida." },
      { regra: "Toda acción de la IA es auditable", prova: "Cada sugerencia, respuesta y decisión queda registrada. Sabes qué se dijo, cuándo y por qué." },
      { regra: "Log invisible es log muerto", prova: "Toda mutación relevante se vuelve actividad en la línea de tiempo, visible en pantalla para quien tenga que responder." },
      { regra: "El follow-up es el mecanismo anti-muerte", prova: "Demanda abierta sin próximo paso definido se trata como una fuga del sistema." },
    ],
    fecho: {
      antes: "Esto no es una promesa de campaña — es el criterio que un cambio tiene que pasar para entrar al producto. Está en ",
      link: "docs/doctrine/sistema-vivo.md",
      depois: ", y la lista se responde antes de cada publicación.",
    },
  },
  jornada: {
    sobretitulo: "La vida de un lead",
    titulo: "Lo que pasa entre el mensaje y el cobro.",
    passos: [
      { titulo: "09:41 — llega un mensaje", texto: "Antes de cualquier respuesta, ORBIA ya sabe quién es: historial, pedidos, lo que quedó acordado la última vez y lo que sigue abierto." },
      { titulo: "El agente lee antes de hablar", texto: "Busca en la base de conocimiento de tu empresa — plazos, política, catálogo. No inventa lo que no existe." },
      { titulo: "La decisión queda registrada", texto: "Qué se sugirió, qué se aprobó y qué se bloqueó. Cada paso queda como registro, incluso lo que la IA decidió no enviar." },
      { titulo: "El lead se mueve solo", texto: "Ya calificado, cambia de etapa. Entra la etiqueta, se define el responsable — y cada movimiento tiene un motivo registrado." },
      { titulo: "Cuando le toca al humano, recibe contexto", texto: "No la conversación cruda: un resumen de lo que pasó, lo que se acordó, qué objeciones aparecieron y cuál es el próximo paso." },
      { titulo: "El cobro entra en la misma historia", texto: "¿Cerraste? La cobranza nace del mismo registro, sin escribir dos veces, sin revisar planillas, sin perder lo acordado." },
      { titulo: "Y si nadie responde, no se muere", texto: "Follow-up agendado. Si se enfría, el lead aparece en el Radar clasificado por riesgo — antes de volverse pérdida." },
    ],
  },
  instalar: {
    sobretitulo: "Cloud",
    titulo: "ORBIA corre por ti. Tú manejas el negocio.",
    sub: "Sin servidor, sin script, sin SSH. Tu equipo entra, arma el embudo en minutos y empieza a atender en la nube, con todo en un mismo lugar.",
    apoio: [
      { titulo: "Listo desde el primer día", texto: "Cuenta creada, entorno configurado y datos protegidos. Nada de contenedores, dominio ni certificado que administrar." },
      { titulo: "Actualizaciones sin drama", texto: "El producto avanza sin que tengas que correr un comando. Lo que cambió aparece en Novedades, en lenguaje claro." },
      { titulo: "Tus datos, tus reglas", texto: "Permisos por perfil, historial auditable y exportación cuando la necesites. Tú decides quién ve qué." },
    ],
    comentario1: "# 1. crear la cuenta",
    comentario2: "# 2. configurar el espacio",
    depois: "Después de eso: invitar al equipo, ajustar las etapas del embudo y conectar los canales de atención. Todo desde la interfaz, del primer paso al último.",
    atualizarTitulo: "Evoluciona sin intervención",
    atualizarTexto: "corregimos y publicamos sin pedirte nada. Los cambios que requieren atención se explican antes de llegar.",
  },
  curso: {
    sobretitulo: "Curso en imágenes",
    titulo: "¿Entraste? Ahora aprende, pantalla por pantalla.",
    sub: "Cada lección muestra la pantalla real de ORBIA, con flechas que indican dónde hacer clic y qué pasa después. Lee a tu ritmo o practica antes de atender al primer cliente.",
    subComCapturasLocais: "Cada lección muestra la pantalla real de ORBIA, con flechas que indican dónde hacer clic y qué pasa después. Lee a tu ritmo o practica antes de atender al primer cliente. Las lecciones y las capturas están en español.",
    itens: ["Todas las pantallas del menú: de la bandeja de entrada y los embudos a la IA y las métricas", "Simulador: haces clic en el lugar correcto para avanzar", "Búsqueda en todas las lecciones, con la duda dicha como tú la dirías"],
    cta: "Abrir el curso",
    nota: "Incluido. Las capturas son de un entorno de demostración, con nombres y conversaciones ficticios.",
    alt: "Pantalla de la bandeja de entrada de ORBIA con el resumen que deja la IA al pasar un cliente al equipo",
  },
  preco: {
    sobretitulo: "Plan",
    titulo: "Un precio. Toda la operación.",
    sub: "Sin cobro por asiento, sin módulo bloqueado, sin sorpresa en la factura. El valor exacto se confirma comercialmente antes de la apertura general.",
    cartoes: [
      { t: "CRM completo", d: "Embudos, contactos, historial y tareas. Sin límites escondidos por plan." },
      { t: "IA y atención", d: "Agentes que leen, sugieren y responden con contexto — y registran cada decisión." },
      { t: "Cobros integrados", d: "Del cierre al cobro, en la misma historia. Varias marcas de pago, una sola operación." },
    ],
    fecho: "El precio exacto se confirmará con el lanzamiento comercial. Lo que no cambia: la cuenta no sube solo porque el equipo creció.",
  },
  banner: {
    sobretitulo: "Capa de pagos",
    titulo: "Varias marcas. Una sola operación.",
    texto: "El cobro es parte del sistema, no un complemento colgado. Elige la marca que tenga sentido para tu cliente; la historia sigue siendo la misma.",
    cta: "Ver ORBIA en acción",
    microcopy: "marcas de pago presentadas según el acuerdo comercial",
  },
  prova: {
    sobretitulo: "Prueba",
    titulo: "No nos creas. Comprueba.",
    sub: "Cada afirmación de esta página apunta a un archivo del repositorio. Si alguna no se sostiene, es un bug — y vale una issue.",
    itens: [
      { afirmacao: "El aislamiento entre clientes se prueba en cada cambio. El CI levanta una base limpia y verifica que una organización no ve ninguna fila de otra — con un caso de control que prueba que esas filas existen antes del test.", caminho: "tests/invariants/rls-isolation.test.ts" },
      { afirmacao: "Cada decisión de la IA pasa por verificaciones en orden fijo y versionado. Cada evaluación queda como registro duradero y exportable — incluidas las que bloquearon una acción.", caminho: "lib/agent-engine/guardrails/before-send.ts" },
      { afirmacao: "Los cambios de esquema se aplican en base nueva y se reaplican en base existente, probando que no rompen lo que ya estaba corriendo.", caminho: "scripts/test-db.sh" },
      { afirmacao: "Código abierto, sin funcionalidad escondida por plan: lo que ves es lo que corre.", caminho: "README.md" },
    ],
    cta: "Ver el proyecto en GitHub",
    ctaNota: "código, pruebas y decisiones abiertas",
  },
  radar: {
    sobretitulo: "Anti-muerte",
    titulo: "¿Cuántos leads se están enfriando ahora?",
    texto: "El Radar responde. Toda demanda abierta se clasifica por el tiempo sin interacción y por lo que quedó pendiente. No es el informe del mes pasado — es el estado ahora.",
    fecho: "Un número en pantalla que no cambia una decisión es ruido. Este sí.",
    faixas: ["crítico", "en riesgo", "en vuelo"],
  },
  nichos: {
    sobretitulo: "Multi-rubro",
    titulo: "El mismo sistema sirve a una clínica y a una tienda de zapatillas.",
    texto: "El vocabulario del embudo es configurable. No es una versión por segmento — es el mismo núcleo, configurado para cada negocio.",
    abas: [
      { nicho: "E-commerce", lead: "Cliente", ganho: "Pagado" },
      { nicho: "Clínica", lead: "Paciente", ganho: "Agendado" },
      { nicho: "Inmobiliaria", lead: "Interesado", ganho: "Cerrado" },
      { nicho: "Servicios", lead: "Prospecto", ganho: "Contratado" },
    ],
  },
  revendedor: {
    sobretitulo: "Para agencias",
    titulo: "Una operación para cada cliente tuyo.",
    texto: "Cada espacio tiene identidad y reglas propias, sin forks ni código editado. ORBIA está pensada para quien sigue varios negocios al mismo tiempo.",
    honestidade: "Lo que todavía NO se puede: colores y tipografías exigen cambiar el design system, y la identidad es por espacio, no por usuario. Mejor que lo sepas ahora y no frente a tu cliente.",
    cta: "Hablar con el equipo",
  },
  faq: {
    titulo: "Preguntas que vas a hacer",
    perguntas: [
      { p: "¿Cuánto cuesta ORBIA?", r: "El precio comercial se está definiendo antes de la apertura general. No habrá cobro por asiento ni módulo bloqueado: toda la operación entra en un mismo plan." },
      { p: "¿Necesito instalar algo?", r: "No. ORBIA es Cloud: creas la cuenta, invitas al equipo y empiezas a usarla. Sin servidor, dominio ni certificado que configurar." },
      { p: "¿La IA reemplaza a mi equipo?", r: "No. Lee, sugiere, responde donde puede y lo registra todo. Cuando el caso pide una persona, le pasa el contexto — no la conversación cruda." },
      { p: "¿Para qué tipo de negocio sirve?", r: "Cualquier negocio que venda conversando. El vocabulario del embudo es configurable, así que el mismo sistema sirve a e-commerce, clínicas, inmobiliarias y prestadores de servicios." },
      { p: "¿Puedo usarla para varios clientes?", r: "Sí. Cada espacio tiene identidad, permisos y reglas propias, pensado para agencias y equipos que siguen más de un negocio." },
      { p: "¿Qué pasa si la IA se equivoca?", r: "Cada acción pasa por verificaciones antes de ocurrir, y todas quedan registradas — incluidas las que se bloquearon. Cuando no debe seguir sola, ORBIA pasa a una persona con un resumen." },
      { p: "¿Cómo funcionan los cobros?", r: "El cobro nace del mismo registro de la venta, sin volver a escribirlo. Varias marcas de pago pueden presentarse según el acuerdo comercial; la elección no cambia la historia del cliente." },
      { p: "¿Y si quiero irme?", r: "Tus datos se pueden exportar. No quedas atado a una planilla paralela ni a una historia que solo existe dentro de la herramienta." },
    ],
  },
  rodape: {
    colunas: [
      { titulo: "Producto", itens: [{ rotulo: "Cómo funciona", href: "#como-funciona" }, { rotulo: "Plan", href: "#preco" }, { rotulo: "Cloud", href: "#instalar" }] },
      { titulo: "Aprender", itens: [{ rotulo: "Centro de ayuda", href: "@guias" }, { rotulo: "Curso en imágenes", href: "@curso" }, { rotulo: "Novedades", href: "@changelog" }, { rotulo: "Para agencias", href: "#revendedor" }] },
      { titulo: "Comunidad", itens: [{ rotulo: "Discussions", href: "/discussions" }, { rotulo: "Issues", href: "/issues" }, { rotulo: "Contribuir", href: "/blob/main/CONTRIBUTING.md" }] },
      { titulo: "Proyecto", itens: [{ rotulo: "Código abierto", href: "/blob/main/LICENSE" }, { rotulo: "Arquitectura", href: "/blob/main/ARCHITECTURE.md" }, { rotulo: "Seguridad", href: "/blob/main/SECURITY.md" }] },
    ],
    nota: "ORBIA · sistema operativo de ventas",
    atualizado: "Página actualizada el",
  },
};
