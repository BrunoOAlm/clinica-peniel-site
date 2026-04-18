"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

const team = [
  {
    name: "Dr. Flávio",
    role: "Diretor Clínico",
    specialty: "Implantodontia e Estética",
    description: "Responsável técnico e fundador, com especialização em implantes e harmonização do sorriso.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    featured: true,
  },
  {
    name: "Dra. Carolina",
    role: "Ortodontista",
    specialty: "Ortodontia e Alinhadores",
    description: "Especialista em alinhadores invisíveis e ortodontia estética.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
    featured: false,
  },
  {
    name: "Dra. Amanda",
    role: "Endodontista",
    specialty: "Tratamento de Canal",
    description: "Especialista em tratamentos de canal com técnicas minimamente invasivas.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
    featured: false,
  },
  {
    name: "Dr. Ricardo",
    role: "Periodontista",
    specialty: "Saúde Gengival",
    description: "Especialista em tratamento de gengivas e cirurgias periodontais.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
    featured: false,
  },
]

export function Team() {
  return (
    <section id="equipe" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Profissionais{" "}
            <span className="text-primary">especializados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma equipe dedicada e altamente qualificada para cuidar do seu sorriso
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className={`group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl ${
                member.featured ? "md:row-span-1 ring-2 ring-primary/20" : ""
              }`}
            >
              {/* Featured Badge */}
              {member.featured && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Diretor
                </div>
              )}

              {/* Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                    {member.specialty}
                  </p>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary-foreground/80">{member.role}</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-primary-foreground text-center text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>
                  <button className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                    <Instagram className="h-5 w-5 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
