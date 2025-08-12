import React from "react";
import img1 from "../../assets/img1.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Icons
const OverviewIcon = () => (
  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M3 7h18M3 12h18M3 17h18"></path>
  </svg>
);

const QualityIcon = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx={12} cy={12} r={10}></circle>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const NatureIcon = () => (
  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 22C18 16 18 8 12 2 6 8 6 16 12 22z"></path>
  </svg>
);

const StarIcon = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <polygon points="12 2 15 8.5 22 9.3 17 14.3 18.2 21.1 12 17.8 5.8 21.1 7 14.3 2 9.3 9 8.5 12 2" />
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FacilityOverview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      className="w-full bg-white py-12 overflow-x-clip"
      id="about-facility"
      ref={sectionRef}
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row px-4 lg:px-0 mx-auto gap-8 items-start">
        {/* Left Column */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col gap-6 min-w-0"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
        >
          <div>
            <span className="text-gray-500 text-sm tracking-widest uppercase mb-1 block break-words">
              Textile Processing Facility
            </span>
            <h2 className="text-3xl font-bold mb-4 break-words">
              Incredible World Of <span className="text-[#242c80]">Fabric</span>
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md aspect-video">
            <img src={img1} alt="Sekhani Facility" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Right Features */}
        <motion.div
          className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 md:mt-28 min-w-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0.5}
        >
          {[
            {
              icon: <OverviewIcon />,
              title: "Sekhani Overview",
              text:
                "The best and nothing less than the best is available here at Sekhani Group. The times have changed and so has the world.",
            },
            {
              icon: <QualityIcon />,
              title: "Quality Consciousness",
              text:
                "We ensure quality with in-house testing, AZO-free materials, color fastness, and eco-friendly standards.",
            },
            {
              icon: <NatureIcon />,
              title: "Ecological Balance",
              text: "The beauty and bounties of nature cannot be taken for granted.",
              link: "Read More",
            },
            {
              icon: <StarIcon />,
              title: "Our Specialities In Fabric",
              text: "This outlines that we are offering various services...",
            },
          ].map((item, index) => (
            <motion.div key={index} className="flex flex-col gap-2" variants={fadeUp} custom={index + 1}>
              {item.icon}
              <span className="font-semibold text-lg text-gray-800 break-words">{item.title}</span>
              <p className="text-sm text-gray-600 break-words">{item.text}</p>
              {item.link && (
                <a href="#" className="text-blue-500 underline text-xs">
                  {item.link}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FacilityOverview;
