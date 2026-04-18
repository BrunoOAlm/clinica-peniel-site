"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)

    return () => {
      clearTimeout(tooltipTimer)
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-[9999] transition-all duration-300">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 w-64 p-4 bg-background rounded-2xl shadow-xl border border-border animate-scale-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-sm font-semibold text-foreground mb-1">Olá! Podemos ajudar?</p>
          <p className="text-xs text-muted-foreground">
            Clique para falar conosco pelo WhatsApp
          </p>
          <div className="absolute bottom-0 right-8 translate-y-1/2 rotate-45 w-3 h-3 bg-background border-r border-b border-border" />
        </div>
      )}

      {/* Button */}
      <Link
        href="https://wa.me/5521994680118?text=Olá! Gostaria de agendar uma consulta na Clínica Peniel."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110"
        aria-label="Falar pelo WhatsApp"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        
        <MessageCircle className="w-7 h-7" fill="currentColor" strokeWidth={0} />
      </Link>
    </div>
  )
}
