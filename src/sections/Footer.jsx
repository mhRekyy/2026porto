import React, { useState, useEffect } from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  // --- REACT MAGIC: Live Local Time (WIB) ---
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Jakarta", // Zona Waktu WIB (Aceh)
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Fungsi untuk scroll mulus ke paling atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-20 pb-0 overflow-hidden flex flex-col border-t border-white/10 group/footer">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 flex flex-col">
        
        {/* --- TOP ROW: Metadata & Live Clock (Super Editorial) --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24 border-b border-white/10 pb-8">
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
              Local Time // Aceh, ID
            </span>
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-5xl font-light tracking-tighter text-white font-mono">
                {timeString} <span className="text-[#a8ff35] text-xl animate-pulse">WIB</span>
              </span>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 hover:gap-6 transition-all duration-300"
          >
            <span className="font-mono text-xs tracking-widest uppercase text-zinc-400 group-hover:text-[#a8ff35] transition-colors">
              Back to Top
            </span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#a8ff35] group-hover:bg-[#a8ff35] transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-white group-hover:text-black transform -rotate-90 group-hover:-translate-y-1 transition-all duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </button>

        </div>

        {/* --- MIDDLE ROW: Links, Socials & Copyright --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-[15vw] md:mb-[12vw] z-10">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#a8ff35] rounded-full"></div>
              <p className="text-white font-medium text-lg">HUNTERUKU</p>
            </div>
            <p className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase max-w-xs">
              Designing digital experiences that fuse logic with cutting-edge aesthetics.
            </p>
            <a href="#" className="text-sm text-zinc-400 hover:text-[#a8ff35] transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#a8ff35] mt-2 w-fit">
              Terms & Conditions
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-4 lg:items-end">
            <p className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">Socials</p>
            <div className="flex items-center gap-4">
              {socialImgs.map((socialImg, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-[#121212] border border-white/5 flex items-center justify-center group/icon hover:bg-[#a8ff35] hover:border-[#a8ff35] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <img 
                    src={socialImg.imgPath} 
                    alt="social icon" 
                    // CLASS TAILWIND GUE BERSIHIN BIAR GA BENTROK SAMA CSS BAWAH
                    className="social-icon-img w-5 h-5 object-contain" 
                  />
                </a>
              ))}
            </div>
            <p className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase mt-4">
              © {new Date().getFullYear()} HUNTERUKU. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>

      <div className="absolute top-10 left-10 w-6 h-6 border-t border-l border-white/20 pointer-events-none hidden md:block"></div>
      <div className="absolute top-10 right-10 w-6 h-6 border-t border-r border-white/20 pointer-events-none hidden md:block"></div>

      <div className="absolute bottom-[-2%] left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[20vw] font-black uppercase tracking-tighter leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)] group-hover/footer:[-webkit-text-stroke:1px_rgba(168,255,53,0.3)] transition-all duration-1000 ease-out whitespace-nowrap">
          HUNTERUKU
        </h1>
      </div>

      {/* --- THE ULTIMATE CSS FILTER HACK --- */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 1. KONDISI DARK MODE (DEFAULT) */
        .social-icon-img {
          /* Paksa gambar apapun jadi PUTIH */
          filter: brightness(0) invert(1) !important;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .group\\/icon:hover .social-icon-img {
          /* Pas dihover (bg jadi ijo), paksa gambar jadi HITAM PEKAT */
          filter: brightness(0) !important;
          opacity: 1;
        }

        /* 2. KONDISI LIGHT MODE (LAYAR KE-INVERT) */
        html.invert-theme .social-icon-img {
          /* Karena layar membalik warna (invert), kita kirim gambar PUTIH biar di layar jadi HITAM */
          filter: brightness(0) invert(1) !important;
          opacity: 0.7;
        }
        html.invert-theme .group\\/icon:hover .social-icon-img {
          /* Pas dihover, kita tetep butuh hasil HITAM di layar, jadi kirim gambar PUTIH */
          filter: brightness(0) invert(1) !important;
          opacity: 1;
        }
      `}} />

    </footer>
  );
};

export default Footer;