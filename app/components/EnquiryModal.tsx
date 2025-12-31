"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { X, MessageCircle, Send, User, Phone, MapPin } from "lucide-react";

interface EnquiryModalProps {
  productName?: string;
  className?: string; // Added to allow parent to style the button width
}

export default function EnquiryModal({ productName, className }: EnquiryModalProps) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const openModal = () => {
    setOpen(true);
    // We use setTimeout to ensure the DOM elements exist before animating
    setTimeout(() => {
        gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );

        // "Back.out" gives it that bouncy balloon feel
        gsap.fromTo(
            modalRef.current,
            { scale: 0.5, opacity: 0, y: 50 },
            { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
        );
        
        // Stagger the form inputs
        if(formRef.current) {
            gsap.fromTo(
                formRef.current.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2 }
            );
        }
    }, 10);
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => setOpen(false),
    });

    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const message = `Hello, I am interested in *${productName}*.

Name: ${name}
Mobile: ${phone}
Address: ${address}`;

    const whatsappURL = `https://wa.me/9130816200?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    closeModal();
  };

  return (
    <>
      {/* TRIGGER BUTTON (Styled to match the design system) */}
      <button
        onClick={openModal}
        className={className || "w-full bg-orange-500 text-white py-4 rounded-full font-black text-lg hover:bg-orange-600 transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"}
      >
        <MessageCircle size={24} />
        <span>Get Quote</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 font-sans">
          {/* OVERLAY */}
          <div
            ref={overlayRef}
            onClick={closeModal}
            className="absolute inset-0 bg-[#5B21B6]/20 backdrop-blur-sm"
          />

          {/* MODAL */}
          <div
            ref={modalRef}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-2xl border-4 border-purple-50 overflow-hidden"
          >
             {/* Decorative Circle */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
             
             {/* Close Button */}
             <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors"
             >
                <X size={20} />
             </button>

            <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-2xl mb-3 rotate-3">
                    <MessageCircle size={28} />
                </div>
                <h2 className="text-2xl font-black text-[#5B21B6]">
                Get Best Price
                </h2>
                <p className="text-gray-400 text-sm font-medium mt-1">
                    Enquiring for: <span className="text-orange-500 font-bold">{productName}</span>
                </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Input */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5B21B6] transition-colors">
                    <User size={20} />
                </div>
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-purple-300 focus:bg-white p-4 pl-12 rounded-2xl outline-none font-bold text-slate-700 transition-all"
                />
              </div>

              {/* Phone Input */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5B21B6] transition-colors">
                    <Phone size={20} />
                </div>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-purple-300 focus:bg-white p-4 pl-12 rounded-2xl outline-none font-bold text-slate-700 transition-all"
                />
              </div>

              {/* Address Input */}
              <div className="relative group">
                <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#5B21B6] transition-colors">
                    <MapPin size={20} />
                </div>
                <textarea
                  name="address"
                  required
                  placeholder="Delivery Address / City"
                  rows={3}
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-purple-300 focus:bg-white p-4 pl-12 rounded-2xl outline-none font-bold text-slate-700 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-lg hover:bg-[#1fb855] hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                <span>Send via WhatsApp</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}