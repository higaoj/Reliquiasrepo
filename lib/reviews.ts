export type ProductReview = {
  id: string
  productId: string
  author: string
  rating: number
  comment: string
  createdAt: string
  verified?: boolean
}

const REVIEWS: ProductReview[] = [
  {
    id: 'mug-1',
    productId: 'mug-olho',
    author: 'Marina R.',
    rating: 5,
    comment: 'Linda e muito bem acabada. Deixou meu cafe da manha muito mais divertido.',
    createdAt: '12 jul 2025',
    verified: true,
  },
  {
    id: 'mug-2',
    productId: 'mug-olho',
    author: 'Caio M.',
    rating: 5,
    comment: 'Comprei para presentear e foi um sucesso. A embalagem tambem e muito caprichada.',
    createdAt: '28 jun 2025',
    verified: true,
  },
  {
    id: 'mug-3',
    productId: 'mug-olho',
    author: 'Bia L.',
    rating: 4,
    comment: 'Uma peca super criativa, exatamente como nas fotos.',
    createdAt: '03 jun 2025',
  },
  {
    id: 'keychain-1',
    productId: 'chaveiro-sol',
    author: 'Luiza P.',
    rating: 5,
    comment: 'Pequeno, leve e uma gracinha. Ja quero em outras cores.',
    createdAt: '18 jul 2025',
    verified: true,
  },
  {
    id: 'keychain-2',
    productId: 'chaveiro-sol',
    author: 'Nando C.',
    rating: 5,
    comment: 'Chegou rapidinho e ficou perfeito na minha mochila.',
    createdAt: '01 jul 2025',
    verified: true,
  },
  {
    id: 'keychain-3',
    productId: 'chaveiro-sol',
    author: 'Helena S.',
    rating: 4,
    comment: 'Otima opcao para dar de lembranca. Todo mundo comentou.',
    createdAt: '22 jun 2025',
  },
  {
    id: 'vase-1',
    productId: 'vaso-onda',
    author: 'Sofia A.',
    rating: 5,
    comment: 'O vaso virou o ponto alto da estante. As curvas sao ainda mais bonitas ao vivo.',
    createdAt: '10 jul 2025',
    verified: true,
  },
  {
    id: 'vase-2',
    productId: 'vaso-onda',
    author: 'Rafa G.',
    rating: 5,
    comment: 'Material leve e acabamento impecavel. Recomendo muito.',
    createdAt: '26 jun 2025',
    verified: true,
  },
  {
    id: 'vase-3',
    productId: 'vaso-onda',
    author: 'Tais D.',
    rating: 4,
    comment: 'Deu um toque muito especial para meu cantinho de plantas.',
    createdAt: '07 jun 2025',
  },
]

export function getProductReviews(productId: string) {
  return REVIEWS.filter((review) => review.productId === productId)
}
