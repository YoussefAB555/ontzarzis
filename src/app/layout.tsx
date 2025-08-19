import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Station de Radio & Télé-diffusion de Zarzis",
  description:
    "Site régional – informations publiques et espace de gestion (équipements, interventions, planning).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
  return (
    <html lang="fr">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <header className="border-b">
          <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-between py-4">
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
        <main className="mx-auto max-w-screen-xl px-4 py-10">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-screen-xl px-4 py-6 text-sm text-gray-600">
            © {year} ONT – Station Zarzis
          </div>
        </footer>
      </body>
    </html>
  );
}
