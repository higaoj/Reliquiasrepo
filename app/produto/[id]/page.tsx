import { notFound } from 'next/navigation'
import { getProduct, PRODUCTS } from '@/lib/products'
import { ProductDetail } from '@/components/product-detail'

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) notFound()
  return <ProductDetail product={product} />
}
