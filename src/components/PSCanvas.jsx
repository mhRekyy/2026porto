import React from "react";

// === IKON SVG PHOTOSHOP (RINGAN & MINIMALIS) ===
const toolsLeft = [
  { id: "move", d: "M21 12l-18 0M3 12l4 -4M3 12l4 4M21 12l-4 -4M21 12l-4 4" },
  { id: "marquee", d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z M9 4v16 M15 4v16 M4 9h16 M4 15h16" },
  { id: "lasso", d: "M12 13c-2 0 -3 1 -3 3s1 3 3 3s3 -1 3 -3s-1 -3 -3 -3z M12 13l-4 -4l-4 -4" },
  { id: "brush", d: "M3 21v-4a4 4 0 1 1 4 4h-4 M21 3.5a2.1 2.1 0 0 0 -3 0l-11 11l3 3l11 -11a2.1 2.1 0 0 0 0 -3z" },
  { id: "text", d: "M4 7V4h16v3M9 20h6M12 4v16" },
];

const panelsRight = [
  { id: "history", title: "History", active: false },
  { id: "layers", title: "Layers", active: true },
  { id: "paths", title: "Paths", active: false },
];

// === KOMPONEN WRAPPER PSCANVAS ===
const PSCanvas = ({ children }) => {
  return (
    // Container utama Photoshop (Gede, Hitam Gelap ala PS)
    <div className="relative w-full min-h-[110vh] bg-[#1d1d1d] overflow-hidden no-invert hidden xl:block">
      
      {/* 1. TOP MENU BAR (Aksen Photoshop Jadul) */}
      <div className="h-7 w-full bg-[#383838] border-b border-black flex items-center px-4 gap-4 z-50 relative">
        {['File','Edit','Image','Layer','Type','Select','Filter','View','Window','Help'].map(item => (
          <span key={item} className="text-zinc-200 text-[11px] hover:text-white cursor-default">{item}</span>
        ))}
        <div className="ml-auto w-3 h-3 bg-red-500 rounded-full"></div>
      </div>

      {/* 2. OPTION BAR (Di bawah Menu Bar) */}
      <div className="h-8 w-full bg-[#2a2a2a] border-b border-black flex items-center px-4 gap-1 z-40 relative">
        <div className="flex flex-col gap-0.5 opacity-40 px-1">
          <div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        <span className="text-zinc-400 text-[10px] font-mono tracking-widest uppercase">Auto-Select: [Layer] | Show Transform Controls</span>
      </div>

      {/* 3. TOOLBAR KIRI (Melayang) */}
      <div className="fixed left-3 top-28 z-[999] flex flex-col gap-1 p-1 bg-[#181818]/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl">
        {toolsLeft.map(tool => (
          <button key={tool.id} className={`p-2 rounded-md ${tool.id === 'move' ? 'bg-[#353535] text-[#a8ff35]' : 'text-zinc-500 hover:text-white'}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d={tool.d} /></svg>
          </button>
        ))}
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <div className="w-5 h-5 border border-white/20 bg-[#a8ff35]"></div>
          <div className="w-5 h-5 border border-white/20 bg-black -mt-3 ml-3"></div>
        </div>
      </div>

      {/* 4. CANVAS AREA (Di sinilah Hero Section lu ditaruh) */}
      <div className="absolute top-[35px] left-0 right-0 bottom-0 bg-[#1d1d1d] p-10 flex justify-center items-center">
        
        {/* THE "ARTBOARD" (Satu-satunya area yang menampilkan Hero lu) */}
        <div className="relative w-[1400px] h-[800px] bg-[#050505] shadow-[0_0_60px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden transform scale-[0.9] origin-center">
          
          {/* Label Artboard ala PS */}
          <div className="absolute top-0 left-0 px-3 py-1 bg-[#2a2a2a] border-r border-b border-white/10 z-30">
            <span className="font-mono text-[10px] text-white tracking-widest uppercase">Artboard 1 @ 85.2% (RGB/8*)</span>
          </div>

          {/* RULERS (Penggaris Atas & Kiri) */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-[#2a2a2a] border-b border-white/10 z-20 font-mono text-[8px] text-zinc-600 flex items-center justify-around"><span>0</span><span>200</span><span>400</span><span>600</span><span>800</span><span>1000</span></div>
          <div className="absolute top-0 left-0 w-4 bottom-0 bg-[#2a2a2a] border-r border-white/10 z-20 font-mono text-[8px] text-zinc-600 flex flex-col items-center justify-around py-4"><span>0</span><span>200</span><span>400</span><span>600</span></div>
          
          {/* DISINILAH ANAK LU DITARUH (Hero.jsx) */}
          <div className="absolute inset-0 pt-4 pl-4 overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </div>
      </div>

      {/* 5. PANEL KANAN (Layers / Properties) */}
      <div className="fixed right-3 top-28 z-[998] w-[260px] bg-[#1d1d1d]/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl">
        {/* Header Panel (Matahari / Layers) */}
        <div className="flex border-b border-white/10 h-8 font-mono text-[10px] tracking-wider text-zinc-400">
          {panelsRight.map(panel => (
            <div key={panel.id} className={`flex-1 flex items-center justify-center border-r border-white/10 cursor-default ${panel.active ? 'text-white' : ''}`}>{panel.title}</div>
          ))}
        </div>
        {/* Content (Fake Layers ala PS) */}
        <div className="p-2 flex flex-col gap-1 max-h-[300px] overflow-y-auto">
          {['T Header Title','T Sub_Title','# Button_CTA','# Info_Grid','👁️ Group: Image_Stack'].map((item, index) => (
            <div key={item} className="flex items-center gap-2 p-1.5 hover:bg-white/5 rounded">
              <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded border border-white/10 text-zinc-600 text-[10px]">{index + 1}</div>
              <span className="text-zinc-200 text-xs font-light">{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PSCanvas;