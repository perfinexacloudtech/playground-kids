"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TOP_DEALS } from "@/app/constants/data";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryPage";
import ProductCard from "./components/ProductsCard";
import BottomMenu from "./components/BottomMenu";
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";
import ThemeProductCard from "./components/ThemeProductCard";
import Footer from "./components/Footer";

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.from(".reveal-item", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  const BANNERS = [
    { id: 1, img: "/images/background-1.jpg", title: "Quality Play Equipment" },
    { id: 2, img: "/images/background-2.jpg", title: "Outdoor Gym Solutions" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main ref={mainRef} className="bg-slate-100 min-h-screen">
      <Header />

      {/* CategoryBar should handle its own overflow-x-auto for mobile swiping */}
      <CategoryBar />

      {/* Hero Banner Section */}
      <section className="max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-8 mt-4">
        <div className="relative h-[220px] sm:h-[350px] lg:h-[480px] w-full rounded-xl overflow-hidden shadow-lg group">
          {/* Banner Images */}
          {BANNERS.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={banner.img}
                className="w-full h-full object-cover"
                alt={banner.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
                <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black mb-4 uppercase leading-tight">
                  {banner.title.split(" ").slice(0, 2).join(" ")} <br />{" "}
                  {banner.title.split(" ").slice(2).join(" ")}
                </h2>
                <div className="flex gap-3">
                  <button className="bg-blue-600 px-6 py-2.5 rounded font-bold text-sm">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
         

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {BANNERS.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all rounded-full ${
                  i === current ? "w-8 bg-blue-600" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

<section className="bg-[#FFF9F0] py-12 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main Container with Dashed Border */}
        <div className="relative bg-white rounded-[3rem] p-6 sm:p-10 border-[3px] border-dashed border-purple-200 shadow-sm">
          
          {/* Decorative Elements (Optional) */}
          <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 font-black text-xs px-4 py-2 rounded-full shadow-sm rotate-6 border-2 border-white">
            LIMITED TIME OFFER ⚡
          </div>

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-8 gap-4">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <div className="bg-orange-100 p-2 rounded-full">
                        <Zap size={20} className="text-orange-500 fill-orange-500" />
                    </div>
                    <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">Don't Miss Out</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-[#5B21B6] tracking-tight">
                Deals on Top Categories
                </h3>
            </div>

            <Link href="/" className="hidden group md:flex items-center gap-2 bg-slate-50 hover:bg-purple-50 text-slate-600 hover:text-purple-700 px-6 py-3 rounded-full font-bold transition-all text-sm">
              <span className="">View All Deals</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Fully Responsive Grid System */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {TOP_DEALS.slice(0, 4).map((p) => (
              // Using the wrapper defined above, or your existing ProductCard
              <ThemeProductCard key={p.id} product={p} />
            ))}
          </div>
          
        </div>
      </div>
    </section>

      {/* <BottomMenu /> */}

      <Footer />
    </main>
  );
}
