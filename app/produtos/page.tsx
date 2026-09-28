import { ProductsCatalog } from '@/components/products-catalog'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ filtro?: string | string[] }>
}) {
  const params = await searchParams
  const initialFilter = typeof params.filtro === 'string' ? params.filtro : undefined

  return <ProductsCatalog initialFilter={initialFilter} />
}
