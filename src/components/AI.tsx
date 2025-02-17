import React from "react";
import Image from "next/image";

import { ai } from "@/ai";

function AI() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          AI Solutions
        </h2>
        <h3 className="text-center text-lg md:text-xl mb-12 md:mb-20 text-gray-400">
          Transforming industries with intelligent agents intelligence
        </h3>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 ">
          {ai.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 w-full max-w-[362px] mx-auto bg-opacity-50 p-6 m-auto rounded-[20px] border border-purple-500 border-opacity-20 hover:scale-105 transition-all duration-300 group flex flex-col items-start justify-center animate-fade-in-up hover:shadow-[0_0_20px_5px_rgba(138,_43,_226,_0.3)]"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-[10px] mb-4 flex items-center justify-center">
                <Image src={feature.img} alt={feature.heading} width={32} height={32} />
              </div>

              {/* Heading and Description */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.heading}</h3>
              <p className="text-gray-400 text-left text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AI;
