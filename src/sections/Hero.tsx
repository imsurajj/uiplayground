'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState([
    { number: 0, label: "Downloads", target: 100, prefix: "", suffix: "+" },
    { number: 0, label: "GitHub Stars", target: 2, prefix: "", suffix: "" },
    { number: 0, label: "UI Components", target: 5, prefix: "", suffix: "+" },
    { number: 0, label: "Weekly Updates", target: 10, prefix: "", suffix: "/week" },
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', updateMousePosition);
      return () => window.removeEventListener('mousemove', updateMousePosition);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.number < stat.target) {
            return { ...stat, number: Math.min(stat.number + 1, stat.target) };
          }
          return stat;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-[100px] flex items-center justify-center overflow-hidden bg-black">
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Open Source Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center space-x-4"
          >
            {/* <a href="https://github.com/imsurajj/uiplayground" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/github/stars/imsurajj/uiplayground?style=social" alt="GitHub stars" />
            </a> */}
            {/* <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /> */}
          </motion.div>

          {/* Version tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block relative"
          >
            {/* <span className="px-3 mr-2 py-1 text-sm font-medium bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
              Open Source Library 🚀
            </span> */}
            <span className="px-3 py-1 text-sm font-medium bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
              Launching v.1.0 Soon 🎉
            </span>
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
            <a 
              // href="https://github.com/imsurajj/uiplaymain"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faGithub} />
              Contribute
            </a>
          </motion.div>

          {/* Stats with counter animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative mb-8 p-6 rounded-xl bg-black border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(74, 222, 128, 0.5)',
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative z-10">
                  <div className="text-3xl font-bold text-white mb-1 flex items-center justify-center">
                    <span className="text-green-400">{stat.prefix}</span>
                    {stat.number}
                    <span className="text-green-400">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
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