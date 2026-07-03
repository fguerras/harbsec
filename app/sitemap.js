export const dynamic = "force-static";

const base = "https://harbsec.com";

// [ruta ES, ruta PT]
const routes = [
  ["/", "/pt"],
  ["/servicios/auditorias", "/pt/servicos/auditorias"],
  ["/servicios/gestion-de-vulnerabilidades", "/pt/servicos/gestao-de-vulnerabilidades"],
  ["/servicios/monitoreo", "/pt/servicos/monitoramento"],
  ["/servicios/respuesta-a-incidentes", "/pt/servicos/resposta-a-incidentes"],
  ["/servicios/hardening", "/pt/servicos/hardening"],
  ["/servicios/proteccion-empresarial", "/pt/servicos/protecao-empresarial"],
  ["/servicios/capacitacion", "/pt/servicos/treinamento"],
  ["/servicios/consultoria", "/pt/servicos/consultoria"],
  ["/servicios/forense-digital", "/pt/servicos/forense-digital"],
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.flatMap(([es, pt]) => {
    const alternates = {
      languages: {
        es: `${base}${es}`,
        "pt-BR": `${base}${pt}`,
      },
    };
    return [
      { url: `${base}${es}`, lastModified, changeFrequency: "monthly", priority: es === "/" ? 1 : 0.8, alternates },
      { url: `${base}${pt}`, lastModified, changeFrequency: "monthly", priority: pt === "/pt" ? 1 : 0.8, alternates },
    ];
  });
}
