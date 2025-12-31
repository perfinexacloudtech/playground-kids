"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Props {
  open: boolean;
  onClose: () => void;
  videoUrl: string; // e.g. "/videos/product.mp4"
}

export default function ProductVideoModal({ open, onClose, videoUrl }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(open);
  const [videoError, setVideoError] = useState(false);

  // OPEN animation
  useEffect(() => {
    if (open) {
      setShow(true);
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    } else {
      // CLOSE animation
      gsap.to(modalRef.current, {
        scale: 0.85,
        opacity: 0,
        y: 40,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => setShow(false),
      });
    }
  }, [open]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white w-[95%] md:w-[800px] h-[450px] rounded-2xl relative overflow-hidden"
      >
        {/* ❌ Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 z-10 text-xl font-bold"
        >
          ✕
        </button>

        {/* 🎥 Video / Fallback */}
        {!videoError ? (
          <video
            src={videoUrl}
            controls
            autoPlay
            muted
            className="w-full h-full object-cover rounded-2xl"
            onError={() => setVideoError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-red-500 font-semibold">
            Video not available
          </div>
        )}
      </div>
    </div>
  );
}
