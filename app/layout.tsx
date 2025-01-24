import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hinan | Designer & Developer",
  description: "Portfolio of Hinan - Designer, Web Developer, Music Enthusiast, and Event Manager",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0A1B] text-white`}>{children}</body>
    </html>
  )
}

