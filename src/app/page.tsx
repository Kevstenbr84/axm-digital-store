'use client'

import { useState, useEffect } from 'react'

interface Product {
  id: string
  name: string
  tagline: string
  price: number
  originalPrice?: number
  badge?: string
  image: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<Record<string, boolean>>({})

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to load products:', err))
  }, [])

  const handleBuy = async (product: Product) => {
    setLoading(prev => ({ ...prev, [product.id]: true }))
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Error: ' + (data.error || 'Failed to create checkout'))
      }
    } catch (err: any) {
      alert('Error: ' + err.message)
    } finally {
      setLoading(prev => ({ ...prev, [product.id]: false }))
    }
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
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          <span>Premium Digital</span>
          <br />
          <span style={{ color: '#C4A77D' }}>Products</span>
        </h1>
        <p style={{ color: '#888', fontSize: '1.25rem' }}>
          High-quality templates, prompts, and resources for creators.
        </p>
      </section>

      {/* Products */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>All Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {products.map(product => (
            <div key={product.id} style={{ background: '#16161A', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ aspectRatio: '1', background: '#0A0A0A', padding: '1rem' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontWeight: '500' }}>{product.name}</h3>
                  {product.badge && (
                    <span style={{ background: 'rgba(196,167,125,0.2)', color: '#C4A77D', padding: '0.25rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem' }}>
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
                    disabled={loading[product.id]}
                    style={{
                      background: '#C4A77D',
                      color: 'black',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      fontWeight: '500',
                      border: 'none',
                      cursor: loading[product.id] ? 'wait' : 'pointer',
                      opacity: loading[product.id] ? 0.7 : 1,
                    }}
                  >
                    {loading[product.id] ? 'Loading...' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem', padding: '2rem', textAlign: 'center', color: '#666' }}>
        <p>© 2024 AXM Digital Store</p>
      </footer>
    </div>
  )
}