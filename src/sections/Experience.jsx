import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  
  // State untuk melacak Accordion mana yang sedang terbuka. 
  // Set ke 0 agar pengalaman kerja terbaru langsung terbuka secara default. 
  // Ubah ke 'null' jika ingin semuanya tertutup di awal.
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    // Jika di-klik yang sama, tutup. Jika beda, buka yang baru.
    setActiveIndex(activeIndex === index ? null : index);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".exp-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    // Animasi masuk list saat di-scroll
    gsap.utils.toArray(".accordion-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 bg-[#050505] text-white relative overflow-hidden border-t border-white/5"
    >
      {/* Background Watermark Kasat Mata */}
      <div className="absolute top-40 -left-10 text-[10vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase rotate-90 origin-left">
        History
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
      
        {/* EDITORIAL HEADER */}
        <div className="exp-header mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
                {/* Background Typography (Watermark Style) */}
               <div className="absolute -left-40 text-[15vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase">
                Informatics
              </div>
              <div className="w-2 h-2 bg-[#a8ff35] rounded-full animate-pulse"></div>
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase">Career Overview</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
              Work <span className="text-zinc-600 italic">Experience.</span>
            </h2>
          </div>
        </div>

        {/* ACCORDION INDEX LIST */}
        <div className="flex flex-col border-t border-white/10">
          {expCards.map((card, index) => {
            const isActive = activeIndex === index;
            // Buat index angka bergaya editorial (01, 02, 03)
            const indexNumber = (index + 1).toString().padStart(2, '0');

            return (
              <div 
                key={index} 
                className={`accordion-item group border-b border-white/10 transition-colors duration-500 ${isActive ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}
              >
                {/* HEADER ACCORDION (Bisa di-klik) */}
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 gap-6 cursor-pointer text-left focus:outline-none"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full">
                    
                    {/* Nomor Index & Tahun */}
                    <div className="flex items-center gap-6 w-full md:w-3/12">
                      <span className="font-mono text-sm text-zinc-600">{indexNumber}</span>
                      <span className={`font-mono text-xs md:text-sm tracking-[0.1em] uppercase transition-colors duration-300 ${isActive ? 'text-[#a8ff35]' : 'text-zinc-400 group-hover:text-white'}`}>
                        {card.date}
                      </span>
                    </div>

                    {/* Judul Posisi / Perusahaan */}
                    <div className="w-full md:w-8/12">
                      <h3 className={`text-2xl md:text-4xl font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Icon Plus/Minus Interaktif */}
                  <div className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-[#a8ff35]/50 transition-colors duration-300">
                    <div className="relative w-4 h-4 flex items-center justify-center">
                      {/* Garis Horizontal (Selalu ada) */}
                      <span className={`absolute w-full h-[1.5px] transition-colors duration-300 ${isActive ? 'bg-[#a8ff35]' : 'bg-white'}`}></span>
                      {/* Garis Vertikal (Berputar dan menghilang jika aktif) */}
                      <span className={`absolute w-[1.5px] h-full transition-all duration-500 ease-out ${isActive ? 'rotate-90 bg-[#a8ff35] opacity-0' : 'rotate-0 bg-white opacity-100'}`}></span>
                    </div>
                  </div>
                </button>

                {/* CONTENT ACCORDION (Animasi Buka/Tutup pakai CSS Grid) */}
                <div 
                  className={`grid transition-all duration-700 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 pb-12' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-4 md:pl-[calc(25%+2rem)]">
                      
                      {/* Box Logo Perusahaan */}
                      <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 bg-[#121212] border border-white/10 rounded-2xl p-4 flex items-center justify-center">
                        <img 
                          src={card.logoPath} 
                          alt="company logo" 
                          className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      {/* Deskripsi Responsibilities */}
                      <div className="flex-1 max-w-2xl">
                        <span className="text-[#a8ff35] font-mono text-xs tracking-widest uppercase mb-6 block">
                          Key Responsibilities & Impact
                        </span>
                        <ul className="flex flex-col gap-4">
                          {card.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-4">
                              <span className="text-zinc-600 mt-1 text-[10px] uppercase">✦</span>
                              <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                                {resp}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;