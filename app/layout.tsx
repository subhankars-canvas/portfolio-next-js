import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Subhankar FullStack developer',
  description: 'Subhankar FullStack developer portfolio site',
  icons: {
    icon: '/assets/favicon.png',
    shortcut: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  },
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
