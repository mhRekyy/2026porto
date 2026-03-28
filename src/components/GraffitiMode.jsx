import React, { useRef, useState, useEffect } from "react";

const GraffitiMode = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isVandalMode, setIsVandalMode] = useState(false);

  // Setup Canvas saat komponen di-mount
  useEffect(() => {
    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      // MENGAMBIL TINGGI & LEBAR KESELURUHAN WEBSITE (BUKAN CUMA LAYAR)
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollWidth = document.documentElement.scrollWidth;

      // Bikin resolusi canvas double (High DPI)
      canvas.width = scrollWidth * 2;
      canvas.height = scrollHeight * 2;
      canvas.style.width = `${scrollWidth}px`;
      canvas.style.height = `${scrollHeight}px`;

      const context = canvas.getContext("2d");
      context.scale(2, 2);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = "#a8ff35"; // Warna Neon khas porto lu
      context.lineWidth = 4;
      
      // Efek Glow Neon
      context.shadowColor = "#a8ff35";
      context.shadowBlur = 8;

      contextRef.current = context;
    };

    initCanvas();

    // Handle Resize biar ukuran kanvas ngikut kalau layar berubah
    window.addEventListener("resize", initCanvas);
    // Kita juga harus pantau kalau tinggi dokumen berubah (misal animasi load selesai)
    setTimeout(initCanvas, 1000); 

    return () => window.removeEventListener("resize", initCanvas);
  }, []);

  // Fungsi-fungsi Menggambar
  const startDrawing = ({ nativeEvent }) => {
    if (!isVandalMode) return;
    // Menggunakan pageX/Y agar koordinat akurat terhadap keseluruhan dokumen (scrollable)
    const { pageX, pageY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(pageX, pageY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing || !isVandalMode) return;
    const { pageX, pageY } = nativeEvent;
    contextRef.current.lineTo(pageX, pageY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      {/* CANVAS OVERLAY (Absolute terhadap keseluruhan dokumen) */}
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onMouseLeave={finishDrawing}
        className={`absolute top-0 left-0 z-[9998] transition-all duration-300 no-invert ${
          isVandalMode 
            ? "pointer-events-auto cursor-[crosshair]" 
            : "pointer-events-none opacity-40" // Turun jadi 40% pas mati biar jadi background art yang soft
        }`}
      />

      {/* FLOATING MINIMALIST BUTTON (Pojok Kiri Bawah) */}
      <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[9999] no-invert group flex items-center gap-4">
        <button
          onClick={() => setIsVandalMode(!isVandalMode)}
          className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-500 hover:scale-110 overflow-hidden relative ${
            isVandalMode 
              ? "bg-[#a8ff35] border-[#a8ff35] text-black shadow-[0_0_20px_rgba(168,255,53,0.4)]" 
              : "bg-[#121212]/80 border-white/10 text-zinc-400 hover:border-[#a8ff35] hover:text-[#a8ff35]"
          }`}
          aria-label="Toggle Vandal Mode"
        >
          {isVandalMode ? (
            // Ikon Close (X) kalau mode aktif
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 transform rotate-90 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ikon Pen/Spidol Minimalis (Mode mati)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 group-hover:-rotate-12 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          )}
        </button>

        {/* Teks penanda kecil muncul saat tombol dihover (Makin elegan) */}
        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          {isVandalMode ? "Exit Canvas" : "Draw Mode"}
        </span>
      </div>

      {/* TOOLBAR MUNCUL SAAT MODE AKTIF (Atas Tengah Layar - Diperkecil & Lebih Elegan) */}
      <div 
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-[9999] flex gap-4 transition-all duration-500 no-invert ${
          isVandalMode ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 px-4 py-2 flex items-center gap-6 rounded-full shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#a8ff35] animate-pulse"></div>
            <span className="font-mono text-[9px] text-zinc-300 tracking-widest uppercase">Canvas Live</span>
          </div>
          <button 
            onClick={clearCanvas}
            className="font-mono text-[9px] text-zinc-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default GraffitiMode;