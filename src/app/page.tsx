export default function Home() {
  return (
    <section className="py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Station de Radio & TÃ©lÃ©-diffusion de <span className="text-blue-600">Zarzis</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Informations locales (couverture & frÃ©quences), actualitÃ©s de maintenance et espace de gestion
          pour l&apos;Ã©quipe technique (Ã©quipements, interventions, planning).
        </p>
        <div className="mt-8 flex gap-3">
          <a className="inline-flex items-center rounded-lg border px-4 py-2"
             href="/frequences">Voir les frÃ©quences</a>
          <a className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white"
             href="/station">DÃ©couvrir la station</a>
        </div>
      </div>
    </section>
  );
}
