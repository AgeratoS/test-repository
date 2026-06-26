import { navLinks, site } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="group flex min-w-0 items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-sm font-bold text-white shadow-md shadow-sky-200 dark:shadow-sky-900/40">
            КВ
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-lg">
              {site.name}
            </span>
            <span className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-sky-50 hover:text-sky-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-200 transition hover:bg-sky-700 active:scale-[0.98] dark:shadow-sky-900/30"
          >
            <span className="hidden sm:inline">Позвонить</span>
            <span className="sm:hidden">Звонок</span>
          </a>
        </div>
      </div>
    </header>
  );
}
