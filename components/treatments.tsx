"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Sun, CircleDot, AlignVerticalSpaceAround, Smile, Heart } from "lucide-react"

const treatments = [
  {
    icon: CircleDot,
    title: "Implantes Dentários",
    description: "Tecnologia de ponta para reabilitação oral completa com implantes de alta qualidade.",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Ortodontia",
    description: "Alinhadores invisíveis e aparelhos modernos para um sorriso perfeitamente alinhado.",
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description: "Facetas, lentes de contato dental e design do sorriso para resultados naturais.",
  },
  {
    icon: Sun,
    title: "Clareamento",
    description: "Técnicas avançadas de clareamento para dentes mais brancos e brilhantes.",
  },
  {
    icon: Smile,
    title: "Próteses",
    description: "Próteses fixas e removíveis com materiais de alta qualidade e acabamento natural.",
  },
  {
    icon: Heart,
    title: "Periodontia",
    description: "Tratamento especializado para saúde gengival e prevenção de doenças periodontais.",
  },
]

export function Treatments() {
  return (
    <section id="tratamentos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tratamentos{" "}
            <span className="text-primary">especializados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos com tecnologia de ponta e profissionais qualificados
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {treatments.map((treatment) => (
            <div
              key={treatment.title}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                <treatment.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {treatment.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {treatment.description}
              </p>

              {/* Link */}
              <Link
                href="#contato"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-red-dark transition-colors group/link"
              >
                Saiba mais
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-red-dark text-primary-foreground rounded-full px-8"
          >
            <Link href="#contato">
              Agendar Avaliação
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
