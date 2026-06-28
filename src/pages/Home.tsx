import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Premium Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Shop the latest trends with confidence. Quality products, great prices, and exceptional service.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Free Shipping</h3>
                <p className="text-gray-600 text-sm">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Secure Payment</h3>
                <p className="text-gray-600 text-sm">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Best Quality</h3>
                <p className="text-gray-600 text-sm">Premium products guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our handpicked selection of premium products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="text-indigo-100 mb-6">
                Subscribe to get special offers, free giveaways, and exclusive deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
