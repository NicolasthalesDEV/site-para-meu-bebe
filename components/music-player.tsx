"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, Music, ChevronDown, ChevronUp } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const playPromiseRef = useRef<Promise<void> | null>(null)

  const togglePlay = async () => {
    if (!audioRef.current || isLoading) return

    setIsLoading(true)

    try {
      if (isPlaying) {
        // Pause the audio
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        // Wait for any previous play promise to resolve
        if (playPromiseRef.current) {
          try {
            await playPromiseRef.current
          } catch (error) {
            // Ignore errors from previous play attempts
          }
        }

        // Start playing
        playPromiseRef.current = audioRef.current.play()
        await playPromiseRef.current
        setIsPlaying(true)
        setHasError(false)
      }
    } catch (error) {
      console.log("Audio play error:", error)
      setIsPlaying(false)
      setHasError(true)
    } finally {
      setIsLoading(false)
      playPromiseRef.current = null
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.4

      const handleEnded = () => {
        setIsPlaying(false)
        setIsLoading(false)
      }

      const handlePause = () => {
        setIsPlaying(false)
        setIsLoading(false)
      }

      const handlePlay = () => {
        setIsPlaying(true)
        setIsLoading(false)
        setHasError(false)
      }

      const handleError = () => {
        setIsPlaying(false)
        setIsLoading(false)
        setHasError(true)
        console.log("Arquivo de áudio não encontrado - adicione 'meu-novo-mundo.mp3' na pasta public/")
      }

      const handleLoadStart = () => {
        setHasError(false)
      }

      audio.addEventListener("ended", handleEnded)
      audio.addEventListener("pause", handlePause)
      audio.addEventListener("play", handlePlay)
      audio.addEventListener("error", handleError)
      audio.addEventListener("loadstart", handleLoadStart)

      return () => {
        audio.removeEventListener("ended", handleEnded)
        audio.removeEventListener("pause", handlePause)
        audio.removeEventListener("play", handlePlay)
        audio.removeEventListener("error", handleError)
        audio.removeEventListener("loadstart", handleLoadStart)
      }
    }
  }, [])

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white/90 backdrop-blur-sm border border-rose-200 rounded-lg shadow-lg overflow-hidden">
        {/* Header sempre visível */}
        <div
          className="flex items-center justify-between p-3 cursor-pointer hover:bg-rose-50/50 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <Music className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-medium text-rose-800 font-dancing">Nossa Música ❤️✨</span>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4 text-rose-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-rose-600" />
          )}
        </div>

        {/* Conteúdo expansível */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-3 pb-3 border-t border-rose-200/50">
            <div className="flex items-center gap-2 mb-3 mt-2">
              <span className="text-sm font-medium text-rose-800 font-dancing">Meu Novo Mundo - CBJ</span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={togglePlay}
                variant="outline"
                size="sm"
                disabled={isLoading}
                className={`
                  ${hasError ? "border-red-300 text-red-600" : "border-rose-300 text-rose-600"}
                  hover:bg-rose-50 shadow-sm disabled:opacity-50 transition-all duration-200
                `}
              >
                {isLoading ? (
                  <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-rose-300 border-t-rose-600" />
                ) : isPlaying ? (
                  <Pause className="w-4 h-4 mr-2" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {hasError ? "Erro" : isPlaying ? "Pausar" : "Tocar"}
              </Button>

              <Volume2 className="w-4 h-4 text-rose-600" />
            </div>

            {hasError && <p className="text-xs text-red-500 mt-2">Adicione o arquivo na pasta public/</p>}
          </div>
        </div>
      </div>

      <audio ref={audioRef} loop preload="metadata">
        <source src="/meu-novo-mundo.mp3" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  )
}
