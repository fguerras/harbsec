import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Gestión de Vulnerabilidades para PyMEs | HarbSec",
  description:
    "Escaneo de vulnerabilidades, priorización por riesgo y planes de remediación concretos. Servicio continuo de gestión de vulnerabilidades para tu empresa.",
  alternates: {
    canonical: "/servicios/gestion-de-vulnerabilidades",
    languages: {
      es: "/servicios/gestion-de-vulnerabilidades",
      "pt-BR": "/pt/servicos/gestao-de-vulnerabilidades",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/gestao-de-vulnerabilidades" },
  hero: {
    badge: "Gestión de vulnerabilidades",
    title: "Gestión de",
    titleAccent: "vulnerabilidades",
    subtitle:
      "Cada semana aparecen vulnerabilidades nuevas. Las detectamos en tus sistemas, las priorizamos por riesgo real y te damos un plan concreto para corregirlas.",
    ctaLabel: "Solicitar evaluación",
  },
  includes: {
    title: "¿Qué incluye el servicio?",
    items: [
      { title: "Escaneo periódico", desc: "Análisis recurrente de servidores, equipos y servicios expuestos para detectar vulnerabilidades conocidas." },
      { title: "Priorización por riesgo", desc: "No todo es urgente: clasificamos cada hallazgo según el impacto real en tu negocio, no solo el puntaje técnico." },
      { title: "Plan de remediación", desc: "Instrucciones concretas para corregir cada vulnerabilidad: qué parchear, qué reconfigurar y en qué orden." },
      { title: "Seguimiento", desc: "Verificamos que las correcciones se apliquen y que las vulnerabilidades no reaparezcan." },
      { title: "Alertas críticas", desc: "Cuando aparece una vulnerabilidad grave que afecta tus sistemas, te avisamos sin esperar al próximo informe." },
      { title: "Informes periódicos", desc: "Evolución de tu postura de seguridad en el tiempo, en lenguaje claro para la dirección." },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Inventario", desc: "Relevamos los sistemas, equipos y servicios que forman tu superficie de ataque." },
      { title: "Escaneo", desc: "Ejecutamos análisis de vulnerabilidades de forma controlada y programada." },
      { title: "Priorización", desc: "Filtramos falsos positivos y ordenamos los hallazgos por riesgo real para tu operación." },
      { title: "Remediación", desc: "Entregamos el plan de corrección y verificamos su aplicación en el siguiente ciclo." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿En qué se diferencia de una auditoría?", a: "La auditoría es una foto puntual y profunda de tu seguridad. La gestión de vulnerabilidades es un proceso continuo: escaneos periódicos que detectan lo nuevo que va apareciendo." },
      { q: "¿Con qué frecuencia se escanea?", a: "Lo habitual es mensual o trimestral según el tamaño y criticidad de la infraestructura. Lo definimos juntos en la evaluación inicial." },
      { q: "¿El escaneo puede afectar mis sistemas?", a: "Usamos configuraciones seguras y coordinamos las ventanas de escaneo con tu equipo para que no haya impacto en la operación." },
      { q: "¿Necesito tener un equipo técnico interno?", a: "No. El plan de remediación está pensado para que lo ejecute tu proveedor de TI actual, o podemos implementar las correcciones nosotros." },
    ],
  },
  cta: {
    title: "Las vulnerabilidades no esperan",
    text: "Empezá con una evaluación inicial gratuita de tu superficie de ataque.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
