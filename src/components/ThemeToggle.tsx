"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/components/icons";

const toggleButtonClassName =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 active:scale-[0.98] disabled:opacity-70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-700 dark:hover:bg-slate-800";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  if (resolvedTheme === undefined) {
    return (
      <button
        type="button"
        disabled
        aria-label="Переключить тему"
        className={toggleButtonClassName}
      >
        <MoonIcon className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        isDark ? "Включить светлую тему" : "Включить тёмную тему"
      }
      className={toggleButtonClassName}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
