import React, { useState } from 'react';
import { storeLocations } from '../data/products';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const StoresPage: React.FC = () => {
  const [selectedStore, setSelectedStore] = useState(storeLocations[0]);
  
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Our Stores
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Visit our stores around the world to experience our products in person and receive expert advice from our staff.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Store List */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {storeLocations.map((store) => (
                  <button
                    key={store.id}
                    onClick={() => setSelectedStore(store)}
                    className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      selectedStore.id === store.id ? 'bg-purple-50 dark:bg-purple-900/20' : ''
                    }`}
                  >
                    <h3 className={`font-medium ${
                      selectedStore.id === store.id 
                        ? 'text-purple-600 dark:text-purple-400' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {store.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {store.city}, {store.country}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Store Details and Map */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              {/* Map Placeholder - In a real implementation, use Google Maps or similar */}
              <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-purple-600" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent text-white p-4">
                  <h3 className="font-medium">{selectedStore.name}</h3>
                  <p className="text-sm">{selectedStore.address}, {selectedStore.city}</p>
                </div>
              </div>
              
              {/* Store Information */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedStore.name}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedStore.address}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedStore.city}, {selectedStore.state} {selectedStore.zipCode}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedStore.country}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedStore.phone}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedStore.email}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Clock className="h-5 w-5 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Store Hours:
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {selectedStore.hours}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-medium text-purple-700 dark:text-purple-400 mb-2">
                    Services Available
                  </h3>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Personal shopping appointments</li>
                    <li>• Product returns and exchanges</li>
                    <li>• Gift wrapping</li>
                    <li>• Style consultations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresPage;