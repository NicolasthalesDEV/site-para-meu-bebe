"use client"

import { useState } from "react"
import BackgroundAnimation from "@/components/background-animation"
import Letter from "@/components/letter"
import MusicPlayer from "@/components/music-player"
import Surprise from "@/components/surprise"

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [letterComplete, setLetterComplete] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-rose-100 relative overflow-hidden">
      <BackgroundAnimation />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Espaço dedicado para o player */}
        <div className="flex justify-end mb-4">
          <MusicPlayer />
        </div>

        <div className="max-w-4xl mx-auto">
          <Letter
            onComplete={() => setLetterComplete(true)}
            onShowSurprise={() => setShowSurprise(true)}
            letterComplete={letterComplete}
          />

          {showSurprise && <Surprise />}
        </div>
      </div>
    </main>
  )
}
