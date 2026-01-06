// src/components/VinyleDetails.jsx
import React from "react";

export default function VinyleDetails({ vinyle }) {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-100 space-y-8">

      {/* TITRE & ARTISTE */}
      <div className="space-y-1">
        <h1 className="text-4xl font-extrabold">{vinyle.titre}</h1>
        <p className="text-lg text-amber-400 font-semibold">{vinyle.artiste}</p>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-300">{vinyle.description}</p>

      {/* COVER */}
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800">
        <img
          src={vinyle.cover}
          alt={vinyle.titre}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* TRACKLIST */}
      {vinyle.tracks && vinyle.tracks.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Tracklist</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {vinyle.tracks.map((track, i) => (
              <li key={i}>{track}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CONTEXTE HISTORIQUE / CULTUREL */}
      {vinyle.context && (
        <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-5 shadow-lg">
          <h2 className="text-2xl font-bold text-amber-400 mb-3">
            Contexte historique / culturel
          </h2>
          <p className="text-gray-300 italic mb-3">
            Période : {vinyle.context.period}
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {vinyle.context.events.map((event, i) => (
              <li key={i}>{event}</li>
            ))}
          </ul>
        </div>
      )}

      {/* AUDIO / PLAYLIST EMBED */}
      {(vinyle.spotify || vinyle.youtube) && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Écouter</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={vinyle.spotify || vinyle.youtube}
              title={`Écouter ${vinyle.titre}`}
              frameBorder="0"
              allow="encrypted-media; clipboard-write; autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
