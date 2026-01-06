// src/pages/Collection.jsx
import React from 'react';
import VinyleCard from '../components/VinyleCard';
import vinyles from '../data/vinyles.json';

function Collection() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-100 mb-6 text-center">Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vinyles.map(v => (
          <VinyleCard key={v.id} vinyle={v} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
