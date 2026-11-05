import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Check, X } from 'lucide-react'

function ServiceModal({ service, onClose }) {
  const overlay = useRef(null)
  const panel = useRef(null)

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(overlay.current, { opacity: 0, duration: 0.3 })
      gsap.from(panel.current, {
        y: 80,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.out',
      })
      gsap.from('.modal-item', {
        opacity: 0,
        y: 16,
        duration: 0.4,
        stagger: 0.07,
        delay: 0.2,
      })
    },
    { scope: overlay }
  )

  const handleClose = contextSafe(() => {
    gsap.to(panel.current, { y: 80, opacity: 0, duration: 0.25, ease: 'power2.in' })
    gsap.to(overlay.current, { opacity: 0, duration: 0.25, onComplete: onClose })
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const message = encodeURIComponent(`Hello, I'd like to book ${service.name}`)

  return (
    <div
      ref={overlay}
      data-lenis-prevent
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 md:items-center md:p-6"
    >
      <div
        ref={panel}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-title"
        className="relative max-h-[90dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 md:rounded-3xl md:p-8"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2"
        >
          <X size={24} />
        </button>

        <p className="modal-item text-sm font-medium uppercase tracking-widest">
          {service.duration}
        </p>
        <h3
          id="service-title"
          className="modal-item mt-2 pr-10 font-heading text-3xl font-bold"
        >
          {service.name}
        </h3>
        <p className="modal-item mt-4 font-medium">{service.description}</p>

        <ul className="mt-6 space-y-3">
          {service.includes.map((item) => (
            <li key={item} className="modal-item flex gap-3 font-medium">
              <Check size={20} className="mt-0.5 shrink-0 text-rose" />
              {item}
            </li>
          ))}
        </ul>

        <div className="modal-item mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-2xl font-bold">{service.price}</p>
          <a
            href={`https://wa.me/234XXXXXXXXXX?text=${message}`}
            className="rounded-full bg-rose px-6 py-3 font-medium text-white"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal