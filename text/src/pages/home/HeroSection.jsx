import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/banner.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com/garlonpolyfab", label: "Facebook" },
  { icon: Twitter, url: "https://twitter.com/garlonpolyfab", label: "Twitter" },
  { icon: Instagram, url: "https://instagram.com/garlonpolyfab", label: "Instagram" },
  { icon: Linkedin, url: "https://linkedin.com/company/garlonpolyfab", label: "LinkedIn" },
];

const HeroSection = () => {
  return (
    <section className="w-full h-[76vh] md:h-[90vh] relative flex items-start md:items-center justify-center bg-gray-100 overflow-hidden">
      {/* Left half blue background */}
      <div className="absolute top-0 left-0 h-full w-2/3 bg-[#242c80] z-0"></div>

      {/* Social icons vertical bar - visible only on md and larger */}
      <div className="hidden md:flex flex-col absolute right-6 top-1/2 transform -translate-y-1/2 space-y-6 z-30">
        {socialLinks.map(({ icon: Icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 rounded-full bg-[#242c80] text-white shadow-lg hover:bg-cyan-500 hover:scale-110 transition transform duration-300"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      <div className="relative w-[90%] md:w-[85%] h-[70vh] md:h-auto overflow-hidden shadow-xl z-10 mt-6 md:mt-0">
        {/* 🔁 Continuously animated image */}
        <motion.img
          src={heroImage}
          alt="Hero"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="block w-full h-full object-cover max-h-[600px]"
        />

        {/* Black overlay */}
        <div className="absolute inset-0  z-10"></div>

        {/* Text overlay with grow animation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-2"
          >
            GARLON POLYFAB
          </motion.h1>
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
            className="text-white text-2xl sm:text-2xl md:text-5xl font-semibold"
          >
            INDUSTRIES LIMITED
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
