// Type definitions for the Looknava e-commerce website

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  tags: string[];
  description: string;
  featured?: boolean;
  new?: boolean;
  sale?: boolean;
  rating?: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
  color: string;
  size: string;
};

export type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
};

export type StoreLocation = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type ThemeMode = 'light' | 'dark';