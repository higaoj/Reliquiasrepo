'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UserRound,
} from 'lucide-react'
import { formatPrice, type Product } from '@/lib/products'
import { ProductReviews } from '@/components/product-reviews'
import { ShopMenu } from '@/components/shop-menu'

export function ProductDetail({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  function addToCart() {
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  return (
    <main className="min-h-screen bg-[#f8f4ee] text-[#302046]">
      <div className="bg-[#6d449b] px-4 py-2 text-center text-[10px] font-bold text-[#f6e9c8] sm:text-xs">
        Frete gr&aacute;tis acima de R$ 120 <span className="mx-3 opacity-50">&bull;</span> At&eacute; 6x sem juros
      </div>

      <header className="sticky top-0 z-30 border-b border-[#eadcc3] bg-[#fdfbf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          {/* <Link href="/" className="rounded-full p-2 text-[#6d449b] transition hover:bg-[#f6e9c8]" aria-label="Voltar para a loja">
            <ArrowLeft size={20} />
          </Link> */}

          <Link href="/" className="flex min-w-0 items-center gap-2 text-[#6d449b]">
            <span className="font-baloo text-3xl font-extrabold">MOORS</span>
            <span className="hidden border-l border-[#eadcc3] pl-3 text-[10px] font-bold leading-tight text-[#927a9f] sm:block">
              Seu jeito de ver<br />junto com o nosso jeito de criar.
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <ShopMenu />
            <Link href="/personalizados" className="rounded px-2 py-2 text-xs font-extrabold uppercase text-[#302046] transition hover:bg-[#f6e9c8]">
              Personalizados
            </Link>
            <Link href="/#sobre" className="rounded px-2 py-2 text-xs font-extrabold uppercase text-[#302046] transition hover:bg-[#f6e9c8]">
              Sobre
            </Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button className="hidden rounded-full p-2 text-[#302046] transition hover:bg-[#f6e9c8] sm:block" aria-label="Buscar">
              <Search size={18} />
            </button>
            <Link href="/sign-in" className="hidden rounded-full p-2 text-[#302046] transition hover:bg-[#f6e9c8] sm:block" aria-label="Entrar">
              <UserRound size={18} />
            </Link>
            <Link href="/checkout" className="rounded-full p-2 text-[#302046] transition hover:bg-[#f6e9c8]" aria-label="Abrir carrinho">
              <ShoppingBag size={18} />
            </Link>
          </div>
        </div>
      </header>

      <section className="border-b border-[#eadcc3] bg-[#f8f4ee] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <Link href="/#produtos" className="inline-flex items-center gap-2 rounded-full border border-[#eadcc3] bg-[#fdfbf7] px-4 py-2 text-xs font-black uppercase text-[#6d449b] transition hover:border-[#ff5a00] hover:text-[#ff5a00]">
            <ArrowLeft size={14} /> Voltar para cole&ccedil;&atilde;o
          </Link>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(300px,1.05fr)_minmax(230px,.75fr)_370px] lg:items-start">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#eadcc3] bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 92vw, 44vw"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-black uppercase text-[#ff5a00]">{product.category} / pe&ccedil;a 3D</p>
              <h1 className="font-baloo mt-3 text-5xl font-extrabold leading-none text-[#6d449b] sm:text-6xl lg:text-7xl">
                {product.name}
              </h1>
              {product.badge && (
                <span className="mt-4 inline-flex rounded-full bg-[#f6e9c8] px-3 py-2 text-[10px] font-black uppercase text-[#6d449b]">
                  {product.badge}
                </span>
              )}
              <p className="mt-5 text-sm leading-relaxed text-[#6d449b]/75 sm:text-base">{product.description}</p>
              <p className="mt-6 text-3xl font-black text-[#302046]">{formatPrice(product.priceInCents)}</p>
              <p className="mt-3 text-xs font-bold text-[#927a9f]">Produ&ccedil;&atilde;o cuidadosa em 3D, com acabamento leve e criativo.</p>
            </div>

            <aside className="order-3 self-start rounded-2xl border border-[#eadcc3] bg-[#fdfbf7] p-5 shadow-sm sm:p-7 lg:sticky lg:top-24">
              <div className="border-b border-[#eadcc3] pb-5">
                <p className="text-xs font-black uppercase text-[#ff5a00]">Configure o seu</p>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h2 className="font-baloo text-3xl font-extrabold leading-none text-[#6d449b]">{product.name}</h2>
                  {/* <p className="shrink-0 text-lg font-black text-[#302046]">{formatPrice(product.priceInCents)}</p> */}
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm font-black uppercase text-[#302046]">Cor</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {product.colors.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setColor(item)}
                      className={`flex min-h-12 items-center justify-center gap-2 rounded-full border px-3 text-sm font-bold transition ${
                        color.name === item.name
                          ? 'border-[#ff5a00] bg-[#fff4ed] text-[#6d449b] shadow-sm'
                          : 'border-[#eadcc3] bg-white text-[#302046] hover:border-[#ff5a00]'
                      }`}
                    >
                      <span className="size-5 rounded-full border border-black/10" style={{ backgroundColor: item.hex }} />
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm font-black uppercase text-[#302046]">Quantidade</p>
                <div className="mt-3 flex h-12 w-full max-w-40 items-center justify-between rounded-full border border-[#eadcc3] bg-white px-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="grid size-9 place-items-center rounded-full text-[#6d449b] transition hover:bg-[#f6e9c8]"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus size={15} />
                  </button>
                  <span className="min-w-8 text-center text-sm font-black">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="grid size-9 place-items-center rounded-full text-[#6d449b] transition hover:bg-[#f6e9c8]"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>

              <button
                onClick={addToCart}
                className="mt-7 flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#ff5a00] px-5 text-sm font-black uppercase text-white transition hover:bg-[#6d449b]"
              >
                {added ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
                <ShoppingBag size={18} />
              </button>

              <p className="mt-4 text-xs leading-relaxed text-[#927a9f]">
                Cor selecionada: <strong className="text-[#6d449b]">{color.name}</strong>.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#f6e9c8] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <div className="text-[#6d449b]">
            <p className="text-xs font-black uppercase text-[#ff5a00]">Sobre a pe&ccedil;a</p>
            <h2 className="font-baloo mt-2 text-4xl font-extrabold leading-none">Feita para ter personalidade.</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#6d449b]/75 sm:text-base">{product.details}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-[#fdfbf7] p-4">
              <Sparkles className="text-[#ff5a00]" size={20} />
              <p className="mt-3 text-sm font-black text-[#6d449b]">Impress&atilde;o 3D</p>
              <p className="mt-1 text-xs leading-relaxed text-[#6d449b]/70">Acabamento leve, criativo e feito em pequenos lotes.</p>
            </div>
            <div className="rounded-xl bg-[#fdfbf7] p-4">
              <Truck className="text-[#ff5a00]" size={20} />
              <p className="mt-3 text-sm font-black text-[#6d449b]">Envio cuidado</p>
              <p className="mt-1 text-xs leading-relaxed text-[#6d449b]/70">Embalagem pensada para o produto chegar bonito.</p>
            </div>
            <div className="rounded-xl bg-[#fdfbf7] p-4">
              <ShieldCheck className="text-[#ff5a00]" size={20} />
              <p className="mt-3 text-sm font-black text-[#6d449b]">Compra simples</p>
              <p className="mt-1 text-xs leading-relaxed text-[#6d449b]/70">Pagamento em at&eacute; 6x sem juros para pedidos Moors.</p>
            </div>
          </div>
        </div>
      </section>

      <ProductReviews productId={product.id} productName={product.name} />

      <section className="bg-[#302046] px-4 py-10 text-[#f6e9c8] sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase text-[#ff5a00]">Quer algo &uacute;nico?</p>
            <h2 className="font-baloo mt-2 text-4xl font-extrabold leading-none">A Moors tamb&eacute;m cria sob medida.</h2>
          </div>
          <Link href="mailto:oi@moors.com.br" className="inline-flex w-fit items-center rounded-full bg-[#ff5a00] px-5 py-3 text-xs font-black uppercase text-white transition hover:bg-[#f6e9c8] hover:text-[#6d449b]">
            Falar sobre meu projeto <ArrowRight className="ml-2" size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}
