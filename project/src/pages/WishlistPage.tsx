import React from 'react';
import useStore from '../store/useStore';
import ProductCard from '../components/products/ProductCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WishlistPage: React.FC = () => {
  const likedProducts = useStore((state) => state.likedProducts);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Your Wishlist
        </h1>

        {likedProducts.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <Heart className="h-12 w-12 text-gray-400" />
              </div>
            </div>
            <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Start adding items to your wishlist by clicking the heart icon on products you love.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {likedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;