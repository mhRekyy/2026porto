import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { blueprint } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Blueprint = () => {
  const sectionRef = useRef(null);
  
  // State untuk melacak blueprint mana yang sedang di-hover/dilihat
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    // Animasi masuk barengan
    gsap.fromTo(
      ".bp-fade",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section 
      id="blueprint" 
      ref={sectionRef} 
      className="py-10 bg-[#050505] text-white relative overflow-hidden border-t border-white/5"
    >
      <div className="w-full h-full md:px-10 px-6 max-w-7xl mx-auto relative z-10">
        
        {/* EDITORIAL HEADER (Bersih tanpa p) */}
        <div className="bp-fade mb-16 md:mb-24">
          <TitleHeader
            title="The Blueprint"
            sub="Behind The Scenes"
            bgTitle="Process"
          />
        </div>

        {/* THE SPLIT-SCREEN VIEWPORT (Kiri List, Kanan Canvas + Copywriting) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* KOLOM KIRI: Daftar Menu Interaktif */}
          <div className="bp-fade lg:col-span-5 flex flex-col w-full border-t border-white/10">
            {blueprint.map((item, index) => {
              const isActive = activeIndex === index;
              const indexNumber = (index + 1).toString().padStart(2, '0');

              return (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)} // Fallback buat di HP biar bisa di-tap
                  className="group relative flex items-center justify-between py-6 md:py-8 border-b border-white/10 cursor-pointer overflow-hidden transition-all duration-300"
                >
                  {/* Efek Background Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#a8ff35]/5 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
                  
                  {/* Nomor & Judul */}
                  <div className="relative z-10 flex items-center gap-6 md:gap-8">
                    <span className={`font-mono text-sm tracking-widest transition-colors duration-300 ${isActive ? 'text-[#a8ff35]' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                      {indexNumber}
                    </span>
                    <h3 className={`text-xl md:text-3xl font-bold tracking-tight transition-all duration-300 transform ${isActive ? 'text-white translate-x-2' : 'text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-1'}`}>
                      {item.name}
                    </h3>
                  </div>

                  {/* Panah Indikator Kanan */}
                  <div className={`relative z-10 font-mono text-lg transition-all duration-300 ${isActive ? 'text-[#a8ff35] translate-x-0 opacity-100' : 'text-zinc-600 -translate-x-4 opacity-0 group-hover:opacity-50 group-hover:-translate-x-2'}`}>
                    →
                  </div>
                </div>
              );
            })}
          </div>

          {/* KOLOM KANAN: Viewport Dinamis + Copywriting di Bawah */}
          <div className="bp-fade lg:col-span-7 flex flex-col w-full">
            
            {/* CANVAS VIEWPORT */}
            <div className="w-full h-[400px] md:h-[480px] relative rounded-3xl border border-white/10 bg-[#0c0c0c] overflow-hidden group/canvas mb-8 shadow-2xl">
              
              {/* Grid Arsitektur di Background Kanan */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#a8ff35 1px, transparent 1px), linear-gradient(90deg, #a8ff35 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              {/* Aksen Crosshair ala Blueprint */}
              <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20"></div>
              <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20"></div>

              {/* KONTEN DINAMIS DENGAN ANIMASI FADE */}
              <div key={activeIndex} className="absolute inset-0 flex flex-col p-8 md:p-12 animate-canvas-fade">
                
                {/* Header Canvas */}
                <div className="flex justify-between items-start w-full">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#a8ff35] bg-[#a8ff35]/10 px-3 py-1 rounded-full border border-[#a8ff35]/20">
                    Step 0{activeIndex + 1}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600 uppercase">System.Active</span>
                </div>

                {/* Gambar / Ikon Utama di Tengah */}
                <div className="flex-1 flex items-center justify-center w-full relative">
                  <div className="absolute w-32 h-32 bg-[#a8ff35] rounded-full blur-[80px] opacity-10"></div>
                  <img 
                    src={blueprint[activeIndex].imgPath} 
                    alt={blueprint[activeIndex].name} 
                    className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl transform scale-95 group-hover/canvas:scale-105 transition-transform duration-700 ease-out relative z-10"
                  />
                </div>

                {/* Footer Canvas: Deskripsi Detail */}
                <div className="w-full border-t border-white/10 pt-6 mt-auto">
                  <h4 className="text-white font-bold text-2xl mb-2">
                    {blueprint[activeIndex].name}
                  </h4>
                  <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                    Stack & Tools: <span className="text-[#a8ff35] font-mono">{blueprint[activeIndex].mentions}</span>
                  </p>
                </div>

              </div>
            </div>

            {/* COPYWRITING NON-FORMAL (Dipindah ke bawah Canvas) */}
            <div className="pl-6 border-l-2 border-[#a8ff35]">
              <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                Bukan sekadar ngoding brutal. Ini adalah ritual dan eksekusi presisi dari nol sampai proyek siap <i className="text-white">live</i>.
              </p>
              <p className="text-zinc-600 font-mono text-xs tracking-widest uppercase mt-3">
                <span className="text-[#a8ff35]">✦</span> Hover index to explore pipeline
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Injeksi Keyframe */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes canvasFadeIn {
          0% { opacity: 0; transform: scale(0.98) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-canvas-fade {
          animation: canvasFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
};

export default Blueprint;