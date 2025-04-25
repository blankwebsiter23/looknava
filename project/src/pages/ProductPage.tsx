import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getSaleProducts } from '../data/products';
import ProductDetail from '../components/products/ProductDetail';
import ProductCard from '../components/products/ProductCard';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  const product = getProductById(id || '');
  const relatedProducts = getSaleProducts().filter(p => p.id !== id).slice(0, 4);
  
  useEffect(() => {
    if (product) {
      // Simulate loading for better UX
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      // If product not found, redirect to home
      if (!loading) {
        navigate('/');
      }
    }
  }, [product, navigate, loading]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin"></div>
      </div>
    );
  }
  
  if (!product) {
    return null; // This should not be rendered as we redirect in useEffect
  }
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to products
          </button>
        </div>
        
        {/* Product Details */}
        <ProductDetail product={product} />
        
        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;