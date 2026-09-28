import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

type ShopMenuProps = {
  homeHref?: string
  onNavigate?: () => void
}

const productLinks = [
  { label: 'Chaveiros', href: '/produtos?filtro=chaveiros' },
  { label: 'Canecas', href: '/produtos?filtro=canecas' },
  { label: 'Im\u00e3s', href: '/produtos?filtro=imas' },
]

const customLinks = [
  { label: 'Anivers\u00e1rios', href: '/produtos?filtro=aniversarios' },
  { label: 'Empresas', href: '/empresas' },
  { label: 'Casamentos', href: '/produtos?filtro=casamentos' },
  { label: 'Eventos', href: '/produtos?filtro=eventos' },
]

export function ShopMenu({ homeHref = '/produtos', onNavigate }: ShopMenuProps) {
  return (
    <div className="group relative">
      <Link
        href={homeHref}
        onClick={onNavigate}
        className="flex items-center rounded px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-[#f6e9c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a00]"
      >
        Comprar <ChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" size={13} />
      </Link>

      <div className="absolute left-0 top-full z-50 hidden w-[min(32rem,calc(100vw-2rem))] grid-cols-2 border border-[#eadcc3] bg-[#fdfbf7] p-3 shadow-lg group-hover:grid group-focus-within:grid">
        <div className="border-r border-[#eadcc3] p-3">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff5a00]">Produtos</p>
          <div className="mt-2 grid gap-1">
            {productLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={onNavigate} className="rounded px-2 py-2 text-sm font-bold text-[#302046] transition hover:bg-[#f6e9c8] hover:text-[#6d449b]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="p-3">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ff5a00]">Personalizados</p>
          <div className="mt-2 grid gap-1">
            {customLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={onNavigate} className="rounded px-2 py-2 text-sm font-bold text-[#302046] transition hover:bg-[#f6e9c8] hover:text-[#6d449b]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
