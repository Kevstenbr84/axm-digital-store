'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Download, ArrowLeft } from 'lucide-react'

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setSessionId(params.get('session_id') || '')
    setLoading(false)
  }, [])

  const products = [
    { name: 'Agentic Flow', file: 'ai-agent-prompts.zip', size: '2.4 MB' },
    { name: 'The Intelligent Workspace', file: 'notion-ai-system.zip', size: '1.8 MB' },
    { name: 'ViralCommerce', file: 'tiktok-shop-templates.zip', size: '3.2 MB' },
    { name: 'GPT Forge', file: 'custom-gpts-pack.zip', size: '1.5 MB' },
    { name: 'Authority Engine', file: 'linkedin-content-system.zip', size: '2.1 MB' },
    { name: 'Pixel-Perfect SaaS', file: 'framer-templates.zip', size: '4.7 MB' },
    { name: 'Profit Tracker', file: 'notion-finance.zip', size: '1.2 MB' },
    { name: 'Inbox Revenue', file: 'email-automation.zip', size: '890 KB' },
    { name: 'SynthIdentity', file: 'ai-avatar-system.zip', size: '2.8 MB' },
    { name: 'The Digital Asset Vault', file: 'resale-bundle.zip', size: '15.3 MB' },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C4A77D]/20 flex items-center justify-center">
            <CheckCircle size={48} className="text-[#C4A77D]" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
          <p className="text-gray-400">Your purchase is complete. Download your files below.</p>
        </div>

        {/* Download Section */}
        <div className="bg-[#16161A] rounded-xl p-6 mb-6 border border-white/10">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Download size={20} className="text-[#C4A77D]" />
            Your Downloads
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Click each product to download instantly. Check your email for a backup copy.
          </p>
          
          <div className="space-y-2">
            {products.map((product, i) => (
              <a
                key={i}
                href={`/downloads/${product.file}`}
                download
                className="flex items-center justify-between p-3 bg-[#0A0A0A] rounded-lg hover:bg-[#1E1E22] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C4A77D]/20 flex items-center justify-center">
                    <Download size={18} className="text-[#C4A77D]" />
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-[#C4A77D] transition-colors">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.size}</p>
                  </div>
                </div>
                <span className="text-[#C4A77D] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Download →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Order Info */}
        {sessionId && (
          <div className="bg-[#16161A] rounded-xl p-4 mb-6 border border-white/10">
            <p className="text-xs text-gray-500">
              <span className="font-medium text-gray-400">Order ID:</span> {sessionId.slice(0, 36)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              <span className="font-medium text-gray-400">Amount:</span> See your Stripe receipt
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/"
            className="flex-1 bg-[#16161A] text-white py-3 rounded-lg font-medium hover:bg-[#1E1E22] transition-colors border border-white/10 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Store
          </a>
          <a
            href="/admin"
            className="flex-1 bg-[#C4A77D] text-black py-3 rounded-lg font-medium hover:bg-[#D4B78D] transition-colors flex items-center justify-center gap-2"
          >
            Manage Products
          </a>
        </div>

        {/* Support */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Need help? Email: <a href="mailto:support@axmstore.com" className="text-[#C4A77D]">support@axmstore.com</a>
        </p>
      </div>
    </div>
  )
}