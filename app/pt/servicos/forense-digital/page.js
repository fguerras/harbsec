import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Análise Forense Digital e Preservação de Evidências | HarbSec",
  description:
    "Análise forense de equipamentos e sistemas, coleta e preservação de evidências digitais com cadeia de custódia. Suporte técnico a investigações.",
  alternates: {
    canonical: "/pt/servicos/forense-digital",
    languages: {
      es: "/servicios/forense-digital",
      "pt-BR": "/pt/servicos/forense-digital",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/forense-digital" },
  hero: {
    badge: "Forense digital",
    title: "Análise",
    titleAccent: "forense digital",
    subtitle:
      "Quando você precisa saber o que realmente aconteceu: análise de equipamentos e sistemas, evidências digitais preservadas com rigor e conclusões que se sustentam.",
    ctaLabel: "Consultar caso",
  },
  includes: {
    title: "O que o serviço inclui?",
    items: [
      { title: "Análise de equipamentos", desc: "Exame forense de computadores, servidores e dispositivos: atividade do usuário, arquivos, conexões e rastros de invasão." },
      { title: "Preservação de evidências", desc: "Aquisição de imagens forenses com cadeia de custódia documentada, para que a evidência seja válida perante terceiros." },
      { title: "Reconstrução dos fatos", desc: "Linha do tempo do ocorrido: o que foi feito, quando, de onde e por quem, até onde a evidência permitir estabelecer." },
      { title: "Recuperação de dados", desc: "Recuperação de arquivos apagados ou danificados relevantes para a investigação." },
      { title: "Laudo técnico", desc: "Relatório técnico claro e rigoroso, apto para processos internos, seguradoras ou instâncias judiciais." },
      { title: "Suporte a investigações", desc: "Apoio técnico a escritórios de advocacia, empresas e órgãos de segurança pública em investigações com componente digital." },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      { title: "Avaliação do caso", desc: "Analisamos a situação, o que se busca determinar e que evidências existem ou podem ser obtidas." },
      { title: "Preservação", desc: "Asseguramos as evidências com procedimentos forenses antes que sejam alteradas ou perdidas." },
      { title: "Análise", desc: "Examinamos as evidências com ferramentas e metodologia forense, documentando cada passo." },
      { title: "Laudo", desc: "Entregamos as conclusões em um laudo técnico e ficamos disponíveis para explicá-lo ou defendê-lo." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Suspeito de um funcionário ou ex-funcionário, podem ajudar?", a: "Sim, é um caso frequente: vazamento de informações, exclusão de dados ou uso indevido de sistemas. É fundamental agir rápido e não examinar o equipamento por conta própria — cada acesso altera evidências." },
      { q: "O que faço com o equipamento enquanto isso?", a: "Não o use nem deixe ninguém examiná-lo. Se estiver desligado, não o ligue; se estiver ligado, consulte-nos antes de desligar. Guarde-o em local seguro com acesso restrito." },
      { q: "O laudo serve em um processo judicial?", a: "Sim. Trabalhamos com metodologia forense e cadeia de custódia documentada, e o laudo é elaborado para se sustentar em instâncias legais. Coordenamos com seu advogado desde o início." },
      { q: "Podem recuperar informações apagadas?", a: "Muitas vezes sim, dependendo do tempo decorrido, do tipo de dispositivo e do uso posterior. Por isso a rapidez em preservar o equipamento é determinante." },
    ],
  },
  cta: {
    title: "Precisa saber o que aconteceu?",
    text: "Conte seu caso de forma confidencial e dizemos o que é possível determinar.",
    button: "Consultar caso",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
