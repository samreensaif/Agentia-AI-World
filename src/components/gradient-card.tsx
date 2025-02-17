


import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export const GradientCard: React.FC = () => {
  return (
   <div className="relative w-full xsm:w-[90%] sm:w-[80%] md:w-[672px] h-auto min-h-[109px] mx-auto my-4 xsm:my-6 sm:my-8 md:my-[104px] bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-xl overflow-hidden">
         <div className="absolute left-3 xsm:left-4 sm:left-5 md:left-[25px] top-3 xsm:top-4 sm:top-5 md:top-[25px] w-8 h-8 xsm:w-9 xsm:h-9 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
           <Image
             src="/agentiaWhite.png"
             alt="Agentia World Logo"
             width={32}
             height={32}
             className="w-6 h-6 xsm:w-7 xsm:h-7 sm:w-8 sm:h-8 text-white"
           />
         </div>
         <div className="absolute left-[60px] xsm:left-[68px] sm:left-[75px] md:left-[81px] top-3 xsm:top-4 sm:top-5 md:top-[25px] right-3 xsm:right-4 sm:right-5 md:right-[25px] h-auto min-h-[59px] py-2 xsm:py-3 md:py-0 md:h-[59px] bg-white/5 rounded-lg flex items-center">
           <p className="ml-2 xsm:ml-3 sm:ml-4 text-sm xsm:text-base sm:text-lg md:text-[20px] text-gray-300 font-inter pr-2 xsm:pr-3 sm:pr-4">
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
       </div>
  );
};
