"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Heart, ShoppingCart, Star, LayoutGrid, List } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Gold Standard Whey Protein",
    brand: "Optimum Nutrition",
    price: 2365,
    originalPrice: 3650,
    discount: "-32%",
    rating: 5,
    reviews: 350,
    image: "/whey-black.png", // Replace with your image paths
  },
  {
    id: 2,
    name: "Gold Standard Whey Protein",
    brand: "Big Muscles",
    price: 2365,
    originalPrice: 3650,
    rating: 5,
    reviews: 350,
    image: "/frotein.png",
  },
  {
    id: 3,
    name: "Gold Standard Whey Protein",
    brand: "MyFitness",
    price: 2365,
    originalPrice: 3650,
    rating: 5,
    reviews: 350,
    image: "/peanut-butter.png",
  },
];

export default function ProductPage() {
  const gridRef = useRef(null);

  useEffect(() => {
    // GSAP Entrance Animation
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen font-sans text-slate-800">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Product List <span className="text-gray-400 font-normal">(56)</span>
        </h1>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by</span>
            <select className="border border-gray-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Low to High</option>
              <option>High to Low</option>
              <option>Newest</option>
            </select>
          </div>
          <div className="flex border border-gray-200 rounded-md overflow-hidden">
            <button className="p-2 bg-gray-50 hover:bg-white border-r border-gray-200"><List size={18} /></button>
            <button className="p-2 bg-white text-blue-600"><LayoutGrid size={18} /></button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="product-card group flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-square bg-[#f9f9f9] rounded-xl flex items-center justify-center p-8 transition-transform duration-300 group-hover:scale-[1.02]">
              {product.discount && (
                <div className="absolute top-4 left-4 bg-[#e54b4b] text-white text-xs font-bold w-12 h-12 flex items-center justify-center rounded-full shadow-lg animate-pulse" 
                     style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
                  {product.discount}
                </div>
              )}
              
              <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>

              {/* Placeholder for Product Image */}
              <div className="w-48 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-xs text-gray-400 italic">Image Placeholder</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="py-4 px-1">
              <h3 className="text-xl font-semibold leading-tight mb-2 hover:text-blue-600 cursor-pointer">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                ))}
                <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-400 line-through text-sm">₹{product.originalPrice.toLocaleString()}</span>
              </div>

              {/* Buttons */}
              <button className="w-full py-3 px-4 border border-gray-200 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 group-active:scale-95">
                <ShoppingCart size={18} />
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}