export interface ProductColor {
  name: string
  hex: string
}

export interface Product {
  id: string
  name: string
  description: string
  details: string
  priceInCents: number
  category: string
  image: string
  accent: string
  badge?: string
  colors: ProductColor[]
}

export const PRODUCT_FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'chaveiros', label: 'Chaveiros' },
  { id: 'canecas', label: 'Canecas' },
  { id: 'imas', label: 'Im\u00e3s' },
  { id: 'vasos', label: 'Vasos' },
  { id: 'aniversarios', label: 'Anivers\u00e1rios' },
  { id: 'empresas', label: 'Empresas' },
  { id: 'casamentos', label: 'Casamentos' },
  { id: 'eventos', label: 'Eventos' },
]

export const PRODUCT_FILTERS_BY_PRODUCT_ID: Record<string, string[]> = {
  'mug-olho': ['canecas'],
  'chaveiro-sol': ['chaveiros'],
  'vaso-onda': ['vasos'],
}

export const PRODUCTS: Product[] = [
  { id: 'mug-olho', name: 'Caneca Olhinho', description: 'Para tomar café com personalidade.', details: 'Caneca decorativa e funcional, produzida em 3D com acabamento leve e toque divertido. Ideal para cafés, presentes e aquele cantinho especial.', priceInCents: 4890, category: 'Casa', image: '/products/mug.png', accent: 'orange', badge: 'Mais querido', colors: [{ name: 'Laranja', hex: '#ff5a00' }, { name: 'Roxo', hex: '#6d449b' }, { name: 'Creme', hex: '#f6e9c8' }] },
  { id: 'chaveiro-sol', name: 'Chaveiro Solzinho', description: 'Um raio de alegria para levar por aí.', details: 'Pequeno, leve e cheio de personalidade. Um presente carinhoso para acompanhar chaves, bolsas e mochilas todos os dias.', priceInCents: 1990, category: 'Pequenos', image: '/products/keychain.png', accent: 'purple', badge: 'Novidade', colors: [{ name: 'Roxo', hex: '#6d449b' }, { name: 'Laranja', hex: '#ff5a00' }, { name: 'Creme', hex: '#f6e9c8' }] },
  { id: 'vaso-onda', name: 'Vaso Onda', description: 'Design 3D que transforma qualquer cantinho.', details: 'Vaso escultural para flores secas e decoração. Uma peça autoral com curvas orgânicas que muda a energia do ambiente.', priceInCents: 6990, category: 'Casa', image: '/products/vase.png', accent: 'cream', colors: [{ name: 'Creme', hex: '#f6e9c8' }, { name: 'Laranja', hex: '#ff5a00' }, { name: 'Roxo', hex: '#6d449b' }] },
]

export function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(priceInCents / 100)
}

export function getProduct(id: string) { return PRODUCTS.find((product) => product.id === id) }
export function getProductsByIds(ids: string[]) { return ids.map(getProduct).filter(Boolean) as Product[] }
export const BRAND_ASSET = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moors-QslcV1YmKIynBQ5xGNh2RyJ6iSWxpA.png'

export const CUSTOM_PRODUCTS = [
  { title: 'Brindes para marcas', text: 'Peças que carregam sua identidade e fazem sua marca ser lembrada.', label: 'Para empresas', image: '/products/vase.png' },
  { title: 'Presentes com história', text: 'Você imagina. A gente modela, imprime e entrega um presente só seu.', label: 'Para pessoas', image: '/products/mug.png' },
]
