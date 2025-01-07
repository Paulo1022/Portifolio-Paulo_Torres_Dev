import React, { useContext } from "react";
import "./footer.css";
import { LanguageContext } from "../../contexts/languageContext";
import Contacts from "../contacts/contacts";

function Footer() {

    const { languageEn } = useContext(LanguageContext);

    return (
        <footer id="footer_container">
            <div id="footer_texts">
                <h1 id="footer_title">&lt;Paulo_Torres_Dev /&gt;</h1>
                <span className="textoFinal">{languageEn? "All rights reserved ©" : "Todos os direitos reservados ©"}</span>
                <span className="textoFinal">{languageEn? "Developed by" : "Desenvolvido por"}: Paulo Igor S Torres</span>
            </div>
            <Contacts background="transparent" />
        </footer>
    )
};

export default Footer;