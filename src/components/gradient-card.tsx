

"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export const GradientCard: React.FC = () => {
  return (
    <div className="relative max-w-[90%] md:max-w-[672px] w-full h-auto mx-auto my-12 md:my-[104px] bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-xl overflow-hidden p-6 md:p-0">
      {/* Gradient Circle */}
      <div className="absolute left-6 top-6 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
        <Image
          src="/agentiaWhite.png"
          alt="Agentia World Logo"
          width={32}
          height={32}
          className="w-8 h-8 text-white"
        />
      </div>
      
      {/* Content Area */}
      <div className="relative md:absolute md:left-20 md:top-6 right-6 bg-white/5 rounded-lg p-4 md:p-0 h-auto">
        <p className="text-sm md:text-[20px] text-gray-300 font-inter leading-6">
          <Typewriter
            words={[
              "Hello! I am your AI agent. How can I enhance your business today?",
              "I can help optimize your workflows with neural networks.",
              "Let me assist you with advanced data analytics.",
              "Would you like to explore our AI integration solutions?",
              "I can also assist you with global-scale AI deployment.",
            ]}
            loop={0}
            cursor={true}
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
      </div>
      
      {/* Vertical Divider */}
      <div className="hidden md:block absolute md:left-[420px] top-4 w-0.5 h-5 bg-purple-500"></div>
    </div>
  );
};
