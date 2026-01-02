"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Phone,
  Menu,
  X,
  Castle,
  PartyPopper,
  ChevronRight
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. TOP INFO BAR (Dark Purple to match Footer theme) */}
      <div className="hidden md:flex bg-[#5B21B6] text-white text-[11px] font-bold py-2 px-4 justify-between items-center tracking-wide">
        <div className="flex gap-4">
          <span>📍 Nagpur, Maharashtra</span>
          <span className="opacity-50">|</span>
          <span>GST: 27AAAAA0000A1Z5</span>
        </div>
        <a
          href="tel:8767134732"
          className="flex items-center gap-2 hover:text-orange-300 transition-colors"
        >
          <Phone size={12} fill="currentColor" />
          <span>Call Sales: +91 87671 34732</span>
        </a>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="sticky top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-50">
        <div className="max-w-[1440px] mx-auto px-4 py-4 md:py-5 flex items-center justify-between gap-4">
          {/* LEFT: Logo Section */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            {/* Logo Icon (Purple Rounded Square with Castle) */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#9333EA] rounded-xl md:rounded-2xl flex items-center justify-center shadow-md group-hover:rotate-3 transition-transform">
              <Castle
                className="text-white w-6 h-6 md:w-7 md:h-7"
                fill="currentColor"
              />
            </div>
            {/* Logo Text */}
            <span className="text-xl md:text-2xl font-black text-[#5B21B6] tracking-tight hidden sm:block">
              Playground<span className="text-[#9333EA]">World</span>
            </span>
          </Link>

          {/* CENTER: Search Bar (Hidden on mobile, visible on tablet+) */}
          {/* Matches the pill shape in your image */}
          <div className="hidden md:flex flex-1 max-w-xl relative mx-4 group">
            <input
              type="text"
              placeholder="Search for fun stuff..."
              className="w-full bg-white border-2 border-purple-100 rounded-full py-3 pl-12 pr-4 outline-none focus:border-[#9333EA] focus:ring-2 focus:ring-purple-100 transition-all text-sm font-bold placeholder:text-purple-300/70 text-slate-700"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9333EA] group-focus-within:scale-110 transition-transform"
              size={20}
              strokeWidth={2.5}
            />
          </div>

          {/* RIGHT: Desktop Navigation & CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Links */}
            <nav className="flex items-center gap-6 font-bold text-slate-600">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products/outdoor-gym" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#5B21B6] hover:scale-105 transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Orange with Party Icon) */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white pl-6 pr-5 py-3 rounded-full font-black text-sm shadow-lg shadow-orange-200 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <span>Get Quotes</span>
              <PartyPopper
                size={18}
                fill="currentColor"
                className="text-yellow-200"
              />
            </button>
          </div>

          {/* MOBILE TOGGLE (Visible only on small screens) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button className="p-2 bg-purple-50 text-[#5B21B6] rounded-full">
              <Search size={22} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#5B21B6]"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 3. MOBILE MENU DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-purple-50 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            {/* <nav className="flex flex-col space-y-2">
                    {['Products', 'Projects', 'Safety', 'Contact'].map((item) => (
                        <Link 
                            key={item} 
                            href={`/${item.toLowerCase()}`}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-purple-50 font-bold text-slate-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                            <ChevronRight size={16} className="text-purple-300" />
                        </Link>
                    ))}
                </nav> */}
            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-black shadow-md flex justify-center items-center gap-2">
              Get Quotes <PartyPopper size={18} />
            </button>
          </div>
        )}
      </header>
    </>
  );
}
