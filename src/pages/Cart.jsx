import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-black text-gray-100 py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-amber-400 mb-4">
          Votre panier est vide
        </h1>
        <p className="text-gray-300 mb-6">
          Découvrez notre collection et ajoutez vos vinyles préférés !
        </p>
        <Link
          to="/shop"
          className="bg-amber-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          Explorer la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-extrabold text-amber-400 mb-8">
          Mon Panier
        </h1>

        {/* LISTE DES PRODUITS */}
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center bg-gray-900/70 rounded-2xl p-4 shadow-lg"
            >
              {/* COVER */}
              <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = "/assets/placeholder.jpg")}
                />
              </div>

              {/* INFOS */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-100">{item.title}</h2>
                <p className="text-sm text-amber-400 mb-2">{item.status}</p>
                <p className="text-lg font-semibold mb-2">{(item.price * item.qty).toFixed(2)} €</p>

                {/* QUANTITY */}
                <div className="flex items-center space-x-2 mb-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-amber-500 text-black px-2 rounded hover:bg-amber-600 transition"
                  >
                    +
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => {
                      if (item.qty > 1) removeFromCart(item.id);
                    }}
                    className="bg-gray-700 text-white px-2 rounded hover:bg-gray-600 transition"
                  >
                    -
                  </button>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL + CLEAR */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-2xl font-bold text-gray-100">Total : {total.toFixed(2)} €</p>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <button
              onClick={clearCart}
              className="bg-red-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Vider le panier
            </button>
            <button
              onClick={() => alert("Checkout mock ! Intégrer Stripe / PayPal")}
              className="bg-amber-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
