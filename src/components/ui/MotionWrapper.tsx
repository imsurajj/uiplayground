'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { ComponentProps } from 'react';

type MotionDivProps = ComponentProps<typeof motion.div>;

interface MotionWrapperProps extends MotionDivProps {
  children: ReactNode;
  className?: string;
}

export function MotionWrapper({ children, className, ...props }: MotionWrapperProps) {
  return <motion.div className={className} {...props}>{children}</motion.div>;
}