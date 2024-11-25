import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
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

// Add custom styles for the footer

// Add marquee animation
const marqueeAnimation = `
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

// Add style tag to head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = marqueeAnimation;
  document.head.appendChild(style);
}

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
];

export const Footer = () => {
  return (
    <footer
      className="relative bg-black text-white py-8"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
      Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 sm:pt-12 lg:px-8 lg:pt-6">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-8">
        <div className="flex space-x-6">
          {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white hover:text-green-500 transition duration-300"
          >
            <span className="sr-only">{link.name}</span>
            <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            >
            <path d={link.icon.icon[4].toString()} />
            </svg>
          </a>
          ))}
        </div>
        </div>
          {/* Adding a Logo brand in the footer */}
        {/* <div className="logo">
          <h2 className="text-2xl font-semibold text-green-500">
            UI Playground</h2>
            <p className="mt- text-sm leading-6 text-white/80 max-w-xs">
              Explore and integrate beautiful, responsive components with simple copy-paste functionality for your next project.
            </p> 
            
         <div className="mt- flex items-center">
            <a
              href="#getstarted"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition duration-300"
            >
              Get Started
            </a>
            <a
              href="#documentation"
              className="ml-4 text-gray-400 hover:text-green-500 text-sm transition duration-300"
            >
              View Documentation →
            </a>
          </div> 
          </div>
          <div className="mt-15 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-12"></div> */}
        <div className="mt-5 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
          <h3 className="text-sm font-semibold leading-6 text-green-500">
            Solutions
          </h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Marketing
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Analytics
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Commerce
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Insights
            </a>
            </li>
          </ul>
          </div>
          <div className="mt-10 md:mt-0">
          <h3 className="text-sm font-semibold leading-6 text-green-500">
            Support
          </h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Pricing
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Documentation
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Guides
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              API Status
            </a>
            </li>
          </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
          <h3 className="text-sm font-semibold leading-6 text-green-500">
            Company
          </h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              About
            </a>
            </li>
            <li>
            <a
              href="/Request"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Request Components
            </a>
            </li>
            {/* <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Jobs
            </a>
            </li> */}
            <li>
            <a
              href="/Contact"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Contact us
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Partners
            </a>
            </li>
          </ul>
          </div>
          <div className="mt-5 md:mt-0">
          <h3 className="text-sm font-semibold leading-6  text-green-500">
            Legal
          </h3>
          <ul role="list" className="mt-6 space-y-4">
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Claim
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Privacy & Policy
            </a>
            </li>
            <li>
            <a
              href="#"
              className="text-sm leading-6 text-gray-400 hover:text-green-500"
            >
              Terms & Conditions
            </a>
            </li>
          </ul>
          </div>
        </div>
        </div>
      </div>
      <div className="mt-15 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-12">
        <p className="text-xs leading-5">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-green-500"> UI Playground</span>, Inc. All rights
        reserved.
        </p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
// Add fade-in animation
const fadeInAnimation = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  footer {
    animation: fadeIn 0.8s ease-out forwards;
  }
`;

// Add style tag for fade-in animation
if (typeof document !== 'undefined') {
  const fadeStyle = document.createElement('style');
  fadeStyle.innerHTML = fadeInAnimation;
  document.head.appendChild(fadeStyle);
}