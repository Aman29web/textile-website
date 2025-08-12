import React from 'react'
import { motion } from "framer-motion";
import { Mail, MapPin, ShieldCheck, BadgeCheck, Building2 } from "lucide-react";

// Brand palette
const brand = {
  primary: "#242c80", // deep navy
  primaryDark: "#1B215C",
  soft: "#E0E4FF", // light bluish white
  accent: "#FFD966", // warm gold
  bg: "#ffffff",
};

export default function AboutGarlon() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Decorative background gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        style={{
          background:
            `radial-gradient(60rem 60rem at 80% -10%, ${brand.primary}22 0%, transparent 60%),
             radial-gradient(50rem 50rem at -10% 30%, ${brand.primaryDark}22 0%, transparent 60%),
             linear-gradient(180deg, ${brand.bg} 0%, #f8fafc 100%)`,
        }}
      />

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-6 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <h1
              className="inline-block bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl"
              style={{ color: brand.primary }}
            >
              Garlon Polyfab Industries Limited
            </h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Established in 1990, Garlon Polyfab is a textile trading and distribution company
              specializing in the processing and trading of polyester yarns and textiles. Based in Kanpur,
              Uttar Pradesh, and listed on the BSE.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
            <BadgeCheck style={{ color: brand.primary }} className="h-5 w-5" />
            <div className="text-sm">
              <div className="font-semibold text-slate-800">BSE Listed</div>
              <div className="font-mono text-xs text-slate-600">BSE Code: 514306</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Split hero card */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="group relative col-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-10 blur-3xl"
              style={{ background: brand.primary }}
            />
            <h2 className="text-xl font-bold text-slate-900">About Us</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Garlon Polyfab Industries Limited is a textile trading and distribution Company incorporated in the year 1990,
              specializing in the processing and trading of polyester yarns and textiles. It is based in Kanpur, Uttar Pradesh,
              and is listed on the BSE (BSE Code: 514306).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                <Building2 className="h-3.5 w-3.5" /> Textile Trading & Distribution
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                <ShieldCheck className="h-3.5 w-3.5" /> Since 1990
              </span>
            </div>
          </div>

          {/* Quick contact card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-md">
            <h3 className="text-sm font-semibold tracking-wider text-slate-800">Contact</h3>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail style={{ color: brand.primary }} className="mt-0.5 h-4 w-4" />
                <div>
                  <div className="text-slate-500">Mail</div>
                  <a href="mailto:gpil@hotmail.com" className="font-medium text-slate-900 hover:underline">gpil@hotmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin style={{ color: brand.primary }} className="mt-0.5 h-4 w-4" />
                <div>
                  <div className="text-slate-500">Registered Office</div>
                  <p className="font-medium text-slate-900">
                    15/79-B, Lower Ground Floor, Sunrise Apartment, Civil Lines,<br />
                    Kanpur, Uttar Pradesh 208001, India.
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-2xl"
                 style={{ background: brand.primary }}
            />
          </div>
        </motion.div>
      </section>

      {/* Chairman Message */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-md"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="relative shrink-0 rounded-2xl p-4 text-center md:w-64">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl"
                   style={{ background: brand.primary }}
              >
                <span className="text-3xl font-black text-white">GP</span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Director & Chairman Message
              </p>
            </div>

            <blockquote className="relative flex-1">
              <div className="absolute -left-2 -top-2 text-6xl font-black leading-none opacity-10" style={{ color: brand.primary }}>“</div>
              <p className="relative z-10 text-lg leading-8 text-slate-700">
                The global economy remains resilient despite rising uncertainties and escalation in geopolitical conflicts which are causing frequent disruptions. The enduring strength however is fraught with divergent growth; US economy continues to repel recession fears, in sharp contrast to stagnant growth in other advanced economies, mainly in the Euro zone and UK. China’s economy remains engulfed by the downturn in its property sector, while low consumer sentiment kept domestic demand subdued. This has resulted in global growth of 3.2% in 2023 remaining below the historical average of 3.8%.
                Amidst such a challenging global scenario, the Indian economy is a beacon of progress, growing at an average of around 8% in the post-pandemic period and positioned to move from being the 5th to the 3rd largest economy globally in the near term. It is backed by sustained consumption and investment demand, reaffirming its position as a standout performer. This resilience is reflected in the constant upgradation of India’s GDP growth outlook by global agencies. India’s proactive stance on reform and investment in sustainable growth avenues sets a benchmark for other emerging economies.
              </p>
              <div className="mt-4 h-1 w-24 rounded-full" style={{ backgroundColor: brand.accent }} />
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* Commitment / Quality section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-slate-900">Our Commitment to Quality</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Leveraging our deep expertise and strong presence in the textile industry since 1990, Garlon Polyfab Industries Limited ensures that every product adheres to the highest quality benchmarks. With a dedicated team of skilled professionals and stringent quality control measures at every stage, we are committed to delivering excellence. From the moment an order is placed, through efficient processing and timely delivery, to our attentive post-sales support, we work to ensure that every interaction is marked by trust, transparency, and complete customer satisfaction.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Stringent QA protocols",
                "Trusted sourcing network",
                "On-time delivery",
                "Responsive post-sales support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <ShieldCheck style={{ color: brand.primary }} className="h-4 w-4" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-10 blur-3xl"
                 style={{ background: brand.primary }}
            />
          </div>

          {/* Brand tile with stat-style presentation */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-md">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Identity</h4>
                <p className="mt-1 text-2xl font-bold text-slate-900">Based in Kanpur, India</p>
                <p className="mt-2 text-slate-600">Focused on polyester yarns and textiles trading & processing.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-3xl font-extrabold" style={{ color: brand.primary }}>1990</div>
                  <div className="mt-1 text-xs text-slate-500">Year of Incorporation</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-3xl font-extrabold" style={{ color: brand.primary }}>BSE</div>
                  <div className="mt-1 text-xs text-slate-500">Publicly Listed</div>
                </div>
              </div>

              <a
                href="mailto:gpil@hotmail.com"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
                style={{ background: brand.primary }}
              >
                <Mail className="h-4 w-4" />
                Connect with us
              </a>
            </div>

            <svg
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-20"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="90" stroke={brand.primary} strokeDasharray="8 8" />
              <circle cx="100" cy="100" r="60" stroke={brand.primary} strokeDasharray="6 6" />
              <circle cx="100" cy="100" r="30" stroke={brand.primary} strokeDasharray="4 4" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Footer-style banner (can be reused as site footer palette inspiration) */}
      {/* <section
        className="relative mt-4 border-t"
        style={{ borderColor: `${brand.primary}22` }}
      >
        <div
          className="mx-auto max-w-7xl px-6 py-10"
          style={{ background: `linear-gradient(180deg, ${brand.primaryDark}, ${brand.primary})` }}
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Garlon Polyfab Industries Limited. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                Palette: {brand.primary} · {brand.primaryDark} · {brand.soft} · {brand.accent}
              </span>
              <a
                href="mailto:gpil@hotmail.com"
                className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-white/20"
              >
                Write to us
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
