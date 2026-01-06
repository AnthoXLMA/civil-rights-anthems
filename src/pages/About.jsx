function About() {
  return (
    <div className="min-h-screen bg-black text-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold text-amber-400 tracking-wide mb-6">
          À propos
        </h1>

        {/* INTRO */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          <span className="font-semibold text-gray-100">Civil Rights Anthems</span> est une collection de vinyles dédiée aux musiques
          qui ont accompagné les luttes afro-descendantes à travers le monde.
          Blues, soul, funk, reggae, afrobeat, rap — autant de voix qui disent :
          dignité, colère, joie, résistance, mémoire.
        </p>

        {/* MANIFESTO BLOCK */}
        <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-amber-400 mb-3">
            Pourquoi ce projet ?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Parce que ces musiques ne sont pas seulement des genres ou des sons.
            Elles sont des archives vivantes : elles racontent la violence,
            la survie, les marches, les prisons, les danses, les fêtes, la
            spiritualité et l’espoir. <br /><br />
            Cette collection rend hommage à celles et ceux qui ont
            chanté quand il était dangereux de parler.
          </p>
        </div>

        {/* COLLECTION STRUCTURE */}
        <h2 className="text-3xl font-bold text-amber-400 mb-4">
          Une collection en six chapitres
        </h2>

        <ul className="space-y-3 mb-12 text-gray-300">
          <li>📀 <span className="text-gray-100 font-semibold">From Chains to Blues</span> — racines et spirituals</li>
          <li>📀 <span className="text-gray-100 font-semibold">The Fire Next Time</span> — droits civiques & soul</li>
          <li>📀 <span className="text-gray-100 font-semibold">Black Is Beautiful</span> — funk & Black Power</li>
          <li>📀 <span className="text-gray-100 font-semibold">A Change Gonna Come Worldwide</span> — indépendances africaines</li>
          <li>📀 <span className="text-gray-100 font-semibold">Islands of Resistance</span> — Caraïbes & diasporas</li>
          <li>📀 <span className="text-gray-100 font-semibold">Diaspora Rising</span> — héritages contemporains</li>
        </ul>

        {/* VINYL STATEMENT */}
        <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-amber-400 mb-3">
            Pourquoi le vinyle ?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Le vinyle impose un geste : on s’assoit, on écoute, on prend le temps.
            À l’opposé du flux numérique, il permet de redonner de la gravité
            et de la matérialité à ces musiques.
          </p>
        </div>

        {/* CALL TO ACTION */}
        <p className="text-gray-400 italic">
          Ce projet est ouvert aux partenariats éditoriaux, artistiques et
          institutionnels. <br />
          Radio, label, musée, médiathèque — parlons-en.
        </p>

      </div>
    </div>
  );
}

export default About;
