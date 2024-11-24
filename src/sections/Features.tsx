'use client';

import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { IconType } from 'react-icons';
import { FiLayout, FiCode, FiBox, FiSettings } from 'react-icons/fi';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconType;
}

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <MotionWrapper
      className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:bg-slate-900/75"
    >
      {/* Beam effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-xl blur-sm" />
      
      <div className="relative">
        <div className="mb-4 inline-block rounded-lg bg-slate-800 p-3">
          <Icon className="h-6 w-6 text-purple-500" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </MotionWrapper>
  );
}

export function Features() {
  const features = [
    {
      title: "Responsive Design",
      description: "Build beautiful interfaces that work seamlessly across all devices and screen sizes.",
      icon: FiLayout
    },
    {
      title: "Component Library",
      description: "Extensive collection of pre-built components to accelerate your development.",
      icon: FiBox
    },
    {
      title: "Custom Styling",
      description: "Easily customize and extend components with your own styles and animations.",
      icon: FiCode
    },
    {
      title: "Advanced Features",
      description: "Powerful tools and utilities for building complex user interfaces.",
      icon: FiSettings
    }
  ];

  return (
    <section className="relative py-24">
      {/* Background beam */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 h-64 w-64 bg-pink-500/30 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <MotionWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Everything you need to build modern user interfaces with speed and confidence.
          </p>
        </MotionWrapper>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
