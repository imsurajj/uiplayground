'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"div">;

export function MotionWrapper({ children, className, ...props }: MotionWrapperProps) {
  return <motion.div className={className} {...props}>{children}</motion.div>;
}