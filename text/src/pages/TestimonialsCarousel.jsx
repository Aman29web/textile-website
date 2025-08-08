import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Garlon Polyfab has delivered unwavering quality and on-time service for years. Their fabrics are a benchmark for the industry.",
    name: "Aarav Sharma",
    position: "CEO, PureTextiles Inc.",
    img: "/testimonials/1.jpg",
    tag: "Long-term Partner",
  },
  {
    quote:
      "Their sustainable practices and responsiveness have transformed the way we source textiles globally. Highly recommended.",
    name: "Simaran Pathak",
    position: "Lead Buyer, Greenwear",
    img: "/testimonials/2.jpg",
    tag: "International Client",
  },
  {
    quote:
      "Impressive innovation and customer support! Garlon Polyfab setting new standards in the fabric manufacturing sector.",
    name: "Rahul Patel",
    position: "Co-Founder, Inspire Apparel",
    img: "/testimonials/3.jpg",
    tag: "Innovator",
  },
  {
    quote:
      "We value not just the product excellence but the human is touch in every interaction. Garlon Polyfab is a rare find. highly recommended",
    name: "Samrat Singh",
    position: "Partner, NextGen Fabrics",
    img: "/testimonials/4.jpg",
    tag: "Boutique Brand",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const TestimonialsCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-[#fff] relative overflow-hidden" ref={ref}>
      {/* Background gradient layers */}
      <div className="absolute top-0 left-0 w-1/2 h-96 bg-gradient-to-br from-[#242c80]/10 to-transparent z-0" />
      <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-gradient-to-tl from-cyan-200/10 to-transparent z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#1f275e] mb-16 tracking-tight">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          className="pb-20"
          spaceBetween={30}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="flex">
              <motion.figure
                className="group relative bg-white rounded-3xl p-10 sm:p-12 shadow-xl hover:shadow-2xl
                  border transition-all duration-300 transform hover:-translate-y-2
                  flex flex-col h-full border-[#24407e]"
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={idx}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 text-[#242c80]">
                  <Quote className="w-10 h-10" />
                </div>

                {/* Image & identity */}
                <div className="flex items-center gap-5 mb-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div>
                    <div className="font-semibold text-[#1f275e] text-lg">
                      {t.name}
                    </div>
                    <div className="text-sm text-gray-500">{t.position}</div>
                    <span className="text-xs font-medium mt-1 inline-block bg-gradient-to-r from-[#242c80] to-cyan-400 text-white rounded-full px-3 py-0.5 shadow">
                      {t.tag}
                    </span>
                  </div>
                </div>

                {/* Quotation */}
                <blockquote className="text-gray-700 text-base leading-relaxed italic tracking-wide mt-auto">
                  “{t.quote}”
                </blockquote>
              </motion.figure>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper dots override */}
        <style>{`
          .swiper-pagination-bullet {
            background: #242c80 !important;
            opacity: 0.3;
            margin: 0 8px;
          }
          .swiper-pagination-bullet-active {
            background: #19d3e6 !important;
            opacity: 1 !important;
            box-shadow: 0 0 8px #19d3e666;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
