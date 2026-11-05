import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'

function Testimonials() {
  const [index, setIndex] = useState(0)
  const card = useRef(null)
  const current = testimonials[index]

  useGSAP(
    () => {
      gsap.fromTo(
        '.quote-anim',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      )
    },
    { scope: card, dependencies: [index] }
  )

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="bg-white px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="reveal text-sm font-medium uppercase tracking-widest">
          Testimonials
        </p>
        <h2 className="reveal mt-3 font-heading text-4xl font-bold leading-tight md:text-6xl">
          Kind words from our clients
        </h2>

        <div ref={card} aria-live="polite" className="mt-12 min-h-80 md:mt-16">
          <div className="quote-anim flex justify-center gap-1 text-rose">
            {Array.from({ length: current.rating }, (_, i) => (
              <Star key={i} size={20} className="fill-current" />
            ))}
          </div>

          <blockquote className="quote-anim mt-6 font-heading text-2xl leading-snug md:text-4xl">
            “{current.quote}”
          </blockquote>

          <div className="quote-anim mt-8 flex items-center justify-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose font-bold text-white">
              {current.name[0]}
            </span>
            <div className="text-left">
              <p className="font-bold">{current.name}</p>
              <p className="text-sm font-medium">{current.service}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink transition hover:bg-ink hover:text-white active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-rose' : 'w-2.5 bg-ink/30'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink transition hover:bg-ink hover:text-white active:scale-95"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials