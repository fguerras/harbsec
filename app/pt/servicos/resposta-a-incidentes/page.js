import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Resposta a Incidentes de Segurança | HarbSec",
  description:
    "Sofreu um ataque ou suspeita de invasão? Investigação, contenção, recuperação e relatório técnico. Resposta a incidentes para PMEs.",
  alternates: {
    canonical: "/pt/servicos/resposta-a-incidentes",
    languages: {
      es: "/servicios/respuesta-a-incidentes",
      "pt-BR": "/pt/servicos/resposta-a-incidentes",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/respuesta-a-incidentes" },
  hero: {
    badge: "Resposta a incidentes",
    title: "Resposta a",
    titleAccent: "incidentes de segurança",
    subtitle:
      "Ransomware, contas comprometidas, acessos não autorizados. Quando algo dá errado, investigamos, contemos e recuperamos — e explicamos o que aconteceu e como evitar que se repita.",
    ctaLabel: "Falar agora",
  },
  includes: {
    title: "O que o serviço inclui?",
    items: [
      { title: "Investigação", desc: "Determinamos o que aconteceu, como entraram, quais sistemas e dados foram afetados e se o atacante ainda está dentro." },
      { title: "Contenção", desc: "Isolamos os sistemas comprometidos e cortamos o acesso do atacante para frear o dano." },
      { title: "Erradicação e recuperação", desc: "Eliminamos a ameaça, restauramos os sistemas afetados e verificamos que o ambiente ficou limpo." },
      { title: "Preservação de evidências", desc: "Coleta e guarda de evidências digitais, úteis para denúncias, seguros ou ações legais." },
      { title: "Relatório técnico", desc: "Documento com a linha do tempo do incidente, o alcance do dano e as causas raiz. Insumo para a comunicação à ANPD quando exigida pela LGPD." },
      { title: "Plano pós-incidente", desc: "Medidas concretas para fechar as brechas que permitiram o ataque e fortalecer sua segurança." },
    ],
  },
  process: {
    title: "Como agimos",
    steps: [
      { title: "Contato", desc: "Você nos conta a situação e avaliamos a urgência e o alcance inicial." },
      { title: "Contenção", desc: "Ações imediatas para frear o dano e evitar que o incidente se espalhe." },
      { title: "Investigação", desc: "Análise forense dos sistemas afetados para reconstruir o que aconteceu." },
      { title: "Recuperação", desc: "Restauração segura da operação e relatório com as lições aprendidas." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Acho que estou sofrendo um ataque agora, o que faço?", a: "Entre em contato imediatamente e, se possível, não desligue os equipamentos afetados — desligar pode destruir evidências. Desconectá-los da rede costuma ser a melhor primeira ação." },
      { q: "Atendem emergências de empresas que não são clientes?", a: "Sim. A resposta a incidentes está disponível tanto para clientes com contrato quanto para empresas que nos procuram pela primeira vez durante uma emergência." },
      { q: "Devo pagar um resgate de ransomware?", a: "Como regra geral, não é recomendado: não garante recuperar os dados e financia os atacantes. Avaliamos cada caso e ajudamos a explorar todas as alternativas de recuperação primeiro." },
      { q: "Preciso comunicar o incidente à ANPD?", a: "Se dados pessoais foram afetados, a LGPD pode exigir a comunicação à ANPD e aos titulares. Nosso relatório técnico documenta o incidente com o rigor necessário para embasar essa comunicação." },
    ],
  },
  cta: {
    title: "Incidente em andamento?",
    text: "Cada hora conta. Escreva para nós e coordenamos a resposta imediatamente.",
    button: "Falar agora",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
