'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Menu, MessageCircle, PackageCheck, Search, ShoppingBag, Sparkles, UserRound, UsersRound, X } from 'lucide-react'
import { ShopMenu } from '@/components/shop-menu'

const audiences = [
  { icon: UsersRound, title: 'Para colaboradores', text: 'Kits de boas-vindas, aniversarios e momentos que fazem seu time se sentir visto.' },
  { icon: Sparkles, title: 'Para clientes', text: 'Presentes uteis que estendem o cuidado da sua marca para alem da reuniao.' },
  { icon: PackageCheck, title: 'Para parceiros', text: 'Brindes que celebram parcerias e continuam presentes na rotina de quem recebe.' },
]

const process = [
  'Voce conta o objetivo, o publico e a personalidade da sua marca.',
  'Criamos uma proposta de peca, cores e acabamento para voce aprovar.',
  'Produzimos, finalizamos e preparamos tudo para sua entrega.',
]

export function CorporateGiftsPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f8f4ee] text-[#302046]">
      <div className="bg-[#6d449b] px-4 py-2 text-center text-[10px] font-bold text-[#f6e9c8] sm:text-xs">Brindes com uso real <span className="mx-3 opacity-50">&bull;</span> Criados para a sua marca</div>

      <header className="sticky top-0 z-30 border-b border-[#eadcc3] bg-[#fdfbf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button className="rounded-full p-2 transition hover:bg-[#f6e9c8] md:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label="Abrir menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          <Link href="/" className="flex min-w-0 items-center gap-2 text-[#6d449b]"><span className="font-baloo text-3xl font-extrabold">MOORS</span><span className="hidden border-l border-[#eadcc3] pl-3 text-[10px] font-bold leading-tight text-[#927a9f] sm:block">Seu jeito de ver<br />junto com o nosso jeito de criar.</span></Link>

          <nav className={`${menuOpen ? 'absolute left-0 right-0 top-full flex' : 'hidden'} flex-col gap-1 border-b border-[#eadcc3] bg-[#fdfbf7] p-4 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
            <ShopMenu onNavigate={() => setMenuOpen(false)} />
            <Link href="/personalizados" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-[#f6e9c8]">Personalizados</Link>
            <Link href="/empresas" onClick={() => setMenuOpen(false)} className="rounded bg-[#f6e9c8] px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-[#6d449b]">Para empresas</Link>
            <Link href="/#sobre" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-[#f6e9c8]">Sobre a Moors</Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-3"><button className="hidden rounded-full p-2 transition hover:bg-[#f6e9c8] sm:block" aria-label="Buscar"><Search size={18} /></button><Link href="/sign-in" className="rounded-full p-2 transition hover:bg-[#f6e9c8]" aria-label="Entrar"><UserRound size={18} /></Link><Link href="/checkout" className="rounded-full p-2 transition hover:bg-[#f6e9c8]" aria-label="Abrir carrinho"><ShoppingBag size={18} /></Link></div>
        </div>
      </header>

      <section className="relative isolate min-h-[34rem] overflow-hidden bg-[#302046] px-4 py-16 text-[#f6e9c8] sm:px-6 lg:px-8 lg:py-24">
        <Image src="/corporate-gifts.png" alt="Kit corporativo com itens de uso diario" fill priority className="object-cover object-center opacity-70" sizes="100vw" />
        <div className="absolute inset-0 bg-[#302046]/65" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5a00]">Para empresas</p>
          <h1 className="font-baloo mt-4 max-w-3xl text-5xl font-extrabold leading-[.92] sm:text-6xl lg:text-7xl">Presentes que carregam a sua marca. E continuam na rotina.</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#f6e9c8]/85 sm:text-base">Criamos brindes 3D uteis, memoraveis e com personalidade para colaboradores, clientes e parceiros. Nada de presente que vai direto para a gaveta.</p>
          <a href="https://wa.me/5511966719117?text=Oi%20Moors!%20Quero%20criar%20brindes%20para%20a%20minha%20empresa." target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#ff5a00] px-5 text-xs font-black uppercase text-white transition hover:bg-[#f6e9c8] hover:text-[#6d449b]">Criar brindes para minha marca <ArrowRight className="ml-2" size={16} /></a>
        </div>
      </section>

      <section className="bg-[#f6e9c8] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff5a00]">Marca que se faz presente</p><h2 className="font-baloo mt-3 text-4xl font-extrabold leading-none text-[#6d449b] sm:text-5xl">Um bom brinde continua a conversa.</h2><p className="mt-5 text-sm leading-relaxed text-[#6d449b]/75 sm:text-base">Quando um presente tem utilidade, ele fica na mesa, na mochila, no cafe e no dia a dia. Sua marca deixa de ser so uma logo e vira parte de um gesto de cuidado.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audiences.map(({ icon: Icon, title, text }) => <article key={title} className="border-t-2 border-[#6d449b] pt-5"><Icon size={24} className="text-[#ff5a00]" /><h3 className="mt-4 text-lg font-black text-[#302046]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#6d449b]/75">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ee] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff5a00]">Do briefing a entrega</p><h2 className="font-baloo mt-3 text-4xl font-extrabold leading-none text-[#6d449b] sm:text-5xl">A sua marca, do jeito certo.</h2></div>
          <ol className="space-y-0 border-t border-[#eadcc3]">{process.map((item, index) => <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#eadcc3] py-5"><span className="font-baloo text-2xl font-extrabold text-[#ff5a00]">0{index + 1}</span><p className="pt-1 text-sm leading-relaxed text-[#6d449b]/80">{item}</p></li>)}</ol>
        </div>
      </section>

      <section className="bg-[#ff5a00] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#302046]">Vamos conversar</p><h2 className="font-baloo mt-3 max-w-2xl text-4xl font-extrabold leading-none sm:text-5xl">Tem uma acao ou momento especial chegando?</h2></div><a href="https://wa.me/5511966719117?text=Oi%20Moors!%20Quero%20conversar%20sobre%20brindes%20corporativos." target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-fit items-center rounded-full bg-[#302046] px-6 text-xs font-black uppercase text-[#f6e9c8] transition hover:bg-[#f6e9c8] hover:text-[#6d449b]"><MessageCircle className="mr-2" size={17} /> Falar sobre minha empresa</a></div>
      </section>

      <footer className="bg-[#6d449b] px-4 py-10 text-[#f6e9c8] sm:px-6"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-baloo text-3xl font-extrabold">MOORS</p><p className="mt-1 text-xs text-white/70">Personalizados &bull; Brindes &bull; Presentes</p></div><p className="max-w-xs text-xs leading-relaxed text-white/70">Feito com carinho, cor e impressao 3D para deixar a vida mais parecida com voce.</p></div></footer>
    </main>
  )
}
