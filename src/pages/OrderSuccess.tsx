import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import Button from '../components/Button';

export default function OrderSuccess() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <p className="text-sm text-gray-600 mb-2">Order Number</p>
          <p className="text-xl font-bold text-gray-900">#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </div>

        <div className="space-y-4">
          <Link to="/products">
            <Button className="w-full" size="lg">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/" className="block text-indigo-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
