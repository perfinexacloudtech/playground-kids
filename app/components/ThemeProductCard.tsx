import { Plus, Star } from "lucide-react";
import Image from "next/image";

const ThemeProductCard = ({ product }: { product: any }) => (
  <div className="group relative bg-white border border-purple-50 hover:border-purple-200 rounded-[2rem] p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full">
    
    {/* Discount Badge */}
    <div className="absolute top-4 left-4 z-10 bg-[#FF4757] text-white text-[10px] font-black px-2 py-1 rounded-md uppercase transform -rotate-3">
      -20% OFF
    </div>

    {/* Image Area */}
    <div className="relative aspect-square bg-[#F0F9FF] rounded-[1.5rem] mb-4 overflow-hidden flex items-center justify-center p-4">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="object-contain w-full h-full mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
      />
      {/* Quick Add Button */}
      <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-purple-600 hover:bg-purple-600 hover:text-white transition-colors">
        <Plus size={18} />
      </button>
    </div>

    {/* Content */}
    <div className="flex flex-col flex-grow">
      <div className="flex items-center gap-1 mb-1">
        <Star size={12} className="fill-orange-400 text-orange-400" />
        <span className="text-xs font-bold text-slate-400">4.9</span>
      </div>
      
      <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight mb-2 line-clamp-2 group-hover:text-[#5B21B6] transition-colors">
        {product.name}
      </h4>

      <div className="mt-auto flex items-center gap-2">
        <span className="font-black text-lg text-[#5B21B6]">{product.price}</span>
        <span className="text-xs font-bold text-gray-300 line-through">$999</span>
      </div>
    </div>
  </div>
);


export default ThemeProductCard;