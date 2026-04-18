"use client"

import Image from "next/image"
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Proporcionar saúde bucal de excelência, combinando tecnologia avançada com atendimento humanizado.",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser referência em odontologia de alto padrão, reconhecida pela qualidade e inovação.",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Ética, compromisso, excelência, acolhimento e dedicação aos nossos pacientes.",
  },
]

const highlights = [
  "Equipamentos de última geração",
  "Ambiente climatizado e acolhedor",
  "Atendimento personalizado",
  "Profissionais especializados",
]

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Clínica Odontológica{" "}
            <span className="text-primary">Peniel</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Há mais de uma década transformando sorrisos com dedicação e excelência
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-border">
                  <Image
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop"
                    alt="Consultório moderno"
                    width={300}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-border">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop"
                    alt="Equipamentos modernos"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden bg-border">
                  <Image
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop"
                    alt="Atendimento humanizado"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-border">
                  <Image
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop"
                    alt="Recepção da clínica"
                    width={300}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Tradição e inovação em cada sorriso
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Clínica Odontológica Peniel nasceu do sonho de oferecer odontologia 
              de excelência com um atendimento verdadeiramente humanizado. Ao longo 
              dos anos, construímos uma história de confiança e resultados que 
              transformam vidas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa estrutura moderna e equipe qualificada garantem que cada 
              paciente receba o melhor tratamento, com tecnologia de ponta e 
              todo o cuidado que merece.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
