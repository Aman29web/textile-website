import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  MapPin,
  Users,
  MessageSquareQuote
} from "lucide-react";

const PRIMARY = "#242c80";
const WHITE = "#ffffff";

const timelineEvents = [
  { year: "1990", text: "Company founded in Kanpur", icon: CalendarClock },
  { year: "1995", text: "Listed on BSE - entered public markets", icon: BadgeCheck },
  { year: "2010", text: "Expanded warehousing & logistics", icon: Building2 },
  { year: "2022", text: "Launched sustainable textile lines", icon: Users }
];

export default function GarlonIntroPanelPro() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    { text: "Garlon’s reliability is unmatched!", author: "Textile Partner, Mumbai" },
    { text: "On-time, every time!", author: "Apparel Brand, Delhi" },
    { text: "Quality we can trust for decades.", author: "Logistics Lead, Kanpur" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      className="relative overflow-x-hidden"
      style={{
        backgroundColor: WHITE,
        backgroundImage:
          `linear-gradient(rgba(36,44,128,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(36,44,128,0.05) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        boxSizing: "border-box",
      }}
    >
      {/* Corner accent: Make sure it stays inside viewport */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-64 w-64 rotate-12"
        style={{
          background: `radial-gradient(closest-side, rgba(36,44,128,0.10), transparent)`,
          borderRadius: "999px",
          filter: "blur(1px)",
          transformOrigin: "top right",
          // Removed negative offsets to avoid overflow outside viewport
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-14 box-border">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl"
          style={{
            backgroundColor: WHITE,
            border: `1px solid rgba(36,44,128,0.18)`,
            boxSizing: "border-box",
          }}
        >
          {/* Grid with min-w-0 on children to prevent overflow */}
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left block */}
            <div
              className="relative p-8 md:p-10 md:col-span-2 flex items-center justify-center min-w-0"
              style={{ backgroundColor: PRIMARY, color: WHITE, boxSizing: "border-box" }}
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.08) 100%)",
                }}
              />

              <motion.div
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 160 }}
                className="relative z-10 flex items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: WHITE,
                  color: PRIMARY,
                  border: `2px solid ${WHITE}`,
                  height: "6rem", // 24 * 4px
                  width: "6rem",
                  minWidth: "0",
                  minHeight: "0",
                  boxSizing: "border-box",
                }}
              >
                <span className="text-3xl font-black tracking-tight select-none">GP</span>
              </motion.div>
            </div>

            {/* Right block */}
            <div className="p-8 md:p-10 md:col-span-3 flex flex-col justify-center gap-6 min-w-0 box-border">
              <h2
                className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight"
                style={{ color: PRIMARY }}
              >
                Pioneering Trust in Polyester Yarns & Textiles
              </h2>

              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(36,44,128,0.80)", overflowWrap: "break-word" }}
              >
                Garlon Polyfab Industries — Kanpur’s flagship public textile company,
                trusted by global partners since <b>1990</b>. Creating value and weaving trust
                through innovation and sustainable growth.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 max-w-full">
                <FactChip icon={CalendarClock} label="Incorporated 1990" />
                <FactChip icon={MapPin} label="Kanpur, UP" />
                <FactChip icon={BadgeCheck} label="BSE: 514306" />
                <FactChip icon={Building2} label="Trade & Distribution" />
                <FactChip icon={Users} label="200+ Partners" />
              </div>

              <div className="pt-2">
                <a
                  href="#garlon-story"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition-transform hover:scale-[1.02] focus:scale-[1.02] max-w-full"
                  style={{ backgroundColor: PRIMARY, color: WHITE, border: `1px solid ${PRIMARY}`, boxSizing: "border-box" }}
                >
                  Learn More
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Timeline with horizontal scroll on small screens */}
          <div className="border-t" style={{ borderColor: "rgba(36,44,128,0.18)" }}>
            <div className="p-6 md:p-8">
              <div className="flex gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-primary-500 scrollbar-track-gray-100">
                {timelineEvents.map((event, idx) => (
                  <motion.button
                    key={event.year}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveTimeline(idx)}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold whitespace-nowrap flex-shrink-0"
                    style={{
                      backgroundColor: idx === activeTimeline ? PRIMARY : WHITE,
                      color: idx === activeTimeline ? WHITE : PRIMARY,
                      border: `1px solid ${PRIMARY}`,
                    }}
                  >
                    <event.icon className="h-4 w-4" />
                    <span>{event.year}</span>
                  </motion.button>
                ))}
              </div>
              <p className="mt-5 text-center" style={{ color: "rgba(36,44,128,0.80)" }}>
                {timelineEvents[activeTimeline].text}
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="border-t" style={{ borderColor: "rgba(36,44,128,0.18)" }}>
            <div className="p-6 md:p-8">
              <h3 className="mb-4 font-semibold" style={{ color: PRIMARY }}>
                What Our Partners Say
              </h3>

              <div className="relative mx-auto max-w-3xl min-w-0">
                <AnimatePresence mode="wait">
                  <motion.figure
                    key={testimonialIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-2xl p-6 md:p-7 max-w-full min-w-0"
                    style={{
                      backgroundColor: "rgba(36,44,128,0.04)",
                      border: `1px solid rgba(36,44,128,0.18)`,
                      color: PRIMARY,
                      boxSizing: "border-box",
                    }}
                  >
                    <div className="mb-3 flex items-center gap-2" style={{ color: PRIMARY }}>
                      <MessageSquareQuote className="h-5 w-5" />
                      <span className="text-sm font-bold" style={{ opacity: 0.8 }}>Partner Testimonial</span>
                    </div>
                    <blockquote className="text-lg leading-relaxed" style={{ color: PRIMARY, overflowWrap: "break-word" }}>
                      “{testimonials[testimonialIndex].text}”
                    </blockquote>
                    <figcaption className="mt-3 text-sm" style={{ color: "rgba(36,44,128,0.80)" }}>
                      — {testimonials[testimonialIndex].author}
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FactChip({ icon: Icon, label }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium min-w-0"
      style={{
        backgroundColor: WHITE,
        color: PRIMARY,
        border: `1px solid ${PRIMARY}`,
        boxSizing: "border-box",
      }}
    >
      <Icon className="h-4 w-4" /> {label}
    </span>
  );
}
