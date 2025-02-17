

import React from 'react';
import Image from 'next/image';
import { data1 } from '@/data1';

function NC() {
  return (
    <section id="features" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Neural Capabilities
        </h2>
        <h3 className="text-center text-lg md:text-xl mb-12 text-gray-400">
          Powered by next-generation artificial intelligence
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {data1.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-50 p-6 rounded-[20px] border border-purple-500 border-opacity-20 hover:scale-105 transition-all duration-300 group flex flex-col items-left justify-center animate-fade-in-up hover:shadow-[0_0_20px_5px_rgba(138,_43,_226,_0.3)]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-[10px] mb-4 flex items-center justify-center">
                <Image src={feature.img} alt={feature.heading} width={32} height={32} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.heading}</h3>
              <p className="text-sm md:text-base text-gray-400 text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NC;
