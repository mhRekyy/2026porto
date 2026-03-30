import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import ProjectSlider from "../components/ProjectSlider"; 

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Englite Learning Platform",
      desc: "An interactive learning platform built for an engaging and seamless user experience.",
      images: [
        "/images/Englite1.webp", 
        "/images/Englite2.webp"
      ],
      category: "Web App • UI/UX",
    },
    {
      id: 2,
      title: "Labsys Management Dashboard",
      desc: "A comprehensive dashboard for managing laboratory systems, tracking assets, and maintaining records.",
      images: [
        "/images/Labsys1.webp",
        "/images/Labsys.webp" 
      ],
      category: "Web App • Dashboard",
    },
    {
      id: 3,
      title: "Send The Song",
      desc: "Connecting people through a modern, seamless, and intuitive music-sharing web platform.",
      images: [
        "/images/sendthesong1.webp",
        "/images/sendthesong2.webp"
      ],
      category: "Web App • Fullstack",
    },
    {
      id: 4,
      title: "Taste Now Food Delivery",
      desc: "Freelance UI/UX and graphic design project for a seamless and enjoyable food delivery application.",
      images: [
        "/images/Freelance.webp"
      ],
      category: "Mobile App • UI/UX",
    },
    {
      id: 5,
      title: "Aqua Label Water Efficiency",
      desc: "Mobile app interface designed to increase water usage efficiency through real-time monitoring and user habits.",
      images: [
        "/images/Aqua Label.webp"
      ],
      category: "Mobile App • UI/UX",
    },
    {
      id: 6,
      title: "Premium Car Rental",
      desc: "A clean, modern, and high-conversion landing page design for a premium car rental service.",
      images: [
        "/images/Rental car.webp"
      ],
      category: "Web Design • UI/UX",
    },
    {
      id: 7,
      title: "PIL-MIPA XXVI Branding",
      desc: "Complete visual identity, social media feeds, and event branding for Pil-Mipa XXVI FMIPA USK.",
      images: [
        "/images/PIL MIPA.webp"
      ],
      category: "Graphic Design • Branding",
    },
    {
      id: 8,
      title: "MUBES HMIF Social Media",
      desc: "Social media graphic design and Instagram feed management for MUBES Himpunan Mahasiswa Informatika 2024.",
      images: [
        "/images/MUBES.webp"
      ],
      category: "Graphic Design • Social Media",
    },
    {
      id: 9,
      title: "Urban Pulse",
      desc: "Mobile application interface designed for urban lifestyle tracking and city exploration.",
      images: [
        "/images/urbanpulse.webp"
      ],
      category: "Mobile App • Design",
    },
    {
      id: 10,
      title: "Serene Mindfulness App",
      desc: "A calming and aesthetically pleasing mobile interface designed for mental wellness and meditation.",
      images: [
        "/images/serene.webp"
      ],
      category: "Mobile App • UI/UX",
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  useGSAP(() => {
    gsap.fromTo(
      ".showcase-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
    );

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 80%",
        },
      }
    );
  }, [showAll]);

  return (
    <section id="work" ref={sectionRef} className="py-24 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
      
      {/* Background Watermark */}
      <div className="absolute top-0 left-20 text-[15vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase">
        Archive
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* EDITORIAL HEADER */}
        <div className="showcase-header mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#a8ff35] rounded-full animate-pulse"></div>
              <span className="font-mono text-xs tracking-[0.3em] text-zinc-400 uppercase">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
              Featured <span className="text-zinc-600 italic">Projects.</span>
            </h2>
          </div>
          <p className="text-zinc-500 font-light text-sm md:text-base leading-relaxed max-w-sm">
            A curated collection of digital experiences where design thinking meets engineering execution.
          </p>
        </div>

        {/* MAGAZINE SPREAD GRID */}
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          
          {displayedProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <div 
                key={project.id} 
                className={`project-card flex flex-col group/img cursor-pointer ${isFeatured ? 'md:col-span-2 md:flex-row md:items-center gap-10 md:gap-16' : 'col-span-1 gap-6'}`}
              >
                
                {/* SISI GAMBAR */}
                <div className={`relative w-full ${isFeatured ? 'md:w-3/5' : ''}`}>
                  {/* Offset Wireframe Border Global */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl transition-transform duration-700 ease-out group-hover/img:translate-x-3 group-hover/img:translate-y-3 z-0 pointer-events-none"></div>
                  
                  {project.images.length > 1 ? (
                    /* --- RENDER UNTUK SLIDER (JIKA FOTO > 1) --- */
                    <div className="relative w-full h-full z-10">
                      {/* Angka Watermark khusus untuk mode Slider */}
                      <div className="absolute -bottom-4 -left-4 text-[8rem] font-black text-white/5 leading-none pointer-events-none select-none z-0 transition-transform duration-500 group-hover/img:-translate-y-4">
                        {index < 9 ? `0${index + 1}` : index + 1}
                      </div>
                      <ProjectSlider images={project.images} title={project.title} isFeatured={isFeatured} />
                    </div>
                  ) : (
                    /* --- RENDER UNTUK 1 GAMBAR (STANDARD) --- */
                    <div className={`relative overflow-hidden rounded-2xl bg-[#121212] border border-white/5 z-10 h-full ${isFeatured ? 'aspect-video md:aspect-[16/10]' : 'aspect-[4/3] md:aspect-video'}`}>
                      <div className="absolute -bottom-4 -right-2 text-[8rem] font-black text-white/5 leading-none pointer-events-none select-none z-10 transition-transform duration-500 group-hover/img:-translate-y-4">
                        {index < 9 ? `0${index + 1}` : index + 1}
                      </div>
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top grayscale-[20%] group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-1000 ease-out relative z-0"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-20"></div>
                    </div>
                  )}

                </div>

                {/* SISI TEKS */}
                <div className={`w-full flex flex-col justify-center ${isFeatured ? 'md:w-2/5' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-6 bg-[#a8ff35]"></div>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#a8ff35] uppercase">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className={`font-bold text-white tracking-tight hover:text-zinc-300 transition-colors mb-4 ${isFeatured ? 'text-3xl md:text-5xl leading-[1.1]' : 'text-2xl md:text-3xl leading-snug'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-zinc-400 font-light leading-relaxed mb-8 ${isFeatured ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
                    {project.desc}
                  </p>
                  
                  <a href="#" className="flex items-center gap-3 w-fit group/btn mt-auto">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-[#a8ff35] group-hover/btn:bg-[#a8ff35] transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-white group-hover/btn:text-black transform -rotate-45 group-hover/btn:rotate-0 transition-all duration-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-white group-hover/btn:text-[#a8ff35] transition-colors duration-300">
                      View Case Study
                    </span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>
        
        {/* TOMBOL VIEW ALL */}
        {projects.length > 3 && (
          <div className="mt-24 flex justify-center border-t border-white/10 pt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-transparent border-none text-white transition-all duration-300"
            >
              <div className="absolute inset-0 bg-[#121212] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center border border-white/10"></div>
              
              <span className="relative z-10 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
                {showAll ? 'Show Less Projects' : 'Explore All Archives'}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                className={`w-4 h-4 relative z-10 text-[#a8ff35] transition-transform duration-500 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default AppShowcase;