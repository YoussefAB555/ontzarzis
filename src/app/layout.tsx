git import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Station de Radio & Tï¿½lï¿½-diffusion de Zarzis",
  description: "Site rï¿½gional ï¿½ informations publiques et espace de gestion (ï¿½quipements, interventions, planning).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <header className="border-b">
          <div className="container flex items-center justify-between py-4">
            <a href="/" className="font-semibold">ONT ï¿½ Station Zarzis</a>
            <nav className="flex gap-4 text-sm">
              <a href="/station">La station</a>
              <a href="/frequences">Frï¿½quences</a>
              <a href="/services">Services</a>
              <a href="/actualites">Actualitï¿½s</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t">
          <div className="container py-6 text-sm text-gray-600">
            ï¿½ {new Date().getFullYear()} ONT ï¿½ Station Zarzis
          </div>
        </footer>
      </body>
    </html>
  );
}
