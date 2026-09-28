import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Montserrat } from 'next/font/google'
import './globals.css'

const baloo = Baloo_2({ subsets: ['latin'], variable: '--font-baloo', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' })

export const metadata: Metadata = {
  title: 'Moors — Personalizados, brindes e presentes',
  description: 'Objetos 3D para presentear, decorar e deixar a vida mais parecida com você.',
  generator: 'v0.app',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#6d449b' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${baloo.variable} ${montserrat.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
