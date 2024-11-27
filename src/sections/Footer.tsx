import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Login",
    href: "#login",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#youtube",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#x",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#discord",
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "#github",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    href: "#linkedin",
  },
];

export const Footer = () => {
  return (
    <footer className="relative mt-0 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">
              UI Playground
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore and integrate beautiful, responsive components with simple copy-paste functionality for your next project.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-green-500 transition-colors"
                >
                  <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  API Status
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-green-600">Stay Updated</h3>
            <p className="text-gray-600 text-sm">Subscribe to our newsletter for updates and exclusive content.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black border border-green-500/30 rounded-lg px-4 py-2 text-sm text-gray-300 flex-grow focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500/50 transition-colors placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; 2024 UI Playground. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;