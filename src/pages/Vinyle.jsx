function Vinyle() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center">
        <img src="/assets/vinyle1.jpg" alt="Vinyle" className="rounded-md mb-4"/>
        <h2 className="text-gray-100 font-bold text-xl mb-2">Nom du Vinyle</h2>
        <p className="text-gray-400 mb-4">Artiste · Année</p>
        <button className="bg-amber-500 text-gray-900 px-4 py-2 rounded hover:bg-amber-600 transition">
          Écouter
        </button>
      </div>
    </div>
  );
}

export default Vinyle;
