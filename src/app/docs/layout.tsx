'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Pricing', href: '/docs/components/pricing' },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-gray-800 bg-black/95 lg:block">
        <div className="h-full overflow-y-auto py-6 pr-2 pl-4">
          <nav className="space-y-6">
            {sidebarItems.map((section, i) => (
              <div key={i} className="space-y-3">
                <h3 className="font-semibold text-green-500">{section.title}</h3>
                <div className="space-y-1">
                  {section.items.map((item, j) => (
                    <Link
                      key={j}
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        pathname === item.href
                          ? 'bg-green-500/10 text-green-500'
                          : 'text-gray-400 hover:bg-green-500/10 hover:text-green-500'
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile sidebar backdrop */}
      <div className="fixed inset-0 z-20 bg-black/80 backdrop-blur-sm lg:hidden" />

      {/* Main content */}
      <main className="flex-1 overflow-hidden lg:pl-64">
        <div className="container mx-auto max-w-4xl px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
