import React from "react";

export type Languages = "en" | "de" | "jp";

export type LangProviderProps = {
  children: React.ReactNode;
  defaultLanguage: Languages;
};

export type LangProviderState = {
  language: Languages;
  setLanguage: (languages: Languages) => void;
};
