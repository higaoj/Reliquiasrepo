import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function CheckoutSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6e9c8] px-5 py-10">
      <section className="w-full max-w-lg rounded-2xl bg-[#fdfbf7] p-8 text-center shadow-sm sm:p-12">
        <CheckCircle2 className="mx-auto size-14 text-[#ff5a00]" aria-hidden="true" />
        <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[#ff5a00]">Pagamento recebido</p>
        <h1 className="mt-2 font-baloo text-4xl font-extrabold text-[#6d449b]">Pedido confirmado.</h1>
        <p className="mt-4 text-sm leading-6 text-[#806f82]">
          Obrigada por escolher uma pe&ccedil;a Moors. Vamos preparar seu pedido com carinho.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#ff5a00] px-6 py-3 text-sm font-extrabold text-white transition hover:bg-[#6d449b]"
        >
          Voltar para a loja
        </Link>
      </section>
    </main>
  )
}
