import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, p) => sum + p.qty, 0);

  return (
    <header className="bg-gray-900 text-gray-100 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-extrabold tracking-widest">
        <Link to="/">Civil Rights Anthems</Link>
      </h1>

      <nav className="flex items-center space-x-6">
        <Link to="/" className="hover:text-amber-400 transition">Home</Link>
        <Link to="/collection" className="hover:text-amber-400 transition">Collection</Link>
        <Link to="/listen" className="hover:text-amber-400 transition">Listen</Link>
        {/* 👉 nouveau lien frise / timeline */}
        <Link to="/timeline" className="hover:text-amber-400 transition">
          Chronologie
        </Link>
        <Link to="/about" className="hover:text-amber-400 transition">About</Link>
        <Link to="/cart" className="hover:text-amber-400 transition relative flex items-center">
        <ShoppingCartIcon className="w-6 h-6 mr-1" />
        Panier
        {totalItems > 0 && (
          <span className="ml-2 bg-amber-500 text-black text-xs font-bold rounded-full px-2 py-0.5">
            {totalItems}
          </span>
        )}
      </Link>
      </nav>
    </header>
  );
}

export default Header;
