import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12">
      <a href="#top" className="relative z-50 font-heading text-2xl tracking-wide">
        Glow Studio
      </a>

      <nav className="hidden gap-10 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm uppercase tracking-widest transition-opacity hover:opacity-60"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="hidden rounded-full bg-rose px-5 py-2 text-sm text-white md:inline-block"
      >
        Book now
      </a>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="relative z-50 -mr-2 p-2 md:hidden"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-cream">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-heading text-3xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full bg-rose px-8 py-3 text-white"
          >
            Book now
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar