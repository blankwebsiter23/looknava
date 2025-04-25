import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real implementation, this would send the email to your backend
      setSubscribed(true);
      setEmail('');
      
      // Reset the subscribed state after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };
  
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-purple-100 mb-8 text-lg">
              Subscribe to our newsletter and be the first to know about new collections, 
              exclusive offers, and fashion inspiration.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={<Mail className="h-5 w-5" />}
                  required
                  fullWidth
                  className="h-12"
                />
              </div>
              <Button 
                type="submit" 
                variant="secondary" 
                size="lg"
              >
                Subscribe
              </Button>
            </form>
            
            {subscribed && (
              <p className="mt-4 text-white bg-white/20 py-2 px-4 rounded-md inline-block">
                Thank you for subscribing!
              </p>
            )}
            
            <p className="mt-4 text-purple-200 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;