"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        'bg-transparent',
        isScrolled ? 'backdrop-blur-sm bg-black/80' : ''
      )}
    >
      <div className={cn("relative", { "backdrop-blur-sm": isOpen })}>
        <div className="container flex items-center justify-between relative z-10 px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="text-2xl font-bold text-emerald-500">SaaS Product</Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  "text-white hover:text-emerald-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700 mr-4">
              Get Started
            </Button>
            <Button variant="outline" className="text-black border border-white hover:bg-emerald-600 hover:text-white">
              Learn More
            </Button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.line
                    x1="3" y1="6" x2="21" y2="6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.line
                    x1="3" y1="12" x2="21" y2="12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ display: 'none' }}
                  />
                  <motion.line
                    x1="3" y1="18" x2="21" y2="18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -45 }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.line
                    x1="3" y1="6" x2="21" y2="6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.line
                    x1="3" y1="12" x2="21" y2="12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.line
                    x1="3" y1="18" x2="21" y2="18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-black text-white p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm">
                  {item.name}
                </Link>
              ))}
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;