import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Story Creator Guide - AI Filmmaking Assistant',
  description: 'Smart guidance for creating stories with AI tools, managing time, and focusing on what matters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
