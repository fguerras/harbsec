"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ServicePage({ data }) {
  const [open, setOpen] = useState(false);
  const { nav, hero, includes, process, faq, cta } = data;

  useEffect(() => {
    document.documentElement.lang = data.lang;
    return () => {
      document.documentElement.lang = "es";
    };
  }, [data.lang]);

  return (
    <>
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-24">
          <a href={nav.homeHref} className="flex items-center">
            <Image src={nav.logo} alt="HarbSec" width={200} height={80} className="h-20 w-auto object-contain" priority />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {nav.links.map((l) => (
              <a key={l.label} href={l.href} className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href={nav.switchHref}
              className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors border border-gray-200 hover:border-blue-400 px-3 py-1.5 rounded-lg"
              title={nav.switchTitle}
            >
              <span>{nav.switchFlag}</span>
              <span>{nav.switchLabel}</span>
            </a>
            <a href={nav.contactHref} className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
              {nav.contactLabel}
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700 hover:text-black" aria-label="Menu">
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
            {nav.links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors">
                {l.label}
              </a>
            ))}
            <a href={nav.switchHref} className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
              <span>{nav.switchFlag}</span>
              <span>{nav.switchLabel}</span>
            </a>
            <a href={nav.contactHref} onClick={() => setOpen(false)} className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded text-center">
              {nav.contactLabel}
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="bg-black pt-44 pb-20 px-6 flex flex-col items-center text-center">
          <span className="inline-block bg-blue-600/10 text-blue-400 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 border border-blue-600/20">
            {hero.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            {hero.title} <span className="text-blue-500">{hero.titleAccent}</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl">{hero.subtitle}</p>
          <div className="mt-10">
            <a href={nav.contactHref} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded transition-colors">
              {hero.ctaLabel}
            </a>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-12">{includes.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {includes.items.map((item) => (
                <div key={item.title} className="flex gap-3 border border-gray-200 rounded-xl p-5">
                  <CheckIcon />
                  <div>
                    <h3 className="font-semibold text-black mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-12">{process.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {process.steps.map((step, i) => (
                <div key={step.title} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-12">{faq.title}</h2>
            <div className="flex flex-col gap-4">
              {faq.items.map((item) => (
                <details key={item.q} className="border border-gray-200 rounded-xl p-5 group">
                  <summary className="font-semibold text-black cursor-pointer list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-blue-600 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-gray-500 text-sm leading-relaxed mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-white">{cta.title}</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">{cta.text}</p>
          <div className="mt-8">
            <a href={nav.contactHref} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded transition-colors inline-block">
              {cta.button}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8 px-6 text-center text-sm text-gray-500">
        © 2026 HarbSec — {data.footerTagline}
      </footer>
    </>
  );
}
