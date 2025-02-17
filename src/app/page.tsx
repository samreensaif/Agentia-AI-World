"use client";
import { Menu, X } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Mail, MessageSquare } from "lucide-react";
import { data } from "@/data";
import NC from "@/components/NC";
import AI from "@/components/AI";
import { GradientCard } from "@/components/gradient-card";
import { useState } from "react";

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="min-h-screen bg-black text-white">
       <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/agentia.png" alt="Agentia World Logo" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-white">Agentia World</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="#technology" className="text-gray-300 hover:text-white">
              Technology
            </Link>
            <Link href="#agents" className="text-gray-300 hover:text-white">
              Agents
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
          <div className="hidden md:block">
            <button className="bg-gradient-to-r hover:shadow-[0_0_50px_10px_rgba(138,_43,_226,_0.7)] from-purple-600 to-blue-600 text-white px-4 py-2 rounded-[10px]">
              Launch Console
            </button>
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link href="#features" className="text-gray-300 hover:text-white">
              Features
            </Link>
            <Link href="#technology" className="text-gray-300 hover:text-white">
              Technology
            </Link>
            <Link href="#agents" className="text-gray-300 hover:text-white">
              Agents
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <button className="bg-gradient-to-r hover:shadow-[0_0_50px_10px_rgba(138,_43,_226,_0.7)] from-purple-600 to-blue-600 text-white px-4 py-2 rounded-[10px] w-full">
              Launch Console
            </button>
          </div>
        )}
      </nav>
    </header>

      <main>
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-purple-900 via-black to-black">
          <div className="container mx-auto text-center">
            <div className="inline-block px-4 py-1 mb-6 text-purple-500">
              <div className="inline-block w-[10px] h-[10px] mr-1 bg-purple-500 rounded-full animate-pulse"></div>
              POWERED BY PANAVERSITY
            </div>
            <h1 className="text-4xl xsm:text-5xl sm:text-6xl md:text-7xl xl:text-[100px] font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Enterprise AI Agents
              <br />
              <span className="text-white">for the Future</span>
            </h1>
            <GradientCard />

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg xsm:text-xl px-6 md:px-8 py-3 md:py-4 rounded-[10px] flex items-center hover:scale-105 transition-transform hover:shadow-[0_0_50px_10px_rgba(138,_43,_226,_0.7)]">
                Deploy Your AI Agent <ArrowRight className="ml-2" />
              </button>

              <button className="border border-purple-500 hover:shadow-[0_0_50px_10px_rgba(138,_43,_226,_0.7)] text-white font-bold text-lg xsm:text-xl px-6 md:px-8 py-3 md:py-4 rounded-[10px]">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Powered by Advanced AI
            </h2>
            <h3 className="text-center text-lg sm:text-xl mb-12 text-gray-400">
              Built on cutting-edge neural architectures
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900 bg-opacity-50 p-6 rounded-[20px] border border-purple-500 border-opacity-20 hover:scale-105 transition-all duration-300 group flex flex-col items-center justify-center hover:border-purple-800 hover:shadow-[0_0_20px_5px_rgba(138,_43,_226,_0.3)]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-[10px] mb-4 flex items-center justify-center group-hover:rotate-12 transition-all duration-300">
                    <Image src={feature.img} alt={feature.heading} width={32} height={32}></Image>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.heading}</h3>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <NC />
        </section>
        <section>
          <AI />
        </section>

        <section id="pricing" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Starter", "Professional", "Enterprise"].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-900 hover:shadow-[0_0_20px_5px_rgba(138,_43,_226,_0.3)] bg-opacity-50 hover:scale-105 transition-all duration-300 p-8 rounded-2xl border ${
                    index === 1 ? "border-purple-500 bg-purple-800" : "border-purple-500 border-opacity-20"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                  <div className="text-3xl font-bold mb-6">
                    {index === 2 ? "$Custom" : `$${index === 0 ? "499" : "999"}`}
                    <span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                  <ul className="mb-8 space-y-4">
                    {[
                      `${index === 0 ? "2" : index === 1 ? "10" : "Unlimited"} AI Agent Instances`,
                      `${index === 0 ? "Basic" : index === 1 ? "Advanced" : "Full"} Neural Processing`,
                      `${index === 0 ? "24/7" : index === 1 ? "Priority" : "Dedicated"} Support`,
                      `${index === 0 ? "Weekly" : "Real-time"} Analytics`,
                      `${index === 0 ? "Basic" : "Custom"} Integration`,
                      "API Access",
                      `${index === 2 ? "Enterprise " : ""}Security`,
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="text-purple-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 rounded-lg ${
                      index === 1 ? "bg-gradient-to-r from-purple-600 to-blue-600" : "border border-purple-500"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-black">
           <div className="container mx-auto px-4">
             <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
               Get in Touch
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                 <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                 <div className="space-y-4">
                   <div className="flex items-center">
                     <Mail className="text-purple-500 mr-2" />
                     <span>contact@agentiaworld.com</span>
                   </div>
                   <div className="flex items-center">
                     <Globe className="text-purple-500 mr-2" />
                     <span>www.agentiaworld.com</span>
                   </div>
                 </div>
               </div>
               <form className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <input
                     type="text"
                     placeholder="First Name"
                     className="bg-gray-900 bg-opacity-50 border border-purple-500 border-opacity-20 rounded-lg p-2"
                   />
                   <input
                     type="text"
                     placeholder="Last Name"
                     className="bg-gray-900 bg-opacity-50 border border-purple-500 border-opacity-20 rounded-lg p-2"
                   />
                 </div>
                 <input
                   type="email"
                   placeholder="Email Address"
                   className="w-full bg-gray-900 bg-opacity-50 border border-purple-500 border-opacity-20 rounded-lg p-2"
                 />
                 <textarea
                   placeholder="Your Message"
                   rows={4}
                   className="w-full bg-gray-900 bg-opacity-50 border border-purple-500 border-opacity-20 rounded-lg p-2"
                 ></textarea>
                 <button
                   type="submit"
                   className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg"
                 >
                   Send Message
                 </button>
               </form>
             </div>
           </div>
         </section>



       <footer className="bg-black border-t border-purple-500 border-opacity-10 py-12">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div>
               <Link href="/" className="flex items-center space-x-2 mb-4">
                 <Image src="/agentia.png" alt="Agentia World Logo" width={32} height={32} className="w-8    h-8" />
                 <span className="text-xl font-bold">Agentia World</span>
               </Link>
               <p className="text-gray-400 mb-4">
                 Next-generation AI agents powering the future of enterprise intelligence.
               </p>
               <div className="flex space-x-4">
                 <a href="#" className="text-gray-400 hover:text-white">
                   <MessageSquare />
                 </a>
                 <a href="#" className="text-gray-400 hover:text-white">
                   <Globe />
                 </a>
               </div>
             </div>
             {["Product", "Company", "Legal"].map((category, index) => (
               <div key={index}>
                 <h3 className="text-lg font-semibold mb-4">{category}</h3>
                 <ul className="space-y-2">
                   {[
                     "Features",
                     "About",
                     "Privacy",
                     "Pricing",
                     "Blog",
                     "Terms",
                     "Documentation",
                     "Careers",
                     "Security",
                     "API",
                   ]
                     .slice(index * 3, (index + 1) * 3)
                     .map((item, i) => (
                       <li key={i}>
                         <a href="#" className="text-gray-400 hover:text-white">
                           {item}
                         </a>
                       </li>
                     ))}
                 </ul>
               </div>
             ))}
           </div>
           <div className="mt-12 pt-8 border-t border-purple-500 border-opacity-10 text-center text-gray-400">
             © 2025 Agentia World. Powered by Panaversity. All rights reserved.
           </div>
         </div>
       </footer>
        {/* <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Contact Us
            </h2>
            <p className="mb-12 text-gray-400">Feel free to reach out with any questions or inquiries!</p>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0">
              <a href="mailto:hello@example.com" className="text-gray-300 hover:text-white">
                <Mail className="w-6 h-6 inline-block mr-2" />
                hello@example.com
              </a>
              <a href="https://www.agentia.com" target="_blank" className="text-gray-300 hover:text-white">
                <Globe className="w-6 h-6 inline-block mr-2" />
                www.agentia.com
              </a>
              <a href="#live-chat" className="text-gray-300 hover:text-white">
                <MessageSquare className="w-6 h-6 inline-block mr-2" />
                Start a Live Chat
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
