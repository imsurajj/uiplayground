'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  popular = false 
}: PricingCardProps) {
  return (
    <div className={`relative p-6 rounded-xl border ${
      popular 
        ? 'border-green-500 bg-green-500/10' 
        : 'border-gray-200 dark:border-gray-800'
    } space-y-4`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-gray-400 ml-2">/month</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-2"
          >
            <CheckCircle2 className="text-green-500 w-5 h-5" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
