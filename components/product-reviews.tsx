'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { CheckCircle2, Star } from 'lucide-react'
import { getProductReviews, type ProductReview } from '@/lib/reviews'

type ProductReviewsProps = {
  productId: string
  productName: string
}

function RatingStars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={size}
          className={index < rating ? 'fill-[#ff5a00] text-[#ff5a00]' : 'text-[#eadcc3]'}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

export function ProductReviews({ productId, productName }: ProductReviewsProps) {
  const [reviews, setReviews] = useState<ProductReview[]>(() => getProductReviews(productId))
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setReviews(getProductReviews(productId))
    setSubmitted(false)
  }, [productId])

  const summary = useMemo(() => {
    const total = reviews.length
    const average = total ? reviews.reduce((sum, review) => sum + review.rating, 0) / total : 0
    const distribution = [5, 4, 3, 2, 1].map((value) => ({
      value,
      count: reviews.filter((review) => review.rating === value).length,
    }))

    return { total, average, distribution }
  }, [reviews])

  function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim() || !comment.trim()) return

    setReviews((current) => [{
      id: `local-${Date.now()}`,
      productId,
      author: name.trim(),
      rating,
      comment: comment.trim(),
      createdAt: 'Agora',
    }, ...current])
    setName('')
    setComment('')
    setRating(5)
    setSubmitted(true)
  }

  return (
    <section className="border-t border-[#eadcc3] bg-[#f8f4ee] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase text-[#ff5a00]">Avaliacoes</p>
          <h2 className="font-baloo mt-2 text-4xl font-extrabold leading-none text-[#6d449b] sm:text-5xl">
            Quem leva, conta.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#6d449b]/75 sm:text-base">
            Experiencias de pessoas que escolheram {productName}.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(240px,.65fr)_minmax(0,1.35fr)] lg:gap-12">
          <aside className="self-start border-y border-[#eadcc3] py-6 lg:sticky lg:top-24">
            <div className="flex items-end gap-3">
              <span className="font-baloo text-6xl font-extrabold leading-none text-[#302046]">
                {summary.average.toFixed(1).replace('.', ',')}
              </span>
              <div className="pb-1">
                <RatingStars rating={Math.round(summary.average)} />
                <p className="mt-2 text-xs font-bold text-[#927a9f]">{summary.total} avaliacoes</p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {summary.distribution.map(({ value, count }) => (
                <div key={value} className="grid grid-cols-[18px_1fr_26px] items-center gap-2 text-xs font-bold text-[#6d449b]">
                  <span>{value}</span>
                  <div className="h-2 overflow-hidden rounded-full bg-[#eadcc3]">
                    <div className="h-full rounded-full bg-[#ff5a00]" style={{ width: `${summary.total ? (count / summary.total) * 100 : 0}%` }} />
                  </div>
                  <span className="text-right text-[#927a9f]">{count}</span>
                </div>
              ))}
            </div>
          </aside>

          <div>
            <div className="space-y-0 border-t border-[#eadcc3]">
              {reviews.map((review) => (
                <article key={review.id} className="border-b border-[#eadcc3] py-6 first:pt-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-black text-[#302046]">{review.author}</h3>
                        {review.verified && <CheckCircle2 size={14} className="text-[#ff5a00]" aria-label="Compra verificada" />}
                      </div>
                      <p className="mt-1 text-xs text-[#927a9f]">{review.createdAt}</p>
                    </div>
                    <RatingStars rating={review.rating} />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#6d449b]/80">{review.comment}</p>
                </article>
              ))}
            </div>

            <form onSubmit={submitReview} className="mt-8 border-t border-[#eadcc3] pt-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase text-[#302046]">Conte sua experiencia</p>
                  <p className="mt-1 text-xs text-[#927a9f]">Sua avaliacao aparece aqui nesta demonstracao.</p>
                </div>
                <div className="flex items-center gap-1" aria-label="Escolha sua avaliacao">
                  {Array.from({ length: 5 }, (_, index) => {
                    const value = index + 1
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setRating(value)}
                        className="grid size-9 place-items-center rounded-full transition hover:bg-[#f6e9c8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a00]"
                        aria-label={`${value} estrelas`}
                        aria-pressed={rating === value}
                      >
                        <Star size={20} className={value <= rating ? 'fill-[#ff5a00] text-[#ff5a00]' : 'text-[#eadcc3]'} />
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)]">
                <label className="sr-only" htmlFor={`reviewer-${productId}`}>Seu nome</label>
                <input
                  id={`reviewer-${productId}`}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Seu nome"
                  maxLength={50}
                  required
                  className="h-12 w-full rounded-xl border border-[#eadcc3] bg-[#fdfbf7] px-4 text-sm text-[#302046] outline-none transition placeholder:text-[#927a9f] focus:border-[#ff5a00]"
                />
                <label className="sr-only" htmlFor={`comment-${productId}`}>Seu comentario</label>
                <textarea
                  id={`comment-${productId}`}
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="O que voce achou da peca?"
                  maxLength={500}
                  required
                  rows={3}
                  className="min-h-24 w-full resize-y rounded-xl border border-[#eadcc3] bg-[#fdfbf7] px-4 py-3 text-sm text-[#302046] outline-none transition placeholder:text-[#927a9f] focus:border-[#ff5a00]"
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-[#927a9f]">{submitted ? 'Obrigada por compartilhar sua experiencia.' : 'Seu comentario sera visivel nesta pagina.'}</p>
                <button type="submit" className="min-h-11 rounded-full bg-[#ff5a00] px-5 text-xs font-black uppercase text-white transition hover:bg-[#6d449b]">
                  Publicar avaliacao
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
