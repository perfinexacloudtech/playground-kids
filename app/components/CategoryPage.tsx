"use client";
import { CATEGORIES } from "@/app/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryBar() {
  const pathname = usePathname();

  return (
    <div className=" bg-[#FFF9F0]/90 backdrop-blur-md py-3 md:py-4 border-b border-purple-100/50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Scrollable Container */}
        <div className="flex justify-start md:justify-center items-start overflow-x-auto gap-4 md:gap-8 no-scrollbar pb-2 px-2">
          {CATEGORIES.map((cat) => {
            
            // Check if this category is currently active
            const isActive = pathname?.includes(cat.slug);

            return (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                // 1. Added explicit width (w-[72px]) to force text wrapping on mobile
                // 2. Changed gap to gap-2
                className={`group flex flex-col items-center gap-2 w-[72px] md:w-auto md:min-w-[80px] transition-all duration-300 ${
                  isActive ? "scale-105 md:scale-110" : "hover:scale-105"
                }`}
              >
                {/* Image Bubble */}
                {/* 3. RESPONSIVE SIZES: w-16 h-16 for mobile, w-20 h-20 for desktop */}
                <div
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center p-3 md:p-4 shadow-sm border-[3px] transition-all duration-300 ${
                    isActive
                      ? "bg-white border-orange-500 shadow-orange-200 shadow-lg"
                      : "bg-white border-purple-100 group-hover:border-purple-300"
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className={`w-full h-full object-contain transition-all duration-300 ${
                       isActive ? "scale-110" : "grayscale-[30%] group-hover:grayscale-0"
                    }`}
                  />
                  
                  {/* Active Dot indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                {/* Text Label */}
                {/* 4. TEXT FIXES: 
                    - Removed 'whitespace-nowrap' for mobile (added md:whitespace-nowrap)
                    - Added 'text-center' and 'leading-tight' to handle 2-line wrapping nicely
                    - Reduced font size to text-[10px] on mobile
                */}
                <span
                  className={`text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors text-center leading-tight md:whitespace-nowrap ${
                    isActive
                      ? "text-orange-600"
                      : "text-slate-500 group-hover:text-[#5B21B6]"
                  }`}
                >
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}