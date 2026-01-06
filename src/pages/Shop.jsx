import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  // 🔹 mock local pour développement rapide
  useEffect(() => {
    setProducts([
      {
        id: 1,
        title: "From Chains to Blues",
        price: 29.90,
        status: "En précommande",
        cover: "/assets/vinyle1.jpg"
      },
      {
        id: 2,
        title: "The Fire Next Time",
        price: 29.90,
        status: "En préparation",
        cover: "/assets/vinyle2.jpg"
      },
      {
        id: 3,
        title: "Black Is Beautiful",
        price: 29.90,
        status: "Bientôt disponible",
        cover: "/assets/vinyle3.jpg"
      },
      {
        id: 4,
        title: "A Change Gonna Come Worldwide",
        price: 29.90,
        status: "En précommande",
        cover: "/assets/vinyle4.jpg"
      },
      {
        id: 5,
        title: "Islands of Resistance",
        price: 29.90,
        status: "En préparation",
        cover: "/assets/vinyle5.jpg"
      },
      {
        id: 6,
        title: "Diaspora Rising",
        price: 29.90,
        status: "Bientôt disponible",
        cover: "/assets/vinyle6.jpg"
      }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-4xl font-extrabold text-amber-400 mb-2">
          Shop
        </h1>

        <p className="text-gray-300 mb-10">
          Collection vinyle — édition limitée — pressage audiophile 180g.
        </p>

        {/* GRID PRODUITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900/70 rounded-2xl border border-gray-800 p-5 shadow-xl hover:scale-[1.02] transition-transform duration-300"
            >
              {/* COVER */}
              <div className="aspect-square bg-gray-800 rounded-xl mb-4 overflow-hidden">
                <img
                  src={product.cover}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = "/assets/placeholder.jpg")}
                />
              </div>

              {/* TITLE */}
              <h2 className="text-xl font-bold text-gray-100 mb-1">
                {product.title}
              </h2>

              {/* STATUS */}
              <p className="text-sm text-amber-400 mb-2">
                {product.status}
              </p>

              {/* PRICE */}
              <p className="text-lg font-semibold mb-4">
                {product.price.toFixed(2)} €
              </p>

              {/* CTA */}
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-amber-500 text-black font-semibold py-2 rounded-lg hover:bg-amber-600 transition"
              >
                Ajouter au panier
              </button>

              <p className="text-xs text-gray-400 mt-1">
                Précommande limitée — vinyle collector
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
