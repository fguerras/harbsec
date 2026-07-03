import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Consultoría en Ciberseguridad para PyMEs | HarbSec",
  description:
    "Arquitecturas seguras, políticas de seguridad, continuidad del negocio y planes de recuperación. Consultoría en ciberseguridad adaptada a tu empresa.",
  alternates: {
    canonical: "/servicios/consultoria",
    languages: {
      es: "/servicios/consultoria",
      "pt-BR": "/pt/servicos/consultoria",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/consultoria" },
  hero: {
    badge: "Consultoría",
    title: "Consultoría en",
    titleAccent: "ciberseguridad",
    subtitle:
      "Decisiones de seguridad con criterio: arquitectura, políticas, continuidad del negocio y planes de recuperación — un especialista de tu lado, sin contratar uno fijo.",
    ctaLabel: "Solicitar consultoría",
  },
  includes: {
    title: "¿Qué incluye la consultoría?",
    items: [
      { title: "Arquitecturas seguras", desc: "Diseño y revisión de infraestructura: redes, servidores, nube y accesos, pensados con la seguridad desde el inicio." },
      { title: "Políticas de seguridad", desc: "Políticas claras y aplicables: accesos, contraseñas, respaldos, uso aceptable y gestión de incidentes — sin burocracia innecesaria." },
      { title: "Continuidad del negocio", desc: "Análisis de qué procesos no pueden parar y qué necesitás para sostenerlos ante un incidente." },
      { title: "Planes de recuperación", desc: "Estrategia de respaldos y recuperación ante desastres, con objetivos concretos de tiempo y datos (RTO/RPO)." },
      { title: "Acompañamiento en proyectos", desc: "Revisión de seguridad en migraciones, nuevos sistemas o cambios de infraestructura antes de que salgan a producción." },
      { title: "Respuesta a requisitos", desc: "Apoyo para responder cuestionarios de seguridad de clientes, aseguradoras o licitaciones." },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Entendimiento", desc: "Conocemos tu negocio, tus sistemas y qué es lo que realmente no puede fallar." },
      { title: "Diagnóstico", desc: "Evaluamos la situación actual frente al riesgo real y los requisitos que enfrentás." },
      { title: "Propuesta", desc: "Entregamos recomendaciones priorizadas y accionables, con opciones según presupuesto." },
      { title: "Acompañamiento", desc: "Te acompañamos en la implementación y quedamos disponibles como referente de seguridad." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Es solo un informe o me acompañan a implementar?", a: "Ambas cosas. La consultoría termina en recomendaciones concretas, y si querés, te acompañamos en la implementación o coordinamos con tu proveedor de TI." },
      { q: "¿Sirve como 'CISO externo'?", a: "Sí — es el uso más común en PyMEs: un referente de seguridad disponible de forma periódica, sin el costo de un puesto de tiempo completo." },
      { q: "¿Un plan de recuperación no es solo tener respaldos?", a: "Los respaldos son el insumo; el plan define cuánto tiempo podés estar parado, cuántos datos podés perder, quién hace qué y cómo se prueba. Un respaldo que nunca se probó restaurar no es un plan." },
      { q: "¿Cómo se contrata?", a: "Por proyecto (por ejemplo, diseñar el plan de continuidad) o como acompañamiento mensual. Lo definimos según lo que necesites." },
    ],
  },
  cta: {
    title: "Un especialista de tu lado",
    text: "Contanos qué desafío tenés — la primera conversación es gratuita y sin compromiso.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
