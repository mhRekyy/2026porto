import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { abilities } from "../constants";

const FeatureCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols gap-8">
        {abilities.map(({ imgPath, title, desc }, index) => (
          <div
            key={title}
            ref={(el) => (cardRefs.current[index] = el)}
            className="card-border rounded-2xl flex flex-col overflow-hidden bg-[#121212] cursor-pointer"
          >
            {/* --- BAGIAN ATAS: GAMBAR --- */}
            {/* 1. Mengurangi padding ke p-2 agar gambar membesar */}
            {/* 2. Mengubah warna bg menjadi #1C1C1C (menebak warna asli JPG) */}
            <div className="w-full h-64 flex items-center justify-center border-b border-white/5 bg-[#1c1c1c] p-2">
              <img 
                src={imgPath} 
                alt={title} 
                className="w-full h-full object-contain object-center drop-shadow-xl" 
              />
            </div>

            {/* --- BAGIAN BAWAH: TEKS --- */}
            <div className="p-8 flex flex-col gap-3">
              <h3 className="text-white text-2xl font-semibold">{title}</h3>
              <p className="text-white-50 text-lg leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;