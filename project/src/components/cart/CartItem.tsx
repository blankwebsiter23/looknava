import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity, color, size } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-200 dark:border-gray-700">
      {/* Product Image */}
      <Link 
        to={`/product/${product.id}`}
        className="flex-shrink-0 rounded-md overflow-hidden w-24 h-24 bg-gray-100 dark:bg-gray-800"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </Link>
      
      {/* Product Info */}
      <div className="flex-grow">
        <div className="flex justify-between">
          <Link to={`/product/${product.id}`} className="text-lg font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            {product.name}
          </Link>
          <div className="font-medium text-gray-900 dark:text-white">
            ${(product.price * quantity).toFixed(2)}
          </div>
        </div>
        
        <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center mr-4">
            <span className="mr-1">Color:</span>
            <div
              className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
              style={{ backgroundColor: color }}
            ></div>
          </div>
          <div>
            <span>Size: {size}</span>
          </div>
        </div>
        
        <div className="mt-2 sm:mt-4 flex items-center">
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded">
            <button
              onClick={handleDecreaseQuantity}
              className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-2 py-1 text-gray-900 dark:text-white">
              {quantity}
            </span>
            <button
              onClick={handleIncreaseQuantity}
              className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="ml-4 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
          >
            <Trash className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;