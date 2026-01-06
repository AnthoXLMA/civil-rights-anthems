function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl p-6">
          <h1 className="text-5xl font-extrabold text-gray-100 mb-4">Civil Rights Anthems</h1>
          <p className="text-lg text-gray-300 mb-6">
            Découvrez la musique qui a accompagné la lutte pour les droits civiques.
          </p>
          <button className="bg-amber-500 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-600 transition">
            Explorer la collection
          </button>
        </div>
      </section>

      {/* Intro / texte d’accueil */}
      <div className="p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Bienvenue sur Civil Rights Anthems</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Découvrez la collection de vinyles et la musique des luttes afro à travers le monde.
        </p>
      </div>
    </>
  );
}


export default Home;
