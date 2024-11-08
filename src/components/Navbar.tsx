import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { state } = useCart();

  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-orange-500">Nurs</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link to="/products" className="hover:text-orange-500 transition-colors">
              Products
            </Link>
            <Link to="/cart" className="relative hover:text-orange-500 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {state.items.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};