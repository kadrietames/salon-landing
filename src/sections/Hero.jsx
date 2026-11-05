import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { business } from '../data/business'
import heroMobile from '../assets/img2.png'
import heroDesktop from '../assets/img1.png'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const section = useRef(null)

  useGSAP(
    () => {
      gsap.to('.hero-parallax', {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: section }
  )

  const message = encodeURIComponent(
    "Hello, I'd like to book an appointment"
  )

  return (
    <section ref={section} className="relative min-h-dvh overflow-hidden">
      <div className="hero-parallax absolute inset-x-0 -top-[20%] h-[120%]">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="Smiling woman with long wavy hair seated in a pink armchair in a salon"
            className="absolute inset-0 h-full w-full object-cover object-[70%_bottom] md:object-[65%_center]"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-cream/60 via-transparent to-transparent md:hidden" />
      <div className="absolute inset-0 hidden bg-linear-to-r from-cream/80 via-cream/20 to-transparent md:block" />

      <div className="relative z-10 flex min-h-dvh flex-col px-6 pt-24 md:max-w-2xl md:justify-center md:px-12 md:pt-0">
        <h1 className="hero-text font-heading text-4xl font-bold leading-tight text-ink md:text-7xl">
          Your hair,
          <br />
          beautifully done.
        </h1>
        <p className="hero-text mt-3 max-w-xs text-base font-medium text-ink md:mt-4 md:max-w-md md:text-lg">
          Hair, nails and beauty in Lagos.
        </p>
        <div className="hero-text mt-6 flex flex-wrap gap-3 md:mt-8">
          <a
            href={`https://wa.me/${business.whatsapp}?text=${message}`}
            className="rounded-full bg-rose px-6 py-3 text-sm font-medium text-white md:px-8 md:py-4 md:text-base"
          >
            Book on WhatsApp
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-ink px-6 py-3 text-sm font-medium text-white md:px-8 md:py-4 md:text-base"
          >
            View services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero