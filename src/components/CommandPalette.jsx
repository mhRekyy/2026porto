import React, { useState, useEffect } from "react";

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState(false);

  // === LOGIC: LISTENER KEYBOARD (Ctrl+K / Cmd+K & Escape) ===
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Buka/Tutup pakai Ctrl+K atau Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Tutup pakai tombol Escape
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // === LOGIC: AKSI-AKSI FUNGSIONAL ===
  const handleCopyEmail = () => {
    // Ganti sama email asli lu bro
    navigator.clipboard.writeText("muhammadrekyyyy@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1500);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Nanti ganti href-nya sama link file PDF CV lu
    window.open("/cv-reky.pdf", "_blank");
    setIsOpen(false);
  };

  // Jangan render apa-apa kalau lagi ditutup (biar web lu ga berat)
  if (!isOpen) return null;

  return (
    <>
      {/* OVERLAY GELAP (Backdrop Blur) */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99999] flex items-start justify-center pt-[15vh] px-4 no-invert"
        onClick={() => setIsOpen(false)} // Tutup kalau user klik di luar kotak
      >
        
        {/* KOTAK COMMAND PALETTE */}
        <div 
          className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden animate-[scaleIn_0.2s_ease-out]"
          onClick={(e) => e.stopPropagation()} // Biar pas klik kotak dalemnya ga ikutan nutup
        >
          
          {/* HEADER: Fake Search Input */}
          <div className="flex items-center px-4 py-4 border-b border-white/5 gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-[#a8ff35]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input 
              type="text" 
              placeholder="Type a command or search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white font-mono text-sm placeholder:text-zinc-600 focus:ring-0"
              autoFocus
            />
            <span className="font-mono text-[9px] text-zinc-600 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase tracking-widest">
              ESC to Close
            </span>
          </div>

          {/* BODY: LIST OF ACTIONS */}
          <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
            
            {/* KATEGORI: ACTIONS */}
            <div className="mb-4">
              <p className="px-3 pt-2 pb-1 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                Quick Actions
              </p>
              <div className="flex flex-col gap-1">
                
                {/* ACTION 1: Copy Email */}
                <button onClick={handleCopyEmail} className="group flex items-center justify-between w-full px-3 py-3 rounded-xl hover:bg-[#a8ff35] transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <span className="font-medium text-zinc-200 group-hover:text-black transition-colors text-sm">
                      {copied ? "Email Copied to Clipboard!" : "Copy Email Address"}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-black/60 transition-colors">↵</span>
                </button>

                {/* ACTION 2: Download CV */}
                <button onClick={handleDownloadCV} className="group flex items-center justify-between w-full px-3 py-3 rounded-xl hover:bg-[#a8ff35] transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <span className="font-medium text-zinc-200 group-hover:text-black transition-colors text-sm">Download Resume (.PDF)</span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-black/60 transition-colors">↵</span>
                </button>

              </div>
            </div>

            {/* KATEGORI: NAVIGATION */}
            <div>
              <p className="px-3 pt-2 pb-1 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                Navigation
              </p>
              <div className="flex flex-col gap-1">
                
                {['About', 'Experience', 'Contact'].map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="group flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-white/10 transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                      </svg>
                      <span className="font-medium text-zinc-300 group-hover:text-white transition-colors text-sm">Jump to {item}</span>
                    </div>
                  </button>
                ))}

              </div>
            </div>

          </div>
          
          {/* FOOTER PALETTE */}
          <div className="px-4 py-3 border-t border-white/5 bg-[#121212] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Hunteruku</span>
              <span className="w-1.5 h-1.5 bg-[#a8ff35] rounded-full animate-pulse"></span>
            </div>
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest">v1.0.0</span>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95) translateY(-10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}} />
    </>
  );
};

export default CommandPalette;