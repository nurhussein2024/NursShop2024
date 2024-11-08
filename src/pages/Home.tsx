import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-orange-500">Nurs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your premier destination for quality electronic commerce
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-black hover:bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            <ShoppingBag className="mr-2" />
            Start Shopping
          </Link>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Products</h3>
            <p className="text-gray-600">Discover our curated selection of premium products.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Secure Shopping</h3>
            <p className="text-gray-600">Shop with confidence using our secure payment system.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
};