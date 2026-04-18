"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const contactInfo = [
{
    icon: MapPin,
    label: "Unidade Olaria",
    value: "R. Delfim Carlos, 350 – Bl. 2, Loja 102",
    subvalue: "Olaria - Rio de Janeiro - RJ",
  },
  {
    icon: MapPin,
    label: "Unidade Freguesia",
    value: "Av. Ten-Cel. Muniz de Aragão, 894, loja 102",
    subvalue: "Freguesia (Jacarepaguá) - Rio de Janeiro - RJ",
  },
{
    icon: Phone,
    label: "Telefone Olaria",
    value: "(21) 2560-1535 \n (21) 3258-8707",
    subvalue: "WhatsApp: (21) 96942-0202\nSomente confirmação de consultas",
  },
  {
    icon: Phone,
    label: "Telefone Jacarepaguá",
    value: "(21) 2426-0561 \n (21) 3496-5590",
    subvalue: "WhatsApp: (21) 96450-8922\nSomente confirmação de consultas",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@clinicapeniel.com.br",
    subvalue: null,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sex: 8h às 18h",
    subvalue: "Sáb: 8h às 13h",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const text = `Olá! Meu nome é ${formData.name}.
  Telefone: ${formData.phone}
  Email: ${formData.email}

  Mensagem: ${formData.message}`

    // TROCA AQUI PELO SEU NÚMERO DE TESTE
    const meuWhats = "552194680118" // ex: 55 + 21 + seu número

    window.open(`https://wa.me/${meuWhats}?text=${encodeURIComponent(text)}`, "_blank")
  }



  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Agende sua{" "}
            <span className="text-primary">consulta</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e dê o primeiro passo para transformar seu sorriso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="bg-background rounded-3xl p-8 lg:p-10 border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-xl border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl border-border focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar?"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl border-border focus:border-primary resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-red-dark text-primary-foreground rounded-xl"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
            </form>

            {/* WhatsApp Alternative */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Ou fale diretamente pelo WhatsApp
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-xl border-green-500 text-green-600 hover:bg-green-50"
              >
                <Link
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-secondary/50 rounded-2xl p-6 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                  {info.subvalue && (
                    <p className="text-sm text-muted-foreground">{info.subvalue}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
           {/* MAPA COM AS DUAS UNIDADES */}
                       <div className="rounded-2xl overflow-hidden border border-border bg-card">
                         <Tabs defaultValue="olaria" className="w-full">
                           <div className="p-4 border-b border-border">
                             <TabsList className="grid w-full grid-cols-2">
                               <TabsTrigger value="olaria">Olaria</TabsTrigger>
                               <TabsTrigger value="jacarepagua">Jacarepaguá</TabsTrigger>
                             </TabsList>
                           </div>

                           <TabsContent value="olaria" className="m-0">
                             <div className="h- lg:h- w-full">
                               <iframe
                                 src="https://maps.google.com/maps?q=Rua%20Delfim%20Carlos%20350%20Olaria%20Rio%20de%20Janeiro&t=&z=17&output=embed"
                                 width="100%"
                                 height="100%"
                                 style={{ border: 0 }}
                                 allowFullScreen
                                 loading="lazy"
                                 referrerPolicy="no-referrer-when-downgrade"
                                 title="Mapa Olaria"
                               />
                             </div>
                           </TabsContent>

                           <TabsContent value="jacarepagua" className="m-0">
                             <div className="h- lg:h- w-full">
                               <iframe
                                 src="https://maps.google.com/maps?q=Av%20Ten%20Cel%20Muniz%20de%20Aragao%20894%20Freguesia%20Rio%20de%20Janeiro&t=&z=17&output=embed"
                                 width="100%"
                                 height="100%"
                                 style={{ border: 0 }}
                                 allowFullScreen
                                 loading="lazy"
                                 referrerPolicy="no-referrer-when-downgrade"
                                 title="Mapa Jacarepaguá"
                               />
                             </div>
                           </TabsContent>
                         </Tabs>
                       </div>
                     </div> {/* fecha space-y-8 */}
                   </div> {/* fecha grid lg:grid-cols-2 */}
                 </div> {/* fecha container */}
               </section>
             )
           }
