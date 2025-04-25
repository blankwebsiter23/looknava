import React from 'react';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartSummary: React.FC = () => {
  const { cartItems, totalPrice } = useCart();
  
  // Calculate subtotal, shipping, and tax
  const subtotal = totalPrice;
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1; // 10% tax
  const orderTotal = subtotal + shipping + tax;
  
  if (cartItems.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Add items to your cart to proceed with checkout.
        </p>
        <Link to="/">
          <Button variant="primary" fullWidth>
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Order Summary
      </h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
          <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Shipping</span>
          <span className="text-gray-900 dark:text-white">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Tax (10%)</span>
          <span className="text-gray-900 dark:text-white">${tax.toFixed(2)}</span>
        </div>
        
        {shipping > 0 && (
          <div className="text-sm text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
            Add ${(100 - subtotal).toFixed(2)} more to get free shipping
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center font-medium text-lg border-t border-gray-200 dark:border-gray-700 py-4 mb-6">
        <span className="text-gray-900 dark:text-white">Order Total</span>
        <span className="text-purple-600 dark:text-purple-400">${orderTotal.toFixed(2)}</span>
      </div>
      
      <div className="space-y-4">
        <Button variant="primary" fullWidth>
          Proceed to Checkout
        </Button>
        
        <Link to="/">
          <Button variant="outline" fullWidth>
            Continue Shopping
          </Button>
        </Link>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Secure checkout powered by Stripe
      </div>
    </div>
  );
};

export default CartSummary;