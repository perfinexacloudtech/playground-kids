"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Heart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  category: string;
  image: string;
  hot?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const isDesktop =
    typeof window !== "undefined" && window.innerWidth >= 768;

  const onHover = () => {
    if (!isDesktop || !cardRef.current) return;
    gsap.to(cardRef.current, {
      y: -6,
      boxShadow: "0 20px 30px -10px rgba(0,0,0,0.15)",
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const onLeave = () => {
    if (!isDesktop || !cardRef.current) return;
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.25,
      ease: "power2.in",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group bg-white border border-slate-200 rounded-xl p-3 flex flex-col
                 min-h-[360px] sm:min-h-[400px] lg:min-h-[440px]
                 transition-all"
    >
      {/* Wishlist */}
      <button className="absolute top-3 right-3 z-10 text-slate-300 hover:text-red-500 transition">
        <Heart size={18} />
      </button>

      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={product.image || "/placeholder-product.jpg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   25vw"
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
          />

          {product.hot && (
            <span className="absolute bottom-2 left-2 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded">
              HOT DEAL
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-grow mt-3">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm sm:text-base lg:text-lg font-medium text-slate-800 line-clamp-2 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-900">
            {product.price}
          </span>

          {product.oldPrice && (
            <>
              <span className="text-xs text-slate-400 line-through">
                {product.oldPrice}
              </span>
              <span className="text-xs text-green-600 font-semibold">
                {product.discount}
              </span>
            </>
          )}
        </div>

        {/* Button */}
        <Link href={`/products/${product.id}`}>
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg
                       text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-widest
                       hover:bg-blue-700 transition shadow-sm"
          >
            Get Quote
          </button>
        </Link>
      </div>
    </div>
  );
}
