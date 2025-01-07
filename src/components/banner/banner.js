import React, { useContext } from "react";
import "./banner.css";
import { LanguageContext } from "../../contexts/languageContext";
import { ModalContext } from "../../contexts/modalContext";

function Banner() {

    const { languageEn } = useContext(LanguageContext);
    const { setShowModal } = useContext(ModalContext);

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
                    {languageEn? 
                        <p className="textBody">
                            Hi, my name is Paulo Torres, a Front-End Developer based in Brasília. Working in this field for a year, 
                            I've been building incredible projects with HTML, CSS, JavaScript, React, NodeJS and NextJS.
                            I love the creative freedom in web designing! I believe that a well built interface can transform the user's experience.
                            That's why I'm always trying to improve my skills in Responsive Web Designing and UX/UI Design. 
                            My objective is to humanize and improve the relationship Developer/Client, bringing the client's ideas into reality, as such creating unique and intuitive experiences.
                            Thus, I'm always wiling to learn and improve.
                        </p>
                    :
                        <p className="textBody">
                            Oi, sou Paulo Torres, desenvolvedor Front-End com base em Brasília. Com 1 ano de experiência,
                            venho construindo projetos incríveis com HTML, CSS, JavaScript, React, NodeJS e NextJS.
                            Eu amo a criatividade do design web! Acredito que uma interface bem projetada pode transformar
                            a experiência do usuário. É por isso que estou sempre buscando melhorar minhas habilidades em
                            Responsividade e UX/UI Design. Meu objetivo é me especializar cada vez mais no contato com
                            o cliente, criando experiências únicas e intuitivas. Estou sempre buscando aprender e melhorar.
                        </p>
                    }
                </div>
                <div id="bannerLinks">
                    <a
                        className="link"
                        id="curriculo"
                        href="https://drive.google.com/file/d/1cbIo50KrZp6Z7QGGYQtYjt-11II6QlXr/view?usp=sharing"
                    >
                        &lt;{languageEn? "Resume" : "Currículo"} /&gt;
                    </a>
                    <div
                        className="link"
                        id="contato"
                        onClick={()=>setShowModal(true)}
                    >
                        &lt;{languageEn? "Contact Info" : "Contato"} /&gt;
                    </div>
                </div>
            </div>
            <div id="bannerImage"></div>
        </div>
    )
}

export default Banner;