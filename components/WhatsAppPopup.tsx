'use client'

import { X, MapPin, Phone } from 'lucide-react'

export default function WhatsAppPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null

  const unidades = [
    {
      nome: 'Olaria',
      endereco: 'R. Delfim Carlos, 350 – Bl. 2, Loja 102',
      bairro: 'Olaria - Rio de Janeiro - RJ',
      telefones: ['(21) 2560-1535', '(21) 3258-8707'],
      tel: '5521969420202',
      maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Delfim+Carlos%2C+350+-+Olaria%2C+Rio+de+Janeiro+-+RJ',
      msg: 'Olá! Quero agendar na unidade Olaria.',
    },
    {
      nome: 'Freguesia',
      endereco: 'Av. Ten-Cel. Muniz de Aragão, 894, loja 102',
      bairro: 'Freguesia - Rio de Janeiro - RJ',
      telefones: ['(21) 2426-0561', '(21) 3496-5590'],
      tel: '5521964508922',
      maps: 'https://www.google.com/maps/search/?api=1&query=Avenida+Tenente+Coronel+Muniz+de+Arag%C3%A3o%2C+894+-+Freguesia%2C+Rio+de+Janeiro',
      msg: 'Olá! Quero agendar na unidade Freguesia.',
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4"><X className="h-5 w-5" /></button>
        <h3 className="text-2xl font-bold text-center mb-6">Nossas Unidades</h3>

        {unidades.map(u => (
          <div key={u.nome} className="border rounded-2xl p-5 mb-4">
            <h4 className="font-bold text-lg mb-3">{u.nome}</h4>
            <div className="flex gap-2 mb-2">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
              <div className="text-sm">
                <p>{u.endereco}</p>
                <p className="text-gray-500 text-xs">{u.bairro}</p>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <Phone className="w-4 h-4 text-red-500 mt-0.5" />
              <p className="text-sm">{u.telefones.join(' • ')}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a href={`https://wa.me/${u.tel}?text=${encodeURIComponent(u.msg)}`} target="_blank" className="bg-[#22C55E] text-white rounded-xl py-2.5 text-center text-sm">WhatsApp</a>
              <a href={u.maps} target="_blank" className="bg-gray-100 rounded-xl py-2.5 text-center text-sm flex items-center justify-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Ver no mapa
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

