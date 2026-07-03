import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Protección Empresarial: EDR, Firewall, VPN y MFA | HarbSec",
  description:
    "Gestión de antivirus/EDR, firewall, VPN, segmentación de red y MFA para PyMEs. Protección del día a día de tu organización, gestionada por especialistas.",
  alternates: {
    canonical: "/servicios/proteccion-empresarial",
    languages: {
      es: "/servicios/proteccion-empresarial",
      "pt-BR": "/pt/servicos/protecao-empresarial",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/protecao-empresarial" },
  hero: {
    badge: "Protección empresarial",
    title: "Protección para el",
    titleAccent: "día a día de tu empresa",
    subtitle:
      "Antivirus/EDR, firewall, VPN, segmentación de red y MFA — las defensas básicas que toda empresa necesita, bien elegidas, bien configuradas y gestionadas.",
    ctaLabel: "Solicitar información",
  },
  includes: {
    title: "¿Qué incluye el servicio?",
    items: [
      { title: "Antivirus / EDR", desc: "Selección, despliegue y gestión de protección en equipos y servidores, con respuesta ante detecciones." },
      { title: "Firewall", desc: "Configuración y administración de firewall perimetral: reglas, publicaciones y control de tráfico." },
      { title: "VPN y acceso remoto", desc: "Acceso remoto seguro para tu equipo, sin exponer servicios directamente a internet." },
      { title: "Segmentación de red", desc: "Separación de redes por función (servidores, usuarios, invitados, IoT) para contener incidentes." },
      { title: "MFA", desc: "Autenticación multifactor en correo, VPN y sistemas críticos — la medida con mejor relación costo/impacto." },
      { title: "Gestión continua", desc: "Mantenimiento, actualización y ajuste de todas las herramientas, con revisiones periódicas." },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Evaluación", desc: "Relevamos qué protecciones tenés hoy, qué falta y qué está mal configurado." },
      { title: "Diseño", desc: "Proponemos el esquema de protección adecuado a tu tamaño, riesgo y presupuesto." },
      { title: "Implementación", desc: "Desplegamos y configuramos las herramientas por etapas, sin interrumpir la operación." },
      { title: "Gestión", desc: "Operamos y mantenemos la protección de forma continua, adaptándola a medida que crecés." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Tengo que comprar herramientas nuevas?", a: "No necesariamente. Primero evaluamos lo que ya tenés — muchas veces el problema es de configuración, no de herramienta. Cuando hay que incorporar algo, priorizamos opciones con buena relación costo/beneficio para PyMEs." },
      { q: "¿Qué es un EDR y en qué se diferencia del antivirus?", a: "El EDR detecta comportamiento malicioso además de archivos conocidos, y permite investigar y responder: aislar un equipo, ver qué hizo el atacante. Es el estándar actual de protección de equipos." },
      { q: "¿Esto alcanza para estar protegido?", a: "Es la base necesaria, pero ninguna herramienta es suficiente por sí sola. Por eso lo complementamos con monitoreo, gestión de vulnerabilidades y capacitación según el riesgo de cada empresa." },
      { q: "¿Trabajan con nuestro proveedor de TI actual?", a: "Sí, es lo habitual: tu proveedor sigue con el soporte diario y nosotros nos encargamos de la capa de seguridad, trabajando en conjunto." },
    ],
  },
  cta: {
    title: "Las defensas básicas, bien hechas",
    text: "Contanos cómo está protegida tu empresa hoy y te decimos qué falta — la primera evaluación es gratuita.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
