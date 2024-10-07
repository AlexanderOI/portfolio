import { ReactNode, createContext, useContext, useState } from "react";

type LanguageContextType = {
  languagePage: string;
  setLanguagePage: React.Dispatch<React.SetStateAction<string>>
}

const initialLanguageContext: LanguageContextType = {
  languagePage: 'es',
  setLanguagePage: () => { }
}

const LanguageContext = createContext<LanguageContextType>(initialLanguageContext)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [languagePage, setLanguagePage] = useState<string>('es')

  return (
    <LanguageContext.Provider value={{ languagePage, setLanguagePage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  return useContext(LanguageContext)
}