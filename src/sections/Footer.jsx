import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer relative overflow-hidden pb-32 md:pb-48 pt-10">
      
      {/* Konten asli Anda tetap di atas dengan z-10 */}
      <div className="footer-container relative z-10 mb-8 md:mb-12">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" className="w-5 h-5 object-contain" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Hunteruku. All rights reserved.
          </p>
        </div>
      </div>

      {/* TULISAN RAKSASA BACKGROUND (WATERMARK) DENGAN GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 translate-y-[35%]">
        <h1 className="text-[18vw] md:text-[20vw] font-black uppercase tracking-widest leading-none bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-transparent">
          HUNTERUKU
        </h1>
      </div>
      
    </footer>
  );
};

export default Footer;