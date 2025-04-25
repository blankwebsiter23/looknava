import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { banners } from '../../data/products';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(autoSlideTimer);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900/70 to-blue-900/70 h-[70vh] md:h-[80vh]">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10"></div>
      
      {/* Carousel slides */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 flex items-center transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100 z-20' : 'opacity-0'
            }`}
          >
            {/* Background image with parallax effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-110"
              style={{ 
                backgroundImage: `url(${banner.image})`,
                animation: index === currentSlide ? 'slowZoom 15s ease-in-out infinite alternate' : 'none',
              }}
            ></div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-30"></div>
            
            {/* Text content */}
            <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {banner.subtitle}
                </p>
                <Link to={banner.ctaLink}>
                  <Button size="lg" variant="primary">
                    {banner.ctaText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Dots navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;