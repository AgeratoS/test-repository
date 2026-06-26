import { site } from "@/data/content";
import { PhoneIcon } from "@/components/icons";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sky-100 bg-white/95 p-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
      <div className="mx-auto flex max-w-5xl gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-sky-600 px-4 text-sm font-semibold text-white shadow-md shadow-sky-200 active:scale-[0.98] dark:shadow-sky-900/30"
        >
          <PhoneIcon className="h-5 w-5" />
          Позвонить
        </a>
        <a
          href={site.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
        >
          На карте
        </a>
      </div>
    </div>
  );
}
