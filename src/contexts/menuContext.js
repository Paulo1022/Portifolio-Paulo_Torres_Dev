import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuStore = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <MenuContext.Provider value={{showMenu, setShowMenu}}>
            {children}
        </MenuContext.Provider>
    )
}