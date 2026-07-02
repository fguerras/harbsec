import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Monitoramento de Segurança e Detecção de Ameaças | HarbSec",
  description:
    "Monitoramento de infraestrutura e eventos de segurança com alertas e detecção precoce de ameaças. Vigilância contínua para PMEs sem equipe interna.",
  alternates: {
    canonical: "/pt/servicos/monitoramento",
    languages: {
      es: "/servicios/monitoreo",
      "pt-BR": "/pt/servicos/monitoramento",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/monitoreo" },
  hero: {
    badge: "Monitoramento de segurança",
    title: "Monitoramento e",
    titleAccent: "detecção precoce",
    subtitle:
      "Os ataques não avisam. Vigiamos sua infraestrutura e os eventos de segurança para detectar ameaças antes que virem um incidente.",
    ctaLabel: "Solicitar informações",
  },
  includes: {
    title: "O que o monitoramento inclui?",
    items: [
      { title: "Eventos de segurança", desc: "Coleta e análise de logs de servidores, Active Directory, firewall e serviços críticos." },
      { title: "Detecção de anomalias", desc: "Logins suspeitos, escalação de privilégios, acessos fora de horário e comportamento incomum." },
      { title: "Alertas acionáveis", desc: "Quando algo exige atenção, você recebe um alerta claro com o contexto e os passos recomendados — sem ruído." },
      { title: "Monitoramento de infraestrutura", desc: "Disponibilidade e saúde de servidores e serviços críticos para sua operação." },
      { title: "Revisão periódica", desc: "Análise recorrente de tendências e ajuste das regras de detecção conforme o seu ambiente." },
      { title: "Relatório mensal", desc: "Resumo de eventos, alertas atendidos e recomendações, em linguagem clara." },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      { title: "Avaliação", desc: "Identificamos os sistemas críticos e as fontes de eventos a monitorar." },
      { title: "Implementação", desc: "Configuramos a coleta de logs e as regras de detecção adaptadas ao seu ambiente." },
      { title: "Operação", desc: "Monitoramento contínuo com alertas diante de eventos que exigem atenção." },
      { title: "Melhoria contínua", desc: "Ajustamos a detecção com o aprendizado do seu ambiente e as novas ameaças." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Preciso comprar ferramentas ou licenças?", a: "Depende da sua infraestrutura. Sempre que possível priorizamos ferramentas de código aberto ou os recursos já incluídos nos seus sistemas para manter o custo acessível." },
      { q: "O que acontece quando algo grave é detectado?", a: "Você recebe um alerta imediato com a análise do evento e os passos recomendados. Se também contratar resposta a incidentes, agimos diretamente para conter a ameaça." },
      { q: "Isso substitui o antivírus?", a: "Não, complementa. O antivírus age em cada equipamento; o monitoramento olha o panorama completo: a rede, os servidores e os padrões que um antivírus não vê." },
      { q: "Serve para empresas pequenas?", a: "Sim — foi desenhado justamente para PMEs que não podem ter um analista de segurança próprio olhando logs todos os dias." },
    ],
  },
  cta: {
    title: "Quem vigia a sua rede hoje?",
    text: "Conte sobre sua infraestrutura e propomos um esquema de monitoramento adequado ao seu tamanho e orçamento.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
