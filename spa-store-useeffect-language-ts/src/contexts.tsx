import { createContext, useContext, useState } from "react";
import { Languages, LangProviderProps, LangProviderState } from "./types";

export const LanguageContext = createContext<LangProviderState | undefined>(
  undefined
);

export default function ProvideLanguage({
  children,
  defaultLanguage,
}: LangProviderProps) {
  const [language, setLanguage] = useState<Languages>(
    defaultLanguage as Languages
  );
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const lang = useContext(LanguageContext);

  if (lang === undefined) {
    throw new Error("Language must be used within a Theme Provider");
  }
  // console.log(lang);
  return lang;
}
