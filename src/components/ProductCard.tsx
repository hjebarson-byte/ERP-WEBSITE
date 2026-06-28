import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <p className="text-xs text-indigo-600 font-medium mb-1">{product.category}</p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500">{product.stock} in stock</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
