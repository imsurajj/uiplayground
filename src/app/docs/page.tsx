"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
}

export default function DocsComingSoon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const cursorX = useSpring(0, { damping: 25, stiffness: 100 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 100 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Set dimensions
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize and update particles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const createParticle = (): Particle => {
      // Create particles along the bottom with slight variation
      const spreadWidth = dimensions.width * 0.8; // Use 80% of the width
      const startX = dimensions.width * 0.1 + Math.random() * spreadWidth; // Center the spread
      
      return {
        x: startX,
        y: dimensions.height + 10,
        vx: (Math.random() - 0.5) * 1.5, // Horizontal spread
        vy: -Math.random() * 4 - 2, // Upward velocity
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        life: 1, // Life starts at 1 and decreases
      };
    };

    let animationFrame: number;
    const maxParticles = 50;

    const updateParticles = () => {
      setParticles(prevParticles => {
        // Remove dead particles and add new ones
        const remainingParticles = prevParticles
          .filter(p => p.life > 0)
          .map(particle => {
            // Add some wavering motion
            particle.vx += (Math.random() - 0.5) * 0.1;
            particle.vy += (Math.random() - 0.5) * 0.05;

            // Update position
            const newX = particle.x + particle.vx;
            const newY = particle.y + particle.vy;

            // Decrease life based on position
            const lifeDecrease = 0.015;
            const newLife = particle.life - lifeDecrease;

            // Add slight inward drift as particles rise
            const centerX = dimensions.width / 2;
            const driftForce = (centerX - newX) * 0.0001;
            
            return {
              ...particle,
              x: newX,
              y: newY,
              vx: particle.vx + driftForce,
              vy: particle.vy * 0.99, // Slight slowdown
              life: newLife,
              opacity: particle.opacity * (newLife), // Fade out based on life
            };
          });

        // Add new particles if needed
        const particlesToAdd = Math.min(
          maxParticles - remainingParticles.length,
          3 // Max particles to add per frame
        );

        const newParticles = [...remainingParticles];
        for (let i = 0; i < particlesToAdd; i++) {
          newParticles.push(createParticle());
        }

        return newParticles;
      });

      animationFrame = requestAnimationFrame(updateParticles);
    };

    updateParticles();
    return () => cancelAnimationFrame(animationFrame);
  }, [dimensions]);

  // Handle cursor movement effect
  const [isMoving, setIsMoving] = useState(false);
  const moveTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      }
      setIsMoving(true);
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
      moveTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-12 h-12 rounded-full bg-green-600/20 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isMoving ? 0.8 : 1,
        }}
        animate={{
          scale: isMoving ? 0.8 : 1,
          opacity: isMoving ? 0.6 : 0.2,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      />
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-green-600/40 pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isMoving ? 1.2 : 1,
          opacity: isMoving ? 1 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />

      {/* Cursor Trail Effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 rounded-full bg-green-600/30 pointer-events-none z-40"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            opacity: isMoving ? 0.3 - (i * 0.05) : 0,
            scale: isMoving ? 1 - (i * 0.1) : 0.5,
          }}
          transition={{
            delay: i * 0.02,
            type: "spring",
            stiffness: 200 - (i * 20),
            damping: 15
          }}
        />
      ))}

      <div 
        ref={containerRef}
        className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden cursor-none"
      >
        <div className="max-w-4xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Logo or Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-24 h-24 mx-auto bg-green-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-600"
            >
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </motion.div>

            {/* Main Text */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white"
              >
                Documentation
                <span className="block text-green-600">Coming Soon</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
              >
                We're working hard to bring you comprehensive documentation for all our UI components.
                <span className="block mt-2 text-green-600">Watch the particles rise!</span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Flame Particles */}
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-green-600"
            style={{
              width: particle.size,
              height: particle.size,
              x: particle.x,
              y: particle.y,
              opacity: particle.opacity,
            }}
          />
        ))}

        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent rotate-12 transform-gpu" />
          </div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/10 to-transparent -rotate-12 transform-gpu" />
          </div>
        </div>
      </div>
    </>
  );
}
