import React, { useState } from "react";
import "./skills.css";
import { FaChevronCircleUp } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { 
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiFirebase 
} from "react-icons/si";

const cards = [
    {
        image: <SiHtml5 className="skillCardImage" id="html" />,
        title: "HTML5",
        text: "Como todo bom Desenvolvedor Front-End utilizei conhecimentos de HTML para a estruturação e acessibilidade das páginas."
    },
    {
        image: <SiCss3 className="skillCardImage" id="css" />,
        title: "CSS3",
        text: "Tenho proficiencia nas Habilidades com responsividade, animações, adaptabilidade das páginas e layouts flexíveis."
    },
    {
        image: <SiJavascript className="skillCardImage" id="javascript" />,
        title: "JavaScript",
        text: "Usado para a interatividade geral em praticamente todas as aplicações. Presente também na manipulação de DOM e chamado de APIs."
    },
    {
        image: <SiReact className="skillCardImage" id="react" />,
        title: "React",
        text: "Sólido conhecimentos em Componentização, JSX em interfaces, Hooks para gestão de estado, Context API na comunicação entre componentes e Routing com navegação entre paginas."
    },
    {
        image: <SiNodedotjs className="skillCardImage" id="node" />,
        title: "NodeJS",
        text: "Através do Node, tive contato mais direto (apesar de não domínio) com aplicações do Back-End e banco de dados como MongoDB e PostgreSQL"
    },
    {
        image: <SiFirebase className="skillCardImage" id="firebase" />,
        title: "FireBase",
        text: "Tenho contato com diversas funcionalides do Firebase, como Realtime Database, Cloud Functions e Hosting"
    }
];

function Skills() {

    let [clicked, setClicked] = useState(false);

    return (
        <div id="skillsContainer">
            <div id={clicked? "containerSkillsCardsOpened" : "containerSkillsCardsClosed"}>
                {cards.map((item) => (
                    <div className="skillCard">
                        {item.image}
                        <div className="cardTextContainer">
                            <h1 id="skillCardTitle">{item.title}</h1>
                            <p id="skillCardText">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div id="containerSkillsButton">
                <button id="circleButtonDown" onClick={() => setClicked(!clicked)}>
                    {clicked?
                    <FaChevronCircleUp className="skillsButtonIcon" />
                    :
                    <FaChevronCircleDown className="skillsButtonIcon" />}
                </button>
            </div>
        </div>
    )
}

export default Skills;