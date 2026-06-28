import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ShopHub</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600 transition">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none ml-2 text-sm w-40"
              />
            </div>

            <Link to="/login" className="hidden sm:flex items-center text-gray-700 hover:text-indigo-600 transition">
              <User className="w-5 h-5" />
            </Link>

            <Link to="/cart" className="relative flex items-center text-gray-700 hover:text-indigo-600 transition">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
