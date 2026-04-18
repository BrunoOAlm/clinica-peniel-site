"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#equipe", label: "Equipe" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
]

function PhoneDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  const unidades = [
    { nome: "Olaria", fones: ["(21) 2560-1535", "(21) 3258-8707"] },
    { nome: "Freguesia", fones: ["(21) 2426-0561", "(21) 3496-5590"] },
  ]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm text-metallic-dark hover:text-primary transition-colors"
      >
        <Phone className="h-4 w-4" />
        <span className="hidden xl:inline font-medium">Telefones</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 z-50">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
            NOSSOS TELEFONES
          </p>
          <div className="grid grid-cols-2 gap-6">
            {unidades.map((u) => (
              <div key={u.nome}>
                <p className="text-base font-medium text-gray-900 mb-3">{u.nome}</p>
                <div className="space-y-2.5">
                  {u.fones.map((f) => (
                    <a
                      key={f}
                      href={`tel:+55${f.replace(/\D/g, "")}`}
                      className="flex items-center gap-2.5 group"
                    >
                      <Phone className="h-3.5 w-3.5 text-gray-400 group-hover:text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700 group-hover:text-primary whitespace-nowrap">
                        {f}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#inicio" className="flex items-center gap-3">
            <Image src="/logo-peniel.png" alt="Clínica Odontológica Peniel" width={50} height={50} className="h-12 w-12 object-contain" />
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-metallic-dark tracking-tight">Peniel</span>
              <span className="block text-xs uppercase tracking-widest text-metallic">CLÍNICA ODONTOLÓGICA</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-metallic-dark hover:text-primary transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <PhoneDropdown />
            <Button asChild className="bg-primary hover:bg-red-dark text-primary-foreground rounded-full px-6 hover:scale-105">
              <Link href="#contato">Agendar Consulta</Link>
            </Button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-metallic-dark">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden absolute top-full left-0 right-0 glass border-b border-border/50 transition-all ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="py-2">
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 bg-primary rounded-full">
            <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Agendar Consulta</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}