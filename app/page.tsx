import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import BentoGrid from '@/components/BentoGrid'
import JournalSection from '@/components/JournalSection'
import Footer from '@/components/Footer'
import { products, articles } from '@/data/products'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductGrid 
          products={products}
          title="Featured Products"
          subtitle="Handpicked selection of our best-selling digital assets"
        />
        <BentoGrid />
        <ProductGrid 
          products={products.slice(4)}
          title="New Arrivals"
          subtitle="Fresh drops and latest releases"
        />
        <JournalSection articles={articles} />
      </main>
      <Footer />
    </div>
  )
}
