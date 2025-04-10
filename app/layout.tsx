import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import "../styles/navbar.css"
import Script from "next/script"

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
				<meta name="description" content="Gianna Song is a senior frontend engineer with nearly a decade of experience building scalable SaaS and B2C products. Currently based in Melbourne, Australia." />
				<meta property="og:title" content="Gianna Song – Senior Frontend Engineer in Melbourne" />
				<meta property="og:description" content="Product-focused frontend engineer with deep experience across SaaS, creative tools, and platform architecture." />
				<meta property="og:url" content="https://gianna.im" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://gianna.im/your-preview-image.jpg" />
				<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className={montserrat.className}>
        {children}
        <SpeedInsights />
        <Analytics />
				{/* Google Analytics */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-NJ7E3KLT9F"
					strategy="afterInteractive"
				/>
				<Script id="ga-script" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-NJ7E3KLT9F');
					`}
				</Script>

				{/* Calendly Widget */}
				<Script
					src="https://assets.calendly.com/assets/external/widget.js"
					strategy="afterInteractive"
				/>
      </body>
    </html>
  )
}



