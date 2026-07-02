import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Respuesta a Incidentes de Seguridad | HarbSec",
  description:
    "¿Sufriste un ataque o sospechás una intrusión? Investigación, contención, recuperación e informe técnico. Respuesta a incidentes para PyMEs.",
  alternates: {
    canonical: "/servicios/respuesta-a-incidentes",
    languages: {
      es: "/servicios/respuesta-a-incidentes",
      "pt-BR": "/pt/servicos/resposta-a-incidentes",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/resposta-a-incidentes" },
  hero: {
    badge: "Respuesta a incidentes",
    title: "Respuesta a",
    titleAccent: "incidentes de seguridad",
    subtitle:
      "Ransomware, cuentas comprometidas, accesos no autorizados. Cuando algo sale mal, investigamos, contenemos y recuperamos — y te explicamos qué pasó y cómo evitar que se repita.",
    ctaLabel: "Contactar ahora",
  },
  includes: {
    title: "¿Qué incluye el servicio?",
    items: [
      { title: "Investigación", desc: "Determinamos qué pasó, cómo entraron, qué sistemas y datos fueron afectados y si el atacante sigue adentro." },
      { title: "Contención", desc: "Aislamos los sistemas comprometidos y cortamos el acceso del atacante para frenar el daño." },
      { title: "Erradicación y recuperación", desc: "Eliminamos la amenaza, restauramos los sistemas afectados y verificamos que el entorno quede limpio." },
      { title: "Preservación de evidencia", desc: "Recolección y resguardo de evidencia digital, útil para denuncias, seguros o acciones legales." },
      { title: "Informe técnico", desc: "Documento con la línea de tiempo del incidente, el alcance del daño y las causas raíz." },
      { title: "Plan post-incidente", desc: "Medidas concretas para cerrar las brechas que permitieron el ataque y fortalecer tu seguridad." },
    ],
  },
  process: {
    title: "Cómo actuamos",
    steps: [
      { title: "Contacto", desc: "Nos contás la situación y evaluamos la urgencia y el alcance inicial." },
      { title: "Contención", desc: "Acciones inmediatas para frenar el daño y evitar que el incidente se extienda." },
      { title: "Investigación", desc: "Análisis forense de los sistemas afectados para reconstruir qué pasó." },
      { title: "Recuperación", desc: "Restauración segura de la operación e informe con las lecciones aprendidas." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "Creo que estoy sufriendo un ataque ahora, ¿qué hago?", a: "Contactanos de inmediato y, si es posible, no apagues los equipos afectados — apagar puede destruir evidencia. Desconectarlos de la red suele ser la mejor primera acción." },
      { q: "¿Atienden emergencias de empresas que no son clientes?", a: "Sí. La respuesta a incidentes está disponible tanto para clientes con contrato como para empresas que nos contactan por primera vez durante una emergencia." },
      { q: "¿Debo pagar un rescate de ransomware?", a: "Como regla general, no se recomienda: no garantiza recuperar los datos y financia a los atacantes. Evaluamos cada caso y te ayudamos a explorar todas las alternativas de recuperación primero." },
      { q: "¿El informe sirve para el seguro o una denuncia?", a: "Sí. Documentamos el incidente con rigor técnico y preservamos la evidencia con cadena de custodia, apto para aseguradoras, denuncias penales o auditorías." },
    ],
  },
  cta: {
    title: "¿Incidente en curso?",
    text: "Cada hora cuenta. Escribinos y coordinamos la respuesta de inmediato.",
    button: "Contactar ahora",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
