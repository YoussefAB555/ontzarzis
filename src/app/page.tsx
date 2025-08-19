export default function Home() {
  return (
    <section className="py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Station de Radio & Télé-diffusion de <span className="text-blue-600">Zarzis</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Informations locales (couverture & fréquences), actualités de maintenance et espace de gestion
          pour l&apos;équipe technique (équipements, interventions, planning).
        </p>
        <div className="mt-8 flex gap-3">
          <a className="inline-flex items-center rounded-lg border px-4 py-2"
             href="/frequences">Voir les fréquences</a>
          <a className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white"
             href="/station">Découvrir la station</a>
        </div>
      </div>
    </section>
  );
}
