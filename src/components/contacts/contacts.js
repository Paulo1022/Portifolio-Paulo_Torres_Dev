import React, { useContext } from "react";
import "./contacts.css";
import { LanguageContext } from "../../contexts/languageContext";

function Contacts({ background, padding }) {

    const { languageEn } = useContext(LanguageContext);

    return (
        <div id="contacts" style={{backgroundColor: `${background}`, padding:`${padding}px`}}>
            <strong className="contacts_text">{languageEn? "Find me" : "Encontre-me"}:</strong>
            <p className="contacts_text">WhatsApp: <a href="https://wa.me/5561998406766" target="_blank" rel="noreferrer">(61) 99840-6766</a></p>
            <p className="contacts_text">LinkedIn: <a href="https://www.linkedin.com/in/paulo-torres-1ab888342/" target="_blank" rel="noreferrer">Paulo Torres</a></p>
            <p className="contacts_text">Github: <a href="https://github.com/Paulo1022/" target="_blank" rel="noreferrer">Paulo1022</a></p>
            <p className="contacts_text">Email: <a href="mailto:pauloigortorres@hotmail.com">pauloigortorres@hotmail.com</a></p>
        </div>
    )
};

export default Contacts;