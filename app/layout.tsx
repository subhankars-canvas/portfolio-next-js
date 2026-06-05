import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Subhankar UI developer',
  description: 'Subhankar UI developer portfolio site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
