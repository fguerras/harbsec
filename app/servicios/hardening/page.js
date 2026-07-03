import ServicePage from "../../components/ServicePage";
import { NAV_ES, FOOTER_ES } from "../nav";

export const metadata = {
  title: "Hardening de Servidores y Sistemas | HarbSec",
  description:
    "Configuración segura de Windows Server, Linux, Active Directory, firewalls, servidores web y bases de datos. Reducí la superficie de ataque de tu empresa.",
  alternates: {
    canonical: "/servicios/hardening",
    languages: {
      es: "/servicios/hardening",
      "pt-BR": "/pt/servicos/hardening",
    },
  },
};

const data = {
  lang: "es",
  footerTagline: FOOTER_ES,
  nav: { ...NAV_ES, switchHref: "/pt/servicos/hardening" },
  hero: {
    badge: "Hardening",
    title: "Hardening de",
    titleAccent: "servidores y sistemas",
    subtitle:
      "La mayoría de los ataques explotan configuraciones por defecto e inseguras. Endurecemos tus sistemas para reducir la superficie de ataque al mínimo.",
    ctaLabel: "Solicitar información",
  },
  includes: {
    title: "¿Qué incluye el hardening?",
    items: [
      { title: "Windows Server y Linux", desc: "Configuración segura de servicios, permisos, cuentas locales, protocolos y actualizaciones según buenas prácticas reconocidas (CIS)." },
      { title: "Active Directory", desc: "Reducción de privilegios excesivos, protección de cuentas administrativas, políticas de grupo seguras y cierre de rutas de ataque conocidas." },
      { title: "Firewalls y red", desc: "Revisión y ajuste de reglas, cierre de puertos innecesarios, segmentación y acceso remoto seguro." },
      { title: "Servidores web", desc: "Configuración segura de IIS, Apache o Nginx: cabeceras, TLS, versiones y módulos expuestos." },
      { title: "Bases de datos", desc: "Permisos mínimos, cifrado, accesos restringidos y auditoría de SQL Server, MySQL o PostgreSQL." },
      { title: "Documentación de cambios", desc: "Cada ajuste queda documentado: qué se cambió, por qué y cómo revertirlo si fuera necesario." },
    ],
  },
  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Diagnóstico", desc: "Evaluamos la configuración actual de tus sistemas contra buenas prácticas de seguridad." },
      { title: "Plan de hardening", desc: "Priorizamos los cambios por impacto y riesgo, coordinando ventanas de trabajo con tu equipo." },
      { title: "Implementación", desc: "Aplicamos los cambios de forma controlada y por etapas, verificando que todo siga funcionando." },
      { title: "Validación", desc: "Verificamos el resultado final y entregamos la documentación completa de los cambios." },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { q: "¿Puede romper algo en mi operación?", a: "Es el riesgo principal del hardening mal hecho, y por eso trabajamos por etapas, en ventanas coordinadas y con plan de reversión para cada cambio. Primero en sistemas de prueba cuando es posible." },
      { q: "¿Qué estándares siguen?", a: "Principalmente los benchmarks CIS y las guías de los fabricantes (Microsoft, Red Hat), adaptados al contexto real de tu empresa — no todo lo que dice un benchmark aplica a una PyME." },
      { q: "¿Es un trabajo puntual o continuo?", a: "El hardening inicial es un proyecto puntual. Recomendamos revisarlo después de cambios grandes de infraestructura o al menos una vez al año." },
      { q: "¿Conviene hacer una auditoría antes?", a: "Sí, es lo ideal: la auditoría identifica qué endurecer y prioriza el trabajo. Si ya sabés dónde están tus debilidades, podemos ir directo al hardening." },
    ],
  },
  cta: {
    title: "Tus sistemas, configurados para resistir",
    text: "Contanos qué infraestructura tenés y te proponemos un plan de hardening priorizado.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
