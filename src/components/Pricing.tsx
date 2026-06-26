import { pricing } from "@/data/content";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Цены
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Прозрачно и без сюрпризов
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Оплата на месте. Точная стоимость зависит от программы и загрузки
            машины.
          </p>
        </div>

        <ul className="mt-8 divide-y divide-slate-100 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {pricing.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5"
            >
              <span className="text-base font-medium text-slate-800 dark:text-slate-200 sm:text-lg">
                {item.label}
              </span>
              <span className="shrink-0 rounded-full bg-sky-50 px-3 py-1.5 text-sm font-bold text-sky-700 dark:bg-sky-950 dark:text-sky-300 sm:text-base">
                {item.price}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          * Цены указаны ориентировочно. Актуальный прайс — на табло в прачечной.
        </p>
      </div>
    </section>
  );
}
