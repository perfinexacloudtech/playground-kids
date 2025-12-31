"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Castle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="relative mt-20">
      {/* 1. Playful Wave Separator (Transitions from Cream body to Purple Footer) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 -translate-y-[99%]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#5B21B6]"
          ></path>
        </svg>
      </div>

      {/* 2. Main Footer Container */}
      <footer className="bg-[#5B21B6] text-white pt-10 pb-10 px-6 font-sans">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* COLUMN 1: Brand & Bio */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-2 group">
                <Castle size={32} className="text-orange-400 fill-orange-400 group-hover:scale-110 transition-transform" />
                <span className="text-2xl font-black tracking-tight">
                  Family<span className="text-orange-400">Playground</span>
                </span>
              </Link>
              <p className="text-purple-200 leading-relaxed text-sm">
                The more I play, the more I smile. Bringing joy to families one bounce at a time.
                Safe, durable, and colorful fun for everyone!
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="bg-purple-800 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all hover:-translate-y-1">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 2: Products */}
            <div>
              <h3 className="text-orange-400 font-black text-lg mb-6 uppercase tracking-wider">Products</h3>
              <ul className="space-y-4">
                {['Bounce Castles', 'Water Slides', 'Obstacle Courses', 'Accessories', 'Commercial Grade'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-purple-200 hover:text-white hover:translate-x-1 inline-block transition-all">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: Support */}
            <div>
              <h3 className="text-orange-400 font-black text-lg mb-6 uppercase tracking-wider">Support</h3>
              <ul className="space-y-4">
                {['Contact Us', 'Shipping Policy', 'Warranty Info', 'Safety Guides', 'Track Order'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-purple-200 hover:text-white hover:translate-x-1 inline-block transition-all">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: Newsletter */}
            <div>
              <h3 className="text-orange-400 font-black text-lg mb-6 uppercase tracking-wider">Newsletter</h3>
              <p className="text-purple-200 text-sm mb-4">
                Subscribe for fun updates and exclusive deals! No spam, just bounces.
              </p>
              
              <form className="flex flex-col gap-3">
                 <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full pl-12 pr-4 py-3 rounded-xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
                    />
                 </div>
                 <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                    Subscribe <ArrowRight size={18} />
                 </button>
              </form>
            </div>

          </div>

          {/* 3. Copyright Bar */}
          <div className="border-t border-purple-400/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-300">
            <p>© 2026 Family Playground Inc. All rights reserved.</p>
            <div className="flex gap-6">
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
                <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}