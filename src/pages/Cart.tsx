import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to get started!</p>
          <Link to="/products">
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="bg-white rounded-xl shadow-sm p-4 flex gap-4"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <Link
                  to={`/product/${item.product.id}`}
                  className="font-semibold text-gray-900 hover:text-indigo-600 transition"
                >
                  {item.product.name}
                </Link>
                <p className="text-sm text-gray-500 mb-2">{item.product.category}</p>
                <p className="font-bold text-gray-900">${item.product.price.toFixed(2)}</p>
              </div>

              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>{cartTotal > 50 ? 'Free' : '$5.99'}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>${(cartTotal * 0.1).toFixed(2)}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-gray-900">
              <span>Total</span>
              <span>
                ${(cartTotal + (cartTotal > 50 ? 0 : 5.99) + cartTotal * 0.1).toFixed(2)}
              </span>
            </div>
          </div>

          <Link to="/checkout" className="block">
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </Link>

          <Link to="/products" className="block mt-4 text-center text-indigo-600 hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
