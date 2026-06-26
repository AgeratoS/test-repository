import { site } from "@/data/content";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";

const contactItems = [
  {
    id: "phone",
    icon: PhoneIcon,
    label: "Телефон",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    id: "address",
    icon: MapPinIcon,
    label: "Адрес",
    value: site.address,
    href: site.mapUrl,
  },
  {
    id: "hours",
    icon: ClockIcon,
    label: "Режим работы",
    value: site.hours,
  },
  {
    id: "email",
    icon: MailIcon,
    label: "Почта",
    value: site.email,
    href: site.emailHref,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-600 to-cyan-500 p-6 text-white shadow-xl shadow-sky-200 dark:from-sky-700 dark:to-cyan-600 dark:shadow-sky-950/50 sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-100">
              Контакты
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Приходите в гости
            </h2>
            <p className="mt-3 text-base text-sky-50 sm:text-lg">
              Мы рядом с метро, есть парковка. Позвоните — подскажем, как
              пройти.
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wide text-sky-100">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-base font-semibold leading-snug">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              if ("href" in item && item.href) {
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target={item.id === "address" ? "_blank" : undefined}
                      rel={
                        item.id === "address"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex min-h-16 items-center gap-3 rounded-2xl bg-white/10 p-4 transition hover:bg-white/20 active:scale-[0.99]"
                    >
                      {content}
                    </a>
                  </li>
                );
              }

              return (
                <li
                  key={item.id}
                  className="flex min-h-16 items-center gap-3 rounded-2xl bg-white/10 p-4"
                >
                  {content}
                </li>
              );
            })}
          </ul>

          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-sky-700 transition hover:bg-sky-50 active:scale-[0.98] dark:text-sky-800 sm:w-auto"
          >
            Открыть на карте
          </a>
        </div>
      </div>
    </section>
  );
}
