import { Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About ShopHub</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted destination for premium products and exceptional shopping experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To provide customers with high-quality products at competitive prices while delivering exceptional service.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Team</h3>
          <p className="text-gray-600">
            A passionate group of individuals dedicated to making your shopping experience seamless and enjoyable.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
          <p className="text-gray-600">
            Quality, integrity, and customer satisfaction are at the core of everything we do.
          </p>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-indigo-100 mb-8">
            We're committed to providing you with the best shopping experience possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-indigo-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-indigo-100 text-sm">Carefully curated products from trusted brands</p>
            </div>
            <div className="bg-indigo-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Fast Shipping</h3>
              <p className="text-indigo-100 text-sm">Quick delivery with tracking on all orders</p>
            </div>
            <div className="bg-indigo-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Secure Payments</h3>
              <p className="text-indigo-100 text-sm">Your transactions are always protected</p>
            </div>
            <div className="bg-indigo-700 rounded-lg p-4">
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-indigo-100 text-sm">Our team is here to help anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
