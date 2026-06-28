import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, MapPin, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-600">Your cart is empty.</p>
        <Link to="/products" className="text-indigo-600 hover:underline">
          Browse Products
        </Link>
      </div>
    );
  }

  const shippingCost = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.1;
  const total = cartTotal + shippingCost + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Shipping Address</h2>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="w-5 h-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Payment Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.product.name} x {item.quantity}
                </span>
                <span className="font-medium">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t pt-3 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold text-gray-900 text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mt-6"
            size="lg"
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Place Order'}
          </Button>

          <Link to="/cart" className="block mt-4 text-center text-indigo-600 hover:underline">
            Back to Cart
          </Link>
        </div>
      </form>
    </div>
  );
}
