import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Treinamento em Cibersegurança e Simulações de Phishing | HarbSec",
  description:
    "Conscientização em segurança para funcionários, boas práticas e simulações de phishing. Reduza o risco humano na sua empresa.",
  alternates: {
    canonical: "/pt/servicos/treinamento",
    languages: {
      es: "/servicios/capacitacion",
      "pt-BR": "/pt/servicos/treinamento",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/capacitacion" },
  hero: {
    badge: "Treinamento",
    title: "Treinamento e",
    titleAccent: "conscientização em segurança",
    subtitle:
      "A maioria dos incidentes começa com um clique. Treinamos sua equipe para reconhecer golpes e agir bem — com simulações reais, não só teoria.",
    ctaLabel: "Solicitar proposta",
  },
  includes: {
    title: "O que o treinamento inclui?",
    items: [
      { title: "Conscientização geral", desc: "Oficinas práticas sobre phishing, senhas, engenharia social e manejo seguro de informações, em linguagem não técnica." },
      { title: "Simulações de phishing", desc: "Campanhas de e-mails simulados para medir o nível real de exposição e treinar com casos concretos." },
      { title: "Treinamento por função", desc: "Conteúdo específico para quem lida com pagamentos, dados sensíveis ou acessos administrativos — os alvos preferidos." },
      { title: "Boas práticas", desc: "Guias claros e aplicáveis: o que fazer e o que não fazer, como reportar algo suspeito e quem avisar." },
      { title: "Medição e acompanhamento", desc: "Métricas de cliques, reportes e evolução ao longo do tempo para ver o progresso real da equipe." },
      { title: "Reforço periódico", desc: "Sessões e campanhas recorrentes: a conscientização funciona quando é sustentada, não como evento único." },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      { title: "Linha de base", desc: "Primeira simulação de phishing sem aviso para medir o ponto de partida real." },
      { title: "Treinamento", desc: "Oficinas adaptadas à sua empresa e aos resultados da linha de base." },
      { title: "Simulações", desc: "Campanhas periódicas com cenários variados e níveis crescentes de dificuldade." },
      { title: "Relatório", desc: "Relatório de evolução com métricas claras e recomendações para o próximo ciclo." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "As simulações não geram mal-estar na equipe?", a: "A abordagem importa: usamos para treinar, não para punir. Os resultados são tratados de forma agregada e a comunicação posterior é sempre construtiva. Bem feito, a equipe agradece." },
      { q: "Quantas pessoas e quanto tempo exige?", a: "As oficinas duram de 1 a 2 horas por grupo e as simulações não exigem tempo dos funcionários. Adapta-se a empresas a partir de 5 pessoas." },
      { q: "Com que frequência treinar?", a: "Um ciclo inicial mais reforços trimestrais ou semestrais. Um único treinamento perde efeito em poucos meses; a constância é o que reduz o risco." },
      { q: "Serve para atender exigências de clientes, auditorias ou LGPD?", a: "Sim. Entregamos comprovantes de participação e relatórios das campanhas, úteis para demonstrar um programa de conscientização ativo — algo cada vez mais exigido em programas de adequação à LGPD." },
    ],
  },
  cta: {
    title: "Sua equipe pode ser sua melhor defesa",
    text: "Comece com uma simulação de linha de base gratuita e descubra o nível real de exposição da sua empresa.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
