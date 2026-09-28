'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Menu, MessageCircle, Search, Send, ShoppingBag, UserRound, X } from 'lucide-react'
import { ShopMenu } from '@/components/shop-menu'

const steps = [
  {
    number: '01',
    title: 'Conte sua ideia',
    imagePosition: '0% center',
    text: 'Envie referencias, medidas, cores ou apenas aquela ideia que ainda esta no papel. Quanto mais voce contar, mais a peca fica com a sua cara.',
  },
  {
    number: '02',
    title: 'Veja antes de produzir',
    imagePosition: '50% center',
    text: 'Transformamos sua ideia em uma previa 3D. Voce acompanha o projeto e pode pedir ajustes antes de dar o seu ok.',
  },
  {
    number: '03',
    title: 'Receba sua peca',
    imagePosition: '100% center',
    text: 'Com o layout aprovado, a peca entra em producao, recebe acabamento e segue preparada para surpreender.',
  },
]

export function CustomProductsPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f8f4ee] text-[#302046]">
      <div className="bg-[#6d449b] px-4 py-2 text-center text-[10px] font-bold text-[#f6e9c8] sm:text-xs">
        Criado do seu jeito <span className="mx-3 opacity-50">&bull;</span> Produzido com cuidado
      </div>

      <header className="sticky top-0 z-30 border-b border-[#eadcc3] bg-[#fdfbf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button className="rounded-full p-2 transition hover:bg-[#f6e9c8] md:hidden" onClick={() => setMenuOpen((current) => !current)} aria-label="Abrir menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href="/" className="flex min-w-0 items-center gap-2 text-[#6d449b]">
            <span className="font-baloo text-3xl font-extrabold">MOORS</span>
            <span className="hidden border-l border-[#eadcc3] pl-3 text-[10px] font-bold leading-tight text-[#927a9f] sm:block">Seu jeito de ver<br />junto com o nosso jeito de criar.</span>
          </Link>

          <nav className={`${menuOpen ? 'absolute left-0 right-0 top-full flex' : 'hidden'} flex-col gap-1 border-b border-[#eadcc3] bg-[#fdfbf7] p-4 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
            <ShopMenu onNavigate={() => setMenuOpen(false)} />
            <Link href="/personalizados" onClick={() => setMenuOpen(false)} className="rounded bg-[#f6e9c8] px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-[#6d449b]">Personalizados</Link>
            <Link href="/empresas" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-[#f6e9c8]">Para empresas</Link>
            <Link href="/#sobre" onClick={() => setMenuOpen(false)} className="rounded px-3 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-[#f6e9c8]">Sobre a Moors</Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button className="hidden rounded-full p-2 transition hover:bg-[#f6e9c8] sm:block" aria-label="Buscar"><Search size={18} /></button>
            <Link href="/sign-in" className="rounded-full p-2 transition hover:bg-[#f6e9c8]" aria-label="Entrar"><UserRound size={18} /></Link>
            <Link href="/checkout" className="rounded-full p-2 transition hover:bg-[#f6e9c8]" aria-label="Abrir carrinho"><ShoppingBag size={18} /></Link>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#302046] px-4 py-16 text-[#f6e9c8] sm:px-6 lg:px-8 lg:py-24">
        <Image src="/custom-process-steps.png" alt="Ilustracao do processo de criacao: ideia, modelo 3D e impressao" fill priority className="object-cover object-center opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-[#302046]/55" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff5a00]">Personalizados Moors</p>
          <h1 className="font-baloo mt-4 max-w-3xl text-5xl font-extrabold leading-[.92] sm:text-6xl lg:text-7xl">A sua ideia merece sair do papel.</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#f6e9c8]/80 sm:text-base">Da primeira referencia ate a peca pronta, criamos junto com voce. Sem complicacao, com conversa e com espaco para a sua personalidade.</p>
          <a href="#como-funciona" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#ff5a00] px-5 text-xs font-black uppercase text-white transition hover:bg-[#f6e9c8] hover:text-[#6d449b]">Entender o processo <ArrowRight className="ml-2" size={16} /></a>
        </div>
      </section>

      <section id="como-funciona" className="bg-[#f6e9c8] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl text-center sm:mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ff5a00]">Um processo feito junto</p>
            <h2 className="font-baloo mt-3 text-4xl font-extrabold leading-none text-[#6d449b] sm:text-5xl">Como damos vida a sua ideia?</h2>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <article key={step.number} className="text-center">
                <div
                  className="mx-auto aspect-[1.45/1] w-full max-w-sm bg-[length:300%_auto] bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/custom-process-steps.png')", backgroundPosition: step.imagePosition }}
                  aria-hidden="true"
                />
                <div className="mx-auto mt-4 max-w-sm border-t-2 border-[#6d449b] pt-5">
                  <p className="text-xs font-black text-[#ff5a00]">{step.number}</p>
                <h3 className="mt-2 text-lg font-black uppercase text-[#302046]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6d449b]/75">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ff5a00] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#302046]">Sua vez</p>
            <h2 className="font-baloo mt-3 max-w-2xl text-4xl font-extrabold leading-none sm:text-5xl">Ja tem uma ideia? Manda para a gente.</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85">Pode ser uma foto, um rabisco, uma referencia ou uma mensagem contando o que voce imaginou.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="https://wa.me/5511966719117?text=Oi%20Moors!%20Tenho%20uma%20ideia%20para%20personalizar." target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#302046] px-6 text-xs font-black uppercase text-[#f6e9c8] transition hover:bg-[#f6e9c8] hover:text-[#6d449b]">
              <MessageCircle className="mr-2" size={17} /> Chamar no WhatsApp
            </a>
            <a href="https://www.instagram.com/moors3d/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/70 px-6 text-xs font-black uppercase text-white transition hover:bg-white hover:text-[#6d449b]">
              <Send className="mr-2" size={17} /> Enviar no Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ee] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {['Voce aprova o modelo antes da producao', 'Ajustes sao conversados no caminho', 'Cada peca recebe acabamento cuidadoso'].map((item) => (
            <p key={item} className="flex items-start gap-3 text-sm font-bold text-[#6d449b]"><Check size={19} className="shrink-0 text-[#ff5a00]" />{item}</p>
          ))}
        </div>
      </section>

      <footer className="bg-[#6d449b] px-4 py-10 text-[#f6e9c8] sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-baloo text-3xl font-extrabold">MOORS</p><p className="mt-1 text-xs text-white/70">Personalizados &bull; Brindes &bull; Presentes</p></div>
          <p className="max-w-xs text-xs leading-relaxed text-white/70">Feito com carinho, cor e impressao 3D para deixar a vida mais parecida com voce.</p>
        </div>
      </footer>
    </main>
  )
}
