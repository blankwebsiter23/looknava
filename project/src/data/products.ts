import { Product, Category, Banner, StoreLocation } from '../types';

// Mock product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Orbital Oversized Tee',
    price: 59.99,
    originalPrice: 79.99,
    images: [
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    colors: ['#000000', '#FFFFFF', '#A9A9A9'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'tshirts',
    tags: ['new', 'featured'],
    description: 'The perfect oversized tee featuring our signature orbital design. Made from 100% organic cotton for maximum comfort and style.',
    featured: true,
    new: true,
    sale: true,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Gradient Wave Hoodie',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    colors: ['#3B82F6', '#14B8A6', '#8B5CF6'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodies',
    tags: ['bestseller'],
    description: 'Stay cozy and stylish with our signature Gradient Wave Hoodie. Features a beautiful color transition and premium cotton blend material.',
    featured: true,
    new: false,
    sale: false,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Digital Dream Jacket',
    price: 149.99,
    originalPrice: 199.99,
    images: [
      'https://images.pexels.com/photos/10261362/pexels-photo-10261362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6311449/pexels-photo-6311449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    colors: ['#000000', '#3B82F6', '#DC2626'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'jackets',
    tags: ['featured', 'sale'],
    description: 'Our lightweight Digital Dream Jacket combines style and functionality with water-resistant material and reflective accents.',
    featured: true,
    new: false,
    sale: true,
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Quantum Cargo Pants',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/6311664/pexels-photo-6311664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6311171/pexels-photo-6311171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    colors: ['#000000', '#4B5563', '#78350F'],
    sizes: ['28', '30', '32', '34', '36'],
    category: 'pants',
    tags: ['new'],
    description: 'Versatile Quantum Cargo Pants with multiple pockets and durable fabric. Perfect for both style and function.',
    featured: false,
    new: true,
    sale: false,
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Cosmic Knit Sweater',
    price: 119.99,
    originalPrice: 149.99,
    images: [
      'https://images.pexels.com/photos/6945626/pexels-photo-6945626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6945598/pexels-photo-6945598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    colors: ['#F97316', '#8B5CF6', '#ECFCCB'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'sweaters',
    tags: ['bestseller', 'sale'],
    description: 'Our luxurious Cosmic Knit Sweater features a unique pattern inspired by cosmic phenomena. Made from premium wool blend for ultimate comfort.',
    featured: true,
    new: false,
    sale: true,
    rating: 4.9,
  },
  {
    id: '6',
    name: 'Tech Fleece Joggers',
    price: 69.99,
    images: [
      'https://images.pexels.com/photos/9558766/pexels-photo-9558766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/9558757/pexels-photo-9558757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    colors: ['#000000', '#4B5563', '#1E3A8A'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'joggers',
    tags: ['bestseller'],
    description: 'Comfortable Tech Fleece Joggers with tapered fit and soft brushed interior. Perfect for everyday wear and light workouts.',
    featured: false,
    new: false,
    sale: false,
    rating: 4.8,
  },
  {
    id: '7',
    name: 'Neon Horizon Cap',
    price: 34.99,
    images: [
      'https://images.pexels.com/photos/9558737/pexels-photo-9558737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6311159/pexels-photo-6311159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    colors: ['#000000', '#FFFFFF', '#F97316'],
    sizes: ['One Size'],
    category: 'accessories',
    tags: ['new'],
    description: 'Complete your look with our adjustable Neon Horizon Cap featuring embroidered logo and breathable mesh panels.',
    featured: false,
    new: true,
    sale: false,
    rating: 4.5,
  },
  {
    id: '8',
    name: 'Lunar Phase Dress',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      'https://images.pexels.com/photos/6311673/pexels-photo-6311673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6311637/pexels-photo-6311637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    colors: ['#000000', '#14B8A6', '#8B5CF6'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'dresses',
    tags: ['featured', 'sale'],
    description: 'Our elegant Lunar Phase Dress features a flowing silhouette and subtle gradient pattern inspired by lunar phases.',
    featured: true,
    new: false,
    sale: true,
    rating: 4.9,
  },
];

// Mock categories
export const categories: Category[] = [
  {
    id: '1',
    name: 'T-Shirts',
    image: 'https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Premium quality t-shirts with unique designs',
  },
  {
    id: '2',
    name: 'Hoodies',
    image: 'https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Cozy hoodies for all seasons',
  },
  {
    id: '3',
    name: 'Jackets',
    image: 'https://images.pexels.com/photos/10261362/pexels-photo-10261362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Stylish jackets for any occasion',
  },
  {
    id: '4',
    name: 'Pants',
    image: 'https://images.pexels.com/photos/6311664/pexels-photo-6311664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Comfortable pants and joggers',
  },
  {
    id: '5',
    name: 'Dresses',
    image: 'https://images.pexels.com/photos/6311673/pexels-photo-6311673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Elegant dresses for special occasions',
  },
  {
    id: '6',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/9558737/pexels-photo-9558737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Complete your look with our accessories',
  },
];

// Mock banner data
export const banners: Banner[] = [
  {
    id: '1',
    title: 'Summer Collection',
    subtitle: 'Discover fresh styles for the season',
    image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaText: 'Shop Now',
    ctaLink: '/category/summer',
  },
  {
    id: '2',
    title: 'New Arrivals',
    subtitle: 'Be the first to discover our latest designs',
    image: 'https://images.pexels.com/photos/9558764/pexels-photo-9558764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaText: 'Explore',
    ctaLink: '/new-arrivals',
  },
  {
    id: '3',
    title: 'Sale Up to 50% Off',
    subtitle: 'Limited time offer on selected items',
    image: 'https://images.pexels.com/photos/6347643/pexels-photo-6347643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaText: 'Shop Sale',
    ctaLink: '/sale',
  },
];

// Mock store locations
export const storeLocations: StoreLocation[] = [
  {
    id: '1',
    name: 'Looknava Flagship Store',
    address: '123 Fashion Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
    phone: '+1 (212) 555-1234',
    email: 'nyc@looknava.com',
    hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  {
    id: '2',
    name: 'Looknava Los Angeles',
    address: '456 Beverly Boulevard',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90210',
    country: 'USA',
    phone: '+1 (310) 555-5678',
    email: 'la@looknava.com',
    hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM',
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
  },
  {
    id: '3',
    name: 'Looknava London',
    address: '78 Oxford Street',
    city: 'London',
    state: '',
    zipCode: 'W1D 1BS',
    country: 'UK',
    phone: '+44 20 7123 4567',
    email: 'london@looknava.com',
    hours: 'Mon-Sat: 9:30AM-8PM, Sun: 12PM-6PM',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278,
    },
  },
];

// Get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) return [];
  
  return products.filter((product) => product.category.toLowerCase() === category.name.toLowerCase());
};

// Get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

// Get new products
export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.new);
};

// Get sale products
export const getSaleProducts = (): Product[] => {
  return products.filter((product) => product.sale);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};