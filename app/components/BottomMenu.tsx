"use client";
import React from "react";
import Link from "next/link";
import { Home, Grid, MessageSquare, PhoneCall, Package } from "lucide-react";

export default function BottomMenu() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-2 z-[100] flex justify-between items-center shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <Link href="/" className="flex flex-col items-center gap-1 text-blue-600">
        <Home size={20} />
        <span className="text-[10px] font-bold">Home</span>
      </Link>
      <Link href="/categories" className="flex flex-col items-center gap-1 text-slate-500">
        <Grid size={20} />
        <span className="text-[10px] font-medium">Categories</span>
      </Link>
      <Link href="/products" className="flex flex-col items-center gap-1 text-slate-500">
        <Package size={20} />
        <span className="text-[10px] font-medium">Products</span>
      </Link>
      <Link href="/contact" className="flex flex-col items-center gap-1 text-slate-500">
        <MessageSquare size={20} />
        <span className="text-[10px] font-medium">Enquiry</span>
      </Link>
      <a href="tel:08048988035" className="flex flex-col items-center gap-1 text-slate-500">
        <PhoneCall size={20} />
        <span className="text-[10px] font-medium">Call</span>
      </a>
    </div>
  );
}