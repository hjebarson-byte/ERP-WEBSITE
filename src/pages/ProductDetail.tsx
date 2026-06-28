import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-600">Product not found.</p>
        <Link to="/products" className="text-indigo-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/products"
        className="inline-flex items-center text-gray-600 hover:text-indigo-600 mb-8 transition"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-indigo-600 font-medium mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600 ml-2">({product.rating} rating)</span>
          </div>

          <p className="text-4xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center text-gray-600">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span>In Stock ({product.stock} available)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span>30-day return policy</span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
