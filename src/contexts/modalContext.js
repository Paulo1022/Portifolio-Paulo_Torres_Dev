import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalStore = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <ModalContext.Provider value={{showModal, setShowModal}}>
            {children}
        </ModalContext.Provider>
    )
}