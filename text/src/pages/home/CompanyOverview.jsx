import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import collageImage from "../../assets/img2.png";

// Animation variants
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CompanyOverview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-gray-50 py-20 px-4 lg:px-0 overflow-x-clip"
      ref={sectionRef}
      id="company-overview"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Column */}
        <motion.div
          className="md:w-1/2 w-full space-y-6 min-w-0"
          variants={fadeLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-indigo-600 font-semibold text-lg uppercase tracking-widest animate-pulse">
            Welcome to Garlon Polyfab
          </h3>

          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight break-words">
            Pioneering Fabric Solutions for the Future
          </h2>

          <p className="text-gray-700 text-base break-words">
            <strong className="text-gray-900">
              Garlon Polyfab Industries Limited
            </strong>{" "}
            leads the way in advanced textile manufacturing, with an
            infrastructure that includes{" "}
            <strong>state-of-the-art processing units</strong>,{" "}
            <strong>precision Schiffli embroidery capabilities</strong>, and a{" "}
            <strong>dedicated hygiene product division</strong>.
          </p>

          <p className="text-gray-700 text-base break-words">
            With a commitment to{" "}
            <span className="font-semibold">
              innovation, sustainability, and excellence
            </span>
            , we empower industries with versatile, high-quality fabric
            solutions—pushing boundaries and weaving progress.
          </p>

          <p className="text-gray-700 text-base break-words">
            Join us in shaping the future of textiles—where tradition meets
            cutting-edge technology.
          </p>

          <button className="mt-4 inline-flex items-center gap-2 border border-indigo-600 px-6 py-2 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 rounded-lg group">
            Discover More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center min-w-0 overflow-hidden"
          variants={fadeRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img
            src={collageImage}
            alt="Garlon Facility"
            className="w-full max-w-md rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverview;
