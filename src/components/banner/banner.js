import React, { useContext } from "react";
import "./banner.css";
import { LanguageContext } from "../../contexts/languageContext";

function Banner() {

    const { languageEn } = useContext(LanguageContext);

    return (
        <div id="bannerContainer">
            <div id="bannerAboutMe">
                <div id="bannerText">
                    <hi id="textTitle">
                        {languageEn? "Hi! I'm" : "Olá! Sou o"}
                        <br/>
                        <span className="bannerSpan">Paulo Torres!</span>
                        <span className="bannerSpan" id="piscarSpan">_</span>
                        <br/>
                        {languageEn? "Front-End Developer" : "Desenvolverdor Front-End"}
                    </hi>
                    <p id="textBody">
                        Oi, sou Paulo Torres, desenvolvedor Front-End com base em Brasília. Com 1 ano de experiência,
                        venho construindo projetos incríveis com HTML, CSS, JavaScript, React, NodeJS e NextJS.
                        Eu amo a criatividade do design web! Acredito que uma interface bem projetada pode transformar
                        a experiência do usuário. É por isso que estou sempre buscando melhorar minhas habilidades em
                        Responsividade e UX/UI Design. Meu objetivo é me especializar cada vez mais no contato com
                        o cliente, criando experiências únicas e intuitivas. Estou sempre buscando aprender e melhorar.
                    </p>
                </div>
                <div id="bannerLinks">
                    <a className="link" id="curriculo" href="https://drive.google.com/file/d/1e-020TinKATGF_boVQ9vyCAg8ICu9d-o/view?usp=drive_link">&lt;{languageEn? "Resume" : "Currículo"} /&gt;</a>
                    <a className="link" id="email" href="mailto:pauloigortorres@hotmail.com">&lt;Email /&gt;</a>
                </div>
            </div>
            <div id="bannerImage"></div>
        </div>
    )
}

export default Banner;