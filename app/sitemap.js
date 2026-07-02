export default function sitemap() {
  const base = "https://harbsec.com";
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: `${base}/`,
          "pt-BR": `${base}/pt`,
        },
      },
    },
    {
      url: `${base}/pt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          es: `${base}/`,
          "pt-BR": `${base}/pt`,
        },
      },
    },
  ];
}
