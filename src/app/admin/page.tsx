'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Save, X, Image as ImageIcon, Palette, Upload, Download } from 'lucide-react'

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

const defaultProduct: Omit<Product, 'id'> = {
  name: '',
  tagline: '',
  description: '',
  price: 0,
  originalPrice: undefined,
  category: 'Templates',
  badge: 'New',
  image: '/products/placeholder.jpg',
  fileTypes: ['PDF', 'JSON']
}

const initialProducts: Product[] = [
  {
    "id": "1",
    "name": "Agentic Flow",
    "tagline": "The Master Library of High-Autonomy AI Prompts",
    "description": "100+ battle-tested AI prompts for autonomous agents, workflow automation, and intelligent systems. Organized by use case with JSON and Markdown formats.",
    "price": 67,
    "originalPrice": 97,
    "category": "AI Tools",
    "badge": "Bestseller",
    "image": "/products/agentic-flow.png",
    "fileTypes": ["JSON", "Markdown", "PDF"]
  },
  {
    "id": "2",
    "name": "The Intelligent Workspace",
    "tagline": "A Complete Notion AI OS for Productivity",
    "description": "5 integrated Notion templates with AI automation formulas, content calendars, project managers, and setup guides. Lifetime updates included.",
    "price": 79,
    "category": "Templates",
    "badge": "v2.0",
    "image": "/products/intelligent-workspace.jpg",
    "fileTypes": ["Notion", "JSON"]
  },
  {
    "id": "3",
    "name": "ViralCommerce",
    "tagline": "The Ultimate TikTok Shop Scaling & Creative Kit",
    "description": "20 viral video scripts, product listing templates, and TikTok Shop optimization guides. Proven formulas for e-commerce success.",
    "price": 39,
    "originalPrice": 69,
    "category": "Templates",
    "badge": "Trending",
    "image": "/products/viralcommerce.jpg",
    "fileTypes": ["PDF", "Video Scripts"]
  },
  {
    "id": "4",
    "name": "GPT Forge",
    "tagline": "25+ High-Utility Custom GPT Blueprints for Business",
    "description": "Ready-to-deploy custom GPT configurations for sales, support, content creation, and automation. Includes prompt engineering guides.",
    "price": 67,
    "originalPrice": 127,
    "category": "AI Tools",
    "badge": "New",
    "image": "/products/gpt-forge-neon.jpg",
    "fileTypes": ["JSON", "Markdown"]
  },
  {
    "id": "5",
    "name": "Authority Engine",
    "tagline": "The 365-Day LinkedIn Content Strategy & Matrix",
    "description": "50 proven post templates, content calendar, engagement scripts, and growth frameworks. Build your personal brand systematically.",
    "price": 57,
    "originalPrice": 97,
    "category": "Templates",
    "badge": "Popular",
    "image": "/products/authority-engine.jpg",
    "fileTypes": ["PDF", "Notion"]
  },
  {
    "id": "6",
    "name": "Pixel-Perfect SaaS",
    "tagline": "Premium Framer Landing Pages for High-Converting Sites",
    "description": "Professional Framer templates with responsive design, animations, and conversion optimization. Perfect for SaaS launches.",
    "price": 89,
    "originalPrice": 149,
    "category": "Templates",
    "badge": "Premium",
    "image": "/products/pixel-perfect-saas.png",
    "fileTypes": ["Framer", "JSON"]
  },
  {
    "id": "7",
    "name": "Profit Tracker",
    "tagline": "Notion Finance Dashboard Pro",
    "description": "Complete financial tracking system for digital creators. Revenue tracking, expense management, profit analytics, and tax preparation.",
    "price": 47,
    "category": "Templates",
    "badge": "Essential",
    "image": "/products/profit-tracker.png",
    "fileTypes": ["Notion", "JSON"]
  },
  {
    "id": "8",
    "name": "Inbox Revenue",
    "tagline": "The Email Automation Starter Pack",
    "description": "50+ proven email templates for welcome sequences, sales funnels, and customer retention. Copy-paste ready for any platform.",
    "price": 37,
    "originalPrice": 67,
    "category": "Templates",
    "badge": "Proven",
    "image": "/products/inbox-revenue.jpg",
    "fileTypes": ["PDF", "Markdown"]
  },
  {
    "id": "9",
    "name": "SynthIdentity",
    "tagline": "AI Avatar Generator System",
    "description": "Complete Midjourney prompt library for professional AI-generated headshots and avatars. Business, creative, and casual styles included.",
    "price": 29,
    "category": "AI Tools",
    "badge": "Hot",
    "image": "/products/synthidentity.png",
    "fileTypes": ["Prompts", "PDF"]
  },
  {
    "id": "10",
    "name": "The Digital Asset Vault",
    "tagline": "Complete Digital Product Resale Bundle",
    "description": "25 premium PLR products with resell rights. Templates, courses, and tools ready to rebrand and sell as your own.",
    "price": 97,
    "originalPrice": 197,
    "category": "Business",
    "badge": "Limited",
    "image": "/products/digital-asset-vault.png",
    "fileTypes": ["Multiple formats"]
  }
]

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Omit<Product, 'id'>>(defaultProduct)
  const [isAdding, setIsAdding] = useState(false)
  const [activeTab, setActiveTab] = useState<'products' | 'theme'>('products')
  const [saved, setSaved] = useState(false)
  const [theme, setTheme] = useState({
    accentColor: '#C4A77D',
    backgroundColor: '#0A0A0A',
    surfaceColor: '#16161A'
  })

  useEffect(() => {
    const stored = localStorage.getItem('axm-products')
    if (stored) {
      setProducts(JSON.parse(stored))
    } else {
      setProducts(initialProducts)
    }
    
    const storedTheme = localStorage.getItem('axm-theme')
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme))
    }
  }, [])

  const handleSave = () => {
    if (editingId) {
      const updated = products.map(p => p.id === editingId ? { ...editForm, id: editingId } : p)
      setProducts(updated)
      localStorage.setItem('axm-products', JSON.stringify(updated))
      setEditingId(null)
    } else if (isAdding) {
      const newProduct = { ...editForm, id: Date.now().toString() }
      const updated = [...products, newProduct]
      setProducts(updated)
      localStorage.setItem('axm-products', JSON.stringify(updated))
      setIsAdding(false)
    }
    setEditForm(defaultProduct)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleDelete = (id: string) => {
    if (confirm('Delete this product?')) {
      const updated = products.filter(p => p.id !== id)
      setProducts(updated)
      localStorage.setItem('axm-products', JSON.stringify(updated))
    }
  }

  const handleSaveTheme = () => {
    localStorage.setItem('axm-theme', JSON.stringify(theme))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleExport = () => {
    const data = JSON.stringify(products, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'products.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const startEdit = (product: Product) => {
    setEditingId(product.id)
    setEditForm({
      name: product.name,
      tagline: product.tagline,
      description: product.description,
      price: product.price,
      originalPrice: product.originalPrice,
      category: product.category,
      badge: product.badge,
      image: product.image,
      fileTypes: product.fileTypes
    })
    setIsAdding(false)
  }

  const startAdd = () => {
    setIsAdding(true)
    setEditingId(null)
    setEditForm(defaultProduct)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setIsAdding(false)
    setEditForm(defaultProduct)
  }

  const resetProducts = () => {
    if (confirm('Reset to default products? All changes will be lost.')) {
      setProducts(initialProducts)
      localStorage.setItem('axm-products', JSON.stringify(initialProducts))
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#C4A77D]">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Manage your digital store</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-sm text-gray-400 hover:text-[#C4A77D] transition-colors">
              ← Back to Store
            </a>
          </div>
        </div>

        {/* Saved Notification */}
        {saved && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse z-50">
            ✓ Saved successfully!
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'products' 
                ? 'bg-[#C4A77D] text-black' 
                : 'bg-[#16161A] text-gray-400 hover:bg-[#1E1E22]'
            }`}
          >
            <Plus size={16} className="inline mr-2" />
            Products ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('theme')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'theme' 
                ? 'bg-[#C4A77D] text-black' 
                : 'bg-[#16161A] text-gray-400 hover:bg-[#1E1E22]'
            }`}
          >
            <Palette size={16} className="inline mr-2" />
            Theme
          </button>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-4">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={startAdd}
                disabled={isAdding || editingId !== null}
                className="px-4 py-2 bg-[#C4A77D] text-black rounded-lg font-medium hover:bg-[#D4B78D] transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <Plus size={18} />
                Add Product
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-[#16161A] text-gray-300 rounded-lg font-medium hover:bg-[#1E1E22] transition-colors flex items-center gap-2 border border-white/10"
              >
                <Download size={18} />
                Export JSON
              </button>
              <button
                onClick={resetProducts}
                className="px-4 py-2 bg-[#16161A] text-gray-300 rounded-lg font-medium hover:bg-[#1E1E22] transition-colors border border-white/10"
              >
                Reset to Defaults
              </button>
            </div>

            {/* Add/Edit Form */}
            {(isAdding || editingId) && (
              <div className="bg-[#16161A] rounded-xl p-4 md:p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">
                    {editingId ? 'Edit Product' : 'New Product'}
                  </h3>
                  <button onClick={cancelEdit} className="text-gray-400 hover:text-white">
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Product Name</label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none"
                      placeholder="e.g., Agentic Flow"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Price ($)</label>
                    <input
                      type="number"
                      value={editForm.price}
                      onChange={e => setEditForm({ ...editForm, price: Number(e.target.value) })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none"
                      placeholder="97"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Original Price ($)</label>
                    <input
                      type="number"
                      value={editForm.originalPrice || ''}
                      onChange={e => setEditForm({ ...editForm, originalPrice: e.target.value ? Number(e.target.value) : undefined })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none"
                      placeholder="197 (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Category</label>
                    <select
                      value={editForm.category}
                      onChange={e => setEditForm({ ...editForm, category: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none"
                    >
                      <option>Templates</option>
                      <option>AI Tools</option>
                      <option>Business</option>
                      <option>Marketing</option>
                      <option>Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Badge</label>
                    <input
                      type="text"
                      value={editForm.badge || ''}
                      onChange={e => setEditForm({ ...editForm, badge: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none"
                      placeholder="e.g., Bestseller, New"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Image Path</label>
                    <input
                      type="text"
                      value={editForm.image}
                      onChange={e => setEditForm({ ...editForm, image: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none"
                      placeholder="/products/your-image.jpg"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-1">Tagline</label>
                    <input
                      type="text"
                      value={editForm.tagline}
                      onChange={e => setEditForm({ ...editForm, tagline: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none"
                      placeholder="Short product tagline"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-1">Description</label>
                    <textarea
                      value={editForm.description}
                      onChange={e => setEditForm({ ...editForm, description: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none min-h-[100px]"
                      placeholder="Full product description..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-1">File Types (comma separated)</label>
                    <input
                      type="text"
                      value={editForm.fileTypes.join(', ')}
                      onChange={e => setEditForm({ ...editForm, fileTypes: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none"
                      placeholder="PDF, JSON, Markdown"
                    />
                  </div>

                  {/* Image Preview */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-400 mb-2">Image Preview</label>
                    <div className="w-32 h-32 rounded-lg overflow-hidden bg-[#0A0A0A] border border-white/10">
                      <img 
                        src={editForm.image} 
                        alt="Preview" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/products/placeholder.jpg'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-[#C4A77D] text-black py-3 rounded-lg font-medium hover:bg-[#D4B78D] transition-colors flex items-center justify-center gap-2"
                  >
                    <Save size={18} />
                    {editingId ? 'Update Product' : 'Add Product'}
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="px-6 py-3 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Product List */}
            <div className="space-y-3">
              {products.map(product => (
                <div
                  key={product.id}
                  className="bg-[#16161A] rounded-xl p-4 border border-white/5 flex items-center gap-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-contain bg-[#0A0A0A]"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white truncate">{product.name}</h3>
                    <p className="text-sm text-gray-400">{product.category} • ${product.price}</p>
                    {product.badge && (
                      <span className="inline-block mt-1 text-xs bg-[#C4A77D]/20 text-[#C4A77D] px-2 py-0.5 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(product)}
                      className="p-2 text-gray-400 hover:text-[#C4A77D] transition-colors"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {products.length === 0 && !isAdding && (
              <div className="text-center py-12 text-gray-500">
                <ImageIcon size={48} className="mx-auto mb-4 opacity-30" />
                <p>No products yet. Add your first product!</p>
              </div>
            )}
          </div>
        )}

        {/* Theme Tab */}
        {activeTab === 'theme' && (
          <div className="bg-[#16161A] rounded-xl p-4 md:p-6 border border-white/10">
            <h3 className="text-lg font-medium mb-4">Theme Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Accent Color (Champagne Gold)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={theme.accentColor}
                    onChange={e => setTheme({ ...theme, accentColor: e.target.value })}
                    className="w-12 h-12 rounded-lg border border-white/10 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={theme.accentColor}
                    onChange={e => setTheme({ ...theme, accentColor: e.target.value })}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Background Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={theme.backgroundColor}
                    onChange={e => setTheme({ ...theme, backgroundColor: e.target.value })}
                    className="w-12 h-12 rounded-lg border border-white/10 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={theme.backgroundColor}
                    onChange={e => setTheme({ ...theme, backgroundColor: e.target.value })}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Surface Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={theme.surfaceColor}
                    onChange={e => setTheme({ ...theme, surfaceColor: e.target.value })}
                    className="w-12 h-12 rounded-lg border border-white/10 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={theme.surfaceColor}
                    onChange={e => setTheme({ ...theme, surfaceColor: e.target.value })}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#C4A77D] outline-none font-mono"
                  />
                </div>
              </div>

              {/* Preview */}
              <div className="mt-6">
                <label className="block text-sm text-gray-400 mb-2">Preview</label>
                <div 
                  className="rounded-xl p-4 border"
                  style={{ 
                    backgroundColor: theme.surfaceColor,
                    borderColor: 'rgba(255,255,255,0.1)'
                  }}
                >
                  <div 
                    className="w-full h-4 rounded mb-2"
                    style={{ backgroundColor: theme.accentColor }}
                  />
                  <p style={{ color: theme.accentColor }} className="font-medium">Accent Color Text</p>
                  <p className="text-gray-400 text-sm">Background: {theme.backgroundColor}</p>
                </div>
              </div>

              <button 
                onClick={handleSaveTheme}
                className="w-full bg-[#C4A77D] text-black py-3 rounded-lg font-medium hover:bg-[#D4B78D] transition-colors flex items-center justify-center gap-2 mt-6"
              >
                <Save size={18} />
                Save Theme
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}