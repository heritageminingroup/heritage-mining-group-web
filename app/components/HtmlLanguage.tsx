"use client";

import { useEffect } from "react";

type Locale = "es" | "en";

export function HtmlLanguage({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
