'use client';

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Documentation</h1>
        <p className="mt-4 text-lg text-gray-400">
          Welcome to our documentation. Here you&apos;ll find comprehensive guides and documentation to help you start working with our components as quickly as possible.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="group relative rounded-lg border border-gray-800 p-6 hover:border-green-500">
            <h3 className="font-semibold text-white">Installation</h3>
            <p className="mt-2 text-gray-400">
              Step-by-step guide to installing and setting up our components in your project.
            </p>
          </div>
          <div className="group relative rounded-lg border border-gray-800 p-6 hover:border-green-500">
            <h3 className="font-semibold text-white">Components</h3>
            <p className="mt-2 text-gray-400">
              Explore our collection of pre-built components with examples and API references.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Core Concepts</h2>
        <div className="prose prose-gray max-w-none text-gray-400">
          <p>
            Our components are built with modern web technologies and follow best practices for accessibility, performance, and developer experience.
          </p>
          <ul className="mt-4 space-y-2">
            <li>Built with React and TypeScript</li>
            <li>Fully customizable with Tailwind CSS</li>
            <li>Accessible by default</li>
            <li>Dark mode support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
