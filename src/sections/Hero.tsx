'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState([
    { number: 0, label: "Active Users", target: 100 },
    { number: 0, label: "Team Members", target: 3 },
    { number: 0, label: "Components", target: 50 },
    { number: 0, label: "Support", target: 24 },
  ]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.number < stat.target) {
            return { ...stat, number: Math.min(stat.number + 200, stat.target) };
          }
          return stat;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-[100px] flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background beam */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(57,255,20,0.15), transparent 80%)`
        }}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Version tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block relative"
          >
            <span className="px-3 py-1 text-sm font-medium bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
              Launching v.1.0 Soon 🎉
            </span>
            <div 
              className="absolute inset-0 opacity-50"
              style={{
                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(57,255,20,0.15), transparent 80%)`
              }}
            />
          </motion.div>

          {/* Animated heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            Build Your Next Idea
            <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white/100">
              Faster & Better
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
           Over 50+ Free Tailwind CSS Components For Your Nextjs, Beautifully designed components that you can copy and paste into your apps. Made with Tailwind CSS. 
           </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-green-600/25">
              Get Started Free
            </button>
            <button className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:bg-white/5 transition-all duration-200">
              View Documentation
            </button>
          </motion.div>

          {/* Stats with counter animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}{typeof stat.number === 'number' && stat.label === "Uptime SLA" ? "%" : ""}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
    </section>
  );
}