import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gallery } from '../data/gallery'

gsap.registerPlugin(ScrollTrigger)

function Gallery() {
  const strip = useRef(null)

  useGSAP(
    () => {
      const trigger = { trigger: strip.current, start: 'top 80%' }

      gsap.fromTo(
        '.gallery-frame',
        { clipPath: 'inset(0% 0% 100% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.15,
          scrollTrigger: trigger,
        }
      )

      gsap.from('.gallery-zoom', {
        scale: 1.3,
        duration: 1.6,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: trigger,
      })
    },
    { scope: strip }
  )

  return (
    <section id="gallery" className="bg-cream py-20 md:py-32">
      <div className="px-6 text-center md:px-12">
        <p className="reveal text-sm font-medium uppercase tracking-widest">
          Gallery
        </p>
        <h2 className="reveal mt-3 font-heading text-4xl font-bold leading-tight md:text-6xl">
          Our recent work
        </h2>
        <p className="reveal mx-auto mt-4 max-w-md font-medium">
          Swipe to see more.
        </p>
      </div>

      <ul
        ref={strip}
        className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mt-16 md:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {gallery.map((item) => (
          <li
            key={item.alt}
            className="w-[75vw] max-w-sm shrink-0 snap-center md:w-96"
          >
            <figure className="gallery-frame group overflow-hidden rounded-3xl">
              <div className="gallery-zoom">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Gallery