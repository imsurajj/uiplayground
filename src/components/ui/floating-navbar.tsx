"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  className,
  navItems,
}: {
  className?: string;
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn("flex fixed top-10 inset-x-0 max-w-fit mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2", className)}
    >
      {navItems.map((item, index) => (
        <a
          key={item.link}
          href={item.link}
          onClick={() => setActiveIndex(index)}
          className={cn("px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 relative", {
            "text-neutral-950 dark:text-neutral-50": activeIndex === index,
            "text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50": activeIndex !== index,
          })}
        >
          <span className="relative z-10 flex items-center gap-2">
            {item.icon && item.icon}
            {item.name}
          </span>
          {activeIndex === index && (
            <motion.div
              layoutId="pill"
              transition={{ type: "spring", duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
            ></motion.div>
          )}
        </a>
      ))}
    </motion.div>
  );
};
