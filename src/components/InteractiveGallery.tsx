"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StudioZoomProps {
  src: string;
  alt: string;
  className?: string;
  isTransparent?: boolean;
}

export const StudioZoom: React.FC<StudioZoomProps> = ({ src, alt, className, isTransparent = false }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden cursor-crosshair ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${isTransparent ? "opacity-90" : ""}`}
          priority
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
      </motion.div>
      
      {/* Zoom Indicator */}
      <div className="absolute bottom-6 right-6 z-10 bg-background/80 backdrop-blur-sm px-4 py-2 border border-stone/20">
        <span className="text-[8px] tracking-[0.3em] font-bold text-accent uppercase">
          {isHovered ? "Detail View" : "Explore Detail"}
        </span>
      </div>
    </div>
  );
};

interface GalleryCarouselProps {
  images: string[];
  title: string;
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full">
      {/* Museum Title & Pagination Overlay */}
      <div className="flex justify-between items-center mb-10 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
           <span className="text-accent text-[10px] tracking-[0.5em] font-bold uppercase">GALLERY</span>
           <span className="h-[1px] w-12 bg-stone/30" />
           <span className="text-[10px] tracking-[0.2em] font-medium opacity-40 uppercase italic">{title}</span>
        </div>
        <div className="text-[10px] tracking-[0.5em] font-bold text-foreground">
          {String(currentIndex + 1).padStart(2, '0')} <span className="mx-2 opacity-20">/</span> {String(images.length).padStart(2, '0')}
        </div>
      </div>

      {/* Main Slider Area */}
      <div className="relative aspect-[16/10] md:aspect-video max-w-6xl mx-auto overflow-hidden bg-stone/5">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 flex items-center justify-center p-4 md:p-12 lg:p-24"
          >
            <div className="framed-print relative w-full h-full">
               <StudioZoom 
                 src={images[currentIndex]} 
                 alt={`Slide ${currentIndex}`} 
                 className="w-full h-full transition-all duration-1000"
               />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="absolute left-10 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-stone/20 flex items-center justify-center bg-background/20 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-700"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <button
          className="absolute right-10 top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-stone/20 flex items-center justify-center bg-background/20 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-700"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>

      {/* Slider Progress Bar */}
      <div className="h-[1px] w-full bg-stone/10 mt-12 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-accent"
          animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};
