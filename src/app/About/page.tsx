'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
            {/* Animated dots */}
            <div 
                className="absolute h-3 w-3 rounded-full bg-green-500/20"
                style={{
                    left: '10%',
                    top: '20%',
                    animation: 'float 6s ease-in-out infinite'
                }}
            />
            <div 
                className="absolute h-2 w-2 rounded-full bg-green-500/20"
                style={{
                    left: '80%',
                    top: '40%',
                    animation: 'float 8s ease-in-out infinite'
                }}
            />

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) }
                    50% { transform: translateY(-20px) }
                }
            `}</style>

            {/* Background gradient effect */}
            <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
                <div 
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-green-500 to-black opacity-30" 
                    style={{ 
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>

            {/* Main content */}
            <div className="mx-auto max-w-7xl relative z-10">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center"
                >
                    <motion.div variants={fadeInUp}>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            About <span className="text-green-500">UI Playground</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Empowering developers with beautiful, accessible, and customizable UI components
                        </p>
                    </motion.div>

                    {/* Version Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-6 flex justify-center gap-4"
                    >
                        <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-green-500/10 text-green-500 ring-1 ring-inset ring-green-500/20">
                            Version 1.0 Coming Soon 🚀
                        </span>
                    </motion.div>
                </motion.div>

                {/* Mission Section with Counter */}
                <motion.div 
                    ref={containerRef}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
                >
                    <motion.div 
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-2xl bg-black/40 p-8 backdrop-blur-sm ring-1 ring-white/10 hover:ring-green-500/30 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-green-500 mb-4">Our Mission</h2>
                        <p className="text-gray-300">
                            UI Playground is dedicated to providing developers with high-quality, customizable UI components that are both beautiful and accessible. 
                            We believe in making web development easier and more enjoyable for everyone.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="text-center p-4 rounded-lg bg-black/50">
                                <div className="text-3xl font-bold text-green-500">50+</div>
                                <div className="text-sm text-gray-400">Components</div>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-black/50">
                                <div className="text-3xl font-bold text-green-500">100%</div>
                                <div className="text-sm text-gray-400">Free</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-2xl bg-black/40 p-8 backdrop-blur-sm ring-1 ring-white/10 hover:ring-green-500/30 transition-all duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-green-500 mb-4">Why Choose Us</h2>
                        <ul className="space-y-4 text-gray-300">
                            {[
                                { icon: "✨", text: "Modern, responsive components", desc: "Built with the latest web technologies" },
                                { icon: "🎨", text: "Fully customizable designs", desc: "Tailor components to match your brand" },
                                { icon: "♿", text: "Accessibility-first approach", desc: "WCAG 2.1 compliant components" },
                                { icon: "📱", text: "Mobile-friendly layouts", desc: "Perfect experience on all devices" }
                            ].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-black/50 transition-colors"
                                >
                                    <span className="text-green-500 text-xl">{item.icon}</span>
                                    <div>
                                        <div className="font-medium">{item.text}</div>
                                        <div className="text-sm text-gray-400">{item.desc}</div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Features Section */}
                <motion.div 
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="mt-16"
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Fast & Lightweight",
                                description: "Optimized for performance without sacrificing functionality",
                                icon: (
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Modular Design",
                                description: "Use only what you need, customize as you go",
                                icon: (
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Easy Integration",
                                description: "Simple to implement in any React project",
                                icon: (
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                )
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                className="rounded-2xl bg-black/40 p-6 text-center backdrop-blur-sm ring-1 ring-white/10 hover:ring-green-500/30 transition-all duration-300"
                            >
                                <div className="mx-auto h-12 w-12 rounded-full bg-black/50 flex items-center justify-center mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                                <p className="mt-2 text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technologies Section */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="mt-16 text-center"
                >
                    <motion.h2 variants={fadeInUp} className="text-2xl font-semibold text-white mb-8">
                        Built with Modern Technologies
                    </motion.h2>
                    <motion.div 
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-6"
                    >
                        {[
                            "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"
                        ].map((tech, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 rounded-full bg-black/40 text-gray-300 ring-1 ring-white/10 hover:ring-green-500/30 transition-all duration-300"
                            >
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Social Links with enhanced animations */}
                <motion.div 
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                    className="mt-16 text-center"
                >
                    <motion.h2 variants={fadeInUp} className="text-2xl font-semibold text-white mb-6">
                        Connect With Us
                    </motion.h2>
                    <motion.div 
                        variants={fadeInUp}
                        className="flex justify-center space-x-6"
                    >
                        <Link 
                            href="https://github.com/imsurajj/uiplaymain" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-black ring-1 ring-white/10 group-hover:ring-green-500/30">
                                <FaGithub className="h-6 w-6 text-gray-400 group-hover:text-green-500 transition-colors" />
                            </div>
                        </Link>
                        <Link 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-black ring-1 ring-white/10 group-hover:ring-green-500/30">
                                <FaTwitter className="h-6 w-6 text-gray-400 group-hover:text-green-500 transition-colors" />
                            </div>
                        </Link>
                        <Link 
                            href="#" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-black ring-1 ring-white/10 group-hover:ring-green-500/30">
                                <FaLinkedin className="h-6 w-6 text-gray-400 group-hover:text-green-500 transition-colors" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}