import React, { useRef } from "react";
import {
  Newspaper,
  Leaf,
  ActivitySquare,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const posts = [
  {
    title: "India's Textile Exporters Eye New Horizons",
    summary:
      "Indian exporters target growth in Europe and Asia, undeterred by global tariff changes.",
    link: "https://www.india-briefing.com/news/india-textile-traders-eye-europe-asia-amid-us-tariffs-39054.html/",
    date: "Aug 5, 2025",
    icon: TrendingUp,
    tag: "Industry",
  },
  {
    title: "Sportking India Launches ₹1,000Cr Expansion",
    summary:
      "Massive greenfield initiative underscores robust demand and innovation in domestic textile manufacture.",
    link: "https://www.indiantextilemagazine.in/latest-news/",
    date: "Aug 4, 2025",
    icon: ActivitySquare,
    tag: "Expansion",
  },
  {
    title: "US Tariffs Loom: India’s $37B Export Sector Responds",
    summary:
      "Industry leaders brace for impact and pivot strategies to preserve market share and jobs.",
    link: "https://www.matexil.org/gallery/view/309249",
    date: "Aug 2, 2025",
    icon: Newspaper,
    tag: "Policy",
  },
  {
    title: "Redefining Sustainability in Textiles",
    summary:
      "GARLON POLYFAB sets new benchmarks in waste management and planet-friendly finishes.",
    link: "https://www.sutlejtextiles.com/blogs/",
    date: "Jul 28, 2025",
    icon: Leaf,
    tag: "Eco & CSR",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const NewsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      className="relative bg-gradient-to-tr from-[#f9fafc] to-[#ecf1fc] py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1f275e] tracking-tight">
            Latest Insights & Industry Trends
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover what's shaping the future of textiles, sustainability, and
            manufacturing excellence.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((post, idx) => (
            <motion.a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-[#242c80] transition-all transform hover:-translate-y-1 relative z-10"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={idx}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#ecf1fc] rounded-xl">
                  <post.icon className="w-6 h-6 text-[#242c80]" />
                </div>
                <div className="flex flex-col text-xs text-gray-500">
                  <span className="font-semibold uppercase text-[#242c80] tracking-wide">
                    {post.tag}
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#21295a] group-hover:text-[#242c80] transition-colors mb-2">
                {post.title}
              </h3>

              <p className="text-sm text-gray-600 mb-6">{post.summary}</p>

              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#242c80] hover:underline transition-all">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
