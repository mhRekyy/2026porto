import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  // Animasi halus saat masuk ke section
  useGSAP(() => {
    gsap.from(".reveal-text", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
      },
    });
  });

  const expertise = [
    { title: "Visual Storytelling", tools: ["Figma", "Ai", "Ps" , "Canva"], desc: "Translating brand DNA into pixels." },
    { title: "Digital Architecture", tools: ["React", "Next", "Tailwind", ""], desc: "Coding with a designer's eye." },
    { title: "Intelligence Lab", tools: ["Python", "TensorFlow"], desc: "Predicting patterns through data." },
  ];

  return (
    <section id="about" className="relative w-full bg-[#050505] py-32 overflow-hidden selection:bg-[#a8ff35] selection:text-black">
      
      {/* Background Typography (Watermark Style) */}
      <div className="absolute top-10 -left-10 text-[15vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase">
        Informatics
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* ROW 1: THE BIG STATEMENT */}
        <div className="flex flex-col lg:flex-row gap-10 items-end mb-32">
          <div className="w-full lg:w-8/12">
            <h2 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
              A Designer who <span className="text-zinc-600 italic">speaks</span> <span className="text-[#a8ff35]">Code.</span>
            </h2>
          </div>
          <div className="w-full lg:w-4/12 pb-2">
            <p className="reveal-text text-zinc-400 text-lg md:text-xl font-light leading-relaxed border-l border-[#a8ff35] pl-6">
              I don't just build websites; I engineer digital emotions. Seamlessly blending the logic of Informatics with the aesthetics of fine design.
            </p>
          </div>
        </div>

        {/* ROW 2: ASYMMETRIC CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: THE FRAME (Bukan foto biasa) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Frame Artistik */}
              <div className="absolute -inset-4 border border-zinc-800 rounded-2xl group-hover:border-[#a8ff35]/50 transition-colors duration-500"></div>
              
              <div className="relative overflow-hidden rounded-xl bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="/images/reky2.jpg" 
                  alt="Muhammad Reky" 
                  className="w-full object-cover aspect-[3/4] scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                
                {/* Overlay saat Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#a8ff35] font-mono text-sm tracking-widest uppercase mb-2">Based in Aceh</span>
                  <h3 className="text-white text-2xl font-bold">Muhammad Reky</h3>
                </div>
              </div>

              {/* Decorative Elements */}
              {/* <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#a8ff35] rounded-full mix-blend-difference blur-3xl opacity-20 animate-pulse"></div> */}
            </div>
          </div>

          {/* RIGHT: THE STACK (Experimental List) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-[#a8ff35] font-mono text-xs tracking-[0.5em] uppercase">The Multidisciplinary Stack</span>
              <div className="h-[1px] w-20 bg-[#a8ff35]"></div>
            </div>

            <div className="space-y-2">
              {expertise.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative py-8 border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:pl-4 transition-all duration-500"
                >
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-[#a8ff35]/[0.02] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                  
                  <div className="relative">
                    <h4 className="text-2xl md:text-4xl font-bold text-zinc-500 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-zinc-600 group-hover:text-zinc-400 text-sm mt-1">{item.desc}</p>
                  </div>

                  <div className="relative flex flex-wrap gap-2">
                    {item.tools.map((tool, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest border border-zinc-700 px-3 py-1 rounded-sm text-zinc-500 group-hover:border-[#a8ff35] group-hover:text-[#a8ff35] transition-all">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Final Narrative */}
            <p className="text-zinc-500 italic text-base md:text-lg font-light leading-relaxed max-w-2xl">
              "Every pixel has a purpose, and every line of code has a soul. I'm on a mission to prove that technical complexity can be delivered with artistic simplicity."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;