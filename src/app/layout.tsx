import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Station de Radio & Télé-diffusion de Zarzis",
  description: "Site régional – informations publiques et espace de gestion (équipements, interventions, planning).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <header className="border-b">
          <div className="container flex items-center justify-between py-4">
            <a href="/" className="font-semibold">ONT – Station Zarzis</a>
            <nav className="flex gap-4 text-sm">
              <a href="/station">La station</a>
              <a href="/frequences">Fréquences</a>
              <a href="/services">Services</a>
              <a href="/actualites">Actualités</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container py-10">{children}</main>
        <footer className="border-t">
          <div className="container py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} ONT – Station Zarzis
          </div>
        </footer>
      </body>
    </html>
  );
}
