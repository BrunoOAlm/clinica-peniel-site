"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const credentials = [
  { icon: Shield, label: "Tecnologia Avançada" },
  { icon: Award, label: "Excelência Clínica" },
  { icon: Heart, label: "Cuidado Humanizado" },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-metallic/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-metallic-dark uppercase tracking-wider">
                Referência em Odontologia
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              <span className="text-foreground">Excelência em</span>
              <br />
              <span className="text-foreground">odontologia com</span>
              <br />
              <span className="text-primary">tecnologia</span>
              <span className="text-foreground"> e </span>
              <span className="text-primary">cuidado</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Na Clínica Odontológica Peniel, unimos inovação e acolhimento para 
              transformar sorrisos e proporcionar experiências únicas em saúde bucal.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-red-dark text-primary-foreground rounded-full px-8 transition-all duration-300 hover:scale-105 group"
              >
                <Link href="#contato">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-metallic/30 text-metallic-dark hover:bg-secondary hover:border-metallic/50"
              >
                <Link href="#sobre">Conheça a Clínica</Link>
              </Button>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-6 pb-14 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {credentials.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-metallic-dark">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-slide-left">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-border">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop"
                  alt="Clínica Odontológica Peniel - Ambiente moderno"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 left-4 bg-background rounded-2xl p-5 shadow-xl border border-border animate-scale-in z-10" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      src="/logo-peniel.png"
                      alt="Peniel"
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+10 anos</p>
                    <p className="text-sm text-muted-foreground">de excelência</p>
                  </div>
                </div>
              </div>

              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-primary/20" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-metallic/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
