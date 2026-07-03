import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Consultoria em Cibersegurança para PMEs | HarbSec",
  description:
    "Arquiteturas seguras, políticas de segurança, continuidade de negócios e planos de recuperação. Consultoria em cibersegurança adaptada à sua empresa.",
  alternates: {
    canonical: "/pt/servicos/consultoria",
    languages: {
      es: "/servicios/consultoria",
      "pt-BR": "/pt/servicos/consultoria",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/consultoria" },
  hero: {
    badge: "Consultoria",
    title: "Consultoria em",
    titleAccent: "cibersegurança",
    subtitle:
      "Decisões de segurança com critério: arquitetura, políticas, continuidade de negócios e planos de recuperação — um especialista ao seu lado, sem contratar um fixo.",
    ctaLabel: "Solicitar consultoria",
  },
  includes: {
    title: "O que a consultoria inclui?",
    items: [
      { title: "Arquiteturas seguras", desc: "Desenho e revisão de infraestrutura: redes, servidores, nuvem e acessos, pensados com segurança desde o início." },
      { title: "Políticas de segurança", desc: "Políticas claras e aplicáveis: acessos, senhas, backups, uso aceitável e gestão de incidentes — sem burocracia desnecessária." },
      { title: "Continuidade de negócios", desc: "Análise de quais processos não podem parar e o que você precisa para sustentá-los diante de um incidente." },
      { title: "Planos de recuperação", desc: "Estratégia de backups e recuperação de desastres, com objetivos concretos de tempo e dados (RTO/RPO)." },
      { title: "Acompanhamento em projetos", desc: "Revisão de segurança em migrações, novos sistemas ou mudanças de infraestrutura antes de irem para produção." },
      { title: "Resposta a exigências", desc: "Apoio para responder questionários de segurança de clientes, seguradoras ou licitações, incluindo exigências ligadas à LGPD." },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      { title: "Entendimento", desc: "Conhecemos seu negócio, seus sistemas e o que realmente não pode falhar." },
      { title: "Diagnóstico", desc: "Avaliamos a situação atual frente ao risco real e às exigências que você enfrenta." },
      { title: "Proposta", desc: "Entregamos recomendações priorizadas e acionáveis, com opções conforme o orçamento." },
      { title: "Acompanhamento", desc: "Acompanhamos a implementação e ficamos disponíveis como referência de segurança." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "É só um relatório ou vocês acompanham a implementação?", a: "Ambos. A consultoria termina em recomendações concretas, e se você quiser, acompanhamos a implementação ou coordenamos com seu fornecedor de TI." },
      { q: "Serve como 'CISO externo'?", a: "Sim — é o uso mais comum em PMEs: uma referência de segurança disponível de forma periódica, sem o custo de um cargo em tempo integral." },
      { q: "Um plano de recuperação não é só ter backups?", a: "Os backups são o insumo; o plano define quanto tempo você pode ficar parado, quantos dados pode perder, quem faz o quê e como se testa. Um backup que nunca foi testado em restauração não é um plano." },
      { q: "Como se contrata?", a: "Por projeto (por exemplo, desenhar o plano de continuidade) ou como acompanhamento mensal. Definimos conforme sua necessidade." },
    ],
  },
  cta: {
    title: "Um especialista ao seu lado",
    text: "Conte qual é o seu desafio — a primeira conversa é gratuita e sem compromisso.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
