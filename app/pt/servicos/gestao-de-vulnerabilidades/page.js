import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Gestão de Vulnerabilidades para PMEs | HarbSec",
  description:
    "Varredura de vulnerabilidades, priorização por risco e planos de correção concretos. Serviço contínuo de gestão de vulnerabilidades para sua empresa.",
  alternates: {
    canonical: "/pt/servicos/gestao-de-vulnerabilidades",
    languages: {
      es: "/servicios/gestion-de-vulnerabilidades",
      "pt-BR": "/pt/servicos/gestao-de-vulnerabilidades",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/gestion-de-vulnerabilidades" },
  hero: {
    badge: "Gestão de vulnerabilidades",
    title: "Gestão de",
    titleAccent: "vulnerabilidades",
    subtitle:
      "Toda semana surgem novas vulnerabilidades. Nós as detectamos nos seus sistemas, priorizamos pelo risco real e entregamos um plano concreto de correção.",
    ctaLabel: "Solicitar avaliação",
  },
  includes: {
    title: "O que o serviço inclui?",
    items: [
      { title: "Varredura periódica", desc: "Análise recorrente de servidores, equipamentos e serviços expostos para detectar vulnerabilidades conhecidas." },
      { title: "Priorização por risco", desc: "Nem tudo é urgente: classificamos cada achado pelo impacto real no seu negócio, não apenas pela pontuação técnica." },
      { title: "Plano de correção", desc: "Instruções concretas para corrigir cada vulnerabilidade: o que atualizar, o que reconfigurar e em que ordem." },
      { title: "Acompanhamento", desc: "Verificamos que as correções sejam aplicadas e que as vulnerabilidades não voltem a aparecer." },
      { title: "Alertas críticos", desc: "Quando surge uma vulnerabilidade grave que afeta seus sistemas, avisamos sem esperar o próximo relatório." },
      { title: "Relatórios periódicos", desc: "Evolução da sua postura de segurança ao longo do tempo, em linguagem clara para a diretoria." },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      { title: "Inventário", desc: "Levantamos os sistemas, equipamentos e serviços que formam sua superfície de ataque." },
      { title: "Varredura", desc: "Executamos análises de vulnerabilidades de forma controlada e programada." },
      { title: "Priorização", desc: "Filtramos falsos positivos e ordenamos os achados pelo risco real para sua operação." },
      { title: "Correção", desc: "Entregamos o plano de correção e verificamos sua aplicação no ciclo seguinte." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Qual a diferença para uma auditoria?", a: "A auditoria é uma foto pontual e profunda da sua segurança. A gestão de vulnerabilidades é um processo contínuo: varreduras periódicas que detectam o que vai surgindo de novo." },
      { q: "Com que frequência é feita a varredura?", a: "O habitual é mensal ou trimestral, conforme o tamanho e a criticidade da infraestrutura. Definimos juntos na avaliação inicial." },
      { q: "A varredura pode afetar meus sistemas?", a: "Usamos configurações seguras e coordenamos as janelas de varredura com sua equipe para que não haja impacto na operação." },
      { q: "Preciso ter equipe técnica interna?", a: "Não. O plano de correção é pensado para ser executado pelo seu fornecedor de TI atual, ou podemos implementar as correções nós mesmos." },
    ],
  },
  cta: {
    title: "As vulnerabilidades não esperam",
    text: "Comece com uma avaliação inicial gratuita da sua superfície de ataque.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
