import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  // TODO: reemplazar por el dominio real cuando esté definido
  metadataBase: new URL("https://harbsec.com"),
  title: "HarbSec — Protegemos tu mundo digital",
  description:
    "Servicios profesionales de ciberseguridad para pequeñas y medianas empresas. Auditorías, hardening, monitoreo, respuesta a incidentes y más.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      "pt-BR": "/pt",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
