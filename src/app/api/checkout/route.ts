import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe
const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    throw new Error('Missing STRIPE_SECRET_KEY environment variable')
  }
  return new Stripe(key, { apiVersion: '2023-10-16' })
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe()
    const body = await request.json()
    const { productId, name, price, image } = body

    console.log('Checkout request:', { productId, name, price })

    if (!name || !price) {
      return NextResponse.json({ error: 'Missing product name or price' }, { status: 400 })
    }

    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name,
            description: `Digital product: ${name}`,
            images: [image?.startsWith('/') ? `${baseUrl}${image}` : image || `${baseUrl}/products/default.jpg`],
          },
          unit_amount: Math.round(Number(price) * 100),
        },
        quantity: 1,
      }],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/`,
      metadata: { productId: productId || 'unknown' },
    })

    console.log('Stripe session created:', session.url)
    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Stripe error:', error)
    return NextResponse.json({ error: error.message || 'Checkout failed' }, { status: 500 })
  }
}