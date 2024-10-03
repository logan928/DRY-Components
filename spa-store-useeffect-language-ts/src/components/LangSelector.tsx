import { Languages } from "../types.ts";
// import React, { useState, useContext } from "react";
import { useLanguage } from "../contexts.tsx";
import React from "react";

interface Message {
  name: string;
}

const MessageCollection: Record<string, Message> = {
  en: { name: "English" },
  de: { name: "German" },
  jp: { name: "Japanese" },
};

export default function LangSelector() {
  const { language, setLanguage } = useLanguage();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value as Languages);
  }

  return (
    <div>
      <select value={language} onChange={handleChange}>
        {Object.keys(MessageCollection).map((lang) => (
          <option key={lang} value={lang}>
            {MessageCollection[lang].name}
          </option>
        ))}
      </select>
    </div>
  );
}
