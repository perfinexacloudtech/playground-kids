"use client";
import { useParams } from "next/navigation";
import { ALL_PRODUCTS } from "@/app/constants/data";
import Link from "next/link";
import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react";
import Header from "@/app/components/Header";
import CategoryBar from "@/app/components/CategoryPage";

export default function CategoryListing() {
  const params = useParams();
  
  // 1. Ensure categorySlug exists
  const categorySlug = params?.category as string;

  if (!categorySlug) return <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center text-[#5B21B6] font-bold text-xl">Loading...</div>;

  // 2. Filter products
  const filteredProducts = ALL_PRODUCTS.filter(
    (p) => p.categorySlug === categorySlug
  );

  // 3. Handle Empty State
  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF9F0]">
        <Header />
        <CategoryBar />
        <div className="max-w-7xl mx-auto p-20 text-center">
          <h2 className="text-3xl font-black text-[#5B21B6] mb-4">No products found 😔</h2>
          <p className="text-gray-500 mb-8">We couldn't find anything in "{categorySlug.replace(/-/g, " ")}".</p>
          <Link href="/" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0] font-sans">
      <Header />
      
      {/* Add a wrapper or padding if CategoryBar needs it */}
      <div className="pt-4">
         <CategoryBar />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-black text-[#5B21B6] capitalize mb-2">
                    {categorySlug.replace(/-/g, " ")}
                </h1>
                <p className="text-gray-400 font-medium">Find the perfect inflatable for your event</p>
            </div>
            
            <span className="self-start md:self-center bg-purple-100 text-[#5B21B6] font-bold py-2 px-6 rounded-full text-sm">
                {filteredProducts.length} Results
            </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col bg-white p-4 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                
                {/* Image Card */}
                <Link href={`/products/${categorySlug}/${product.id}`} className="relative aspect-square bg-sky-50 rounded-[1.5rem] overflow-hidden">
                    {/* Hover Zoom Effect */}
                    <div className="w-full h-full flex items-center justify-center p-6">
                         <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm mix-blend-multiply" 
                        />
                    </div>

                    {/* Badge (Optional - hardcoded for demo) */}
                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Sale
                    </div>

                    {/* Wishlist Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-gray-400 hover:text-red-500 hover:scale-110 transition-all">
                        <Heart size={20} />
                    </button>
                </Link>

                {/* Content */}
                <div className="px-2 pt-5 pb-2 flex flex-col flex-grow">
                    {/* Brand */}
                    <div className="flex items-center justify-between mb-2">
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{product.brand || 'Premium'}</span>
                         <div className="flex items-center gap-1">
                             <Star size={14} className="fill-orange-400 text-orange-400" />
                             <span className="text-xs font-bold text-slate-600">4.8</span>
                         </div>
                    </div>

                    {/* Title */}
                    <Link href={`/products/${categorySlug}/${product.id}`}>
                        <h3 className="text-xl font-black text-slate-800 leading-tight mb-2 group-hover:text-[#5B21B6] transition-colors">
                            {product.name}
                        </h3>
                    </Link>

                    <div className="mt-auto pt-4 flex items-center justify-between">
                        <div className="flex flex-col">
                             <span className="text-gray-400 text-xs line-through font-bold">$2,899</span>
                             <span className="text-2xl font-black text-[#5B21B6]">{product.price}</span>
                        </div>
                        
                        {/* Action Button */}
                        <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-200 hover:bg-orange-600 hover:scale-105 transition-all">
                             <ShoppingCart size={20} />
                        </button>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}