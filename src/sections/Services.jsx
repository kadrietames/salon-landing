import { useState } from 'react'
import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import ServiceModal from '../components/ServiceModal'

function Services() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="services" className="bg-white px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="reveal text-sm font-medium uppercase tracking-widest">
            Services
          </p>
          <h2 className="reveal mt-3 font-heading text-4xl font-bold leading-tight md:text-6xl">
            Treatments made for you
          </h2>
          <p className="reveal mx-auto mt-4 max-w-md font-medium">
            Tap a service to see what's included.
          </p>
        </div>

       <ul className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </ul>
      </div>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

export default Services