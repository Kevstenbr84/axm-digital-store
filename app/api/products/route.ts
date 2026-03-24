import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const products = await request.json()
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    
    // Ensure data directory exists
    const dataDir = path.dirname(filePath)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2))
    
    return NextResponse.json({ success: true, count: products.length })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save products' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'products.json')
    
    if (!fs.existsSync(filePath)) {
      // Return empty array if file doesn't exist
      return NextResponse.json([])
    }
    
    const data = fs.readFileSync(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 })
  }
}