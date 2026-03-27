import { blueprint } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Blueprint = () => {
  return (
    <section id="blueprint" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5 max-w-7xl mx-auto">
        <TitleHeader
          title="The Blueprint"
          sub="⭐️ Execution & Workflow"
        />

        {/* Tambahkan gap dan space-y agar jarak antar kartu lebih rapi */}
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6 space-y-6">
          {blueprint.map((blueprint, index) => (
            <GlowCard card={blueprint} key={index} index={index}>
              
              {/* Pembungkus bawah yang dirapikan */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                
                {/* KUNCI UTAMA: 
                  w-14 h-14 = Membatasi ukuran kotak ikon menjadi 56x56 px
                  shrink-0  = Mencegah kotak ini menjadi gepeng saat teks di sebelahnya panjang
                */}
                <div className="w-14 h-14 shrink-0 flex items-center justify-center p-2 bg-[#121212] rounded-xl border border-white/5">
                  <img 
                    src={blueprint.imgPath} 
                    alt={blueprint.name} 
                    // object-contain memastikan gambar tidak terpotong
                    className="w-full h-full object-contain drop-shadow-md" 
                  />
                </div>
                
                {/* Teks Judul dan Sub-judul */}
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-white text-lg leading-tight">
                    {blueprint.name}
                  </h4>
                  {/* Gunakan warna aksen (misal: abu-abu terang atau warna neon Anda) agar kontras */}
                  <p className="text-zinc-400 text-sm mt-1">
                    {blueprint.mentions}
                  </p>
                </div>
                
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blueprint;