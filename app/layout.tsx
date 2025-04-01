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
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👩🏻‍💻</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👩🏻‍💻</text></svg>',
  },
  openGraph: {
    title: "Gianna Song",
    description: "Frontend Engineer & Product Owner",
    images: ['data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👩🏻‍💻</text></svg>'],
  },
  twitter: {
    card: 'summary',
    title: "Gianna Song",
    description: "Frontend Engineer & Product Owner",
    images: ['data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👩🏻‍💻</text></svg>'],
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👩🏻‍💻</text></svg>" />
        <link rel="apple-touch-icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👩🏻‍💻</text></svg>" />
        <meta name="description" content="Frontend Engineer & Product Owner" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}



import './globals.css'
