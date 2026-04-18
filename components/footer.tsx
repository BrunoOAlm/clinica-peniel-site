"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#equipe", label: "Equipe" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
]

const treatments = [
  "Implantes Dentários",
  "Ortodontia",
  "Estética Dental",
  "Clareamento",
  "Próteses",
  "Periodontia",
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo-peniel.png"
                alt="Clínica Odontológica Peniel"
                width={50}
                height={50}
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <span className="text-lg font-semibold text-primary-foreground">
                  Peniel
                </span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-primary-foreground/60">
                  Clínica Odontológica
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Excelência em odontologia com tecnologia avançada e atendimento humanizado. 
              Transformando sorrisos há mais de 10 anos.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/clinicaodontologicapeniel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/pages/Peniel-Clínica-Odontológica/150065335175376"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Tratamentos
            </h4>
            <ul className="space-y-3">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <Link
                    href="#tratamentos"
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  R. Delfim Carlos, 350 – Bl. 2, Loja 102<br />
                  Rio de Janeiro - RJ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  (21) 2560-1535
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  contato@clinicapeniel.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>
              © {currentYear} Clínica Odontológica Peniel. Todos os direitos reservados.
            </p>
            <p>
              Responsável Técnico: Dr. Flávio - CRO-RJ 27438
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
