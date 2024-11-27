'use client';

import Header from "@/sections/Navbar";
import { AuthProvider } from '@/contexts/AuthContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        {children}
      </div>
    </AuthProvider>
  );
}
