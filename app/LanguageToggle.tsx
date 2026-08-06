"use client";

import { useEffect, useState } from "react";

type Language = "ja" | "en";

export function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("noto-language");
    const initial: Language = stored === "ja" ? "ja" : "en";
    setLanguage(initial);
    document.documentElement.dataset.lang = initial;
    document.documentElement.lang = initial;
  }, []);

  function choose(next: Language) {
    setLanguage(next);
    window.localStorage.setItem("noto-language", next);
    document.documentElement.dataset.lang = next;
    document.documentElement.lang = next;
  }

  return (
    <div className="language-toggle" aria-label="Language / 言語">
      <button type="button" className={language === "en" ? "active" : ""} aria-pressed={language === "en"} onClick={() => choose("en")}>EN</button>
      <button type="button" className={language === "ja" ? "active" : ""} aria-pressed={language === "ja"} onClick={() => choose("ja")}>日本語</button>
    </div>
  );
}
