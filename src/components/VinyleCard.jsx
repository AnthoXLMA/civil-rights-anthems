// src/components/VinyleCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function VinyleCard({ vinyle }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={vinyle.cover} alt={vinyle.titre} className="rounded-md mb-4 w-full h-64 object-cover"/>
      <h2 className="text-xl font-bold text-gray-100 mb-2">{vinyle.titre}</h2>
      <p className="text-gray-400 mb-4">{vinyle.artiste}</p>
      <Link to={`/vinyle/${vinyle.id}`} className="bg-amber-500 text-gray-900 px-4 py-2 rounded hover:bg-amber-600 transition">
        Voir Détail
      </Link>
    </div>
  );
}

export default VinyleCard;
