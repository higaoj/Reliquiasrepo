import { integer, pgEnum, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const orderStatus = pgEnum('order_status', [
  'pending',
  'paid',
  'failed',
  'canceled',
])

export const orders = pgTable('orders', {
  id: text('id').primaryKey(),
  stripeCheckoutSessionId: text('stripe_checkout_session_id').unique(),
  status: orderStatus('status').notNull().default('pending'),
  amountInCents: integer('amount_in_cents').notNull(),
  currency: text('currency').notNull().default('brl'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
})

export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: text('order_id').notNull().references(() => orders.id, { onDelete: 'cascade' }),
  productId: text('product_id').notNull(),
  productName: text('product_name').notNull(),
  color: text('color'),
  quantity: integer('quantity').notNull(),
  unitAmountInCents: integer('unit_amount_in_cents').notNull(),
})

export const productReviews = pgTable('product_reviews', {
  id: serial('id').primaryKey(),
  productId: text('product_id').notNull(),
  authorName: text('author_name').notNull(),
  rating: integer('rating').notNull(),
  comment: text('comment').notNull(),
  isVerifiedPurchase: integer('is_verified_purchase').notNull().default(0),
  isApproved: integer('is_approved').notNull().default(0),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
