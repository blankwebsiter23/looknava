import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Truck, RotateCcw, Shield, Heart } from 'lucide-react';
import { Product } from '../../types';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';
import Badge from '../ui/Badge';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="relative">
          {/* Main image */}
          <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Status badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.new && <Badge variant="primary">New</Badge>}
              {product.sale && <Badge variant="error">Sale</Badge>}
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-1 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-1 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>
          </div>
          
          {/* Thumbnail images */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-square rounded-md overflow-hidden border-2 ${
                  index === currentImageIndex 
                    ? 'border-purple-600' 
                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="py-6 px-4 md:px-0">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h1>
          
          {/* Price */}
          <div className="flex items-center mb-6">
            <span className="text-2xl font-bold text-gray-900 dark:text-white mr-3">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.sale && (
              <span className="ml-3 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-sm px-2 py-0.5 rounded">
                Save ${(product.originalPrice! - product.price).toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating!) 
                        ? 'text-yellow-400' 
                        : i < product.rating! 
                          ? 'text-yellow-400' 
                          : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.585l-7.37 3.88 1.41-8.18-6-5.83 8.28-1.2L10 .5l3.68 7.74 8.28 1.2-6 5.83 1.41 8.18z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600 dark:text-gray-400">
                {product.rating.toFixed(1)} / 5
              </span>
            </div>
          )}
          
          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {product.description}
          </p>
          
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Color
            </h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color 
                      ? 'border-purple-600 ring-2 ring-purple-600 ring-opacity-50' 
                      : 'border-gray-300 dark:border-gray-700'
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`Color: ${color}`}
                />
              ))}
            </div>
          </div>
          
          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                Size
              </h3>
              <button className="text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 rounded-md text-sm font-medium ${
                    selectedSize === size 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-8">
            <div className="flex h-12 rounded-md">
              <button
                onClick={decreaseQuantity}
                className="px-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-l-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                -
              </button>
              <span className="flex items-center justify-center w-12 border-t border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="px-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-r-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                +
              </button>
            </div>
            
            <div className="flex-1 grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                className="flex items-center justify-center"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="primary"
                fullWidth
                className="col-span-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
          
          {/* Product Benefits */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Free shipping over $100</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">30-days returns</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400">2-year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;