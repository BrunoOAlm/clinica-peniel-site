'use client'

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WhatsAppPopup from "@/components/WhatsAppPopup"

const contactInfo = [ /* seu array completo aqui */ ]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" })
  const [popupOpen, setPopupOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Olá! Meu nome é ${formData.name}.`
    window.open(`https://wa.me/552194680118?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* ...seu formulário e outras infos aqui... */}

        <Button
          onClick={() => setPopupOpen(true)}
          size="lg"
          className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-base py-6 rounded-xl shadow-xl shadow-red-600/30 transition-all duration-200 hover:scale-[1.02] animate-pulse"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Chamar no WhatsApp
        </Button>
      </div>

      <WhatsAppPopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </section>
  )
}