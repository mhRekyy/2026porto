import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text-line",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power2.out" }
    );
  });

  return (
    <section id="hero" className="relative w-full bg-[#000000] min-h-[100dvh] flex flex-col pt-32 pb-10 overflow-hidden font-sans ml-auto mr-auto">

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 relative z-10 mb-10 md:mb-20">
        
        {/* KIRI: Profile Image */}
        <figure className="w-full md:w-5/12 flex justify-center md:justify-start mt-8 md:mt-0 order-2 md:order-1 relative">
          
          <div className="relative">
            {/* Foto profil */}
            <div className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[480px] bg-[#151515] rounded-t-3xl rounded-b-full overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="/images/reky.jpg" 
                alt="Reky" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* BARU: Floating Name Tag dengan Glassmorphism */}
            {/* Menggunakan sedikit rotasi (-rotate-3) yang akan lurus saat di-hover */}
            <div className="absolute bottom-6 -left-2 md:bottom-12 md:-left-8 bg-[#121212]/80 backdrop-blur-md border border-white/10 px-5 py-3 md:px-7 md:py-4 rounded-2xl shadow-2xl z-30 transform -rotate-3 hover:rotate-0 transition-all duration-300 group cursor-default">
              <h2 className="text-white font-bold text-base md:text-lg tracking-wide group-hover:text-[#a8ff35] transition-colors duration-300">
                Muhammad Reky
              </h2>
              <p className="text-zinc-400 text-xs md:text-sm font-medium mt-0.5 tracking-wider uppercase">
                Informatics • Designer • Coder
              </p>
            </div>

            {/* Circular Badge */}
            <div className="absolute -bottom-6 -right-8 md:bottom-8 md:-right-16 w-28 h-28 md:w-36 md:h-36 bg-[#0a0a0a] rounded-full flex items-center justify-center p-2 shadow-2xl z-30">
              <div className="relative w-full h-full flex items-center justify-center border border-white/10 rounded-full group/badge cursor-pointer">
                
                {/* Teks Berputar (Diperhalus warnanya menjadi zinc-400 agar tidak terlalu mencolok) */}
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                  <path id="circlePath" fill="none" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  <text className="text-[10px] md:text-[11px] fill-zinc-400 font-light tracking-[0.25em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      • LETS TALK • LETS TALK • LETS TALK 
                    </textPath>
                  </text>
                </svg>
                
                {/* Tombol Interaktif (Diberi bg gelap dan border tipis agar pop-out dari teks) */}
                <a 
                  href="#about" 
                  className="absolute w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#121212] border border-white/5 hover:bg-[#a8ff35] transition-colors duration-300 z-40"
                  aria-label="Scroll to About Section"
                >
                  {/* PENGGUNAAN SVG ARROW BUKAN TEKS */}
                  {/* Ini memastikan panah selalu ramping, tajam, dan berada tepat di tengah (pixel-perfect) */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.25" 
                    stroke="currentColor" 
                    className="w-5 h-5 md:w-6 md:h-6 text-white group-hover/badge:text-black transform -rotate-45 group-hover/badge:rotate-45 transition-transform duration-500 ease-in-out"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </figure>

        {/* KANAN: Hero Content */}
        <header className="flex flex-col justify-center w-full md:w-7/12 order-1 md:order-2">
          <div className="flex flex-col gap-5 md:gap-7">
            
            <div className="hero-text text-[36px] md:text-[46px] lg:text-[56px] font-normal tracking-tight text-white leading-[1.12]">
              <h1 className="hero-text-line flex flex-wrap items-center gap-2 md:gap-3">
                Shaping
                
                <span className="slide text-[#a8ff35] font-medium relative inline-flex items-center overflow-hidden align-middle h-[46px] md:h-[58px] lg:h-[68px] px-1 md:px-2 -translate-y-1">
                  <span className="wrapper flex flex-col">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="slide-item flex items-center justify-start gap-2 h-[46px] md:h-[58px] lg:h-[68px] pb-1"
                      >
                        <img
                          src={word.imgPath}
                          alt="icon"
                          className="size-8 md:size-10 lg:size-12 p-1.5 rounded-full bg-white/10 backdrop-blur-md object-contain"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="hero-text-line">into Real Projects that</h1>
              <h1 className="hero-text-line">Deliver Results.</h1>
            </div>

            <p className="hero-text-line text-zinc-400 text-sm md:text-[17px] max-w-lg leading-relaxed font-light tracking-wide">
              Hi, I’m Reky, a graphic designer with a passion for code. I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.
            </p>

            <div className="hero-text-line w-fit mt-3 relative z-20">
              <button className="inline-block w-fit h-auto px-8 py-3 rounded-full bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm md:text-base tracking-wide cursor-pointer">
                My Resume
              </button>
            </div>
          </div>
        </header>
        
      </div>

      {/* BAWAH: Counter Component */}
      <div className="relative w-full z-20 px-6 md:px-10 max-w-8xl mx-auto mt-0 pb-5">
        <div className="w-full border-t border-white/10 pt-10">
          <AnimatedCounter />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .wrapper {
          animation: wordSlider 9s infinite cubic-bezier(0.77, 0, 0.175, 1);
        }
        @keyframes wordSlider {
          0%, 25% { transform: translateY(0%); }          /* Kata 1 */
          33%, 58% { transform: translateY(-33.33%); }    /* Kata 2 */
          66%, 91% { transform: translateY(-66.66%); }    /* Kata 3 */
          100% { transform: translateY(0%); }             /* Loop kembali */
        }
      `}} />
    </section>
  );
};

export default Hero;