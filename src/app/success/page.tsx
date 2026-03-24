'use client'

import { useSearchParams } from 'next/navigation'

const downloads = [
  { name: 'Agentic Flow', file: '/downloads/ai-agent-prompts.zip', size: '4 KB' },
  { name: 'The Intelligent Workspace', file: '/downloads/notion-ai-system.zip', size: '2.7 KB' },
  { name: 'ViralCommerce', file: '/downloads/tiktok-shop-templates.zip', size: '4.4 KB' },
  { name: 'GPT Forge', file: '/downloads/custom-gpts-pack.zip', size: '2.5 KB' },
  { name: 'Authority Engine', file: '/downloads/linkedin-content-system.zip', size: '2.3 KB' },
  { name: 'Pixel-Perfect SaaS', file: '/downloads/framer-templates.zip', size: '1.7 KB' },
  { name: 'Profit Tracker', file: '/downloads/notion-finance.zip', size: '2.3 KB' },
  { name: 'Inbox Revenue', file: '/downloads/email-automation.zip', size: '860 B' },
  { name: 'SynthIdentity', file: '/downloads/ai-avatar-system.zip', size: '1.9 KB' },
  { name: 'The Digital Asset Vault', file: '/downloads/resale-bundle.zip', size: '1.2 KB' },
]

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', color: 'white', padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ width: '5rem', height: '5rem', margin: '0 auto 1rem', borderRadius: '50%', background: 'rgba(196,167,125,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2rem', color: '#C4A77D' }}>✓</span>
          </div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Payment Successful!</h1>
          <p style={{ color: '#888' }}>Thank you for your purchase. Your files are ready for download.</p>
        </div>

        <div style={{ background: '#16161A', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>📥 Download Your Files</h2>
          <p style={{ color: '#888', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            Click each product to download. Check your email for a backup copy.
          </p>
          
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {downloads.map((item, i) => (
              <a
                key={i}
                href={item.file}
                download
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  background: '#0A0A0A',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'background 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', background: 'rgba(196,167,125,0.2)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#C4A77D' }}>⬇</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: '500' }}>{item.name}</div>
                    <div style={{ color: '#666', fontSize: '0.75rem' }}>{item.size}</div>
                  </div>
                </div>
                <span style={{ color: '#C4A77D', fontSize: '0.875rem' }}>Download →</span>
              </a>
            ))}
          </div>
        </div>

        {sessionId && (
          <div style={{ background: '#16161A', borderRadius: '0.5rem', padding: '1rem', marginBottom: '2rem', fontSize: '0.875rem', color: '#666' }}>
            <strong style={{ color: '#888' }}>Order ID:</strong> {sessionId.slice(0, 36)}
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/" style={{ flex: 1, background: '#16161A', color: 'white', padding: '1rem', borderRadius: '0.5rem', textDecoration: 'none', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            ← Back to Store
          </a>
        </div>

        <p style={{ textAlign: 'center', color: '#666', marginTop: '2rem', fontSize: '0.875rem' }}>
          Need help? Email: <a href="mailto:support@digivaultcloud.com" style={{ color: '#C4A77D' }}>support@digivaultcloud.com</a>
        </p>
      </div>
    </div>
  )
}