'use client'

import { ArrowRight, Play, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-surface border border-white/[0.08] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-secondary text-sm tracking-wide">New Collection Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary mb-6 leading-[0.95] tracking-tight">
            Premium
            <br />
            <span className="text-accent italic font-normal">Digital</span>
            <br />
            Products
          </h1>

          <p className="text-lg md:text-xl text-secondary/80 mb-12 max-w-xl mx-auto leading-relaxed">
            Curated templates, systems, and resources for creators who demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="group bg-accent text-background px-8 py-4 rounded-full font-medium hover:bg-accent-hover transition-colors duration-300 flex items-center gap-3"
            >
              <span>Browse Collection</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="group flex items-center gap-3 text-primary px-8 py-4 rounded-full border border-white/[0.08] hover:border-accent/50 transition-colors">
              <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center">
                <Play size={16} className="fill-accent text-accent" />
              </span>
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="mt-20 flex items-center justify-center gap-12 text-secondary/60 text-sm font-mono">
            <div className="flex items-center gap-2">
              <Download size={14} />
              <span>Instant Access</span>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <span>Lifetime Updates</span>
            <div className="h-4 w-px bg-white/10"></div>
            <span>Premium Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
