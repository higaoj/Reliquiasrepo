import { eq } from 'drizzle-orm'
import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { orders } from '@/lib/db/schema'
import { getStripe } from '@/lib/stripe'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  const signature = request.headers.get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: 'Webhook Stripe nao configurado.' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = getStripe().webhooks.constructEvent(await request.text(), signature, webhookSecret)
  } catch (error) {
    console.error('Invalid Stripe webhook signature:', error)
    return NextResponse.json({ error: 'Assinatura invalida.' }, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session
  const sessionId = session.id

  if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
    if (session.payment_status === 'paid') {
      await getDb().update(orders)
        .set({ status: 'paid', updatedAt: new Date() })
        .where(eq(orders.stripeCheckoutSessionId, sessionId))
    }
  }

  if (event.type === 'checkout.session.async_payment_failed') {
    await getDb().update(orders)
      .set({ status: 'failed', updatedAt: new Date() })
      .where(eq(orders.stripeCheckoutSessionId, sessionId))
  }

  return NextResponse.json({ received: true })
}
