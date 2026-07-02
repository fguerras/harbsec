import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Monitoreo de Seguridad y Detección de Amenazas | HarbSec",
  description:
    "Monitoreo de infraestructura y eventos de seguridad con alertas y detección temprana de amenazas. Vigilancia continua para PyMEs sin equipo interno.",
  alternates: {
    canonical: "/servicios/monitoreo",
    languages: {
      es: "/servicios/monitoreo",
      "pt-BR": "/pt/servicos/monitoramento",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/monitoramento" },
  hero: {
    badge: "Monitoreo de seguridad",
    title: "Monitoreo y",
    titleAccent: "detección temprana",
    subtitle:
      "Los ataques no avisan. Vigilamos tu infraestructura y los eventos de seguridad para detectar amenazas antes de que se conviertan en un incidente.",
    ctaLabel: "Solicitar información",
  },
  includes: {
    title: "¿Qué incluye el monitoreo?",
    items: [
      { title: "Eventos de seguridad", desc: "Recolección y análisis de logs de servidores, Active Directory, firewall y servicios críticos." },
      { title: "Detección de anomalías", desc: "Inicios de sesión sospechosos, escalamiento de privilegios, accesos fuera de horario y comportamiento inusual." },
      { title: "Alertas accionables", desc: "Cuando algo requiere atención, recibís una alerta clara con el contexto y los pasos recomendados — sin ruido." },
      { title: "Monitoreo de infraestructura", desc: "Disponibilidad y salud de servidores y servicios críticos para tu operación." },
      { title: "Revisión periódica", desc: "Análisis recurrente de tendencias y ajuste de reglas de detección según tu entorno." },
      { title: "Informe mensual", desc: "Resumen de eventos, alertas atendidas y recomendaciones, en lenguaje claro." },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Evaluación", desc: "Identificamos los sistemas críticos y las fuentes de eventos a monitorear." },
      { title: "Implementación", desc: "Configuramos la recolección de logs y las reglas de detección adaptadas a tu entorno." },
      { title: "Operación", desc: "Monitoreo continuo con alertas ante eventos que requieren atención." },
      { title: "Mejora continua", desc: "Ajustamos la detección con lo aprendido de tu entorno y las amenazas nuevas." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Necesito comprar herramientas o licencias?", a: "Depende de tu infraestructura. Siempre que es posible priorizamos herramientas de código abierto o las capacidades ya incluidas en tus sistemas para mantener el costo accesible." },
      { q: "¿Qué pasa cuando se detecta algo grave?", a: "Recibís una alerta inmediata con el análisis del evento y los pasos recomendados. Si contratás también respuesta a incidentes, actuamos directamente para contener la amenaza." },
      { q: "¿Esto reemplaza al antivirus?", a: "No, lo complementa. El antivirus actúa en cada equipo; el monitoreo mira el panorama completo: la red, los servidores y los patrones que un antivirus no ve." },
      { q: "¿Sirve para empresas chicas?", a: "Sí — está diseñado justamente para PyMEs que no pueden tener un analista de seguridad propio mirando logs todos los días." },
    ],
  },
  cta: {
    title: "¿Quién vigila tu red hoy?",
    text: "Contanos sobre tu infraestructura y te proponemos un esquema de monitoreo adecuado a tu tamaño y presupuesto.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
