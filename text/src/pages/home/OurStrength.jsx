import React from "react";
import fabricImg from "../../assets/img3.png"; // replace with your image path

const OurStrength = () => {
  return (
    <section className="bg-white py-16 overflow-x-clip overflow-y-clip">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* Left Text */}
        <div className="md:w-1/2 mt-22 min-w-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Strength
          </h2>
          <p className="text-gray-700 text-lg font-medium leading-loose break-words">
            Leveraging our deep expertise and strong presence in the textile industry since 1990, Garlon Polyfab Industries Limited ensures that every product adheres to the highest quality benchmarks. With a dedicated team of skilled professionals and stringent quality control measures at every stage, we are committed to delivering excellence. From the moment an order is placed, through efficient processing and timely delivery, to our attentive post-sales support, we work to ensure that every interaction is marked by trust, transparency, and complete customer satisfaction.
          </p>
        </div>

        {/* Right Image with Frame */}
        <div className="md:w-1/2 relative overflow-x-clip overflow-y-clip">
          {/* Frame */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-gray-300 -z-10"></div>
          
          {/* Image */}
          <img
            src={fabricImg}
            alt="Fabric"
            className="w-full object-cover shadow-lg animate-floatUpDown"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStrength;
