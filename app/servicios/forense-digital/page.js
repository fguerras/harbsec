import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Análisis Forense Digital y Preservación de Evidencia | HarbSec",
  description:
    "Análisis forense de equipos y sistemas, recolección y preservación de evidencia digital con cadena de custodia. Soporte técnico a investigaciones.",
  alternates: {
    canonical: "/servicios/forense-digital",
    languages: {
      es: "/servicios/forense-digital",
      "pt-BR": "/pt/servicos/forense-digital",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/forense-digital" },
  hero: {
    badge: "Forense digital",
    title: "Análisis",
    titleAccent: "forense digital",
    subtitle:
      "Cuando necesitás saber qué pasó de verdad: análisis de equipos y sistemas, evidencia digital preservada con rigor y conclusiones que se sostienen.",
    ctaLabel: "Consultar caso",
  },
  includes: {
    title: "¿Qué incluye el servicio?",
    items: [
      { title: "Análisis de equipos", desc: "Examen forense de computadoras, servidores y dispositivos: actividad del usuario, archivos, conexiones y rastros de intrusión." },
      { title: "Preservación de evidencia", desc: "Adquisición de imágenes forenses con cadena de custodia documentada, para que la evidencia sea válida ante terceros." },
      { title: "Reconstrucción de hechos", desc: "Línea de tiempo de lo ocurrido: qué se hizo, cuándo, desde dónde y por quién, hasta donde la evidencia permita establecer." },
      { title: "Recuperación de datos", desc: "Recuperación de archivos eliminados o dañados relevantes para la investigación." },
      { title: "Informe pericial", desc: "Informe técnico claro y riguroso, apto para procesos internos, aseguradoras o instancias judiciales." },
      { title: "Soporte a investigaciones", desc: "Apoyo técnico a estudios jurídicos, empresas y organismos de seguridad pública en investigaciones con componente digital." },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Evaluación del caso", desc: "Analizamos la situación, qué se busca determinar y qué evidencia existe o puede obtenerse." },
      { title: "Preservación", desc: "Aseguramos la evidencia con procedimientos forenses antes de que se altere o se pierda." },
      { title: "Análisis", desc: "Examinamos la evidencia con herramientas y metodología forense, documentando cada paso." },
      { title: "Informe", desc: "Entregamos las conclusiones en un informe pericial y quedamos disponibles para explicarlo o defenderlo." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "Sospecho de un empleado o ex-empleado, ¿pueden ayudar?", a: "Sí, es un caso frecuente: fuga de información, borrado de datos o uso indebido de sistemas. Es clave actuar rápido y no revisar el equipo por cuenta propia — cada acceso altera evidencia." },
      { q: "¿Qué hago con el equipo mientras tanto?", a: "No lo uses ni dejes que nadie lo revise. Si está apagado, no lo enciendas; si está encendido, consultanos antes de apagarlo. Guardalo en un lugar seguro con acceso restringido." },
      { q: "¿El informe sirve en un juicio?", a: "Sí. Trabajamos con metodología forense y cadena de custodia documentada, y el informe se elabora para sostenerse en instancias legales. Coordinamos con tu abogado desde el inicio." },
      { q: "¿Pueden recuperar información borrada?", a: "Muchas veces sí, dependiendo del tiempo transcurrido, el tipo de dispositivo y el uso posterior. Por eso la rapidez en preservar el equipo es determinante." },
    ],
  },
  cta: {
    title: "¿Necesitás saber qué pasó?",
    text: "Contanos tu caso de forma confidencial y te decimos qué es posible determinar.",
    button: "Consultar caso",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
