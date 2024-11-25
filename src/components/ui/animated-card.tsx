"use client";
import { useMotionValue, useSpring, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const AnimatedCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (!isHovered) {
      x.set(0);
      y.set(0);
      rotateX.set(0);
      rotateY.set(0);
    }
  }, [isHovered, x, y, rotateX, rotateY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 50);
    y.set(yPct * 50);
    rotateX.set(yPct * 20);
    rotateY.set(xPct * 20);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transformStyle: "preserve-3d",
        x,
        y,
        rotateX,
        rotateY,
      }}
      className={`relative ${className}`}
    >
      {children}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
          }}
          className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-3xl pointer-events-none"
        />
      )}
    </motion.div>
  );
};
