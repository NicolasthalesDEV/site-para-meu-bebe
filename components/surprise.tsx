"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Gift, Star } from "lucide-react"

export default function Surprise() {
  const [currentSurprise, setCurrentSurprise] = useState(0)

  const surprises = [
    {
      icon: <Heart className="w-16 h-16 text-rose-500 mx-auto mb-4" />,
      title: "Primeira Surpresa",
      content: "Desde que você entrou na minha vida, até o silêncio ganhou outro significado — é como se até o tempo passasse diferente quando estou com você 💕.",
    },
    {
      icon: <Gift className="w-16 h-16 text-pink-500 mx-auto mb-4" />,
      title: "Segunda Surpresa",
      content: "Mesmo você indo pra Dublin por 8 meses e eu ficando por aqui, queria te lembrar que o nosso amor não tem distância que enfraqueça 💞. Estar longe não muda o que sinto por você só reforça o quanto você é especial pra mim ❤️✨",
    },
    {
      icon: <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />,
      title: "Surpresa Final",
      content: "E a maior surpresa de todas: EU TE AMO mais a cada dia que passa! Você é meu bisbe!!!",
    },
  ]

  const nextSurprise = () => {
    if (currentSurprise < surprises.length - 1) {
      setCurrentSurprise(currentSurprise + 1)
    }
  }

  return (
    <div className="mt-8 animate-fade-in">
      <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-rose-300 shadow-2xl">
        <CardContent className="p-8 text-center">
          {surprises[currentSurprise].icon}

          <h3 className="text-2xl font-bold text-rose-600 mb-4 font-dancing">{surprises[currentSurprise].title}</h3>

          <p className="text-lg text-gray-700 mb-6 font-dancing">{surprises[currentSurprise].content}</p>

          {currentSurprise < surprises.length - 1 ? (
            <Button
              onClick={nextSurprise}
              className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-6 py-2 rounded-full"
            >
              Próxima Surpresa 💖
            </Button>
          ) : (
            <div className="space-y-4">
              <p className="text-rose-600 font-semibold font-dancing text-xl">Feliz Dia dos Namorados! 💕</p>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 text-rose-500 animate-pulse" fill="currentColor" />
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
