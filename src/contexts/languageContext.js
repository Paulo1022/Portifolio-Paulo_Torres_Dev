import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageStore = ({ children }) => {
    const [languageEn, setLanguageEn] = useState(false);
    
    return (
        <LanguageContext.Provider value={{languageEn, setLanguageEn}}>
            {children}
        </LanguageContext.Provider>
    )
}