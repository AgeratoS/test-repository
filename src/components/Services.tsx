import { services } from "@/data/content";
import { ServiceIcon } from "@/components/icons";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t border-sky-100 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Услуги
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Всё для стирки в одном месте
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Современное оборудование, удобная оплата и чистые помещения — приходите
            со своим бельём и забирайте свежим.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.id}
              className="group rounded-3xl border border-slate-100 bg-slate-50/70 p-5 transition hover:border-sky-200 hover:bg-sky-50/50 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm ring-1 ring-sky-100 transition group-hover:bg-sky-600 group-hover:text-white">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
