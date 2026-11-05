import { ArrowUpRight } from 'lucide-react'

function ServiceCard({ service, index, onSelect }) {
  return (
    <li className="reveal h-full">
      <button
        type="button"
        onClick={() => onSelect(service)}
        className="group flex h-full w-full flex-col justify-between gap-6 rounded-2xl border border-ink/10 bg-cream p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] md:gap-10 md:rounded-3xl md:p-8"
      >
        <div className="flex items-start justify-between">
          <span className="font-heading text-sm font-bold md:text-lg">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose text-white transition-transform duration-300 group-hover:rotate-45 md:h-10 md:w-10">
            <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
          </span>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold leading-tight md:text-2xl">
            {service.name}
          </h3>
          <p className="mt-2 text-sm font-medium md:text-base">{service.short}</p>
          <p className="mt-4 font-bold md:mt-6 md:text-lg">{service.price}</p>
        </div>
      </button>
    </li>
  )
}

export default ServiceCard