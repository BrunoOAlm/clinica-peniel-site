import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clínica Odontológica Peniel | Excelência em Odontologia',
  description: 'Excelência em odontologia com tecnologia e cuidado. Implantes, ortodontia, estética dental e clareamento. Agende sua consulta na Clínica Peniel.',
  keywords: 'clínica odontológica, dentista, implantes dentários, ortodontia, estética dental, clareamento, Peniel',
  authors: [{ name: 'Clínica Odontológica Peniel' }],
  openGraph: {
    title: 'Clínica Odontológica Peniel | Excelência em Odontologia',
    description: 'Excelência em odontologia com tecnologia e cuidado. Implantes, ortodontia, estética dental e clareamento.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#C41E3A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        export default function RootLayout({ children }) {
          return (
            <html lang="pt-BR">
              <body>
                {children}
                <SpeedInsights />
              </body>
            </html>
          )
        }
      </body>
    </html>
  )
}
