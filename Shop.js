import React, { useState } from 'react';

const allProducts = [
  // Laptops
  { 
    id: 1, 
    category: "laptops", 
    name: "HP 15 AMD Ryzen 5 (16GB RAM / 512GB SSD)", 
    price: "Check on Amazon", 
    brand: "HP", 
    link: "https://link.amazon/B00b78kHH" 
  },
  { 
    id: 2, 
    category: "laptops", 
    name: "Lenovo IdeaPad Slim 3 Intel Core i5 (13th Gen)", 
    price: "Check on Amazon", 
    brand: "Lenovo", 
    link: "https://link.amazon/B0dv7NNdw" 
  },
  { 
    id: 3, 
    category: "laptops", 
    name: "Dell Inspiron 3520 (12th Gen i3 / 8GB / 512GB SSD)", 
    price: "Check on Amazon", 
    brand: "Dell", 
    link: "https://link.amazon/B06t9gYBO" 
  },
  { 
    id: 4, 
    category: "laptops", 
    name: "Samsung Galaxy Book4 Intel Core i5", 
    price: "Check on Amazon", 
    brand: "Samsung", 
    link: "https://link.amazon/B0hB7Em33" 
  },
  { 
    id: 5, 
    category: "laptops", 
    name: "Acer Aspire Lite AMD Ryzen 5 5500U", 
    price: "Check on Amazon", 
    brand: "Acer", 
    link: "https://link.amazon/B03Z2rWuc" 
  },

  // Smartphones
  { 
    id: 6, 
    category: "phones", 
    name: "OnePlus Nord CE4 5G", 
    price: "Check on Amazon", 
    brand: "OnePlus", 
    link: "https://link.amazon/B082pa9tc" 
  },
  { 
    id: 7, 
    category: "phones", 
    name: "Samsung Galaxy A55 5G (12GB RAM, 256GB Storage) - Awesome Iceblue", 
    price: "Check on Amazon", 
    brand: "Samsung", 
    link: "https://link.amazon/B016IYIV7" 
  },

  // Audio / Neckbands
  { 
    id: 8, 
    category: "audio", 
    name: "boAt Rockerz 255 Pro+ Wireless Neckband", 
    price: "Check on Amazon", 
    brand: "boAt", 
    link: "https://link.amazon/B078MBCVI" 
  },
  { 
    id: 9, 
    category: "audio", 
    name: "boAt Rockerz 255 ANC (100Hrs Battery, Active Noise Cancellation)", 
    price: "Check on Amazon", 
    brand: "boAt", 
    link: "https://link.amazon/B06Cp38Te" 
  }
];

export default function ShoppingTab() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">TSB Store - Curated Deals</h1>

      {/* कैटेगरी फिल्टर्स */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          { key: 'all', label: 'All Products' },
          { key: 'laptops', label: 'Laptops' },
          { key: 'phones', label: 'Smartphones' },
          { key: 'audio', label: 'Audio & Neckbands' }
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === cat.key 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-700 border hover:bg-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* प्रोडक्ट ग्रिड */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white border rounded-xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                {product.brand}
              </span>
              <h3 className="font-semibold text-gray-800 text-base mt-3 mb-4 line-clamp-3">
                {product.name}
              </h3>
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500">Best Price</span>
                <span className="text-sm font-bold text-green-600">{product.price}</span>
              </div>
              <a 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}