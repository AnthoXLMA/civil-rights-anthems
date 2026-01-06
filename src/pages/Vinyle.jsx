// src/pages/Vinyle.jsx
import React from "react";
import { useParams } from "react-router-dom";
import vinyles from "../data/vinyles.json";
import PlaylistEmbed from "../components/PlaylistEmbed";
import VinyleDetails from "../components/VinyleDetails";

function Vinyle() {
  const { id } = useParams();
  const vinyleId = parseInt(id, 10);
  const vinyle = vinyles.find((v) => v.id === vinyleId);

  if (!vinyle) {
    return (
      <p className="text-gray-100 text-center mt-10">
        Vinyle non trouvé
      </p>
    );
  }

  return <VinyleDetails vinyle={vinyle} />;
}

export default Vinyle;

// // src/pages/Vinyle.jsx
// import React from "react";
// import { useParams } from "react-router-dom";
// import vinyles from "../data/vinyles.json";
// import PlaylistEmbed from "../components/PlaylistEmbed";
// import VinyleDetails from "../components/VinyleDetails";

// function Vinyle() {
//   const { id } = useParams();
//   const vinyle = vinyles.find((v) => v.id === parseInt(id));


//   if (!vinyle)
//     return <p className="text-gray-100 text-center mt-10">Vinyle non trouvé</p>;

//   return <VinyleDetails vinyle={vinyle} />;

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-16 text-gray-100 space-y-8">
//       {/* TITRE ET DESCRIPTION */}
//       <h1 className="text-4xl font-extrabold">{vinyle.titre}</h1>
//       <p className="text-gray-300">{vinyle.description}</p>

//       {/* IMAGE */}
//       <img
//         src={vinyle.cover}
//         alt={vinyle.titre}
//         className="rounded-md w-full object-cover"
//       />

//       {/* TRACKLIST */}
//       <div>
//         <h2 className="text-2xl font-bold mb-2">Tracklist</h2>
//         <ul className="list-disc list-inside space-y-1 text-gray-300">
//           {vinyle.tracks.map((t, i) => (
//             <li key={i}>{t}</li>
//           ))}
//         </ul>
//       </div>

//       {/* PLAYLIST EMBED */}
//       <div className="my-6">
//         <h2 className="text-2xl font-bold mb-2">Écouter un extrait</h2>
//         <PlaylistEmbed link={vinyle.spotify || vinyle.youtube} />
//       </div>

//       {/* CONTEXTE HISTORIQUE / CULTUREL */}
//       {vinyle.context && <VinyleDetails vinyle={vinyle.context} />}
//     </div>
//   );
// }

// export default Vinyle;

