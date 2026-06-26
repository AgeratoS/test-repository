import { steps } from "@/data/content";

export function HowItWorks() {
  return (
    <section
      id="how"
      className="scroll-mt-20 border-t border-sky-100 bg-white px-4 py-12 dark:border-slate-800 dark:bg-slate-950 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Как это работает
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Три простых шага
          </h2>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.id}
              className="relative rounded-3xl border border-slate-100 bg-gradient-to-b from-sky-50/80 to-white p-5 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:p-6"
            >
              <span className="text-4xl font-black text-sky-100 dark:text-slate-800">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
