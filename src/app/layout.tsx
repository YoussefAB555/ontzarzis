import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Station de Radio & TÃ¯Â¿Â½lÃ¯Â¿Â½-diffusion de Zarzis",
  description: "Site rÃ¯Â¿Â½gional Ã¯Â¿Â½ informations publiques et espace de gestion (Ã¯Â¿Â½quipements, interventions, planning).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <header className="border-b">
          <div className="container flex items-center justify-between py-4">
            <a href="/" className="font-semibold">ONT Ã¯Â¿Â½ Station Zarzis</a>
            <nav className="flex gap-4 text-sm">
              <a href="/station">La station</a>
              <a href="/frequences">FrÃ¯Â¿Â½quences</a>
              <a href="/services">Services</a>
              <a href="/actualites">ActualitÃ¯Â¿Â½s</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t">
          <div className="container py-6 text-sm text-gray-600">
            Ã¯Â¿Â½ {new Date().getFullYear()} ONT Ã¯Â¿Â½ Station Zarzis
          </div>
        </footer>
      </body>
    </html>
  );
}
