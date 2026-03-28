import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [logs, setLogs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Teks log palsu yang nunjukin skill lu (Bikin HRD senyum-senyum bacanya)
  const bootSequence = [
    "USER: MUHAMMAD REKY // ID: 2308107010069",
    "INITIALIZING KERNEL...",
    "MOUNTING FILE SYSTEM... [OK]",
    "LOADING GRAPHIC_DESIGN_MODULES... [OK]",
    "COMPILING WEB_DEV_COMPONENTS... [OK]",
    "TRAINING MACHINE_LEARNING_MODELS... [IN PROGRESS]",
    "MODELS CONVERGED. LOSS: 0.001... [OK]",
    "INJECTING NEON_PIGMENTS (#a8ff35)... [OK]",
    "BYPASSING SECURITY PROTOCOLS... [OVERRIDDEN]",
    "SYSTEM_READY: LAUNCHING PORTFOLIO..."
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let currentIndex = 0;
    // Interval yang dibikin cepet biar kerasa kayak terminal beneran
    const interval = setInterval(() => {
      setLogs((prevLogs) => {
        const newLogs = [...prevLogs, bootSequence[currentIndex]];
        return newLogs;
      });
      
      currentIndex++;

      // Kalau semua log udah keluar, berhentiin interval dan buka layar
      if (currentIndex === bootSequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoaded(true);
          document.body.style.overflow = "auto";
        }, 800); // Jeda bentar biar user sempet baca baris terakhir
      }
    }, 150); // Kecepatan muncul tiap baris (150ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[#050505] flex flex-col justify-end p-6 md:p-12 transition-transform duration-[1s] ease-in-out no-invert ${
        isLoaded ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Container Terminal Logs */}
      <div className="flex flex-col gap-1 md:gap-2 w-full max-w-3xl mb-10 md:mb-20">
        {logs.map((log, index) => (
          <div key={index} className="flex items-start gap-3 animate-[fadeIn_0.1s_ease-out]">
            <span className="font-mono text-[10px] md:text-sm text-zinc-600">
              {`[${new Date().toISOString().substring(11, 23)}]`}
            </span>
            <span className={`font-mono text-xs md:text-base font-medium tracking-wide ${
              index === bootSequence.length - 1 ? "text-[#a8ff35] animate-pulse" : "text-zinc-300"
            }`}>
              {log}
            </span>
          </div>
        ))}
        
        {/* Kursor kedap-kedip nunggu sistem kebuka */}
        {!isLoaded && logs.length > 0 && (
          <div className="w-3 h-5 md:w-4 md:h-6 bg-[#a8ff35] animate-[pulse_0.5s_infinite] mt-2"></div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Preloader;