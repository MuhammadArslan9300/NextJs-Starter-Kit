"use client";

import { useTransition } from "react";
import { useParams } from "next/navigation";
import { Locale, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { AppLocale } from "@/types/components/language";
import LanguageIcon from "../icons/language-icon";

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale(); // current locale

  const locales = routing.locales;
  const currentIndex = locales.indexOf(locale as AppLocale);
  const nextLocale = locales[(currentIndex + 1) % locales.length]; // cycle

  function switchLanguage(nextLocale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error - TS validates params per pathname
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    <button
      onClick={() => switchLanguage(nextLocale as Locale)}
      disabled={isPending}
      className="flex items-center gap-2 cursor-pointer"
    >
      <LanguageIcon />
      <span className="text-sm text-left font-medium w-8">{locale === 'en' ? 'Eng' : 'Hi'}</span>
    </button>
  );
}
