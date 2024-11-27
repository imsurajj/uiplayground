'use client';

import { ProtectedRoute } from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';

export default function DocumentationPage() {

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Documentation</h1>
              <p className="text-gray-400">
                Welcome to our comprehensive documentation.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                <p className="text-gray-400 mb-4">
                  Learn how to integrate and use our powerful features in your projects.
                </p>
                <div className="space-y-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Installation</h3>
                    <code className="bg-black/50 p-2 rounded block text-emerald-400">
                      npm install your-package-name
                    </code>
                  </div>
                </div>
              </section>

              <section className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4">Core Concepts</h2>
                <div className="space-y-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Basic Usage</h3>
                    <p className="text-gray-400">
                      Detailed explanation of core concepts and basic usage examples.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
