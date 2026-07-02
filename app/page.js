"use client";
import { useState } from "react";
import Image from "next/image";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Servicios", "Nosotros", "Contacto"];

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-24">
        <a href="#inicio" className="flex items-center">
          <Image
            src="/logo.png"
            alt="HarbSec"
            width={200}
            height={80}
            className="h-20 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="/pt"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors border border-gray-200 hover:border-blue-400 px-3 py-1.5 rounded-lg"
            title="Ver en Portugués"
          >
            <span>🇧🇷</span>
            <span>PT</span>
          </a>
          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Contactar
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-black"
          aria-label="Menú"
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
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="/pt"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
          >
            <span>🇧🇷</span>
            <span>Ver em Português</span>
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded text-center"
          >
            Contactar
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
        Ciberseguridad para PyMEs
      </span>
      <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight">
        Protegemos tu{" "}
        <span className="text-blue-500">mundo digital</span>
      </h1>
      <p className="mt-6 text-gray-400 text-lg max-w-xl">
        Servicios profesionales de ciberseguridad adaptados a pequeñas y medianas empresas.
        Sin departamento interno, sin problemas.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#contacto"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded transition-colors"
        >
          Solicitar consulta gratuita
        </a>
        <a
          href="#servicios"
          className="border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-semibold px-8 py-3 rounded transition-colors"
        >
          Ver servicios
        </a>
      </div>
    </section>
  );
}

// ─── Servicios ────────────────────────────────────────────────────────────────
const SERVICIOS = [
  {
    title: "Auditorías",
    desc: "Infraestructura, Active Directory, redes y revisión de configuraciones para identificar vulnerabilidades antes de que alguien las explote.",
  },
  {
    title: "Gestión de vulnerabilidades",
    desc: "Escaneo, priorización de riesgos y planes de remediación concretos.",
  },
  {
    title: "Hardening",
    desc: "Windows Server, Linux, Active Directory, firewalls, servidores web y bases de datos configurados para reducir la superficie de ataque.",
  },
  {
    title: "Protección empresarial",
    desc: "Gestión de antivirus/EDR, firewall, VPN, segmentación de red y MFA para proteger el día a día de tu organización.",
  },
  {
    title: "Monitoreo",
    desc: "Monitoreo de infraestructura y eventos de seguridad con alertas y detección temprana de amenazas.",
  },
  {
    title: "Respuesta a incidentes",
    desc: "Investigación, contención, recuperación e informe técnico cuando algo sale mal.",
  },
  {
    title: "Capacitación",
    desc: "Concientización para usuarios, buenas prácticas y simulaciones de phishing para reducir el riesgo humano.",
  },
  {
    title: "Consultoría",
    desc: "Diseño de arquitecturas seguras, políticas de seguridad, continuidad del negocio y planes de recuperación.",
  },
  {
    title: "Forense digital",
    desc: "Análisis forense de equipos y sistemas, recolección y preservación de evidencia digital, soporte técnico a investigaciones criminales y organismos de seguridad pública.",
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

function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">Servicios</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Cobertura completa de ciberseguridad para empresas que no tienen un equipo interno dedicado.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICIOS.map((s) => (
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

// ─── Sobre nosotros ───────────────────────────────────────────────────────────
const FORTALEZAS = [
  "Infraestructura Windows y Linux",
  "Active Directory",
  "Redes empresariales y VPN",
  "Servidores web y bases de datos",
  "Desarrollo de software",
  "Resolución de incidentes complejos",
];

function Nosotros() {
  return (
    <section id="nosotros" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            ¿Quiénes somos?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            HarbSec es una empresa de ciberseguridad enfocada en proteger a pequeñas y medianas
            empresas que no cuentan con un equipo interno dedicado a la seguridad informática.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Combinamos experiencia real en infraestructura, conocimiento de desarrollo de software
            y ciberseguridad aplicada para ofrecer soluciones prácticas, accesibles y de alto
            nivel técnico — adaptadas a la realidad de cada organización.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Hablar con nosotros
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

// ─── Contacto ─────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = "541dafc9-d29f-49fa-8eea-f55b7c6d9321"; // reemplazar con la clave de web3forms.com

function Contacto() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
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
          subject: `Nuevo contacto desde HarbSec — ${form.nombre}`,
          from_name: form.nombre,
          empresa: form.empresa,
          email: form.email,
          telefono: form.telefono,
          message: form.mensaje,
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
    <section id="contacto" className="bg-black py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contacto</h2>
          <p className="mt-4 text-gray-400">
            Contanos sobre tu empresa y te respondemos a la brevedad.
          </p>
        </div>

        {sent ? (
          <div className="bg-blue-600/10 border border-blue-600/30 rounded-xl p-8 text-center">
            <p className="text-blue-400 font-semibold text-lg">Mensaje recibido.</p>
            <p className="text-gray-400 mt-2">Te contactamos pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tu nombre"
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
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+598 99 123 456"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                required
                value={form.mensaje}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Contanos brevemente qué necesitás..."
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm text-center">
                Hubo un error al enviar. Intentá de nuevo.
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors mt-2"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
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
        © {new Date().getFullYear()} HarbSec — Protegemos tu mundo digital
      </p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
