import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
})

export const metadata: Metadata = {
  title: "Presente para meu bisbe",
  description: "Uma carta romântica interativa para o Dia dos Namorados",
  keywords: "dia dos namorados, carta de amor, romântico, interativo"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${dancingScript.variable}`}>{children}</body>
    </html>
  )
}
