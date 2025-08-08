import React from "react";
import img1 from "../../assets/img2.png"; // Adjust this path as needed

const CorporateAbout = () => (
  <section className="w-full bg-white py-16" id="about-company">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center px-4">
      {/* Left: Textual Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div>
          <span className="block text-lg font-semibold tracking-wide text-cyan-700 mb-1">
            A Textile Processing Colossus
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            GARLON POLYFAB <br className="hidden md:block" />
            <span className="block text-cyan-800">INDUSTRIES LIMITED</span>
          </h2>
        </div>
        <div className="text-gray-700 flex flex-col gap-2 text-base leading-relaxed">
          <p>
            <span className="font-semibold">GARLON POLYFAB INDUSTRIES LIMITED</span> encompasses <span className="font-bold text-cyan-700">2 processing units</span>, <span className="font-bold text-cyan-700">1 Schiffli embroidery unit</span>, and a <span className="font-bold text-cyan-700">Hygiene manufacturing unit</span>.
          </p>
          <p>
            We prioritize Safety, Quality, Productivity, Saving, Discipline, Cleaning, and Training across various textile domains. We consistently invest in cutting-edge technology, never settling for second best.
          </p>
          <p>
            Committed to integrity, innovation, and sustainability, we actively turn these values into reality.
          </p>
        </div>
        <div className="mt-4">
          <button className="px-6 py-2 font-medium rounded-md border-2 border-gray-800 text-gray-800 bg-white hover:bg-cyan-700 hover:text-white transition">
            READ MORE
          </button>
        </div>
      </div>
      {/* Right: Single Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div
          className="rounded-xl overflow-hidden shadow-md flex justify-center items-center bg-gray-50 w-full"
          style={{ minHeight: "340px", maxWidth: "500px" }}
        >
          <img
            src={img1}
            alt="GARLON POLYFAB INDUSTRIES LIMITED Facility"
            className="w-full h-full object-contain"
            style={{ aspectRatio: "16/9", maxHeight: "380px" }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default CorporateAbout;
