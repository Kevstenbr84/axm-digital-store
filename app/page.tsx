'use client'

import { useState, useEffect } from 'react'
import { Download, Badge } from 'lucide-react'

interface Product {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  originalPrice?: number
  category: string
  badge?: string
  image: string
  fileTypes: string[]
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleBuy = async (product: Product) => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        }),
      })
      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Error: ' + (data.error || 'Failed to create checkout session'))
      }
    } catch (error: any) {
      alert('Error: ' + error.message)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#C4A77D] flex items-center justify-center">
              <span className="text-black font-bold">A</span>
            </div>
            <span className="text-xl font-bold text-white">AXM</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="/admin" className="text-gray-400 hover:text-white transition-colors">Admin</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">Premium Digital</span>
          <br />
          <span className="text-[#C4A77D]">Products</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          High-quality templates, prompts, and resources for creators and developers.
        </p>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-white">All Products</h2>
        {loading ? (
          <div className="text-center text-gray-400">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-[#16161A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C4A77D]/30 transition-colors">
                <div className="aspect-square bg-[#0A0A0A] p-4">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-white">{product.name}</h3>
                    {product.badge && (
                      <span className="text-xs bg-[#C4A77D]/20 text-[#C4A77D] px-2 py-1 rounded-full">{product.badge}</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{product.tagline}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-white">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => handleBuy(product)}
                      className="bg-[#C4A77D] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#D4B78D] transition-colors"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-gray-500">
          <p>© 2024 AXM Digital Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}