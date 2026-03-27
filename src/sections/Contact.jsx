import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "../components/TitleHeader"; // Pastikan path benar

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      alert("Pesan super gacorrr berhasil dikirim! Nanti gue kabarin bro 🚀");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Waduh, koneksinya agak seret. Coba lagi bentar ya.");
    } finally {
      setLoading(false);
    }
  };

  useGSAP(() => {
    // Animasi muncul berurutan ala ledger majalah
    gsap.fromTo(
      ".contact-fade",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  // Form Fields Data (biar code lebih bersih)
  const formFields = [
    { id: "name", label: "01 // What's your name, creative?", type: "text", placeholder: "Full Name or Studio Name" },
    { id: "email", label: "02 // Where should I reply?", type: "email", placeholder: "name@company.com" },
    { id: "message", label: "03 // What epic project is on your mind?", type: "textarea", placeholder: "Tell me about your vision... branding, website, or just to say hi!" },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="w-full bg-[#050505] py-16  font-sans relative overflow-hidden border-t border-white/5"
    >
      {/* 1. GIANT EDITORIAL WATERMARK BACKGROUND */}
      <div className="absolute top-13 left-30 text-[15vw] font-black text-white/[0.02] leading-none pointer-events-none uppercase tracking-tighter z-0">
        Connect
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* EDITORIAL HEADER */}
        <div className="contact-fade mb-24 md:mb-32">
          <TitleHeader
            title="Start a Project"
            sub="Let's Collaborate"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* KIRI: THE ASYMMETRIC TYPOGRAPHY & NEW ID BADGE (Gacor Parah) */}
          <div className="contact-fade lg:col-span-5 w-full flex flex-col gap-10">
            {/* Judul Raksasa */}
            <h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-[1.05] tracking-tighter">
              Let's craft <br />
              <span className="text-zinc-600 italic">something</span> <br />
              <span className="text-[#a8ff35]">extraordinary.</span>
            </h2>
            
            {/* --- REVISI: THE MINIMALIST EDITORIAL ID BADGE (Di selipin di sini) --- */}
            <div className="w-full max-w-sm flex items-center gap-6 p-5 bg-[#0c0c0c] border border-white/10 rounded-3xl group hover:border-[#a8ff35]/30 transition-colors duration-500 shadow-2xl overflow-hidden relative">
              {/* Ornamen Grid Halus */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#a8ff35 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              {/* Foto Profil Mungil Bersudut */}
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300 shrink-0 relative z-10">
                <img src="/images/notion.png" alt="Reky" className="w-full h-full object-cover" />
              </div>

              {/* Data Status & Socials (Sangat Pipih) */}
              <div className="flex flex-col gap-3 relative z-10">
                {/* Status Available */}
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 bg-[#a8ff35] rounded-full animate-pulse shadow-[0_0_8px_#a8ff35]"></div>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">Available</span>
                </div>
                
                {/* Teks Deskripsi Super Compact */}
                <p className="text-white text-xs font-light leading-relaxed">
                  My inbox is always open. Whether it's a project or just a "Hi", I'd love to hear from you.
                </p>

                {/* Social Links Monospace Mungil */}
                <div className="flex items-center gap-4 mt-1">
                  {['In ↗', 'Gh ↗', 'Ig ↗', 'Mail ↗'].map((link, idx) => (
                    <a key={idx} href="#" className="font-mono text-[9px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Copywriting Santai (Di bawah ID Badge) */}
            <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed max-w-md border-l-2 border-[#a8ff35]/50 pl-6">
              Ngobrol santai aja, nggak usah kaku. Ceritain idemu, visimu, atau tantangan desain yang lagi kamu hadapin. Gue di sini buat ngebantu eksekusi jadi visual yang gacorrr.
            </p>
          </div>

          {/* KANAN: THE LEDGER-STYLE FORM (Tetap Sama) */}
          <div className="contact-fade lg:col-span-7 w-full">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2">
              {formFields.map((field) => (
                <div key={field.id} className="group flex flex-col border-b border-white/10 hover:border-[#a8ff35]/30 transition-colors duration-500 overflow-hidden">
                  
                  {/* Label Bergaya Monospace Arsip Teknis */}
                  <label htmlFor={field.id} className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-zinc-600 uppercase pt-6 pb-2 px-1 group-hover:text-zinc-300 transition-colors">
                    {field.label}
                  </label>

                  {/* Input yang Menyatu dengan Baris */}
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={form[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows="3"
                      className="w-full bg-transparent border-none text-white text-base md:text-lg p-1.5 focus:outline-none placeholder:text-zinc-800 transition-colors resize-none font-medium leading-relaxed"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={form[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-none text-white text-base md:text-lg p-1.5 focus:outline-none placeholder:text-zinc-800 transition-colors font-medium leading-relaxed"
                      required
                    />
                  )}
                  
                  {/* Efek Garis Neon di Bawah Input (Muncul saat Focus) */}
                  <div className="w-full h-[1.5px] bg-[#a8ff35] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-focus-within:scale-x-100 mt-2"></div>
                </div>
              ))}

              {/* Tombol Submit Minimalis tapi Unik */}
              <div className="mt-16 flex items-center justify-between gap-6 border-t border-white/10 pt-8">
                {/* Detail Kecil di Pojok Kiri Tombol (Metadata) */}
                <div className="font-mono text-[9px] md:text-[10px] text-zinc-600 tracking-widest uppercase">
                  Sys // Online_<br />
                  Loc // Tapak Tuan, Aceh — ID
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="group relative flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-xs md:text-sm hover:border-[#a8ff35] hover:text-[#a8ff35] transition-all duration-300 disabled:opacity-50"
                >
                  <span>{loading ? "TRANSMITTING..." : "SEND OVER"}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-[#a8ff35] transition-transform duration-500 -rotate-45 group-hover:rotate-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        {/* </div>

        {/* 3. FINAL DIRECTORY FOOTER (Ornamen Gacor di Bawah Section)
        <div className="contact-fade mt-32 border-t border-white/5 pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="font-mono text-[10px] text-zinc-700 tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} REKY. ALL RIGHTS RESERVED. // GPS: 3.2553° N, 97.1764° E
          </p>
          <div className="flex items-center gap-3">
            {['In ↗', 'Gh ↗', 'Ig ↗', 'Mail ↗'].map((link, idx) => (
              <a key={idx} href="#" className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div> */} 
        </div>

      </div>

      {/* CSS Fix untuk mematikan panah atas-bawah di input type text bawaan browser */}
      <style dangerouslySetInnerHTML={{__html: `
        input[type="text"], input[type="email"], textarea {
          box-shadow: none !important;
          border-radius: 0 !important;
          outline: none !important;
        }
      `}} />
    </section>
  );
};

export default Contact;