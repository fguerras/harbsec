import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Auditoria de Segurança da Informação para PMEs | HarbSec",
  description:
    "Auditorias de infraestrutura, Active Directory, redes e configurações. Identificamos vulnerabilidades na sua empresa antes que alguém as explore.",
  alternates: {
    canonical: "/pt/servicos/auditorias",
    languages: {
      es: "/servicios/auditorias",
      "pt-BR": "/pt/servicos/auditorias",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/auditorias" },
  hero: {
    badge: "Auditorias de segurança",
    title: "Auditoria de",
    titleAccent: "segurança da informação",
    subtitle:
      "Uma revisão completa da sua infraestrutura para saber exatamente onde sua empresa está exposta — com um plano claro para corrigir.",
    ctaLabel: "Solicitar auditoria",
  },
  includes: {
    title: "O que a auditoria inclui?",
    items: [
      { title: "Infraestrutura e servidores", desc: "Revisão de servidores Windows e Linux: patches, serviços expostos, configurações inseguras e acessos." },
      { title: "Active Directory", desc: "Análise de usuários, grupos, privilégios, políticas e caminhos de ataque comuns no AD." },
      { title: "Redes e firewall", desc: "Segmentação, regras de firewall, serviços publicados na internet e acessos remotos (VPN)." },
      { title: "Servidores web e bancos de dados", desc: "Configurações, versões vulneráveis, permissões e exposição de dados sensíveis." },
      { title: "Acessos e senhas", desc: "Políticas de senhas, MFA, contas privilegiadas e contas esquecidas ainda ativas." },
      { title: "Relatório executivo e técnico", desc: "Resultados priorizados por risco: um resumo para a diretoria e o detalhe técnico para implementar. Útil também para adequação à LGPD." },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      { title: "Levantamento", desc: "Reunião inicial para entender sua infraestrutura, sistemas críticos e preocupações." },
      { title: "Análise", desc: "Revisão técnica de servidores, rede, AD e configurações, sem interromper a operação." },
      { title: "Relatório", desc: "Entrega do relatório com achados priorizados e plano de correção concreto." },
      { title: "Acompanhamento", desc: "Ajudamos a implementar as correções ou orientamos o seu fornecedor de TI." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Quanto tempo dura uma auditoria?", a: "Depende do tamanho da infraestrutura. Para uma PME típica, entre uma e três semanas do levantamento até a entrega do relatório." },
      { q: "Interrompe a operação da empresa?", a: "Não. A análise é feita sobre configurações e de forma controlada, coordenando com sua equipe qualquer ação que possa afetar sistemas em produção." },
      { q: "O que recebo ao final?", a: "Dois documentos: um resumo executivo com os principais riscos em linguagem clara, e um relatório técnico com cada achado, sua severidade e como corrigir." },
      { q: "A auditoria ajuda na adequação à LGPD?", a: "Sim. A auditoria identifica onde dados pessoais estão expostos e quais controles de segurança faltam — insumo direto para o seu programa de adequação à LGPD." },
    ],
  },
  cta: {
    title: "Você sabe onde sua empresa está exposta?",
    text: "A primeira consulta é gratuita. Conte sobre sua infraestrutura e propomos o escopo de auditoria adequado.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
