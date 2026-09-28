import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { orderItems, orders } from '@/lib/db/schema'
import { getProduct } from '@/lib/products'
import { getStripe } from '@/lib/stripe'

export const runtime = 'nodejs'

type CheckoutItem = {
  id: string
  quantity: number
  color?: string
}

function parseItems(payload: unknown): CheckoutItem[] {
  if (!payload || typeof payload !== 'object' || !Array.isArray((payload as { items?: unknown }).items)) {
    return []
  }

  return (payload as { items: unknown[] }).items.flatMap((item) => {
    if (!item || typeof item !== 'object') return []

    const { id, quantity, color } = item as Record<string, unknown>
    if (typeof id !== 'string') return []

    return [{
      id,
      quantity: typeof quantity === 'number' ? Math.min(Math.max(Math.floor(quantity), 1), 20) : 1,
      color: typeof color === 'string' ? color.slice(0, 60) : undefined,
    }]
  })
}

export async function POST(request: NextRequest) {
  try {
    const requestedItems = parseItems(await request.json())
    const items = requestedItems.flatMap((item) => {
      const product = getProduct(item.id)
      return product ? [{ ...item, product }] : []
    })

    if (!items.length) {
      return NextResponse.json({ error: 'Adicione ao menos um produto valido ao pedido.' }, { status: 400 })
    }

    const orderId = crypto.randomUUID()
    const amountInCents = items.reduce(
      (total, item) => total + item.product.priceInCents * item.quantity,
      0,
    )
    const db = getDb()

    await db.insert(orders).values({ id: orderId, amountInCents })
    await db.insert(orderItems).values(items.map((item) => ({
      orderId,
      productId: item.product.id,
      productName: item.product.name,
      color: item.color,
      quantity: item.quantity,
      unitAmountInCents: item.product.priceInCents,
    })))

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'brl',
          product_data: {
            name: item.product.name,
            description: item.color ? `Cor: ${item.color}` : undefined,
          },
          unit_amount: item.product.priceInCents,
        },
        quantity: item.quantity,
      })),
      metadata: { orderId },
      success_url: `${origin}/checkout/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
    })

    await db.update(orders)
      .set({ stripeCheckoutSessionId: session.id, updatedAt: new Date() })
      .where(eq(orders.id, orderId))

    if (!session.url) {
      throw new Error('Stripe did not return a checkout URL.')
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Unable to create checkout session:', error)
    return NextResponse.json({ error: 'Nao foi possivel iniciar o pagamento.' }, { status: 500 })
  }
}
