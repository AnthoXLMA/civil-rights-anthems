import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 text-gray-100 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-extrabold tracking-widest">Civil Rights Anthems</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-amber-400 transition">Home</Link>
        <Link to="/collection" className="hover:text-amber-400 transition">Collection</Link>
        <Link to="/listen" className="hover:text-amber-400 transition">Listen</Link>
        <Link to="/about" className="hover:text-amber-400 transition">About</Link>
        <Link to="/shop" className="hover:text-amber-400 transition">Shop</Link>
      </nav>
    </header>
  );
}

export default Header;


