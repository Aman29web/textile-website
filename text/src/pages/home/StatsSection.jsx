import React, { useRef } from "react";
import CountUp from "react-countup";
import { Users, Factory, Globe2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: 3000,
    suffix: "",
    label: "Trusted Clients Worldwide",
    colorFrom: "#6EE7B7",
    colorTo: "#3B82F6",
  },
  {
    icon: Factory,
    value: 65,
    suffix: "+",
    label: "Years of Industry Experience",
    colorFrom: "#FDE68A",
    colorTo: "#F97316",
  },
  {
    icon: Globe2,
    value: 20,
    suffix: "+",
    label: "Global Presence",
    colorFrom: "#60A5FA",
    colorTo: "#8B5CF6",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-label="Company statistics"
      className="relative py-24 px-6 bg-[gradient-to-tr from-[#1f2a5d] via-[#243377] to-[#1a2247]] overflow-hidden"
    >
      {/* Decorative radial gradient overlays */}
      <div
        aria-hidden="true"
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[gradient-to-tr from-purple-600/60 to-indigo-600/20 ]blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-pink-500/50 to-rose-500/10 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-3 z-10">
        {stats.map(({ icon: Icon, value, suffix, label, colorFrom, colorTo }, idx) => (
          <motion.article
            key={idx}
            className="flex flex-col items-center bg-[#242c80]  p-12 shadow-lg shadow-black/40 cursor-default transition-transform duration-400 hover:scale-[1.08] hover:shadow-xl hover:shadow-indigo-500/60"
            style={{
              opacity: 0,
              transform: "translateY(40px)",
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    transform: "translateY(0px)",
                    transition: {
                      delay: idx * 0.3,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }
                : {}
            }
            aria-labelledby={`stat-title-${idx}`}
          >
            {/* Icon with gradient circle */}
            <div
              className="mb-8 inline-flex p-6 rounded-full shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colorFrom} 0%, ${colorTo} 100%)`,
                boxShadow: `0 10px 30px ${colorFrom}44`,
              }}
            >
              <Icon className="w-14 h-14 text-white drop-shadow-lg" />
            </div>

            {/* Animated count */}
            <h3
              id={`stat-title-${idx}`}
              className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 tracking-tight select-none"
            >
              <CountUp end={value} duration={2.2} />{suffix}
            </h3>

            {/* Label */}
            <p className="mt-4 text-lg font-semibold text-gray-300 text-center max-w-[260px] sm:max-w-full">
              {label}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
