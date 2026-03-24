import { ArrowRight, Mail, Github, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-light tracking-wider text-primary mb-6">AXM.</div>
            <p className="text-secondary/70 text-sm leading-relaxed mb-6">
              Premium digital products for creators who demand excellence. Curated with intention.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 transition-all"><Twitter size={16} strokeWidth={1.5} /></a>
              <a href="#" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 transition-all"><Github size={16} strokeWidth={1.5} /></a>
              <a href="#" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 transition-all"><Linkedin size={16} strokeWidth={1.5} /></a>
              <a href="#" className="w-10 h-10 border border-white/[0.08] rounded-full flex items-center justify-center text-secondary hover:text-accent hover:border-accent/30 transition-all"><Instagram size={16} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors text-sm">Templates</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors text-sm">Courses</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors text-sm">Design Systems</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors text-sm">Icons</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors text-sm">Journal</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-accent transition-colors text-sm">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary font-medium mb-6">Stay Updated</h3>
            <p className="text-secondary/70 text-sm mb-6">Get notified about new releases and exclusive offers.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full bg-background border border-white/[0.08] rounded-xl px-4 py-3.5 text-primary placeholder:text-secondary/40 focus:outline-none focus:border-accent/30 transition-colors" 
              />
              <button type="submit" className="w-full bg-accent text-background py-3.5 rounded-xl font-medium hover:bg-accent-hover transition-colors flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary/50 text-sm">© 2024 AXM. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-secondary/50 hover:text-secondary transition-colors text-sm">Privacy</a>
            <a href="#" className="text-secondary/50 hover:text-secondary transition-colors text-sm">Terms</a>
            <a href="#" className="text-secondary/50 hover:text-secondary transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
