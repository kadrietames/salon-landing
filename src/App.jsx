import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useLenis from './hooks/useLenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const container = useRef(null)

  useLenis()

  useGSAP(
    () => {
      gsap.from('.hero-text', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
      })

      gsap.utils.toArray('.reveal', container.current).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        })
      })
    },
    { scope: container }
  )

  return (
    <div ref={container} id="top">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App