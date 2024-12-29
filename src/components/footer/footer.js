import React, { useContext } from "react";
import "./footer.css";
import { LanguageContext } from "../../contexts/languageContext";

function Footer() {

    const { languageEn } = useContext(LanguageContext);

    return (
        <footer id="footer_container">
            <div id="footer_texts">
                <h1 id="footer_title">&lt;Paulo_Torres_Dev /&gt;</h1>
                <span className="textoFinal">{languageEn? "All rights reserved ©" : "Todos os direitos reservados ©"}</span>
                <span className="textoFinal">{languageEn? "Developed by" : "Desenvolvido por"}: Paulo Igor S Torres</span>
            </div>
            <div id="footer_contacts">
                <strong className="textoFinal">Encontre-me:</strong>
                <p className="textoFinal">WhatsApp: <a href="https://wa.me/5561998406766" target="_blank" rel="noreferrer">(61) 99840-6766</a></p>
                <p className="textoFinal">LinkedIn: <a href="" target="_blank" rel="noreferrer">(LinkedIn link)</a></p>
                <p className="textoFinal">Github: <a href="https://github.com/Paulo1022/" target="_blank" rel="noreferrer">Paulo1022</a></p>
                <p className="textoFinal">Email: <a href="mailto:pauloigortorres@hotmail.com">pauloigortorres@hotmail.com</a></p>
            </div>
        </footer>
    )
};

export default Footer;