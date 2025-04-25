import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '../../data/products';
import ProductCard from '../products/ProductCard';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Collection
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Discover our handpicked selection of premium products that embody our commitment to quality, style, and innovation.
            </p>
          </div>
          <Link to="/featured" className="group mt-4 md:mt-0 flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
            View All
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;