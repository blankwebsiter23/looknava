import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryShowcase from '../components/home/CategoryShowcase';
import Newsletter from '../components/home/Newsletter';
import { Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Feature Callout */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">Meticulously crafted from the finest materials for unmatched durability and style.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Fast Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400">Swift delivery options with real-time tracking to ensure your items arrive promptly.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Easy Returns</h3>
              <p className="text-gray-600 dark:text-gray-400">Hassle-free 30-day return policy with no questions asked for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* AI Models Showcase */}
      <section className="py-16 bg-gradient-to-br from-purple-900/10 to-blue-900/10 dark:from-purple-900/30 dark:to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Sparkles className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Fashion Models
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition-transform hover:scale-105">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4456814/pexels-photo-4456814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AI Fashion Model" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Virtual Try-On</h3>
                <p className="text-gray-600 dark:text-gray-400">Experience how our clothes look on digital models that represent diverse body types.</p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition-transform hover:scale-105">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7691466/pexels-photo-7691466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AI Fashion Model" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Custom Styling</h3>
                <p className="text-gray-600 dark:text-gray-400">Our AI recommends personalized outfits based on your preferences and previous purchases.</p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition-transform hover:scale-105">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/9558730/pexels-photo-9558730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AI Fashion Model" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Future of Fashion</h3>
                <p className="text-gray-600 dark:text-gray-400">Explore concept designs and upcoming trends curated by our artificial intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Category Showcase */}
      <CategoryShowcase />
      
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default HomePage;