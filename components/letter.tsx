"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface LetterProps {
  onComplete: () => void
  onShowSurprise: () => void
  letterComplete: boolean
}

export default function Letter({ onComplete, onShowSurprise, letterComplete }: LetterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const letterText = `Meu amor,

Como a música diz: "Tudo que eu vivi foi um sonho, um grande sonho eu sonhei"... E aí você apareceu e transformou esse sonho em realidade.

Desde que a gente começou a conversar e fomos pela primeira vez ao shopping, eu senti que tinha algo diferente. Naquele momento, eu soube: você era o meu novo mundo. Seu sorriso tem o poder de iluminar qualquer dia ruim. Sua risada é a melhor trilha sonora que já ouvi. E o seu amor... é o melhor presente que a vida me deu.

Estar com você é viver uma nova aventura todos os dias. Você me mostra o que é amar de verdade, me inspira a ser um homem melhor e me dá forças até quando tudo parece difícil.

Como o Charlie Brown Jr. cantava, às vezes a vida surpreende a gente com coisas incríveis quando a gente menos espera. E você foi, sem dúvida, a melhor surpresa da minha vida.

Obrigado por ser meu cantinho de paz, minha parceira de vida, minha escolha certa. Por me amar do jeito que eu sou e transformar momentos simples em memórias que eu vou guardar pra sempre.

Que esse seja só mais um de muitos Dias dos Namorados que ainda vamos viver juntinhos, escrevendo nossa história com amor, carinho e, claro, com a trilha sonora das nossas músicas favoritas.

Com todo o meu amor,
Neni ❤️

P.S.: "Meu novo mundo" é você. 🎵`

  useEffect(() => {
    if (currentIndex < letterText.length) {
      setIsTyping(true)
      const timer = setTimeout(() => {
        setDisplayedText(letterText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
      onComplete()
    }
  }, [currentIndex, letterText, onComplete])

  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-rose-600 mb-6 sm:mb-8 font-dancing animate-fade-in px-4">
        Para Você, Meu Novo Mundo
      </h1>

      <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-rose-200 max-w-3xl mx-auto">
        <CardContent className="p-6 sm:p-8 md:p-12">
          <div className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed font-dancing whitespace-pre-line text-left">
            {displayedText}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>

          {letterComplete && (
            <div className="mt-6 sm:mt-8 text-center animate-fade-in">
              <Button
                onClick={onShowSurprise}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                ✨ Clique para uma Surpresa ✨
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
