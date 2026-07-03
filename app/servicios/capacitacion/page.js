import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Capacitación en Ciberseguridad y Simulaciones de Phishing | HarbSec",
  description:
    "Concientización en seguridad para empleados, buenas prácticas y simulaciones de phishing. Reducí el riesgo humano en tu empresa.",
  alternates: {
    canonical: "/servicios/capacitacion",
    languages: {
      es: "/servicios/capacitacion",
      "pt-BR": "/pt/servicos/treinamento",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/treinamento" },
  hero: {
    badge: "Capacitación",
    title: "Capacitación y",
    titleAccent: "concientización en seguridad",
    subtitle:
      "La mayoría de los incidentes empiezan con un clic. Entrenamos a tu equipo para reconocer engaños y actuar bien — con simulaciones reales, no solo teoría.",
    ctaLabel: "Solicitar propuesta",
  },
  includes: {
    title: "¿Qué incluye la capacitación?",
    items: [
      { title: "Concientización general", desc: "Talleres prácticos sobre phishing, contraseñas, ingeniería social y manejo seguro de información, en lenguaje no técnico." },
      { title: "Simulaciones de phishing", desc: "Campañas de correos simulados para medir el nivel real de exposición y entrenar con casos concretos." },
      { title: "Capacitación por rol", desc: "Contenido específico para quienes manejan pagos, datos sensibles o accesos administrativos — los blancos preferidos." },
      { title: "Buenas prácticas", desc: "Guías claras y aplicables: qué hacer y qué no, cómo reportar algo sospechoso y a quién avisar." },
      { title: "Medición y seguimiento", desc: "Métricas de clics, reportes y evolución en el tiempo para ver el progreso real del equipo." },
      { title: "Refuerzo periódico", desc: "Sesiones y campañas recurrentes: la concientización funciona cuando se sostiene, no como evento único." },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Línea base", desc: "Primera simulación de phishing sin aviso para medir el punto de partida real." },
      { title: "Capacitación", desc: "Talleres adaptados a tu empresa y a los resultados de la línea base." },
      { title: "Simulaciones", desc: "Campañas periódicas con escenarios variados y niveles crecientes de dificultad." },
      { title: "Reporte", desc: "Informe de evolución con métricas claras y recomendaciones para el siguiente ciclo." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Las simulaciones no generan malestar en el equipo?", a: "El enfoque importa: las usamos para entrenar, no para castigar. Los resultados se manejan de forma agregada y la comunicación posterior es siempre constructiva. Bien hecho, el equipo lo agradece." },
      { q: "¿Cuánta gente y cuánto tiempo requiere?", a: "Los talleres son de 1 a 2 horas por grupo y las simulaciones no requieren tiempo de los empleados. Se adapta a empresas desde 5 personas." },
      { q: "¿Cada cuánto conviene capacitar?", a: "Un ciclo inicial más refuerzos trimestrales o semestrales. Una única capacitación pierde efecto en pocos meses; la constancia es lo que baja el riesgo." },
      { q: "¿Sirve para cumplir requisitos de clientes o auditorías?", a: "Sí. Entregamos constancias de participación y reportes de las campañas, útiles para demostrar un programa de concientización activo." },
    ],
  },
  cta: {
    title: "Tu equipo puede ser tu mejor defensa",
    text: "Empezá con una simulación de línea base gratuita y descubrí el nivel real de exposición de tu empresa.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
