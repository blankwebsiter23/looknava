import React, { useState } from 'react';
import useStore from '../store/useStore';
import { Product } from '../types';
import { Pencil, Trash, Plus, X } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

interface ProductFormData {
  id?: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  colors: string[];
  sizes: string[];
  images: string[];
  featured: boolean;
  new: boolean;
  sale: boolean;
}

const AdminPage: React.FC = () => {
  const { 
    isAuthenticated, 
    login, 
    products, 
    addProduct, 
    updateProduct, 
    deleteProduct 
  } = useStore();
  
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    price: 0,
    description: '',
    category: '',
    colors: ['#000000'],
    sizes: ['S'],
    images: [''],
    featured: false,
    new: false,
    sale: false,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(inputPassword)) {
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleDelete = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
    }
  };

  const handleEdit = (product: Product) => {
    setFormData({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      description: product.description,
      category: product.category,
      colors: product.colors,
      sizes: product.sizes,
      images: product.images,
      featured: product.featured || false,
      new: product.new || false,
      sale: product.sale || false,
    });
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData: Product = {
      id: formData.id || crypto.randomUUID(),
      name: formData.name,
      price: Number(formData.price),
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : undefined,
      description: formData.description,
      category: formData.category,
      colors: formData.colors,
      sizes: formData.sizes,
      images: formData.images.filter(img => img.trim() !== ''),
      tags: [],
      featured: formData.featured,
      new: formData.new,
      sale: formData.sale,
    };

    if (formData.id) {
      updateProduct(productData);
    } else {
      addProduct(productData);
    }

    setIsEditing(false);
    setFormData({
      name: '',
      price: 0,
      description: '',
      category: '',
      colors: ['#000000'],
      sizes: ['S'],
      images: [''],
      featured: false,
      new: false,
      sale: false,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Admin Login
            </h1>
            <form onSubmit={handleLogin}>
              <Input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter admin password"
                error={error}
                fullWidth
              />
              <Button type="submit" variant="primary" fullWidth className="mt-4">
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Panel
          </h1>
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            <Plus className="h-5 w-5 mr-2" />
            Add Product
          </Button>
        </div>

        {isEditing && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formData.id ? 'Edit Product' : 'Add New Product'}
                  </h2>
                  <button onClick={() => setIsEditing(false)}>
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      label="Product Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      fullWidth
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleInputChange}
                      required
                      fullWidth
                    />
                    <Input
                      label="Original Price (optional)"
                      name="originalPrice"
                      type="number"
                      value={formData.originalPrice || ''}
                      onChange={handleInputChange}
                      fullWidth
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      label="Category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      fullWidth
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Images (One URL per line)
                    </label>
                    <textarea
                      name="images"
                      value={formData.images.join('\n')}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        images: e.target.value.split('\n')
                      }))}
                      rows={3}
                      className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-900 dark:text-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Colors (One hex code per line)
                      </label>
                      <textarea
                        name="colors"
                        value={formData.colors.join('\n')}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          colors: e.target.value.split('\n')
                        }))}
                        rows={3}
                        className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-900 dark:text-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Sizes (One size per line)
                      </label>
                      <textarea
                        name="sizes"
                        value={formData.sizes.join('\n')}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          sizes: e.target.value.split('\n')
                        }))}
                        rows={3}
                        className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-900 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          featured: e.target.checked
                        }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Featured</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="new"
                        checked={formData.new}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          new: e.target.checked
                        }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">New</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="sale"
                        checked={formData.sale}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          sale: e.target.checked
                        }))}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Sale</span>
                    </label>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                      {formData.id ? 'Update Product' : 'Add Product'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-md object-cover"
                            src={product.images[0]}
                            alt={product.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {product.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        ${product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">
                        {product.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-2">
                        {product.featured && (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                            Featured
                          </span>
                        )}
                        {product.new && (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            New
                          </span>
                        )}
                        {product.sale && (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            Sale
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-purple-600 hover:text-purple-900 mr-4"
                      >
                        <Pencil className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;