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

  useEffect(() => {
    const handleScroll = () => {
      // Mengubah state menjadi true jika scroll lebih dari 20px
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Header membentang penuh di atas, padding mengecil saat di-scroll
    <header className={`fixed w-full top-0 left-0 z-[100] transition-all duration-500 ${scrolled ? "py-4" : "py-6 md:py-10"}`}>
      
      {/* Membatasi lebar navbar agar sejajar rapi dengan Hero Section (max-w-7xl) */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10">
        
        {/* INNER NAVBAR: Di sinilah letak efek "Outer Tipis" (border-white/10) */}
        <div 
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? "px-6 md:px-8 py-3 md:py-4 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl" 
              : "px-2 py-2 bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="text-white text-xl md:text-2xl font-semibold tracking-wide hover:scale-105 transition-transform">
            Hunteruku
          </a>

          {/* Navigasi Desktop */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex space-x-10">
              {navLinks.map(({ link, name }) => (
                <li key={name} className="group relative">
                  <a href={link} className="text-[#a1a1aa] font-normal text-sm hover:text-white transition-colors duration-300">
                    {name}
                  </a>
                  {/* Efek garis bawah saat di-hover */}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>

          {/* Tombol Contact */}
          <a href="#contact" className="group">
            <div className="px-7 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors duration-300">
              Contact me
            </div>
          </a>
        </div>
        
      </div>
    </header>
  );
}

export default NavBar;