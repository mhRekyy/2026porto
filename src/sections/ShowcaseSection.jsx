import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "On-Demand Rides Made Simple with Ryde",
      desc: "An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.",
      img: "/images/project1.png",
      category: "Mobile App • React Native",
    },
    {
      id: 2,
      title: "The Library Management Platform",
      desc: "A comprehensive dashboard for managing books, users, and digital assets with a seamless UX.",
      img: "/images/project2.png",
      category: "Web App • Fullstack",
    },
    {
      id: 3,
      title: "YC Directory - Startup Showcase",
      desc: "Connecting entrepreneurs with investors through a seamless, modern pitch platform.",
      img: "/images/project3.png",
      category: "Web App • Next.js",
    },
    {
      id: 4,
      title: "Rainfall Prediction Model",
      desc: "Machine learning model analyzing weather patterns in Banda Aceh using Kaggle datasets.",
      img: "/images/project1.png",
      category: "Data Science • Python",
    },
    {
      id: 5,
      title: "Kabinet Aksara Brand Identity",
      desc: "Complete visual identity and logo design for the Informatics Student Association.",
      img: "/images/project2.png",
      category: "Graphic Design • Branding",
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  useGSAP(() => {
    // Animasi Header
    gsap.fromTo(
      ".showcase-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 85%" } }
    );

    // Animasi Grid Proyek (Muncul satu per satu)
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
      <div className="absolute top-20 left-10 text-[12vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase">
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
            // Project pertama ambil 2 kolom penuh (Hero Section)
            const isFeatured = index === 0;

            return (
              <div 
                key={project.id} 
                className={`project-card flex flex-col group/img cursor-pointer ${isFeatured ? 'md:col-span-2 md:flex-row md:items-center gap-10 md:gap-16' : 'col-span-1 gap-6'}`}
              >
                
                {/* SISI GAMBAR */}
                <div className={`relative w-full ${isFeatured ? 'md:w-3/5' : ''}`}>
                  {/* Offset Wireframe Border */}
                  <div className="absolute inset-0 border border-white/20 rounded-2xl transition-transform duration-700 ease-out group-hover/img:translate-x-3 group-hover/img:translate-y-3"></div>
                  
                  {/* Container Gambar */}
                  <div className={`relative overflow-hidden rounded-2xl bg-[#121212] border border-white/5 z-10 ${isFeatured ? 'aspect-video md:aspect-[16/10]' : 'aspect-[4/3] md:aspect-video'}`}>
                    
                    {/* Angka Watermark di dalam gambar */}
                    <div className="absolute -bottom-4 -right-2 text-[8rem] font-black text-white/5 leading-none pointer-events-none select-none z-10 transition-transform duration-500 group-hover/img:-translate-y-4">
                      0{index + 1}
                    </div>

                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-1000 ease-out relative z-0"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-20"></div>
                  </div>
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
                  
                  {/* Tombol Interaktif Editorial */}
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