'use client'

import { useState, useRef, useEffect } from 'react'
import { Phone, ChevronDown, MessageCircle } from 'lucide-react'

export default function PhoneDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current &&!ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const unidades = [
    {
      nome: 'Olaria',
      fones: ['(21) 2560-1535', '(21) 3258-8707'],
      whats: '5521969420202'
    },
    {
      nome: 'Freguesia',
      fones: ['(21) 2426-0561', '(21) 3496-5590'],
      whats: '5521964508922'
    }
  ]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-gray-700 hover:text-[#C8102E] transition font-medium"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden lg:inline">(21) 2560-1535</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 w- bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 p-5 z-[200] animate-in fade-in slide-in-from-top-2">
          <h4 className="font-semibold text-gray-900 mb-3">Fale com a gente</h4>

          {unidades.map((u) => (
            <div key={u.nome} className="mb-4 last:mb-0">
              <p className="text-xs font-semibold text-[#C8102E] uppercase tracking-wide mb-2">{u.nome}</p>
              <div className="space-y-1.5">
                {u.fones.map(f => (
                  <a key={f} href={`tel:+55${f.replace(/\D/g,'')}`}
                     className="flex items-center justify-between group p-2.5 -mx-2 rounded-xl hover:bg-gray-50 transition">
                    <span className="flex items-center gap-2.5">
                      <span className="w-8 h-8 bg-gray-100 group-hover:bg-[#C8102E]/10 rounded-lg flex items-center justify-center transition">
                        <Phone className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#C8102E]" />
                      </span>
                      <span className="text- text-gray-800">{f}</span>
                    </span>
                    <span className="text-xs text-gray-400 group-hover:text-[#C8102E]">ligar</span>
                  </a>
                ))}
                <a href={`https://wa.me/${u.whats}`} target="_blank"
                   className="flex items-center justify-between p-2.5 -mx-2 rounded-xl hover:bg-green-50 transition group">
                  <span className="flex items-center gap-2.5">
                    <span className="w-8 h-8 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                    </span>
                    <span className="text- text-gray-800">WhatsApp</span>
                  </span>
                  <span className="text-xs text-gray-400 group-hover:text-[#22C55E]">abrir</span>
                </a>
              </div>
            </div>
          ))}

          <div className="mt-3 pt-3 border-t border-gray-100 text-center">
            <p className="text- text-gray-500">Seg-Sex 8h-18h • Sáb 8h-13h</p>
          </div>
        </div>
      )}
    </div>
  )
}