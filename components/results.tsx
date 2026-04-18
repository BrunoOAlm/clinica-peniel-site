"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

const beforeAfter = [
  {
    before: "/imagens/antes.jpeg",
    after: "/imagens/depois.jpeg",
    treatment: "Implante dentário com prótese fixa",
  },
  {
    before: "/imagens/antes1.jpeg",
    after: "/imagens/depois1.jpeg",
    treatment: "Lente de contato dental",
  },
]

const testimonials = [
  {
    name: "Suelen Ramona de Souza Cunha",
    text: "Recomendo a clínica sem ressalvas, tanto pela qualidade do espaço quanto pela excelência no atendimento humano e profissional.Como estou grávida, Dr.Raquel teve uma postura ainda mais criteriosa, perguntando detalhadamente sobre minha saúde, demonstrando grande responsabilidade e zelo para garantir um atendimento seguro e benéfico para minha saúde bucal.",
    rating: 5,
    treatment: "Ortodontia",
    image: "/imagens/T1.png",
  },
  {
    name: "Brenda Mazzucotelli",
    text: "Excelente atendimento por parte de todo o pessoal, muita guia e acompanhamento por parte da equipe, fizeram uma extração complicada do siso, sem complicações, excelente trabalho por parte do Flávio, ele é demais! Recomendo",
    rating: 5,
    treatment: "Extração Siso",
    image: "/imagens/T2.png",
  },
  {
    name: "George Moreno",
    text: "Profissionais de primeira, atendimento de excelência! Dr. Flavio extremamente atencioso, simpático, justo e conhecimento inquestionável! Penei para achar um Ortodontista que topasse uma preparação para cirurgia ortognatica! Tenho muito a agradecer! Recepcionistas atenciosas e amorosas!",
    rating: 5,
    treatment: "Cirurgia ortognática",
    image: "/imagens/T3.png",
  },
]

export function Results() {
  return (
    <section id="resultados" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sorrisos{" "}
            <span className="text-primary">transformados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja os resultados dos nossos tratamentos e o que nossos pacientes dizem sobre nós
          </p>
        </div>

        {/* Before/After */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {beforeAfter.map((item, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative aspect-square">
                  <Image
                    src={item.before}
                    alt="Antes do tratamento"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-foreground/80 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Antes
                  </div>
                </div>
                {/* After */}
                <div className="relative aspect-square">
                  <Image
                    src={item.after}
                    alt="Depois do tratamento"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Depois
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-semibold text-foreground">{item.treatment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-4" />

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.text}"`}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-secondary rounded-full px-6 py-3">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= 4
                      ? "fill-primary text-primary"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              4.1 no Opiniões do Google
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
