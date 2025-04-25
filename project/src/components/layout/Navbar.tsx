import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Sun, Moon, ShoppingBag, Menu, X, User, ChevronDown, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../store/useStore';
import { products } from '../../data/products';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const { searchQuery, setSearchQuery, likedProducts } = useStore();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSelect = (productId: string) => {
    setSearchOpen(false);
    setSearchResults([]);
    setSearchQuery('');
    navigate(`/product/${productId}`);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'New Arrivals', path: '/new-arrivals' },
    { name: 'Men', path: '/category/men', submenu: [
      { name: 'T-Shirts', path: '/category/men/tshirts' },
      { name: 'Hoodies', path: '/category/men/hoodies' },
      { name: 'Pants', path: '/category/men/pants' }
    ]},
    { name: 'Women', path: '/category/women', submenu: [
      { name: 'Dresses', path: '/category/women/dresses' },
      { name: 'Tops', path: '/category/women/tops' },
      { name: 'Skirts', path: '/category/women/skirts' }
    ]},
    { name: 'Accessories', path: '/category/accessories' },
    { name: 'Sale', path: '/sale' },
  ];

  return (
    <div ref={navRef} className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            <Link to="/">Looknava</Link>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.submenu ? (
                  <>
                    <button
                      className={`flex items-center text-base font-medium transition-colors hover:text-purple-600 ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-900 dark:text-white'}`}
                      onClick={() => setDropdownOpen(dropdownOpen === link.name ? '' : link.name)}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {dropdownOpen === link.name && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={() => setDropdownOpen('')}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-base font-medium transition-colors hover:text-purple-600 ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-900 dark:text-white'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              <Search className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
            
            {/* Location */}
            <Link to="/stores" className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none hidden sm:flex">
              <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </Link>

            {/* Wishlist */}
            <Link 
              to="/wishlist" 
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none relative"
            >
              <Heart className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              {likedProducts.length > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-purple-600 rounded-full">
                  {likedProducts.length}
                </span>
              )}
            </Link>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            
            {/* Cart */}
            <Link to="/cart" className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none relative">
              <ShoppingBag className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-purple-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Admin */}
            <Link to="/admin" className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
              <User className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t border-gray-200 dark:border-gray-700 py-3 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                autoFocus
              />
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
              >
                <X className="h-5 w-5 text-gray-400 hover:text-gray-500" />
              </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
              <div className="absolute z-50 mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg">
                <div className="py-1">
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => handleSearchSelect(product.id)}
                    >
                      <div className="flex items-center">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-10 w-10 rounded object-cover"
                        />
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => setDropdownOpen(dropdownOpen === link.name ? '' : link.name)}
                      >
                        {link.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      {dropdownOpen === link.name && (
                        <div className="pl-4 space-y-1 mt-1">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                              onClick={() => {
                                setDropdownOpen('');
                                setMobileMenuOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/stores"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Find Stores
              </Link>
              <Link
                to="/wishlist"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Link>
              <Link
                to="/admin"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="mr-2 h-5 w-5" />
                Admin
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;