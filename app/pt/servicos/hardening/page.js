import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Hardening de Servidores e Sistemas | HarbSec",
  description:
    "Configuração segura de Windows Server, Linux, Active Directory, firewalls, servidores web e bancos de dados. Reduza a superfície de ataque da sua empresa.",
  alternates: {
    canonical: "/pt/servicos/hardening",
    languages: {
      es: "/servicios/hardening",
      "pt-BR": "/pt/servicos/hardening",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/hardening" },
  hero: {
    badge: "Hardening",
    title: "Hardening de",
    titleAccent: "servidores e sistemas",
    subtitle:
      "A maioria dos ataques explora configurações padrão e inseguras. Endurecemos seus sistemas para reduzir a superfície de ataque ao mínimo.",
    ctaLabel: "Solicitar informações",
  },
  includes: {
    title: "O que o hardening inclui?",
    items: [
      { title: "Windows Server e Linux", desc: "Configuração segura de serviços, permissões, contas locais, protocolos e atualizações segundo boas práticas reconhecidas (CIS)." },
      { title: "Active Directory", desc: "Redução de privilégios excessivos, proteção de contas administrativas, políticas de grupo seguras e fechamento de caminhos de ataque conhecidos." },
      { title: "Firewalls e rede", desc: "Revisão e ajuste de regras, fechamento de portas desnecessárias, segmentação e acesso remoto seguro." },
      { title: "Servidores web", desc: "Configuração segura de IIS, Apache ou Nginx: cabeçalhos, TLS, versões e módulos expostos." },
      { title: "Bancos de dados", desc: "Permissões mínimas, criptografia, acessos restritos e auditoria de SQL Server, MySQL ou PostgreSQL." },
      { title: "Documentação das mudanças", desc: "Cada ajuste fica documentado: o que mudou, por quê e como reverter se necessário." },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      { title: "Diagnóstico", desc: "Avaliamos a configuração atual dos seus sistemas frente às boas práticas de segurança." },
      { title: "Plano de hardening", desc: "Priorizamos as mudanças por impacto e risco, coordenando janelas de trabalho com sua equipe." },
      { title: "Implementação", desc: "Aplicamos as mudanças de forma controlada e por etapas, verificando que tudo siga funcionando." },
      { title: "Validação", desc: "Verificamos o resultado final e entregamos a documentação completa das mudanças." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Pode quebrar algo na minha operação?", a: "É o principal risco do hardening malfeito, e por isso trabalhamos por etapas, em janelas coordenadas e com plano de reversão para cada mudança. Primeiro em sistemas de teste quando possível." },
      { q: "Quais padrões vocês seguem?", a: "Principalmente os benchmarks CIS e os guias dos fabricantes (Microsoft, Red Hat), adaptados ao contexto real da sua empresa — nem tudo que um benchmark diz se aplica a uma PME." },
      { q: "É um trabalho pontual ou contínuo?", a: "O hardening inicial é um projeto pontual. Recomendamos revisá-lo após grandes mudanças de infraestrutura ou pelo menos uma vez por ano." },
      { q: "Vale a pena fazer uma auditoria antes?", a: "Sim, é o ideal: a auditoria identifica o que endurecer e prioriza o trabalho. Se você já sabe onde estão suas fraquezas, podemos ir direto ao hardening." },
    ],
  },
  cta: {
    title: "Seus sistemas, configurados para resistir",
    text: "Conte qual infraestrutura você tem e propomos um plano de hardening priorizado.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
