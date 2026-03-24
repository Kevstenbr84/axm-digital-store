import { ArrowRight, Star, Zap } from 'lucide-react'

const items = [
  {
    id: '1',
    title: 'UI Components Kit',
    description: 'Premium React components with refined interactions',
    price: '$89',
    span: 'col-span-2',
    featured: true,
    color: 'bg-accent/10 text-accent border-accent/20'
  },
  {
    id: '2',
    title: 'Icon Library',
    description: '500+ handcrafted icons',
    price: '$39',
    color: 'bg-surface-elevated'
  },
  {
    id: '3',
    title: 'Design System',
    description: 'Complete tokens and component architecture',
    price: '$149',
    span: 'row-span-2',
    featured: true,
    color: 'bg-accent/10 text-accent border-accent/20'
  },
  {
    id: '4',
    title: 'Template Bundle',
    description: '25+ premium templates for every use case',
    price: '$129',
    span: 'col-span-2',
    color: 'bg-surface-elevated'
  },
  {
    id: '5',
    title: 'Motion Library',
    description: 'Production-ready animations',
    price: '$29',
    color: 'bg-surface-elevated'
  },
]

export default function BentoGrid() {
  return (
    <section id="collections" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-accent text-sm font-mono tracking-wider mb-4">CURATED COLLECTIONS</p>
          <h2 className="text-4xl md:text-5xl font-light text-primary">Everything you need</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {items.map((item) => (
            <div
              key={item.id}
              className={`
                relative border border-white/[0.08] rounded-2xl overflow-hidden
                hover:border-accent/30 transition-all duration-500 group cursor-pointer
                ${item.color}
                ${item.span || ''}
              `}
            >
              <div className="h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-surface/50 rounded-xl">
                      <Zap size={20} className="text-accent" strokeWidth={1.5} />
                    </div>
                    {item.featured && (
                      <span className="text-accent text-xs font-mono tracking-wider">FEATURED</span>
                    )}
                  </div>

                  <h3 className="text-primary font-medium text-xl mb-2">{item.title}</h3>
                  <p className="text-secondary/70 text-sm">{item.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium">{item.price}</span>
                  <button className="flex items-center gap-2 text-accent text-sm hover:text-accent-hover transition-colors">
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
