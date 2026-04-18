"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#equipe", label: "Equipe" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-3">
            <Image
              src="/logo-peniel.png"
              alt="Clínica Odontológica Peniel"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-metallic-dark tracking-tight">
                Peniel
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-metallic">
                Clínica Odontológica
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-metallic-dark hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+552125601535"
              className="flex items-center gap-2 text-sm text-metallic-dark hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(21) 2560-1535</span>
            </Link>
            <Button
              asChild
              className="bg-primary hover:bg-red-dark text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105"
            >
              <Link href="#contato">Agendar Consulta</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-metallic-dark hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass border-b border-border/50 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-metallic-dark hover:text-primary transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 bg-primary hover:bg-red-dark text-primary-foreground rounded-full"
          >
            <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
              Agendar Consulta
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
