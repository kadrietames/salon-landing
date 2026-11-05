import { ArrowUp } from 'lucide-react'
import { business } from '../data/business'

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <a href="#top" className="font-heading text-2xl font-bold">
            {business.name}
          </a>
          <p className="mt-1 text-sm font-medium">{business.address}</p>
        </div>

        <a
          href="#top"
          className="flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2 text-sm font-medium transition hover:bg-ink hover:text-white active:scale-95"
        >
          <ArrowUp size={16} />
          Back to top
        </a>

        <p className="text-sm font-medium">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer