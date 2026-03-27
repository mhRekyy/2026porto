import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animasi Header Editorial
    gsap.fromTo(
      ".skills-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    // Animasi Kartu 3D Vault
    gsap.fromTo(
      ".tech-vault",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".vault-grid",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-20 bg-[#050505] text-white relative overflow-hidden border-t border-white/5"
    >
      {/* GIANT WATERMARK BACKGROUND (Style Editorial) */}
      <div className="absolute top-0 left-20 text-[15vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase">
        Arsenal
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* EDITORIAL HEADER (Konsisten dengan section sebelumnya) */}
        <div className="skills-header mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#a8ff35] rounded-full animate-pulse"></div>
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase">Core Stack & Tools</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
              Tech <span className="text-zinc-600 italic">Arsenal.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed max-w-sm">
            A curated selection of my primary technologies, blending 3D interactions with functional engineering.
          </p>
        </div>

        {/* 3D VAULT GRID */}
        <div className="vault-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          
          {techStackIcons.map((techStackIcon, index) => {
            const indexNumber = (index + 1).toString().padStart(2, '0');
            
            return (
              <div
                key={techStackIcon.name}
                className="tech-vault group relative flex flex-col items-center justify-between h-[300px] md:h-[380px] bg-[#0c0c0c] border border-white/5 rounded-[3rem] md:rounded-[4rem] hover:border-[#a8ff35]/30 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Efek Spotlight Neon dari Bawah */}
                <div className="absolute -bottom-10 w-full h-32 bg-[#a8ff35] rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

                {/* Nomor Urut Editorial */}
                <div className="w-full pt-8 pb-4 flex justify-center z-10">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 group-hover:text-[#a8ff35] transition-colors duration-500">
                    {indexNumber}
                  </span>
                </div>

                {/* Wrapper Model 3D */}
                <div className="w-full flex-1 flex items-center justify-center relative z-10 group-hover:-translate-y-4 transition-transform duration-700 ease-out">
                  <TechIconCardExperience model={techStackIcon} />
                </div>

                {/* Teks Nama Teknologi di Bawah */}
                <div className="w-full pb-10 pt-4 flex justify-center z-10">
                  <p className="text-sm md:text-lg font-bold text-zinc-400 group-hover:text-white transition-colors duration-500 tracking-wide text-center px-4">
                    {techStackIcon.name}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default TechStack;