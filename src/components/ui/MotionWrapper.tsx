'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionWrapperProps = {
  children: React.ReactNode;
};

export function MotionWrapper({ children, ...props }: MotionWrapperProps) {
  return <motion.div {...props}>{children}</motion.div>;
} 