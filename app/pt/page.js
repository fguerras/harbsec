"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Serviços", "Sobre nós", "Contato"];
  const hrefs = ["servicos", "sobrenos", "contato"];

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-24">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/logo_pt.png"
            alt="HarbSec"
            width={200}
            height={80}
            className="h-20 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${hrefs[i]}`}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors border border-gray-200 hover:border-blue-400 px-3 py-1.5 rounded-lg"
            title="Ver en Español"
          >
            <span>🇺🇾</span>
            <span>ES</span>
          </a>
          <a
            href="#contato"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Falar conosco
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-black"
          aria-label="Menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${hrefs[i]}`}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            <span>🇺🇾</span>
            <span>Ver en Español</span>
          </a>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded text-center"
          >
            Falar conosco
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="inicio"
      className="bg-black pt-44 pb-24 px-6 flex flex-col items-center text-center"
    >
      <span className="inline-block bg-blue-600/10 text-blue-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-blue-600/20">
        Cibersegurança para PMEs
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
        Protegemos o seu{" "}
        <span className="text-blue-500">mundo digital</span>
      </h1>
      <p className="mt-6 text-gray-400 text-lg max-w-xl">
        Serviços profissionais de cibersegurança adaptados a pequenas e médias empresas.
        Sem equipe interna, sem problemas.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#contato"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded transition-colors"
        >
          Solicitar consulta gratuita
        </a>
        <a
          href="#servicos"
          className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-semibold px-8 py-3 rounded transition-colors"
        >
          Ver serviços
        </a>
      </div>
    </section>
  );
}

// ─── Serviços ─────────────────────────────────────────────────────────────────
const SERVICOS = [
  {
    title: "Auditorias",
    desc: "Infraestrutura, Active Directory, redes e revisão de configurações para identificar vulnerabilidades antes que alguém as explore.",
  },
  {
    title: "Gestão de vulnerabilidades",
    desc: "Varredura, priorização de riscos e planos de remediação concretos.",
  },
  {
    title: "Hardening",
    desc: "Windows Server, Linux, Active Directory, firewalls, servidores web e bancos de dados configurados para reduzir a superfície de ataque.",
  },
  {
    title: "Proteção empresarial",
    desc: "Gestão de antivírus/EDR, firewall, VPN, segmentação de rede e MFA para proteger o dia a dia da sua organização.",
  },
  {
    title: "Monitoramento",
    desc: "Monitoramento de infraestrutura e eventos de segurança com alertas e detecção precoce de ameaças.",
  },
  {
    title: "Resposta a incidentes",
    desc: "Investigação, contenção, recuperação e relatório técnico quando algo dá errado.",
  },
  {
    title: "Treinamento",
    desc: "Conscientização para usuários, boas práticas e simulações de phishing para reduzir o risco humano.",
  },
  {
    title: "Consultoria",
    desc: "Design de arquiteturas seguras, políticas de segurança, continuidade de negócios e planos de recuperação.",
  },
  {
    title: "Forense digital",
    desc: "Análise forense de equipamentos e sistemas, coleta e preservação de evidências digitais, suporte técnico a investigações criminais e organismos de segurança pública.",
  },
];

function ShieldIcon() {
  return (
    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      />
    </svg>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Serviços</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Cobertura completa de cibersegurança para empresas que não têm equipe interna dedicada.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICOS.map((s) => (
            <div
              key={s.title}
              className="border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <ShieldIcon />
              </div>
              <h3 className="font-semibold text-black mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Sobre nós ────────────────────────────────────────────────────────────────
const FORTALEZAS = [
  "Infraestrutura Windows e Linux",
  "Active Directory",
  "Redes empresariais e VPN",
  "Servidores web e bancos de dados",
  "Desenvolvimento de software",
  "Resolução de incidentes complexos",
];

function SobreNos() {
  return (
    <section id="sobrenos" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Quem somos?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A HarbSec é uma empresa de cibersegurança focada em proteger pequenas e médias
            empresas que não contam com uma equipe interna dedicada à segurança da informação.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Combinamos experiência real em infraestrutura, conhecimento em desenvolvimento de
            software e cibersegurança aplicada para oferecer soluções práticas, acessíveis e de
            alto nível técnico — adaptadas à realidade de cada organização.
          </p>
          <a
            href="#contato"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Falar conosco
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-black mb-4">Áreas de expertise</h3>
          <ul className="space-y-3">
            {FORTALEZAS.map((f) => (
              <li key={f} className="flex items-center gap-3 text-gray-600">
                <svg
                  className="w-5 h-5 text-blue-600 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── Contato ──────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = "541dafc9-d29f-49fa-8eea-f55b7c6d9321";

function Contato() {
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Novo contato via HarbSec — ${form.nome}`,
          from_name: form.nome,
          empresa: form.empresa,
          email: form.email,
          telefone: form.telefone,
          message: form.mensagem,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="bg-black py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contato</h2>
          <p className="mt-4 text-gray-400">
            Conte-nos sobre sua empresa e retornaremos em breve.
          </p>
        </div>

        {sent ? (
          <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-8 text-center">
            <p className="text-blue-400 font-semibold text-lg">Mensagem recebida.</p>
            <p className="text-gray-400 mt-2">Entraremos em contato em breve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="nome">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="empresa">
                  Empresa
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="voce@empresa.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="telefone">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  value={form.telefone}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+55 11 99999-9999"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1" htmlFor="mensagem">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                value={form.mensagem}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Conte brevemente o que você precisa..."
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm text-center">
                Ocorreu um erro ao enviar. Tente novamente.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors mt-2"
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 px-6 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} HarbSec — Protegemos o seu mundo digital
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useEffect(() => {
    document.documentElement.lang = "pt-BR";
    return () => {
      document.documentElement.lang = "es";
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicos />
        <SobreNos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
