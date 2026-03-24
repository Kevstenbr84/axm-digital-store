import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AXM - Premium Digital Products',
  description: 'High-quality digital products for creators and developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  )
}