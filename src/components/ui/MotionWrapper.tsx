'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
} & MotionProps;

export function MotionWrapper({ children, className, ...props }: MotionWrapperProps) {
  return <motion.div className={className} {...props}>{children}</motion.div>;
}