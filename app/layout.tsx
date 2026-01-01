import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "AISIDE | AI Implementation Studio",
  description: "Custom AI solutions for visualization, web development, and automation - delivered in days, not weeks.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={cn("min-h-screen bg-black font-sans antialiased selection:bg-white/20", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
