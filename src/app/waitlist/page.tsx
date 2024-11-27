'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPalette, 
  faLightbulb,
  faUser,
  faTimes,
  faArrowRight,
  faChevronDown,
  faSpinner,
  faCube,
  faGears,
  faWandMagicSparkles,
  faClipboardCheck, 
  faEnvelope, 
  faRocket, 
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faTwitter, 
  faLinkedin, 
  faDiscord, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { supabase } from '@/lib/supabase';

// Animated background with beams and grid
const BackgroundAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    
    {/* Animated Gradient Beams */}
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-transparent"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-bl from-green-600/10 via-transparent to-transparent"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1.2, 1, 1.2],
          rotate: [45, 0, 45]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
    </div>
    
    {/* Animated Dots */}
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-1 w-1 rounded-full bg-green-500/30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

const CornerPopper = ({ side }: { side: 'left' | 'right' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, y: side === 'left' ? 100 : -100, x: side === 'left' ? -100 : 100 }}
    animate={{ 
      opacity: [0, 1, 1, 0],
      scale: [0, 1.2, 1, 0],
      y: [side === 'left' ? 100 : -100, 0, -50, -100],
      x: [side === 'left' ? -100 : 100, 0, side === 'left' ? -50 : 50, side === 'left' ? -100 : 100],
    }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className={`fixed ${side === 'left' ? 'bottom-0 left-0' : 'top-0 right-0'} pointer-events-none`}
  >
    <div className="relative">
      {/* Emitter point */}
      <div className="absolute w-4 h-4 bg-green-500 rounded-full" />
      
      {/* Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: [0, Math.cos(i * 30 * (Math.PI / 180)) * 100],
            y: [0, Math.sin(i * 30 * (Math.PI / 180)) * 100],
          }}
          transition={{
            duration: 1,
            delay: 0.1 + (i * 0.02),
            ease: "easeOut",
          }}
          className="absolute w-2 h-2 bg-green-500 rounded-full"
          style={{
            transformOrigin: side === 'left' ? 'bottom left' : 'top right',
          }}
        />
      ))}
    </div>
  </motion.div>
);

const AnimatedBorderBeam = () => (
  <div className="absolute inset-0 overflow-hidden rounded-full">
    <div className="absolute inset-0 rounded-full border border-green-500/20" />
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0"
    >
      <div className="absolute top-0 left-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-green-500/40 to-transparent blur-sm transform -translate-x-1/2" />
    </motion.div>
  </div>
);

// const MarqueeSection = () => (
//   <div className="w-full overflow-hidden bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5 py-4 my-12">
//     <motion.div
//       animate={{
//         x: [0, -1035],
//       }}
//       transition={{
//         duration: 20,
//         repeat: Infinity,
//         ease: "linear",
//       }}
//       className="flex gap-8 whitespace-nowrap"
//     >
//       {[...Array(2)].map((_, i) => (
//         <div key={i} className="flex gap-8">
//           {[
//             "⚡ Lightning Fast",
//             "🎨 Beautiful Design",
//             "🛠 Easy Integration",
//             "📱 Responsive",
//             "🚀 Production Ready",
//             "💻 Developer Friendly",
//             "🔒 Secure by Default",
//             "🌟 Modern Stack"
//           ].map((text, index) => (
//             <span key={index} className="text-green-500 font-medium">
//               {text}
//             </span>
//           ))}
//         </div>
//       ))}
//     </motion.div>
//   </div>
// );

const FloatingIcons = () => {
  const icons = [faCode, faRocket, faLightbulb, faCube, faGears, faWandMagicSparkles];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0.2
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute text-green-500/10 text-4xl"
        >
          <FontAwesomeIcon icon={icon} />
        </motion.div>
      ))}
    </div>
  );
};

const WaitlistForm = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const libraryOptions = [
    'Material UI',
    'Chakra UI',
    'Tailwind UI',
    'Ant Design',
    'Bootstrap',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Insert into Supabase
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          { 
            name, 
            email,
            suggestions,
            status: 'pending',
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) {
        throw new Error(supabaseError.message);
      }

      // If successful, show success state
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e: { target: any; currentTarget: any; }) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-black to-black/80 rounded-2xl p-8 w-full max-w-lg relative border border-green-500/20 shadow-[0_0_50px_-12px] shadow-green-500/20"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-tr from-green-500 to-green-600 rounded-2xl flex items-center justify-center transform -rotate-12"
              >
                <FontAwesomeIcon icon={faRocket} className="text-white text-2xl" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">Join the Waitlist</h2>
              <p className="text-gray-400 mt-2">Get exclusive early access to our next-gen UI components and shape their future with your feedback</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="peer w-full px-4 py-3 bg-gray-800/50 border border-green-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/40 text-white placeholder-transparent transition-all"
                  />
                  <label className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-500 transition-all">
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email"
                    className="peer w-full px-4 py-3 bg-gray-800/50 border border-green-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/40 text-white placeholder-transparent transition-all"
                  />
                  <label className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-500 transition-all">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                    placeholder="Your suggestions"
                    rows={3}
                    className="peer w-full px-4 py-3 bg-gray-800/50 border border-green-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/40 text-white placeholder-transparent transition-all resize-none"
                  />
                  <label className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-500 transition-all">
                    Any suggestions or feature requests? (optional)
                  </label>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(16, 185, 129, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FontAwesomeIcon icon={faSpinner} />
                    </motion.div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Join Now</span>
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="transition-transform group-hover:translate-x-1" 
                    />
                  </>
                )}
              </motion.button>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-center mt-2"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-8 relative"
          >
            <CornerPopper side="left" />
            <CornerPopper side="right" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                delay: 0.2
              }}
              className="w-20 h-20 mx-auto bg-gradient-to-tr from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 relative z-10"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.4
                }}
              >
                <FontAwesomeIcon icon={faClipboardCheck} className="text-white text-3xl" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Welcome Aboard!</h3>
              <p className="text-gray-400">
                Thanks for joining our waitlist! We're excited to have you.
                <br />
                Get ready for an amazing journey!
              </p>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const SuccessFlare = () => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial="initial"
    animate="animate"
  >
    {/* Central flare */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 2, 2.5],
        opacity: [0.5, 0.3, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-green-500/30 to-green-300/30 rounded-full blur-xl"
    />

    {/* Animated particles */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          x: 0, 
          y: 0, 
          scale: 0,
          opacity: 0 
        }}
        animate={{
          x: [0, Math.cos(i * 30 * (Math.PI / 180)) * 100],
          y: [0, Math.sin(i * 30 * (Math.PI / 180)) * 100],
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: i * 0.05,
        }}
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-500 rounded-full"
        style={{
          transform: `translate(-50%, -50%)`,
        }}
      />
    ))}
  </motion.div>
);

const ParallaxText = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StatsCounter = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text mb-2"
    >
      {value}
    </motion.div>
    <div className="text-gray-400 text-sm">{label}</div>
  </div>
);

const Footer = () => (
  <footer className="relative border-t border-green-500/10 mt-20 bg-black/50 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
            UI Components
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building the future of web interfaces with modern, accessible, and beautiful components.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <FontAwesomeIcon icon={faDiscord} className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              <FontAwesomeIcon icon={faYoutube} className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Components
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Examples
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Themes
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Community
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Changelog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2 group">
                <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
          <p className="text-gray-400 text-sm">Subscribe to our newsletter for updates and exclusive content.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-800/50 border border-green-500/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500/40 text-white text-sm"
            />
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-r-lg transition-colors">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 mt-8 border-t border-green-500/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2024 UI Components. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function WaitlistPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <BackgroundAnimation />
      <FloatingIcons />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-12 h-full flex flex-col items-center justify-center">
        <motion.div className="text-center max-w-4xl mx-auto">
          <ParallaxText className="mb-6">
            <div className="relative inline-block">
              <AnimatedBorderBeam />
              <span className="relative px-6 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                Limited Early Access 
              </span>
            </div>
          </ParallaxText>

          {/* <MarqueeSection /> */}

          <ParallaxText className="text-5xl md:text-7xl font-bold text-white mb-6" delay={0.2}>
            Transform Your UI
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-transparent bg-clip-text">
              With Next-Gen Components
            </span>
          </ParallaxText>

          <ParallaxText className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto" delay={0.4}>
            Join an exclusive community of developers shaping the future of web interfaces.
            Get early access to our revolutionary UI components and be part of something extraordinary.
          </ParallaxText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black transition-all flex items-center justify-center gap-2 group"
            >
              Join the Waitlist
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="text-lg transition-transform group-hover:translate-x-1" 
              />
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mb-20"
          >
            <StatsCounter value="500+" label="Components" />
            <StatsCounter value="10k+" label="Early Signups" />
            <StatsCounter value="24/7" label="Support" />
          </motion.div>

          {/* Feature highlights with parallax */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { 
                icon: faCode, 
                title: "Modern Components", 
                desc: "Built with the latest tech stack for optimal performance",
                color: "bg-black hover: border-green-500"
              },
              { 
                icon: faLightbulb, 
                title: "Revolutionary Design", 
                desc: "Cutting-edge UI/UX patterns that set new standards",
                color: "bg-black hover: border-green-500"
              },
              { 
                icon: faRocket, 
                title: "Launch Ready", 
                desc: "Production-optimized code with extensive documentation",
                color: "bg-black hover: border-green-500"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl ${feature.color} border border-white/10 backdrop-blur-sm transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 mx-auto">
                  <FontAwesomeIcon icon={feature.icon} className="text-green-500 text-xl" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Waitlist Form Modal */}
      <AnimatePresence>
        {showForm && <WaitlistForm onClose={() => setShowForm(false)} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
