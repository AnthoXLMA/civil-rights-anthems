import { useState, useRef } from "react";
import { timeline } from "../data/timeline";

export default function Timeline() {
  const [showEvents, setShowEvents] = useState(true);
  const [showAlbums, setShowAlbums] = useState(true);
  const [showMovements, setShowMovements] = useState(true);
  const [showSports, setShowSports] = useState(true);
  const [showCulture, setShowCulture] = useState(true); // ✅ nouvel état pour culture/arts

  const [selectedItem, setSelectedItem] = useState(null);

  const containerRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const onMouseDown = (e) => {
    isDownRef.current = true;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
  };
  const onMouseLeave = () => (isDownRef.current = false);
  const onMouseUp = () => (isDownRef.current = false);
  const onMouseMove = (e) => {
    if (!isDownRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-amber-400">Chronologie</h1>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-6 mb-6 bg-gray-800 border border-gray-700 p-4 rounded-lg">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showEvents} onChange={() => setShowEvents(!showEvents)} />
          <span className="text-amber-400">Événements historiques</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showAlbums} onChange={() => setShowAlbums(!showAlbums)} />
          <span className="text-amber-400">Grands albums</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showMovements} onChange={() => setShowMovements(!showMovements)} />
          <span className="text-amber-400">Mouvements musicaux</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showSports} onChange={() => setShowSports(!showSports)} />
          <span className="text-amber-400">Événements sportifs</span>
        </label>

        {/* ✅ Culture & Arts */}
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={showCulture} onChange={() => setShowCulture(!showCulture)} />
          <span className="text-amber-400">Mouvements culturels / artistiques</span>
        </label>
      </div>

      {/* HORIZONTAL TIMELINE */}
      <div
        ref={containerRef}
        className="w-full overflow-x-scroll cursor-grab border-t border-amber-500 py-10"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="flex space-x-24">
          {timeline.map((block, i) => (
            <div key={i} className="relative min-w-[280px] max-w-[320px]">

              {/* PERIOD */}
              <div className="text-center font-semibold mb-4">
                <span className="text-amber-400">{block.period}</span><br />
                <span className="text-sm text-gray-400">{block.label}</span>
              </div>

              {/* DOT */}
              <div className="w-4 h-4 bg-amber-500 shadow-lg shadow-amber-500/40 rounded-full mx-auto mb-4" />

              <div className="space-y-3">

                {/* EVENTS */}
                {showEvents &&
                  block.events.map((e, j) => (
                    <button
                      key={j}
                      onClick={() => setSelectedItem(e)}
                      className="block bg-gray-800 border border-gray-700 hover:border-amber-400 hover:bg-gray-700 rounded px-3 py-2 text-sm text-left whitespace-normal"
                    >
                      <span className="text-amber-400 font-semibold">{e.year}</span><br />
                      <span className="line-clamp-3">{e.text}</span>
                    </button>
                  ))}

                {/* ALBUMS */}
                {showAlbums &&
                  block.albums.map((a, j) => (
                    <button
                      key={j}
                      onClick={() => setSelectedItem(a)}
                      className="block bg-gray-800 border border-gray-700 hover:border-amber-400 hover:bg-gray-700 rounded px-3 py-2 text-sm text-left whitespace-normal"
                    >
                      <span className="text-amber-400 font-semibold">{a.year}</span><br />
                      <span className="font-semibold">{a.artist}</span><br />
                      <em className="line-clamp-2">{a.title}</em>
                    </button>
                  ))}

                {/* MOVEMENTS */}
                {showMovements &&
                  block.movements.map((m, j) => (
                    <button
                      key={j}
                      onClick={() => setSelectedItem({ movement: m })}
                      className="block bg-gray-800 border border-gray-700 hover:border-amber-400 hover:bg-gray-700 rounded px-3 py-2 text-sm text-left whitespace-normal"
                    >
                      🎶 {m}
                    </button>
                  ))}

                {/* SPORTS */}
                {showSports &&
                  block.sports?.map((s, j) => (
                    <button
                      key={j}
                      onClick={() => setSelectedItem({ sport: s })}
                      className="block bg-gray-800 border border-gray-700 hover:border-amber-400 hover:bg-gray-700 rounded px-3 py-2 text-sm text-left whitespace-normal"
                    >
                      🏅 {s.year} — {s.text}
                    </button>
                  ))}

                {/* CULTURE / ARTS */}
                {showCulture &&
                  block.cultures?.map((c, j) => (
                    <button
                      key={j}
                      onClick={() => setSelectedItem({ culture: c })}
                      className="block bg-gray-800 border border-gray-700 hover:border-amber-400 hover:bg-gray-700 rounded px-3 py-2 text-sm text-left whitespace-normal"
                    >
                      🎨 {c.year} — {c.text}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* INFO PANEL */}
      {selectedItem && (
        <div className="mt-8 p-4 border border-amber-500 rounded-lg bg-gray-800 shadow-lg shadow-amber-500/20">
          <button className="float-right text-amber-400" onClick={() => setSelectedItem(null)}>✖</button>

          {"text" in selectedItem && !selectedItem.sport && !selectedItem.culture && (
            <>
              <h2 className="font-bold text-amber-400 mb-1">Événement</h2>
              <p><strong>{selectedItem.year}</strong> — {selectedItem.text}</p>
            </>
          )}

          {"title" in selectedItem && (
            <>
              <h2 className="font-bold text-amber-400 mb-1">Album</h2>
              <p>
                <strong>{selectedItem.year}</strong> — {selectedItem.artist}<br />
                <em>{selectedItem.title}</em>
              </p>
            </>
          )}

          {"movement" in selectedItem && (
            <>
              <h2 className="font-bold text-amber-400 mb-1">Mouvement musical</h2>
              <p>{selectedItem.movement}</p>
            </>
          )}

          {"sport" in selectedItem && (
            <>
              <h2 className="font-bold text-amber-400 mb-1">Événement sportif</h2>
              <p><strong>{selectedItem.year}</strong> — {selectedItem.text}</p>
            </>
          )}

          {"culture" in selectedItem && (
            <>
              <h2 className="font-bold text-amber-400 mb-1">Mouvement culturel / artistique</h2>
              <p><strong>{selectedItem.year}</strong> — {selectedItem.text}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
