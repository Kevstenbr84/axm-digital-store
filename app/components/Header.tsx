'use client'

import { useState } from 'react'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/[0.08]">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-light tracking-wider text-primary">AXM.</div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-secondary hover:text-primary transition-colors text-sm tracking-wide">Shop</a>
              <a href="#collections" className="text-secondary hover:text-primary transition-colors text-sm tracking-wide">Collections</a>
              <a href="#journal" className="text-secondary hover:text-primary transition-colors text-sm tracking-wide">Journal</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-secondary hover:text-primary transition-colors"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-14 w-80 p-4 bg-surface-elevated border border-white/[0.08] rounded-xl shadow-2xl">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full bg-surface border border-white/[0.08] rounded-lg px-4 py-3 text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent/50"
                    autoFocus
                  />
                </div>
              )}
            </div>

            <button className="p-2 text-secondary hover:text-primary transition-colors relative">
              <ShoppingCart size={20} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-background text-xs font-medium rounded-full flex items-center justify-center">2</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-surface-elevated border-b border-white/[0.08]">
            <div className="px-6 py-4 space-y-1">
              <a href="#products" className="block text-secondary hover:text-primary py-3 transition-colors">Shop</a>
              <a href="#collections" className="block text-secondary hover:text-primary py-3 transition-colors">Collections</a>
              <a href="#journal" className="block text-secondary hover:text-primary py-3 transition-colors">Journal</a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
