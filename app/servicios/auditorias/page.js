import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Auditoría de Seguridad Informática para PyMEs | HarbSec",
  description:
    "Auditorías de infraestructura, Active Directory, redes y configuraciones. Identificamos vulnerabilidades en tu empresa antes de que alguien las explote.",
  alternates: {
    canonical: "/servicios/auditorias",
    languages: {
      es: "/servicios/auditorias",
      "pt-BR": "/pt/servicos/auditorias",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/auditorias" },
  hero: {
    badge: "Auditorías de seguridad",
    title: "Auditoría de",
    titleAccent: "seguridad informática",
    subtitle:
      "Una revisión completa de tu infraestructura para saber exactamente dónde está expuesta tu empresa — con un plan claro para corregirlo.",
    ctaLabel: "Solicitar auditoría",
  },
  includes: {
    title: "¿Qué incluye la auditoría?",
    items: [
      { title: "Infraestructura y servidores", desc: "Revisión de servidores Windows y Linux: parches, servicios expuestos, configuraciones inseguras y accesos." },
      { title: "Active Directory", desc: "Análisis de usuarios, grupos, privilegios, políticas y rutas de ataque comunes en AD." },
      { title: "Redes y firewall", desc: "Segmentación, reglas de firewall, servicios publicados a internet y accesos remotos (VPN)." },
      { title: "Servidores web y bases de datos", desc: "Configuraciones, versiones vulnerables, permisos y exposición de datos sensibles." },
      { title: "Accesos y contraseñas", desc: "Políticas de contraseñas, MFA, cuentas privilegiadas y cuentas olvidadas activas." },
      { title: "Informe ejecutivo y técnico", desc: "Resultados priorizados por riesgo: un resumen para dirección y el detalle técnico para implementar." },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Relevamiento", desc: "Reunión inicial para entender tu infraestructura, sistemas críticos y preocupaciones." },
      { title: "Análisis", desc: "Revisión técnica de servidores, red, AD y configuraciones, sin interrumpir la operación." },
      { title: "Informe", desc: "Entrega del informe con hallazgos priorizados y plan de remediación concreto." },
      { title: "Acompañamiento", desc: "Te ayudamos a implementar las correcciones o guiamos a tu proveedor de TI." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Cuánto dura una auditoría?", a: "Depende del tamaño de la infraestructura. Para una PyME típica, entre una y tres semanas desde el relevamiento hasta la entrega del informe." },
      { q: "¿Interrumpe la operación de la empresa?", a: "No. El análisis se hace sobre configuraciones y de forma controlada, coordinando con tu equipo cualquier acción que pueda afectar sistemas en producción." },
      { q: "¿Qué recibo al final?", a: "Dos documentos: un resumen ejecutivo con los riesgos principales en lenguaje claro, y un informe técnico con cada hallazgo, su severidad y cómo corregirlo." },
      { q: "¿Cada cuánto conviene auditar?", a: "Al menos una vez al año, y siempre después de cambios importantes: migraciones, nuevos sistemas, crecimiento del equipo o un incidente de seguridad." },
    ],
  },
  cta: {
    title: "¿Sabés dónde está expuesta tu empresa?",
    text: "La primera consulta es gratuita. Contanos sobre tu infraestructura y te proponemos el alcance de auditoría adecuado.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
