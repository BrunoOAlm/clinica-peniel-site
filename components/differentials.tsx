"use client"

import { Cpu, Users, Building2, GraduationCap } from "lucide-react"

const differentials = [
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    description: "Equipamentos de última geração para diagnósticos precisos e tratamentos eficientes.",
  },
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado e acolhedor em cada etapa do seu tratamento.",
  },
  {
    icon: Building2,
    title: "Estrutura Moderna",
    description: "Ambiente climatizado e confortável, projetado para sua tranquilidade.",
  },
  {
    icon: GraduationCap,
    title: "Equipe Qualificada",
    description: "Profissionais especializados com formação nas melhores instituições.",
  },
]

export function Differentials() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Por Que Nos Escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nossos{" "}
            <span className="text-primary">diferenciais</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            O que nos torna referência em odontologia de alto padrão
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="group text-center"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <item.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Number */}
              <div className="text-5xl font-bold text-primary/20 mb-2">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
