import { Languages } from "../types.ts";
import { LanguageContext, useLanguage } from "../contexts.tsx";
import React from "react";

interface Message {
  message: string;
}

const MessageCollection: Record<string, Message> = {
  en: { message: "Hello World" },
  de: { message: "Hallo Welt" },
  jp: { message: "Kon'nichiwa sekai" },
};

export default function WelcomeMessage() {
  const { language } = useLanguage();

  return (
    <>
      <div>
        <p>{MessageCollection[language].message}</p>
      </div>
    </>
  );
}
