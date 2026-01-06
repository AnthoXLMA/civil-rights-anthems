function Listen() {
  const playlists = [
    {
      id: 1,
      title: "From Chains to Blues",
      period: "Spirituals, Work Songs, Early Blues",
      platform: "spotify",
      embed: "https://open.spotify.com/embed/playlist/XXXXXXXX",
      description:
        "Des chants d’émancipation nés dans la douleur et la dignité. Les racines sonores de la résistance noire."
    },
    {
      id: 2,
      title: "The Fire Next Time",
      period: "Civil Rights & Soul – 1950–1960",
      platform: "youtube",
      embed: "https://www.youtube.com/embed/YYYYYYYY",
      description:
        "La bande-son des marches, des prisons, des sermons et des rêves brisés — mais jamais éteints."
    },
    {
      id: 3,
      title: "Black Is Beautiful",
      period: "Funk & Black Power – 1970s",
      platform: "spotify",
      embed: "https://open.spotify.com/embed/playlist/ZZZZZZZZ",
      description:
        "Fierté noire, afros levés, groove en armes. La musique comme affirmation politique et joie radicale."
    },
    {
      id: 4,
      title: "A Change Gonna Come Worldwide",
      period: "Indépendances africaines",
      platform: "youtube",
      embed: "https://www.youtube.com/embed/AAAAAAAA",
      description:
        "Afrobeat, highlife, rumba, jazz éthiopien — l’Afrique moderne parle au monde et refuse le silence."
    },
    {
      id: 5,
      title: "Islands of Resistance",
      period: "Caraïbes & Diasporas",
      platform: "spotify",
      embed: "https://open.spotify.com/embed/playlist/BBBBBBBB",
      description:
        "Reggae, dub, calypso et kompa engagés. Archipels d’insoumission face aux empires."
    },
    {
      id: 6,
      title: "Diaspora Rising",
      period: "1980s → aujourd’hui",
      platform: "youtube",
      embed: "https://www.youtube.com/embed/CCCCCCCC",
      description:
        "Rap, néo-soul, jazz londonien, voix diasporiques — de Paris à Atlanta, l’histoire continue."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <h1 className="text-5xl font-extrabold text-amber-400 tracking-wide mb-4">
          Listen
        </h1>
        <p className="text-gray-400 max-w-3xl mb-12">
          Sélection éditoriale : ces playlists accompagnent la collection
          <span className="text-gray-200 font-semibold"> Civil Rights Anthems</span>.
          Elles ne remplacent pas les vinyles — elles ouvrent la porte.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {playlists.map((pl) => (
            <div
              key={pl.id}
              className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-amber-600/20 transition"
            >
              {/* TEXT */}
              <h2 className="text-2xl font-bold text-amber-400">
                {pl.title}
              </h2>
              <p className="text-sm text-gray-400 italic mb-2">
                {pl.period}
              </p>
              <p className="text-gray-300 mb-4">
                {pl.description}
              </p>

              {/* EMBED */}
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-700">
                {pl.platform === "spotify" && (
                  <iframe
                    src={pl.embed}
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                )}

                {pl.platform === "youtube" && (
                  <iframe
                    src={pl.embed}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              {/* CTA */}
              <div className="mt-4">
                <a
                  href={pl.embed}
                  target="_blank"
                  className="inline-block bg-amber-500 text-black font-bold px-5 py-2 rounded-lg hover:bg-amber-400 transition"
                >
                  Ouvrir la playlist complète →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listen;
