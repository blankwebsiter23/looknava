import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, totalItems } = useCart();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Your Cart {totalItems > 0 && `(${totalItems} ${totalItems === 1 ? 'item' : 'items'})`}
          </h1>
          <Link to="/" className="inline-flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Continue shopping
          </Link>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-gray-400" />
              </div>
            </div>
            <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Looks like you haven't added any items to your cart yet.
              Browse our products and find something you'll love.
            </p>
            <Link to="/">
              <Button variant="primary" size="lg">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                {cartItems.map((item) => (
                  <CartItem key={`${item.product.id}-${item.color}-${item.size}`} item={item} />
                ))}
              </div>
            </div>
            
            {/* Cart Summary */}
            <div>
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;