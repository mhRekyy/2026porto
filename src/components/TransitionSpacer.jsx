import React from "react";

const TransitionSpacer = () => {
  return (
    // Section ini sangat compact, cuma butuh padding secukupnya
    <section className="relative w-full py-16 bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4 md:gap-8">

        {/* --- SISI KIRI: Metadata & Garis --- */}
        <div className="flex-1 flex flex-col gap-3 group cursor-crosshair">
          <span className="font-mono text-[8px] md:text-[10px] text-zinc-600 tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-zinc-300">
            Loc // Tapak Tuan, Aceh — ID
          </span>
          {/* Garis Horizontal dengan animasi interaktif */}
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[#a8ff35] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
          </div>
        </div>

        {/* --- TENGAH: The Digital Stamp (Signature Visual) --- */}
        <div className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 shrink-0 group cursor-pointer">
          
          {/* Teks Melingkar SVG (Berputar perlahan, makin cepat saat di-hover) */}
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] transition-all duration-500">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-zinc-500 group-hover:fill-[#a8ff35] transition-colors duration-500">
              {/* Path Lingkaran Tersembunyi untuk tempat teks menempel */}
              <path id="circlePath" fill="none" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              <text className="text-[10.5px] font-mono tracking-[0.16em] uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  • available for work • let's collaborate 
                </textPath>
              </text>
            </svg>
          </div>
          
          {/* Ikon Bintang di Tengah (Glow saat di-hover) */}
          <div className="text-zinc-500 group-hover:text-[#a8ff35] transition-colors duration-500 text-lg md:text-2xl group-hover:drop-shadow-[0_0_10px_#a8ff35]">
            ✦
          </div>
        </div>

        {/* --- SISI KANAN: Metadata & Garis --- */}
        <div className="flex-1 flex flex-col gap-3 items-end group cursor-crosshair">
          <span className="font-mono text-[8px] md:text-[10px] text-zinc-600 tracking-[0.2em] md:tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-zinc-300">
            Sys.Status // Online_
          </span>
          {/* Garis Horizontal dengan animasi interaktif dari kanan ke kiri */}
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[#a8ff35] translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TransitionSpacer;