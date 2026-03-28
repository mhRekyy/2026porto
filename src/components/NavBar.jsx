import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Blueprint", link: "#blueprint" }
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // LOGIC 1: Deteksi Scroll buat efek ngecil
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOGIC 2: Kunci scroll body saat menu HP terbuka (Biar ga bocor ke bawah)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isMobileMenuOpen]);

  return (
    // z-[100] untuk memastikan header selalu di kasta tertinggi
    <header className={`fixed w-full top-0 left-0 z-[100] transition-all duration-500 ${scrolled ? "py-4" : "py-6 md:py-10"}`}>
      
      {/* NAVBAR CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 relative z-50">
        <div 
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled || isMobileMenuOpen 
              ? "px-5 md:px-8 py-3 md:py-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl" 
              : "px-2 py-2 bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="text-white text-xl md:text-2xl font-semibold tracking-wide hover:scale-105 transition-transform z-50"
          >
            Hunteruku
          </a>

          {/* Navigasi Desktop (Hidden di layar HP/Tablet) */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-10">
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group relative">
                  <a href={link} className="text-[#a1a1aa] font-normal text-sm hover:text-white transition-colors duration-300">
                    {name}
                  </a>
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>

          {/* Kanan: Tombol Contact & Hamburger */}
          <div className="flex items-center gap-3 z-50">
            {/* Tombol Contact (Sembunyi di HP super kecil biar logo ga kejepit, muncul lagi di menu bawah) */}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="group hidden sm:block">
              <div className="px-6 py-2 rounded-full bg-white text-black font-medium text-xs md:text-sm hover:bg-[#a8ff35] transition-colors duration-300">
                Contact me
              </div>
            </a>

            {/* THE HAMBURGER BUTTON (Muncul cuma di HP & Tablet) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="relative w-4 h-3 flex flex-col justify-between overflow-hidden">
                <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "transform rotate-45 translate-y-[5px]" : ""}`} />
                <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0 translate-x-4" : ""}`} />
                <span className={`block h-[1.5px] w-full bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "transform -rotate-45 -translate-y-[5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* THE CINEMATIC MOBILE MENU OVERLAY */}
      {/* ========================================= */}
      <div
        className={`fixed inset-0 w-full h-[100dvh] bg-[#050505] z-[40] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {/* Ornamen Grid Halus di Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#a8ff35 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

        {/* List Menu HP */}
        <nav className="flex flex-col items-center gap-6 w-full px-6 relative z-10">
          {navLinks.map(({ link, name }, index) => (
            <a
              key={name}
              href={link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-light tracking-tight text-white hover:text-[#a8ff35] transition-all duration-500"
              style={{
                // Staggered Animation: Menu muncul satu-satu berurutan dari atas ke bawah
                transitionDelay: isMobileMenuOpen ? `${150 + index * 70}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0
              }}
            >
              {name}
            </a>
          ))}
          
          {/* Tombol Contact Pengganti untuk HP layar kecil */}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 sm:hidden px-8 py-3 rounded-full border border-[#a8ff35] text-[#a8ff35] font-mono text-sm uppercase tracking-widest hover:bg-[#a8ff35] hover:text-black transition-all duration-300"
            style={{
              transitionDelay: isMobileMenuOpen ? '500ms' : '0ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0
            }}
          >
            Contact Me
          </a>
        </nav>
        
        {/* Footer Kecil di dalem Mobile Menu */}
        <div 
          className="absolute bottom-10 flex gap-6 transition-all duration-700"
          style={{
            transitionDelay: isMobileMenuOpen ? '600ms' : '0ms',
            opacity: isMobileMenuOpen ? 1 : 0
          }}
        >
           <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">M. Reky Studio © 2026</span>
        </div>
      </div>
      
    </header>
  );
}

export default NavBar;