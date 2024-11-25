"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Components', href: '/docs/components' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/About' },
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
        isScrolled ? 'backdrop-blur-sm bg-black/80' : 'bg-transparent'
      )}
    >
      <div className="relative">
        <div className="container flex items-center justify-between relative z-10 px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="text-2xl pl-2 font-bold text-green-500">UI <span className="text-white">Playground</span></Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  "text-white hover:text-green-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center">
            <Button className="bg-green-600 text-white hover:bg-green-700 mr-4">
              Get Started
            </Button>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <IoMdClose size={24} />
              ) : (
                <RiMenu3Fill size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Border at the bottom of the navbar with shadow */}
        <div className={cn("h-px bg-gray-700 shadow transition-opacity duration-300", isScrolled ? 'opacity-0' : 'opacity-100', "md:hidden")} />

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="absolute top-17 left-0 w-full bg-black text-white p-4 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm pl-4">
                  {item.name}
                </Link>
              ))}
              
              <Button className="bg-green-600 text-white rounded-full hover:bg-green-700">
                Get Started
              </Button>
              <Button className="px-8 py-3 bg-black rounded-full border border-gray-700 text-white font-medium hover:bg-white/5 transition-all duration-200">
                View Components
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;