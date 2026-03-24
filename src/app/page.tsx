'use client'

import { useState, useEffect } from 'react'

const products = [
  { id: '1', name: 'Agentic Flow', tagline: 'The Master Library of High-Autonomy AI Prompts', price: 67, originalPrice: 97, badge: 'Bestseller', image: '/products/agentic-flow.png', stripeLink: 'https://buy.stripe.com/5kQ9AV5Aa1Q97oJ4yg8og00' },
  { id: '2', name: 'The Intelligent Workspace', tagline: 'A Complete Notion AI OS for Productivity', price: 79, badge: 'v2.0', image: '/products/intelligent-workspace.jpg', stripeLink: 'https://buy.stripe.com/5kQ00l4w652l24p0i08og01' },
  { id: '3', name: 'ViralCommerce', tagline: 'The Ultimate TikTok Shop Scaling Kit', price: 39, originalPrice: 69, badge: 'Trending', image: '/products/viralcommerce.jpg', stripeLink: 'https://buy.stripe.com/7sY14p8Mm3Yh10ld4M8og02' },
  { id: '4', name: 'GPT Forge', tagline: '25+ Custom GPT Blueprints for Business', price: 67, originalPrice: 127, badge: 'New', image: '/products/gpt-forge-neon.jpg', stripeLink: 'https://buy.stripe.com/4gM28t2nYdyR8sN5Ck8og03' },
  { id: '5', name: 'Authority Engine', tagline: '365-Day LinkedIn Content Strategy', price: 57, originalPrice: 97, badge: 'Popular', image: '/products/authority-engine.jpg', stripeLink: 'https://buy.stripe.com/fZu28tfaK0M5dN78Ow8og04' },
  { id: '6', name: 'Pixel-Perfect SaaS', tagline: 'Premium Framer Landing Pages', price: 89, originalPrice: 149, badge: 'Premium', image: '/products/pixel-perfect-saas.png', stripeLink: 'https://buy.stripe.com/dRm3cx7IidyRfVf0i08og05' },
  { id: '7', name: 'Profit Tracker', tagline: 'Notion Finance Dashboard Pro', price: 47, badge: 'Essential', image: '/products/profit-tracker.png', stripeLink: 'https://buy.stripe.com/8x24gBfaK3Yh6kF4yg8og06' },
  { id: '8', name: 'Inbox Revenue', tagline: 'Email Automation Starter Pack', price: 37, originalPrice: 67, badge: 'Proven', image: '/products/inbox-revenue.jpg', stripeLink: 'https://buy.stripe.com/cNifZjbYybqJ24p3uc8og07' },
  { id: '9', name: 'SynthIdentity', tagline: 'AI Avatar Generator System', price: 29, badge: 'Hot', image: '/products/synthidentity.png', stripeLink: 'https://buy.stripe.com/4gMbJ37Ii66pdN7aWE8og08' },
  { id: '10', name: 'The Digital Asset Vault', tagline: 'Complete Digital Product Resale Bundle', price: 97, originalPrice: 197, badge: 'Limited', image: '/products/digital-asset-vault.png', stripeLink: 'https://buy.stripe.com/4gMeVfe6GamFeRb8Ow8og09' },
]

export default function Home() {
  const handleBuy = (product: typeof products[0]) => {
    window.location.href = product.stripeLink
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', color: 'white' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '2rem', height: '2rem', background: '#C4A77D', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'black', fontWeight: 'bold' }}>A</span>
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>AXM</span>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#products" style={{ color: '#888', textDecoration: 'none' }}>Products</a>
            <a href="#about" style={{ color: '#888', textDecoration: 'none' }}>About</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          <span>Premium Digital</span>
          <br />
          <span style={{ color: '#C4A77D' }}>Products</span>
        </h1>
        <p style={{ color: '#888', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          High-quality templates, prompts, and resources for creators and developers.
        </p>
      </section>

      {/* Products */}
      <section id="products" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>All Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {products.map(product => (
            <div key={product.id} style={{ background: '#16161A', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              <div style={{ aspectRatio: '1', background: '#0A0A0A', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontWeight: '500', fontSize: '1.1rem' }}>{product.name}</h3>
                  {product.badge && (
                    <span style={{ background: 'rgba(196,167,125,0.2)', color: '#C4A77D', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem' }}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <p style={{ color: '#888', fontSize: '0.875rem', marginBottom: '1rem' }}>{product.tagline}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>${product.price}</span>
                    {product.originalPrice && (
                      <span style={{ color: '#666', textDecoration: 'line-through', marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleBuy(product)}
                    style={{
                      background: '#C4A77D',
                      color: 'black',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.5rem',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', padding: '2rem', textAlign: 'center', color: '#666' }}>
        <p>© 2024 AXM Digital Store. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
          <a href="mailto:support@axmstore.com" style={{ color: '#C4A77D' }}>support@axmstore.com</a>
        </p>
      </footer>
    </div>
  )
}