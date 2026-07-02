import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "HarbSec — Protegemos tu mundo digital",
  description:
    "Servicios profesionales de ciberseguridad para pequeñas y medianas empresas. Auditorías, hardening, monitoreo, respuesta a incidentes y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
