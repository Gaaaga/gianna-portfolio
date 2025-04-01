import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import "../styles/navbar.css"

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Gianna Song",
  description: "Frontend Engineer & Product Owner",
  icons: {
    icon: '/g-logo.png',
    apple: '/g-logo.png',
  },
  openGraph: {
    title: "Gianna Song",
    description: "Frontend Engineer & Product Owner",
    images: ['/g-logo.png'],
  },
  twitter: {
    card: 'summary',
    title: "Gianna Song",
    description: "Frontend Engineer & Product Owner",
    images: ['/g-logo.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/g-logo.png" />
        <link rel="apple-touch-icon" href="/g-logo.png" />
        <meta name="description" content="Frontend Engineer & Product Owner" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}



import './globals.css'
