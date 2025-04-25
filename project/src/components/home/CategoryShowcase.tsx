import React from 'react';
import { categories } from '../../data/products';
import { Link } from 'react-router-dom';

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Shop By Category
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-lg transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white font-bold text-lg">{category.name}</h3>
              </div>
              <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/30 transition-colors duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;