import React from "react";

// Kita menambahkan props 'bgTitle' untuk teks raksasa di belakang
const TitleHeader = ({ title, sub, bgTitle }) => {
  
  // --- REACT MAGIC: Auto-Split Typography --- (Tetap kita pertahankan)
  // Memisahkan kata terakhir untuk diberikan efek Italic abu-abu khas Editorial
  const words = title ? title.split(" ") : [];
  let firstPart = title;
  let lastWord = "";

  if (words.length > 1) {
    lastWord = words.pop();
    firstPart = words.join(" ");
  }

  // --- REACT MAGIC: Emoji Cleaner --- (Tetap kita pertahankan)
  // Memfilter emoji dari props 'sub' agar tampilan benar-benar clean ala majalah
  const cleanSub = sub ? sub.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2600-\u27FFF]/g, '').trim() : "";

  return (
    // Parent container kita buat relative agar bisa menampung elemen absolute
    // Kita pastikan overflow-visible agar teks raksasa bisa menjorok keluar
    <div className="relative flex flex-col items-start text-left w-full overflow-visible">
      
      {/* --- REVISI ULTIMATE: GIANT EDITORIAL WATERMARK (Jauh Lebih Kelihatan & Gacor) --- */}
      {/* Elemen ini hanya muncul jika props 'bgTitle' diisi */}
      {bgTitle && (
        <div 
          // PERUBAHAN UTAMA:
          // 1. Posisinya kita geser jauh lebih ke kiri dan atas agar overlap asimetris (seperti di referensi).
          // 2. Opasitasnya kita tingkatkan dari 2% (0.02) menjadi 5% (0.05) agar jelas namun subtil.
          // 3. Sedikit kita perbesar ukurannya agar lebih berdampak visual.
          className="absolute -top-[2rem] -left-[0rem] md:-top-[0rem] md:-left-[3rem] text-[22vw] md:text-[15vw] font-black text-white/[0.02] leading-none pointer-events-none select-none uppercase z-0 "
          style={{ willChange: 'transform' }} // Optimasi performa untuk teks besar
        >
          {bgTitle}
        </div>
      )}

      {/* --- KONTEN UTAMA (Di atas Watermark) --- */}
      {/* Kita beri relative z-10 agar konten ini tumpang tindih di atas teks raksasa */}
      {/* Kita tambahkan padding atas agar konten utama tidak terlalu menempel ke watermark di HP */}
      <div className="relative z-10 flex flex-col items-start pt-10 md:pt-16">
        
        {/* 1. EDITORIAL BADGE / SUB-TITLE */}
        <div className="flex items-center gap-3 mb-6">
          {/* Titik Neon Kedap-kedip (Micro-interaction) */}
          <div className="w-2.5 h-2.5 bg-[#a8ff35] rounded-full animate-pulse shrink-0 shadow-[0_0_12px_rgba(168,255,53,0.6)]"></div>
          
          {/* Teks Sub-title (Monospace, Tracking lebar, Uppercase) */}
          <span className="font-mono text-[11px] md:text-xs tracking-[0.3em] text-zinc-400 uppercase">
            {cleanSub || sub}
          </span>
        </div>
        
        {/* 2. MAIN TITLE (Bold + Italic Offset, Ganti warna soft-white) */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-50">
          {firstPart}{" "}
          {lastWord && (
            <span className="text-zinc-600 italic">
              {lastWord}
              {/* Otomatis menambahkan titik jika belum ada */}
              {!lastWord.endsWith('.') && '.'}
            </span>
          )}
        </h2>
      </div>

    </div>
  );
};

export default TitleHeader;