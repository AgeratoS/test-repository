import { navLinks, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white px-4 py-8 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {site.tagline}
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-4 gap-y-2"
          aria-label="Навигация в подвале"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mx-auto mt-6 max-w-5xl text-center text-xs text-slate-400 dark:text-slate-500 sm:text-left">
        © {new Date().getFullYear()} {site.name}. Все права защищены.
      </p>
    </footer>
  );
}
