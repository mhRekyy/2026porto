import React, { useState, useEffect } from "react";
import gsap from "gsap";

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = (e) => {
    // 1. Dapatkan posisi X dan Y dari titik klik mouse lu
    const x = e.clientX;
    const y = e.clientY;

    // 2. Bikin elemen "Ripple" (Gelombang) yang bakal meledak nutup layar
    const ripple = document.createElement("div");
    ripple.className = "fixed z-[9999] pointer-events-none rounded-full bg-white mix-blend-difference";
    
    // Set ukuran awal sekecil titik di lokasi klik
    ripple.style.width = "2px";
    ripple.style.height = "2px";
    ripple.style.left = `${x - 1}px`;
    ripple.style.top = `${y - 1}px`;
    document.body.appendChild(ripple);

    // 3. Animasi GSAP tingkat dewa: Melebar nutup layar -> Switch Tema -> Memudar
    gsap.to(ripple, {
      scale: 3000, // Perbesar ribuan kali lipat biar nutup ujung layar
      duration: 1, // Durasi smooth yang bikin mata nyaman
      ease: "power3.inOut",
      onComplete: () => {
        // Switch tema pas layar udah ketutup penuh
        setIsLight(!isLight);
        
        // Setelah ganti tema, pudarkan ripplenya pelan-pelan
        gsap.to(ripple, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(), // Bersihin elemen dari HTML
        });
      },
    });
  };

  useEffect(() => {
    // 4. Injeksi class CSS Invert (Trik Brutalist kita)
    const htmlEl = document.documentElement;
    if (isLight) {
      htmlEl.classList.add("invert-theme");
    } else {
      htmlEl.classList.remove("invert-theme");
    }
  }, [isLight]);

  return (
    <>
      {/* FLOATING MINIMALIST BUTTON (Pojok Kanan Bawah) */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9000] no-invert">
        <button
          onClick={toggleTheme}
          className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl hover:border-[#a8ff35] transition-all duration-500 hover:scale-110 overflow-hidden relative"
          aria-label="Toggle Theme"
        >
          {/* Efek Glow hijau halus dari dalem pas di-hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#a8ff35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Ikon Elegan (Matahari / Bulan) */}
          <div className="relative z-10 text-zinc-400 group-hover:text-[#a8ff35] transition-colors duration-500">
            {isLight ? (
              // Sun Icon (Minimalist) yang muter pelan
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 animate-[spin_8s_linear_infinite]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            ) : (
              // Moon Icon (Minimalist) yang mengayun pas dihover
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </div>
        </button>
      </div>

      {/* CSS MAGIC */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Hack Invert Reality */
        html.invert-theme {
          filter: invert(1) hue-rotate(180deg);
          background-color: #050505;
        }
        
        /* Proteksi elemen yang gak boleh berubah warnanya (Foto, Video, Tombol ini sendiri) */
        html.invert-theme img,
        html.invert-theme video,
        html.invert-theme .no-invert {
          filter: invert(1) hue-rotate(180deg);
        }

        /* Karena kita pakai transisi ripple GSAP nutup layar, CSS transisi dimatikan
           Biar pergantian tema di baliknya itu instan tapi ketutup animasi smooth! */
        html {
          transition: filter 0s;
        }
      `}} />
    </>
  );
};

export default ThemeToggle;