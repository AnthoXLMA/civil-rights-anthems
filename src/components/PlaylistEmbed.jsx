// src/components/PlaylistEmbed.jsx
import React from 'react';

function PlaylistEmbed({ link }) {
  if (!link) return null;

  return (
    <div className="mb-6">
      <iframe
        src={link}
        width="100%"
        height="380"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        title="Audio Embed"
        className="rounded-md"
      ></iframe>
    </div>
  );
}

export default PlaylistEmbed;
