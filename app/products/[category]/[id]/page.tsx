"use client";
import { useParams, useRouter } from "next/navigation";
import { ALL_PRODUCTS } from "@/app/constants/data";
import Header from "@/app/components/Header";
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  Ruler, 
  Users, 
  ShieldCheck, 
  Zap, 
  Play,
  Box
} from "lucide-react";
import EnquiryModal from "@/app/components/EnquiryModal";
import ProductVideoModal from "@/app/components/Product3DModal"; // Assuming this handles video
import { useState } from "react";
import Image from "next/image";

export default function SingleProductPage() {
  const router = useRouter();
  const { category, id } = useParams();
  const [openVideo, setOpenVideo] = useState(false);

  // Find Product
  const product = ALL_PRODUCTS.find(
    (p) => p.id === id && p.categorySlug === category
  );

  if (!product) return <div className="p-20 text-center text-2xl font-bold text-gray-400">Product not found 😔</div>;

  // Helper to get icons/colors based on spec keys (trying to match the design)
  const getSpecStyle = (key:string) => {
    const k = key.toLowerCase();
    if (k.includes('dim') || k.includes('size')) return { icon: <Ruler size={20} className="text-blue-500" />, bg: 'bg-blue-50' };
    if (k.includes('cap') || k.includes('people')) return { icon: <Users size={20} className="text-purple-500" />, bg: 'bg-purple-50' };
    if (k.includes('warr')) return { icon: <ShieldCheck size={20} className="text-orange-500" />, bg: 'bg-orange-50' };
    if (k.includes('blow') || k.includes('power')) return { icon: <Zap size={20} className="text-green-500" />, bg: 'bg-green-50' };
    return { icon: <Box size={20} className="text-gray-500" />, bg: 'bg-gray-100' };
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-slate-800 font-sans">
      <Header />

      {/* Breadcrumbs & Back */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-4">
            <span className="cursor-pointer hover:text-purple-600" onClick={() => router.push('/')}>Home</span> 
            <span>/</span>
            <span className="cursor-pointer hover:text-purple-600 capitalize" onClick={() => router.push(`/products/${category}`)}>{category}</span>
            <span>/</span>
            <span className="text-purple-600 font-bold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="lg:w-1/2">
            {/* Main Image Container */}
            <div className="relative bg-white rounded-[2.5rem] p-2 shadow-xl border-[6px] border-white overflow-hidden group">
                
                {/* Best Seller Badge (Static for design match) */}
                <div className="absolute top-6 left-0 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-r-full shadow-md z-10 uppercase tracking-wider">
                    Best Seller
                </div>

                <div className="relative aspect-square w-full rounded-[2rem] overflow-hidden bg-sky-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* 3D/Video Trigger */}
                <button
                    onClick={() => setOpenVideo(true)}
                    className="absolute bottom-6 right-6 bg-white/90 backdrop-blur text-purple-700 p-3 rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition-all"
                >
                    <Play fill="currentColor" size={24} />
                </button>
            </div>

            {/* Thumbnails (Mocked layout - usually you map through product.gallery) */}
            <div className="flex gap-4 mt-6">
                <div className="w-24 h-24 rounded-2xl border-4 border-purple-600 p-1 bg-white cursor-pointer shadow-md">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image src={product.image} alt="thumb" fill className="object-cover" />
                    </div>
                </div>
                {/* Mock placeholders for design fidelity */}
                <div className="w-24 h-24 rounded-2xl border-2 border-transparent p-1 hover:bg-white hover:border-purple-200 cursor-pointer transition-all">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/50 flex items-center justify-center">
                        <Image src={product.image} alt="thumb" fill className="object-cover opacity-50" />
                    </div>
                </div>
                <div className="w-24 h-24 rounded-2xl border-2 border-transparent p-1 hover:bg-white hover:border-purple-200 cursor-pointer transition-all">
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-white/50 flex items-center justify-center">
                         <div className="bg-purple-100 rounded-full p-2"><Play size={20} className="text-purple-500" /></div>
                    </div>
                </div>
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            
            {/* Title & Reviews */}
            <h1 className="text-4xl md:text-5xl font-black text-[#5B21B6] mb-3 leading-tight font-[Nunito]">
                {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
                <div className="flex text-orange-400">
                    {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <span className="text-gray-400 text-sm font-medium">(128 Reviews)</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">In Stock</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
                <p className="text-4xl font-black text-slate-800">{product.price}</p>
                <p className="text-xl text-gray-400 line-through decoration-2 font-bold">$2,899.00</p>
            </div>

            {/* Dashed Description Box */}
            <div className="border-2 border-dashed border-purple-200 bg-white rounded-[2rem] p-6 mb-8 relative">
                <p className="text-gray-600 leading-relaxed">
                    Turn your backyard into the ultimate fun zone! This product features heavy-duty stitching, 
                    commercial-grade PVC, and vibrant colors. The more they play, the more they smile!
                </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                   <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Brand</span>
                        <span className="font-bold text-slate-700">{product.brand || 'Generic'}</span>
                   </div>
                   <div className="bg-gray-50 p-2 rounded-full"><Box size={20} className="text-gray-400"/></div>
                </div>
                
                {product.material && (
                     <div className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                     <div className="flex flex-col">
                          <span className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">Material</span>
                          <span className="font-bold text-slate-700">{product.material}</span>
                     </div>
                     <div className="bg-gray-50 p-2 rounded-full"><Box size={20} className="text-gray-400"/></div>
                  </div>
                )}

                {/* Map Dynamic Specs to Colorful Cards */}
                {product.specs && Object.entries(product.specs).map(([key, value]) => {
                    const style = getSpecStyle(key);
                    return (
                        <div key={key} className={`flex items-center justify-between ${style.bg} p-4 rounded-2xl`}>
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">{key}</span>
                                <span className="font-bold text-slate-800">{value}</span>
                            </div>
                            <div className="bg-white p-2 rounded-full shadow-sm">
                                {style.icon}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
                <div className="flex-1">
                    {/* Passing classNames to make EnquiryModal look like the button in the design */}
                    <div className="relative group">
                         <div className="absolute -inset-0.5 bg-orange-400 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
                         <div className="relative bg-orange-500 rounded-full w-full">
                            {/* We wrap the modal trigger to style it */}
                            <EnquiryModal 
                                productName={product.name} 
                                // You might need to adjust EnquiryModal to accept a custom trigger or styling
                                // If EnquiryModal renders a button inside, ensure it takes full width
                              
                            />
                         </div>
                    </div>
                </div>
                
                <button className="p-4 border-2 border-purple-200 rounded-full text-purple-500 hover:bg-purple-50 hover:border-purple-300 transition-colors">
                    <Heart size={24} />
                </button>
            </div>

          </div>
        </div>
      </div>

      <ProductVideoModal
        open={openVideo}
        onClose={() => setOpenVideo(false)}
        videoUrl={`/video/${product.id}.mp4`}
      />
    </div>
  );
}