import { site } from "@/data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8">
      <div className="pointer-events-none absolute -right-16 -top-10 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-sky-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Открыто сегодня · {site.hours}
        </div>

        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Чистое бельё{" "}
          <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
            за час
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {site.description}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 active:scale-[0.98]"
          >
            Как нас найти
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-sky-200 hover:bg-sky-50 active:scale-[0.98]"
          >
            {site.phone}
          </a>
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { label: "Машин", value: "8" },
            { label: "Минут стирки", value: "40" },
            { label: "Дней в неделю", value: "7" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/70 bg-white/80 p-3 text-center shadow-sm backdrop-blur sm:p-4"
            >
              <dt className="text-[11px] font-medium uppercase tracking-wide text-slate-500 sm:text-xs">
                {item.label}
              </dt>
              <dd className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
