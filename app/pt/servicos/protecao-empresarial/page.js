import ServicePage from "../../../components/ServicePage";
import { NAV_PT, FOOTER_PT } from "../nav";

export const metadata = {
  title: "Proteção Empresarial: EDR, Firewall, VPN e MFA | HarbSec",
  description:
    "Gestão de antivírus/EDR, firewall, VPN, segmentação de rede e MFA para PMEs. Proteção do dia a dia da sua organização, gerenciada por especialistas.",
  alternates: {
    canonical: "/pt/servicos/protecao-empresarial",
    languages: {
      es: "/servicios/proteccion-empresarial",
      "pt-BR": "/pt/servicos/protecao-empresarial",
    },
  },
};

const data = {
  lang: "pt-BR",
  footerTagline: FOOTER_PT,
  nav: { ...NAV_PT, switchHref: "/servicios/proteccion-empresarial" },
  hero: {
    badge: "Proteção empresarial",
    title: "Proteção para o",
    titleAccent: "dia a dia da sua empresa",
    subtitle:
      "Antivírus/EDR, firewall, VPN, segmentação de rede e MFA — as defesas básicas que toda empresa precisa, bem escolhidas, bem configuradas e gerenciadas.",
    ctaLabel: "Solicitar informações",
  },
  includes: {
    title: "O que o serviço inclui?",
    items: [
      { title: "Antivírus / EDR", desc: "Seleção, implantação e gestão de proteção em equipamentos e servidores, com resposta diante de detecções." },
      { title: "Firewall", desc: "Configuração e administração de firewall perimetral: regras, publicações e controle de tráfego." },
      { title: "VPN e acesso remoto", desc: "Acesso remoto seguro para sua equipe, sem expor serviços diretamente à internet." },
      { title: "Segmentação de rede", desc: "Separação de redes por função (servidores, usuários, visitantes, IoT) para conter incidentes." },
      { title: "MFA", desc: "Autenticação multifator em e-mail, VPN e sistemas críticos — a medida com melhor relação custo/impacto." },
      { title: "Gestão contínua", desc: "Manutenção, atualização e ajuste de todas as ferramentas, com revisões periódicas." },
    ],
  },
  process: {
    title: "Como trabalhamos",
    steps: [
      { title: "Avaliação", desc: "Levantamos quais proteções você tem hoje, o que falta e o que está mal configurado." },
      { title: "Desenho", desc: "Propomos o esquema de proteção adequado ao seu tamanho, risco e orçamento." },
      { title: "Implementação", desc: "Implantamos e configuramos as ferramentas por etapas, sem interromper a operação." },
      { title: "Gestão", desc: "Operamos e mantemos a proteção de forma contínua, adaptando-a à medida que você cresce." },
    ],
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { q: "Preciso comprar ferramentas novas?", a: "Não necessariamente. Primeiro avaliamos o que você já tem — muitas vezes o problema é de configuração, não de ferramenta. Quando é preciso incorporar algo, priorizamos opções com boa relação custo/benefício para PMEs." },
      { q: "O que é um EDR e qual a diferença para o antivírus?", a: "O EDR detecta comportamento malicioso além de arquivos conhecidos, e permite investigar e responder: isolar um equipamento, ver o que o atacante fez. É o padrão atual de proteção de endpoints." },
      { q: "Isso basta para estar protegido?", a: "É a base necessária, mas nenhuma ferramenta é suficiente sozinha. Por isso complementamos com monitoramento, gestão de vulnerabilidades e treinamento conforme o risco de cada empresa." },
      { q: "Vocês trabalham com nosso fornecedor de TI atual?", a: "Sim, é o habitual: seu fornecedor segue com o suporte diário e nós cuidamos da camada de segurança, trabalhando em conjunto." },
    ],
  },
  cta: {
    title: "As defesas básicas, bem feitas",
    text: "Conte como sua empresa está protegida hoje e dizemos o que falta — a primeira avaliação é gratuita.",
    button: "Solicitar consulta gratuita",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
