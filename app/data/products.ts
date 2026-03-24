export interface Product {
  id: string
  name: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  image: string
  category: string
  badge?: string
  fileTypes: string[]
}

// ONLY REAL PRODUCTS - All 10 from Product Empire
export const products: Product[] = [
  {
    id: "1",
    name: "Agentic Flow",
    description: "The Master Library of High-Autonomy AI Prompts. 100+ battle-tested prompts organized by content creation, business automation, marketing, coding, and productivity. Each prompt tested and optimized for best results.",
    shortDescription: "The Master Library of High-Autonomy AI Prompts",
    price: 67,
    originalPrice: 97,
    image: "/products/agentic-flow.png",
    category: "AI Tools",
    badge: "Bestseller",
    fileTypes: ["JSON", "PDF"]
  },
  {
    id: "2",
    name: "The Intelligent Workspace",
    description: "A Complete Notion AI OS for Productivity. Features 5 integrated templates: AI Content Calendar, AI Task Manager, AI Meeting Notes, AI Goal Tracker, and AI Research Database with automation formulas.",
    shortDescription: "A Complete Notion AI OS for Productivity",
    price: 79,
    image: "/products/intelligent-workspace.jpg",
    category: "Templates",
    badge: "v2.0",
    fileTypes: ["Notion"]
  },
  {
    id: "3",
    name: "ViralCommerce",
    description: "The Ultimate TikTok Shop Scaling & Creative Kit. 20 high-converting video scripts, product listing templates, thumbnail specs, caption formulas, and influencer outreach templates for TikTok Shop sellers.",
    shortDescription: "The Ultimate TikTok Shop Scaling & Creative Kit",
    price: 39,
    originalPrice: 69,
    image: "/products/viralcommerce.jpg",
    category: "Templates",
    badge: "Trending",
    fileTypes: ["PDF", "Markdown"]
  },
  {
    id: "4",
    name: "GPT Forge",
    description: "25+ High-Utility Custom GPT Blueprints for Business. Ready-to-deploy GPTs including Business Coach, Content Creator, Code Reviewer, Copywriter, Data Analyst, Email Assistant, Research Assistant, Social Media, SEO Optimizer, and Startup Advisor.",
    shortDescription: "25+ High-Utility Custom GPT Blueprints for Business",
    price: 67,
    originalPrice: 127,
    image: "/products/gpt-forge-neon.jpg",
    category: "AI Tools",
    badge: "New",
    fileTypes: ["JSON", "PDF"]
  },
  {
    id: "5",
    name: "Authority Engine",
    description: "The 365-Day LinkedIn Content Strategy & Matrix. 50 viral post templates, 25 hook formulas, carousel templates, engagement scripts, and a complete content calendar system to dominate LinkedIn.",
    shortDescription: "The 365-Day LinkedIn Content Strategy & Matrix",
    price: 57,
    originalPrice: 97,
    image: "/products/authority-engine.jpg",
    category: "Templates",
    badge: "Popular",
    fileTypes: ["PDF", "Notion"]
  },
  {
    id: "6",
    name: "Pixel-Perfect SaaS",
    description: "Premium Framer Landing Pages for High Conversion. Includes SaaS Landing Page, Agency Portfolio, Personal Brand Site, E-commerce Starter, and Course Platform. Fully responsive with CMS integration and custom animations.",
    shortDescription: "Premium Framer Landing Pages for High Conversion",
    price: 89,
    originalPrice: 149,
    image: "/products/pixel-perfect-saas.png",
    category: "Templates",
    badge: "Premium",
    fileTypes: ["Framer"]
  },
  {
    id: "7",
    name: "Profit Tracker",
    description: "The Comprehensive Notion Wealth & Finance Manager. Complete financial tracking with Income Tracker, Expense Manager, Tax Estimator, Goal Tracker, and Monthly Reports. Perfect for solopreneurs and creators.",
    shortDescription: "The Comprehensive Notion Wealth & Finance Manager",
    price: 39,
    originalPrice: 79,
    image: "/products/profit-tracker.png",
    category: "Templates",
    badge: "Essential",
    fileTypes: ["Notion"]
  },
  {
    id: "8",
    name: "Inbox Revenue",
    description: "High-Conversion Email Marketing & Sequence Vault. 50+ email templates including Welcome Series, Sales Sequence, Abandoned Cart, Nurture Campaigns, and Re-engagement flows. Copy-paste ready for any platform.",
    shortDescription: "High-Conversion Email Marketing & Sequence Vault",
    price: 49,
    originalPrice: 99,
    image: "/products/inbox-revenue.jpg",
    category: "Templates",
    badge: "Proven",
    fileTypes: ["PDF", "Google Docs"]
  },
  {
    id: "9",
    name: "SynthIdentity",
    description: "The Professional AI Avatar & Brand Persona Creator. 100+ Midjourney prompts for professional headshots including business professional, creative professional, executive, and casual styles plus lighting guide and pose reference.",
    shortDescription: "The Professional AI Avatar & Brand Persona Creator",
    price: 29,
    originalPrice: 69,
    image: "/products/synthidentity.png",
    category: "AI Tools",
    badge: "Hot",
    fileTypes: ["PDF"]
  },
  {
    id: "10",
    name: "The Digital Asset Vault",
    description: "Premium White-Label Resale Master Bundle. 25 premium digital products with full PLR rights. Includes templates, courses, planners, contracts, and marketing materials. Retail value $2,500+. Sell as your own.",
    shortDescription: "Premium White-Label Resale Master Bundle",
    price: 147,
    originalPrice: 297,
    image: "/products/digital-asset-vault.png",
    category: "Business",
    badge: "Limited",
    fileTypes: ["Multiple"]
  },
]

export const categories = [
  { name: "All", slug: "all" },
  { name: "AI Tools", slug: "ai-tools" },
  { name: "Templates", slug: "templates" },
  { name: "Business", slug: "business" },
]

export interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
}

export const articles = [
  {
    id: "1",
    title: "How to Launch Your First Digital Product",
    excerpt: "A step-by-step guide to launching and scaling your digital product business from scratch",
    category: "Business",
    date: "Mar 20, 2025",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    id: "2",
    title: "AI Tools That Actually Save Time",
    excerpt: "The AI tools and workflows that top creators use to 10x their productivity",
    category: "AI",
    date: "Mar 18, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
  },
  {
    id: "3",
    title: "Building a $10K/Month Notion Template Business",
    excerpt: "The exact strategy one creator used to build a six-figure Notion template empire",
    category: "Case Study",
    date: "Mar 15, 2025",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1611224923853-80b936f504eb?w=800&h=600&fit=crop"
  },
  {
    id: "4",
    title: "TikTok Shop: The New Gold Rush",
    excerpt: "Why creators are making $50K/month selling digital products on TikTok Shop",
    category: "Trends",
    date: "Mar 12, 2025",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1611606063065-2b5540bc082e?w=800&h=600&fit=crop"
  },
  {
    id: "5",
    title: "Custom GPTs: The Next Big Opportunity",
    excerpt: "How to create and monetize Custom GPTs in the new AI economy",
    category: "AI",
    date: "Mar 10, 2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop"
  },
  {
    id: "6",
    title: "Email Marketing in 2025: What Still Works",
    excerpt: "The email sequences and strategies driving 40%+ open rates in today's market",
    category: "Marketing",
    date: "Mar 8, 2025",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  }
]
