import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* Add any dashboard-specific layout elements here */}
      {children}
    </div>
  )
} 