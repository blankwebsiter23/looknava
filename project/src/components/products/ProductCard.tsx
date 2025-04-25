import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import Badge from '../ui/Badge';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import useStore from '../../store/useStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleLike, isLiked } = useStore();
  const liked = isLiked(product.id);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add the first size and color as default
    addToCart(product, 1, product.colors[0], product.sizes[0]);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLike(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick action buttons */}
        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleLike}
            className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-2"
          >
            <Heart 
              className={`h-5 w-5 ${liked ? 'fill-current text-purple-600' : ''}`} 
            />
          </button>
        </div>
        
        {/* Status badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.new && (
            <Badge variant="primary">New</Badge>
          )}
          {product.sale && (
            <Badge variant="error">Sale</Badge>
          )}
          {product.featured && !product.new && !product.sale && (
            <Badge variant="info">Featured</Badge>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Color options */}
          <div className="flex">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-gray-300 dark:border-gray-600"
                style={{ backgroundColor: color, marginLeft: index > 0 ? '-3px' : '0' }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
        
        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full py-2 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 rounded-md transition-colors duration-300 text-sm font-medium"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;