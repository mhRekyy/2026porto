import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef(null);
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

      // Reset form setelah berhasil
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#000000] py-20 md:py-32 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            {/* Ikon Bintang 4-Sudut (Sparkle) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#a8ff35] w-5 h-5">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span className="text-[#a8ff35] text-sm font-semibold tracking-widest uppercase">
              Connect with me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] tracking-tight">
            Let's start a project <br className="hidden md:block" /> together
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* KIRI: FORMULIR */}
          <div className="w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              // Jarak antar form dikurangi dari gap-6 menjadi gap-4 md:gap-5 agar lebih rapat
              className="flex flex-col gap-4 md:gap-2"
            >
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                {/* Warna label diperhalus dan font sedikit lebih kecil */}
                <label htmlFor="name" className="text-zinc-200 text-sm font-medium px-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  // Padding atas-bawah dikurangi (py-3.5) agar tidak terlalu gemuk
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#a8ff35] transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-zinc-200 text-sm font-medium px-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#a8ff35] transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-zinc-200 text-sm font-medium px-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  // Jumlah baris dikurangi dari 5 menjadi 4 agar proporsinya lebih pas
                  rows="4"
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#a8ff35] transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={loading}
                // Margin dan ketebalan garis disesuaikan agar menyatu dengan gaya form baru
                className="mt-2 w-fit px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 text-sm"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>

          {/* KANAN: KARTU PROFIL & INFO KONTAK */}
          <div className="w-full flex items-start">
            <div className="w-full max-w-[500px] bg-[#131313] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col gap-6 shadow-2xl">
              
              {/* Status "Available for work" */}
              <div className="flex items-center gap-3 bg-[#1e1e1e] w-fit px-4 py-2 rounded-full border border-white/5">
                <div className="w-2.5 h-2.5 bg-[#a8ff35] rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">Available for work</span>
              </div>

              {/* Foto Profil */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/10">
                <img 
                  src="/images/notion.png" /* JANGAN LUPA: Ganti dengan path foto asli Anda di VS Code */
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Paragraf Deskripsi */}
              <p className="text-[#a1a1aa] text-base md:text-[17px] leading-relaxed font-light">
                My inbox is always open, Whether you have a project or just want to say Hi. I would love to hear from you. Feel free to contact me and I'll get back to you.
              </p>

              {/* Ikon Sosial Media (SVGs murni tanpa butuh import library external) */}
              <div className="flex items-center gap-5 mt-2">
                {/* LinkedIn */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                {/* GitHub */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                {/* Email */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
                {/* Twitter / X */}
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;