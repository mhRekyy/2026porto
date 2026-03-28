import React, { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text-line",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1.2, ease: "expo.out", delay: 0.2 }
    );
  });

  return (
    <section id="hero" className="relative w-full bg-[#050505] min-h-[100dvh] flex flex-col justify-center pt-32 pb-10 overflow-hidden font-sans">

      {/* Ornamen Grid Halus di Background Kanan */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(#a8ff35 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 relative z-10 mb-10 md:mb-20">
        
        {/* KIRI: Profile Image & Badges */}
        <figure className="w-full md:w-5/12 flex justify-center md:justify-start mt-8 md:mt-0 order-2 md:order-1 relative z-20">
          
          {/* Efek Glow 3D di belakang gambar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#a8ff35] rounded-full blur-[100px] opacity-10 pointer-events-none z-0"></div>

          <div className="relative z-10">
            {/* Foto profil dengan Frame Crosshair */}
            <div className="relative p-2 border border-white/5 rounded-t-[2rem] rounded-b-full">
              {/* Ornamen Sudut (Print Marks) */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30"></div>
              
              <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[480px] bg-[#151515] rounded-t-3xl rounded-b-full overflow-hidden shadow-2xl group/image">
                <img 
                  src="/images/reky.jpg" 
                  alt="Reky" 
                  className="w-full h-full object-cover grayscale group-hover/image:grayscale-0 transition-all duration-700 group-hover/image:scale-105"
                />
              </div>
            </div>

            {/* NEW SWEETENER: Floating Glass Pill (Kiri Atas) */}
            <div className="absolute -top-4 -left-4 md:-top-2 md:-left-6 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full z-40 animate-float-delayed flex items-center gap-2 shadow-xl cursor-default">
              <div className="w-1.5 h-1.5 bg-[#a8ff35] rounded-full animate-pulse"></div>
              <span className="font-mono text-[8px] md:text-[9px] text-zinc-300 tracking-widest uppercase">Design</span>
            </div>

            {/* Floating Name Tag (Tetap di Kiri Bawah, ditambah animasi melayang 3D) */}
            <div className="absolute bottom-6 -left-4 md:bottom-12 md:-left-12 z-40 animate-float">
              <div className="bg-[#121212]/90 backdrop-blur-md border border-white/10 px-5 py-3 md:px-7 md:py-4 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-300 group cursor-default">
                <div className="flex items-center justify-between gap-6 mb-1">
                  <h2 className="text-white font-bold text-base md:text-lg tracking-wide group-hover:text-[#a8ff35] transition-colors duration-300">
                    Muhammad Reky
                  </h2>
                  <span className="font-mono text-[8px] md:text-[9px] text-zinc-600 tracking-[0.2em]">ID:2308107010069</span>
                </div>
                <p className="text-zinc-400 text-xs md:text-[13px] font-medium mt-0.5 tracking-wider uppercase">
                  Informatics • Designer • Coder
                </p>
              </div>
            </div>

            {/* Circular Badge Interaktif */}
            <div className="absolute -top-6 -right-6 md:top-10 md:-right-14 w-28 h-28 md:w-36 md:h-36 bg-[#050505] rounded-full flex items-center justify-center p-2 shadow-2xl z-40 animate-float-delayed">
              <div className="relative w-full h-full flex items-center justify-center border border-white/10 rounded-full group/badge cursor-pointer hover:border-[#a8ff35]/30 transition-colors duration-500">
                
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
                  <path id="circlePath" fill="none" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  <text className="text-[10px] md:text-[11.5px] fill-zinc-500 font-mono tracking-[0.2em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      • LETS TALK • LETS TALK • LETS TALK 
                    </textPath>
                  </text>
                </svg>
                
                <a 
                  href="#contact" 
                  className="absolute w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#121212] border border-white/10 hover:bg-[#a8ff35] transition-colors duration-300 z-50"
                  aria-label="Scroll to Contact Section"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/badge:text-black transform -rotate-45 group-hover/badge:rotate-45 transition-transform duration-500 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </figure>

        {/* KANAN: Hero Content */}
        <header className="flex flex-col justify-center w-full md:w-7/12 order-1 md:order-2 z-20">
          <div className="flex flex-col gap-6 md:gap-8 relative">
            
            {/* SWEETENER: 3D Rotating Asterisk di belakang text */}
            <div className="absolute -top-10 right-10 text-zinc-800 opacity-20 text-8xl font-black animate-[spin_20s_linear_infinite] pointer-events-none">
              ✦
            </div>

            <div className="hero-text text-[38px] md:text-[48px] lg:text-[60px] font-normal tracking-tight text-white leading-[1.05] relative z-10">
              <h1 className="hero-text-line flex flex-wrap items-center gap-2 md:gap-3">
                Shaping
                
                <span className="slide text-[#a8ff35] font-medium relative inline-flex items-center overflow-hidden align-middle h-[48px] md:h-[60px] lg:h-[72px] px-1 md:px-2 -translate-y-1">
                  <span className="wrapper flex flex-col">
                    {words.map((word, index) => (
                      <span key={index} className="slide-item flex items-center justify-start gap-2 h-[48px] md:h-[60px] lg:h-[72px] pb-1">
                        
                        {/* REVISI: Bg Kaca dipisah ke div, Ikon ditaruh di dalam dengan class khusus */}
                        <div className="size-8 md:size-10 lg:size-12 p-2 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-inner">
                          <img 
                            src={word.imgPath} 
                            alt="icon" 
                            className="slider-icon-img w-full h-full object-contain" 
                          />
                        </div>

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="hero-text-line">into Real Projects that</h1>
              <h1 className="hero-text-line text-zinc-300 italic flex items-center gap-4">
                Deliver Results. 
                <span className="text-[#a8ff35] text-2xl md:text-3xl animate-pulse not-italic">✦</span>
              </h1>
            </div>

            {/* THE SKILL AXIS */}
            <div className="hero-text-line mt-2 flex flex-col gap-4 border-l-2 border-white/10 pl-5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#a8ff35] rounded-full animate-pulse shadow-[0_0_8px_#a8ff35]"></div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  Core Disciplines //
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['Graphic Design', 'Web Development', 'Machine Learning'].map((skill, idx) => (
                  <span key={idx} className="font-mono text-[9px] md:text-[10px] text-zinc-300 border border-white/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider bg-white/[0.02] hover:border-[#a8ff35]/50 hover:text-[#a8ff35] transition-colors cursor-default hover:-translate-y-1 transform duration-300 shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Resume yang Lebih Editorial */}
            <div className="hero-text-line w-fit mt-6">
              <button className="group flex items-center gap-4 px-8 py-3.5 rounded-full bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-[#a8ff35] transition-all duration-300 shadow-lg hover:shadow-[#a8ff35]/20">
                <span>Access Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

          </div>
        </header>
        
      </div>

      {/* BAWAH: Counter Component */}
      <div className="relative w-full z-20 mx-auto">
        <div className="w-full">
          <AnimatedCounter />
        </div>
      </div>

      {/* CSS Animasi Tambahan & HACK FILTER */}
      <style dangerouslySetInnerHTML={{__html: `
        .wrapper {
          animation: wordSlider 9s infinite cubic-bezier(0.77, 0, 0.175, 1);
        }
        @keyframes wordSlider {
          0%, 25% { transform: translateY(0%); }
          33%, 58% { transform: translateY(-33.33%); }
          66%, 91% { transform: translateY(-66.66%); }
          100% { transform: translateY(0%); }
        }
        
        /* Fisika Melayang 3D */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }

        /* --- THE ICON FILTER HACK --- */
        /* Memaksa ikon apapun (gelap/terang) jadi PUTIH BERSIH di dalam kotak */
        .slider-icon-img {
          filter: brightness(0) invert(1) !important;
          opacity: 1; 
        }

        /* Saat Light Mode aktif, filter tetap dipertahankan. 
           Karena HTML-nya yang meng-invert warna keseluruhan layar,
           warna putih ini akan otomatis terbalik menjadi HITAM PEKAT di mata user! */
        html.invert-theme .slider-icon-img {
          filter: brightness(0) invert(1) !important;
        }
      `}} />
    </section>
  );
};

export default Hero;