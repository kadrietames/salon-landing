import { useState } from 'react'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { business } from '../data/business'
import { services } from '../data/services'

const emptyForm = {
  name: '',
  service: services[0].name,
  date: '',
  notes: '',
}

const inputClass =
  'w-full rounded-xl border border-ink/30 bg-white px-4 py-3 text-base focus:border-ink focus:outline-none focus:ring-2 focus:ring-rose/40'

function Contact() {
  const [form, setForm] = useState(emptyForm)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const lines = [
      `Hello ${business.name}, my name is ${form.name}.`,
      `I'd like to book ${form.service}${form.date ? ` on ${form.date}` : ''}.`,
    ]
    if (form.notes) lines.push(`Note: ${form.notes}`)

    const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
      lines.join('\n')
    )}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section id="contact" className="bg-cream px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="reveal text-sm font-medium uppercase tracking-widest">
            Contact
          </p>
          <h2 className="reveal mt-3 font-heading text-4xl font-bold leading-tight md:text-6xl">
            Book your visit
          </h2>
          <p className="reveal mx-auto mt-4 max-w-md font-medium">
            Fill in the form and we will continue on WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-2 lg:items-start">
          <form
            onSubmit={handleSubmit}
            className="reveal rounded-3xl border border-ink/10 bg-white p-6 shadow-sm md:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block font-medium">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="service" className="mb-2 block font-medium">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClass}
              >
                {services.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="date" className="mb-2 block font-medium">
                Preferred date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="notes" className="mb-2 block font-medium">
                Anything we should know? (optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                value={form.notes}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-4 font-medium text-white transition active:scale-[0.98]"
            >
              <MessageCircle size={20} />
              Send on WhatsApp
            </button>
          </form>

          <ul className="reveal space-y-8">
            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <MapPin size={22} />
              </span>
              <div>
                <p className="font-bold">Find us</p>
                <p className="font-medium">{business.address}</p>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Phone size={22} />
              </span>
              <div>
                <p className="font-bold">Call us</p>
                <a href={business.phoneHref} className="font-medium underline">
                  {business.phone}
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <Clock size={22} />
              </span>
              <div>
                <p className="font-bold">Opening hours</p>
                <ul className="mt-1 space-y-1">
                  {business.hours.map((h) => (
                    <li key={h.days} className="font-medium">
                      {h.days}: {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact