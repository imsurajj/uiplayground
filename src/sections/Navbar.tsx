'use client';

import React, { useState, useEffect } from "react";
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
          <Link href="/" className="text-2xl pl-2 font-bold">
            <span className="text-green-500">UI</span>
            <span className="text-white ml-2">Playground</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm transition-colors text-white hover:text-green-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center">
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-500"
            >
              {isOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <RiMenu3Fill className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base text-white hover:text-green-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;