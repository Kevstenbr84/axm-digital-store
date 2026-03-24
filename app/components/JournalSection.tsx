import { ArrowRight, Calendar, Clock } from 'lucide-react'
import type { Article } from '@/data/products'

interface JournalSectionProps {
  articles: Article[]
}

export default function JournalSection({ articles }: JournalSectionProps) {
  return (
    <section id="journal" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-accent text-sm font-mono tracking-wider mb-4">INSIGHTS</p>
            <h2 className="text-4xl md:text-5xl font-light text-primary">Journal</h2>
          </div>
          <button className="mt-6 md:mt-0 flex items-center gap-2 text-secondary hover:text-accent transition-colors">
            <span className="text-sm">View all articles</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="aspect-[16/10] relative overflow-hidden rounded-xl mb-6 bg-surface">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-secondary/60 font-mono">
                  <span className="text-accent">{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-secondary/30"></span>
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-medium text-primary group-hover:text-accent transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="text-secondary/70 line-clamp-2">{article.excerpt}</p>

                <button className="flex items-center gap-2 text-accent text-sm hover:text-accent-hover transition-colors">
                  Read article
                  <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
