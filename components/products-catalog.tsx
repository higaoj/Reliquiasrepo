'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, PackageOpen, Search, ShoppingBag, SlidersHorizontal, UserRound, X } from 'lucide-react'
import { formatPrice, PRODUCT_FILTERS, PRODUCT_FILTERS_BY_PRODUCT_ID, PRODUCTS } from '@/lib/products'
import { ShopMenu } from '@/components/shop-menu'

type ProductsCatalogProps = {
  initialFilter?: string
}

function getValidFilter(filter?: string) {
  return PRODUCT_FILTERS.some((option) => option.id === filter) ? filter! : 'todos'
}

export function ProductsCatalog({ initialFilter }: ProductsCatalogProps) {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState(() => getValidFilter(initialFilter))
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setActiveFilter(getValidFilter(initialFilter))
  }, [initialFilter])

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')

    return PRODUCTS.filter((product) => {
      const matchesFilter = activeFilter === 'todos' || PRODUCT_FILTERS_BY_PRODUCT_ID[product.id]?.includes(activeFilter)
      const matchesQuery = !normalizedQuery || product.name.toLocaleLowerCase('pt-BR').includes(normalizedQuery)
      return matchesFilter && matchesQuery
    })
  }, [activeFilter, query])

  return (
    <main className="min-h-screen bg-[#f8f4ee] text-[#302046]">
      <div className="bg-[#6d449b] px-4 py-2 text-center text-[10px] font-bold text-[#f6e9c8] sm:text-xs">
        Frete gr&aacute;tis acima de R$ 120 <span className="mx-3 opacity-50">&bull;</span> At&eacute; 6x sem juros
      </div>

      <header className="sticky top-0 z-30 border-b border-[#eadcc3] bg-[#fdfbf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button className="rounded-full p-2 transition hover:bg-[#f6e9c8] md:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label="Abrir menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/" className="flex min-w-0 items-center gap-2 text-[#6d449b]">
            <span className="font-baloo text-3xl font-extrabold">MOORS</span>
            <span className="hidden border-l border-[#eadcc3] pl-3 text-[10px] font-bold leading-tight text-[#927a9f] sm:block">
              Seu jeito de ver<br />junto com o nosso jeito de criar.
            </span>
          </Link>

          <nav className={`${menuOpen ? 'absolute left-0 right-0 top-full flex' : 'hidden'} flex-col gap-1 border-b border-[#eadcc3] bg-[#fdfbf7] p-4 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
            <ShopMenu onNavigate={() => setMenuOpen(false)} />
            <Link href="/personalizados" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-[#f6e9c8]">Personalizados</Link>
            <Link href="/empresas" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-[#f6e9c8]">Para empresas</Link>
            <Link href="/#sobre" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-[#f6e9c8]">Sobre a Moors</Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button className="hidden rounded-full p-2 transition hover:bg-[#f6e9c8] sm:block" aria-label="Buscar produtos"><Search size={18} /></button>
            <Link href="/sign-in" className="rounded-full p-2 transition hover:bg-[#f6e9c8]" aria-label="Entrar"><UserRound size={18} /></Link>
            <Link href="/checkout" className="rounded-full p-2 transition hover:bg-[#f6e9c8]" aria-label="Abrir carrinho"><ShoppingBag size={18} /></Link>
          </div>
        </div>
      </header>

      <section className="border-b border-[#eadcc3] bg-[#f6e9c8] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff5a00]">Cole&ccedil;&atilde;o Moors</p>
          <div className="mt-2 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-baloo text-5xl font-extrabold leading-none text-[#6d449b] sm:text-6xl">Todos os produtos</h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6d449b]/75 sm:text-base">Pe&ccedil;as 3D para presentear, decorar e acompanhar o seu jeito de ver o mundo.</p>
            </div>
            <p className="text-sm font-bold text-[#6d449b]">{filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-4 border-b border-[#eadcc3] pb-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <label htmlFor="product-search" className="text-xs font-black uppercase tracking-[0.12em] text-[#6d449b]">Buscar por nome</label>
            <div className="relative mt-2 max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#927a9f]" size={18} aria-hidden="true" />
              <input
                id="product-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex.: caneca, chaveiro..."
                className="h-13 w-full rounded-xl border border-[#eadcc3] bg-[#fdfbf7] py-3 pl-11 pr-4 text-sm text-[#302046] outline-none transition placeholder:text-[#927a9f] focus:border-[#ff5a00]"
              />
            </div>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#6d449b]"><SlidersHorizontal size={14} /> Filtrar por categoria</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {PRODUCT_FILTERS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveFilter(item.id)}
                  aria-pressed={activeFilter === item.id}
                  className={`min-h-10 rounded-full px-4 text-xs font-black uppercase transition ${activeFilter === item.id ? 'bg-[#6d449b] text-white' : 'border border-[#eadcc3] bg-[#fdfbf7] text-[#6d449b] hover:border-[#ff5a00] hover:text-[#ff5a00]'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length ? (
          <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group min-w-0">
                <Link href={`/produto/${product.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-[#eadcc3] bg-white">
                    <Image src={product.image} alt={product.name} fill className="object-contain transition duration-300 group-hover:scale-[1.03]" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                    {product.badge && <span className="absolute left-2 top-2 rounded-full bg-[#f6e9c8] px-2 py-1 text-[9px] font-black uppercase text-[#6d449b]">{product.badge}</span>}
                  </div>
                  <p className="mt-4 text-[10px] font-black uppercase text-[#ff5a00]">{product.category}</p>
                  <h2 className="mt-1 text-sm font-extrabold text-[#302046] sm:text-base">{product.name}</h2>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#927a9f]">{product.description}</p>
                  <p className="mt-3 text-base font-black text-[#6d449b]">{formatPrice(product.priceInCents)}</p>
                </Link>
                <Link href={`/produto/${product.id}`} className="mt-4 flex min-h-11 items-center justify-center rounded-full bg-[#6d449b] px-4 text-xs font-black uppercase text-white transition hover:bg-[#ff5a00]">Ver produto</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-72 flex-col items-center justify-center border-b border-[#eadcc3] text-center">
            <PackageOpen size={38} className="text-[#ff5a00]" aria-hidden="true" />
            <h2 className="font-baloo mt-4 text-3xl font-extrabold text-[#6d449b]">Nenhum produto encontrado.</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#927a9f]">Tente outro nome ou remova os filtros para ver toda a cole&ccedil;&atilde;o.</p>
            <button onClick={() => { setQuery(''); setActiveFilter('todos') }} className="mt-5 min-h-11 rounded-full bg-[#ff5a00] px-5 text-xs font-black uppercase text-white transition hover:bg-[#6d449b]">Limpar filtros</button>
          </div>
        )}
      </section>

      <footer className="bg-[#6d449b] px-4 py-10 text-[#f6e9c8] sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-baloo text-3xl font-extrabold">MOORS</p>
            <p className="mt-1 text-xs text-white/70">Personalizados &bull; Brindes &bull; Presentes</p>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-white/70">Feito com carinho, cor e impress&atilde;o 3D para deixar a vida mais parecida com voc&ecirc;.</p>
        </div>
      </footer>
    </main>
  )
}
