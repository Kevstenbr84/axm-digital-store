'use client'

import { Badge, Download, Eye, Loader2 } from 'lucide-react'
import { useState } from 'react'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    setLoading(true)
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
        alert('Error creating checkout session')
      }
    } catch (error) {
      console.error(error)
      alert('Error processing payment')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="group relative bg-surface border border-white/[0.08] rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500">
      <div className="relative overflow-hidden bg-surface-elevated p-4">
        <div className="aspect-square w-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-accent text-background px-6 py-3 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 whitespace-nowrap hover:bg-accent-hover">
          <Eye size={16} strokeWidth={2} />
          Quick View
        </button>

        {product.badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-surface/90 backdrop-blur border border-accent/30 text-accent text-xs px-3 py-1.5 rounded-full font-medium tracking-wide">{product.badge}</span>
          </div>
        )}

        <div className="absolute top-4 right-4">
          <div className="bg-surface/90 backdrop-blur border border-white/[0.08] rounded-full p-2.5">
            <Download size={16} className="text-secondary" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-primary font-medium mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
            <p className="text-secondary/80 text-sm font-mono">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="text-primary font-medium">${product.price}</p>
            {product.originalPrice && (
              <p className="text-secondary/50 text-xs font-mono line-through">${product.originalPrice}</p>
            )}
          </div>
        </div>

        <p className="text-secondary/70 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>

        <div className="flex items-center gap-2 text-xs text-secondary/50 font-mono mb-5">
          <Badge size={12} strokeWidth={1.5} />
          <span>{product.fileTypes.join(', ')}</span>
        </div>

        <button 
          onClick={handleBuy}
          disabled={loading}
          className="w-full bg-surface-elevated text-primary py-3.5 rounded-xl font-medium hover:bg-accent hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Processing...
            </>
          ) : (
            'Buy Now'
          )}
        </button>
      </div>
    </div>
  )
}