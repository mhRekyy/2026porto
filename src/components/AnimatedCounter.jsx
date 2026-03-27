import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 90%" } }
    );

    countersRef.current.forEach((el, index) => {
      if (!el) return;
      const numberElement = el.querySelector(".counter-number");
      const item = counterItems[index];

      gsap.set(numberElement, { innerText: "0" });

      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "expo.out",
        snap: { innerText: 1 }, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    // REVISI: Padding vertikal (py) gue buang, ganti pakai margin atas (mt-12) yang pas biar nempel tapi nggak nabrak Hero
    <section id="counter" ref={sectionRef} className="w-full max-w-7xl mx-auto px-2 md:px-10 mt-0 md:mt-16 mb-20 relative z-10">
      
      <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/10 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-white/10">
        
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (countersRef.current[index] = el)}
            // REVISI: Padding atas bawah (py) gue susutin dari py-12 ke py-6/py-8 biar lebih pipih dan tajam
            className="group flex flex-col justify-center py-2 md:py-4 px-4 md:px-8 hover:bg-white/[0.02] transition-colors duration-500 cursor-default relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#a8ff35] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <div className="flex items-baseline gap-1 mb-1 md:mb-2">
              {/* REVISI: Ukuran font disesuaikan dikit biar proporsional sama kotaknya yang udah ramping */}
              <span className="counter-number text-white text-6xl md:text-5xl lg:text-[64px] font-bold tracking-tighter leading-none group-hover:text-[#a8ff35] transition-colors duration-500">
                0
              </span>
              <span className="text-[#a8ff35] text-2xl md:text-3xl lg:text-4xl font-bold leading-none">
                {item.suffix}
              </span>
            </div>
            
            <div className="font-mono text-[9px] md:text-[10px] text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors duration-500 mt-1">
              {item.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AnimatedCounter;