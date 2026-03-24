'use client'

import { useEffect, useState } from 'react'

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setSessionId(params.get('session_id') || '')
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ maxWidth: '500px', textAlign: 'center' }}>
        <div style={{ width: '5rem', height: '5rem', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'rgba(196,167,125,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '2rem' }}>✓</span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Payment Successful!</h1>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Thank you for your purchase. Your files are ready for download.</p>
        
        <div style={{ background: '#16161A', borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <p style={{ color: '#888', marginBottom: '0.5rem', fontSize: '0.875rem' }}>What happens next?</p>
          <ol style={{ textAlign: 'left', color: '#ccc', fontSize: '0.875rem', lineHeight: '1.75' }}>
            <li>Check your email for download links</li>
            <li>Download your files from the confirmation email</li>
            <li>Save the files to your device</li>
          </ol>
        </div>

        {sessionId && (
          <p style={{ color: '#666', fontSize: '0.75rem', marginBottom: '1.5rem' }}>
            Order ID: {sessionId.slice(0, 30)}...
          </p>
        )}

        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          <a href="/" style={{ background: '#C4A77D', color: 'black', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '500', textDecoration: 'none', display: 'block' }}>
            Back to Store
          </a>
        </div>
      </div>
    </div>
  )
}