import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../types';
import { products as initialProducts } from '../data/products';

interface AdminState {
  password: string;
  isAuthenticated: boolean;
  products: Product[];
  setPassword: (password: string) => void;
  login: (password: string) => boolean;
  logout: () => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
}

interface LikesState {
  likedProducts: Product[];
  toggleLike: (product: Product) => void;
  isLiked: (productId: string) => boolean;
}

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

type StoreState = AdminState & LikesState & SearchState;

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Admin state
      password: '123456', // Default password
      isAuthenticated: false,
      products: initialProducts,
      setPassword: (newPassword) => set({ password: newPassword }),
      login: (inputPassword) => {
        const isValid = inputPassword === get().password;
        if (isValid) {
          set({ isAuthenticated: true });
        }
        return isValid;
      },
      logout: () => set({ isAuthenticated: false }),
      addProduct: (product) => 
        set((state) => ({ 
          products: [...state.products, { ...product, id: crypto.randomUUID() }] 
        })),
      updateProduct: (product) =>
        set((state) => ({
          products: state.products.map((p) => 
            p.id === product.id ? product : p
          ),
        })),
      deleteProduct: (productId) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== productId),
          likedProducts: state.likedProducts.filter((p) => p.id !== productId),
        })),

      // Likes state
      likedProducts: [],
      toggleLike: (product) =>
        set((state) => {
          const isLiked = state.likedProducts.some((p) => p.id === product.id);
          return {
            likedProducts: isLiked
              ? state.likedProducts.filter((p) => p.id !== product.id)
              : [...state.likedProducts, product],
          };
        }),
      isLiked: (productId) =>
        get().likedProducts.some((product) => product.id === productId),

      // Search state
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'looknava-store',
      partialize: (state) => ({
        password: state.password,
        likedProducts: state.likedProducts,
        products: state.products,
      }),
    }
  )
);

export default useStore;