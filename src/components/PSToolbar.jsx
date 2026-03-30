import React, { useState } from "react";

const tools = [
  { id: "move", icon: "M21 12l-18 0M3 12l4 -4M3 12l4 4M21 12l-4 -4M21 12l-4 4", label: "Move Tool (V)" },
  { id: "marquee", icon: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z M9 4v16 M15 4v16 M4 9h16 M4 15h16", label: "Rectangular Marquee (M)" },
  { id: "lasso", icon: "M12 13c-2 0 -3 1 -3 3s1 3 3 3s3 -1 3 -3s-1 -3 -3 -3z M12 13l-4 -4l-4 -4", label: "Lasso Tool (L)" },
  { id: "selection", icon: "M12 7v14 M9 18l3 3l3 -3 M12 7l-3 3l6 0", label: "Object Selection (W)" },
  { id: "crop", icon: "M8 4v12a2 2 0 0 0 2 2h12 M16 20v-12a2 2 0 0 0 -2 -2h-12", label: "Crop Tool (C)" },
  { id: "eyedropper", icon: "M11 7l6 6l-10 10l-4 2l2 -4z M12 8l4 4", label: "Eyedropper (I)" },
  { id: "brush", icon: "M3 21v-4a4 4 0 1 1 4 4h-4 M21 3.5a2.1 2.1 0 0 0 -3 0l-11 11l3 3l11 -11a2.1 2.1 0 0 0 0 -3z", label: "Brush Tool (B)" },
  { id: "text", icon: "M4 7V4h16v3M9 20h6M12 4v16", label: "Type Tool (T)" },
];

const PSToolbar = () => {
  const [activeTool, setActiveTool] = useState("move");

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-[9997] hidden xl:flex flex-col gap-1 p-1.5 bg-[#181818]/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl no-invert">
      {/* Photoshop Top Grip (Titik-titik khas panel PS) */}
      <div className="flex flex-col gap-1 items-center py-2 opacity-30">
        <div className="flex gap-1"><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-white rounded-full"></div></div>
        <div className="flex gap-1"><div className="w-1 h-1 bg-white rounded-full"></div><div className="w-1 h-1 bg-white rounded-full"></div></div>
      </div>

      {/* Tools List */}
      <div className="flex flex-col gap-0.5">
        {tools.map((tool) => (
          <div key={tool.id} className="group relative">
            <button
              onClick={() => setActiveTool(tool.id)}
              className={`p-2.5 rounded-md transition-all duration-200 flex items-center justify-center ${
                activeTool === tool.id 
                  ? "bg-[#353535] text-[#a8ff35] shadow-inner shadow-black/50" 
                  : "text-zinc-500 hover:bg-[#2a2a2a] hover:text-zinc-200"
              }`}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5"
              >
                <path d={tool.icon} />
              </svg>
            </button>

            {/* Tooltip ala PS */}
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#2a2a2a] text-white text-[10px] font-mono tracking-wider rounded border border-white/10 opacity-0 scale-95 translate-x-[-10px] group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl">
              {tool.label}
              {/* Tooltip Arrow */}
              <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 bg-[#2a2a2a] border-l border-b border-white/10 rotate-45"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Color Picker Mini */}
      <div className="mt-4 flex flex-col items-center gap-2 pb-2">
        <div className="relative w-6 h-6 border border-white/20 bg-[#a8ff35] shadow-lg z-10"></div>
        <div className="w-6 h-6 border border-white/20 bg-black -mt-4 ml-4"></div>
      </div>
    </div>
  );
};

export default PSToolbar;