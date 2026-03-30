import React, { useState } from "react";

const ProjectSlider = ({ images, title, isFeatured }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // e.stopPropagation() ini kuncinya bray! Biar klik lu gak nembus ke elemen lain
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (e, index) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div className={`relative w-full h-full ${isFeatured ? 'aspect-video md:aspect-[16/10]' : 'aspect-[4/3] md:aspect-video'}`}>
      
      {/* 1. CONTAINER GAMBAR UTAMA */}
      <div className="relative overflow-hidden rounded-2xl bg-[#121212] border border-white/10 z-10 shadow-2xl h-full group/slider">
        
        {/* Render semua gambar pake sistem Tumpuk Bawang */}
        {images.map((img, imgIndex) => (
          <img
            key={imgIndex}
            src={img}
            alt={`${title} - Image ${imgIndex + 1}`}
            // PURE TAILWIND TRANSITION: Jauh lebih smooth dan anti-error!
            className={`absolute inset-0 w-full h-full object-cover object-top grayscale-[30%] group-hover/img:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] ${
              imgIndex === currentImageIndex 
                ? 'opacity-100 z-10 scale-100 pointer-events-auto' // Gambar aktif muncul
                : 'opacity-0 z-0 scale-105 pointer-events-none' // Gambar lain ngilang & ngezoom dikit
            }`}
          />
        ))}

        {/* Overlay gelap pas hover (Opsional) */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>

        {/* 3. TOMBOL NAVIGASI NEXT/PREV (Sekarang ada di DALAM kotak gambar) */}
        <button 
          onClick={prevImage} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-[#a8ff35] hover:scale-110 hover:border-transparent group/nav no-invert cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-white group-hover/nav:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button 
          onClick={nextImage} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:bg-[#a8ff35] hover:scale-110 hover:border-transparent group/nav no-invert cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 text-white group-hover/nav:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* 2. NAVIGASI DOTS (pagination) di luar gambar */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={(e) => goToImage(e, dotIndex)}
            className={`h-2.5 rounded-full border border-white/20 transition-all duration-500 ease-out cursor-pointer no-invert ${
              dotIndex === currentImageIndex 
                ? 'bg-[#a8ff35] w-8 border-transparent shadow-[0_0_15px_rgba(168,255,53,0.5)]' // Efek Neon pas nyala
                : 'bg-[#1a1a1a] w-2.5 hover:bg-white/20 hover:scale-125'
            }`}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default ProjectSlider;