import React, { useContext, useState } from "react";
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
import { LanguageContext } from "../../contexts/languageContext";

const cards = [
    {
        image: <SiHtml5 className="skillCardImage" id="html" />,
        title: "HTML5",
        textEN: "Used to structure and make the webpages acessible.",
        textPT: "Como todo bom Desenvolvedor Front-End utilizei conhecimentos de HTML para a estruturação e acessibilidade das páginas."
    },
    {
        image: <SiCss3 className="skillCardImage" id="css" />,
        title: "CSS3",
        textEN: "I'm proficient in Responsive Web Designing, Animation, Page Adaptabily and Flexible Layouts.",
        textPT: "Tenho proficiencia nas Habilidades com responsividade, animações, adaptabilidade das páginas e layouts flexíveis."
    },
    {
        image: <SiJavascript className="skillCardImage" id="javascript" />,
        title: "JavaScript",
        textEN: "Used for general interactivity in almost every application. Also present in DCM manipulation and API Calls.",
        textPT: "Usado para a interatividade geral em praticamente todas as aplicações. Presente também na manipulação de DOM e chamado de APIs."
    },
    {
        image: <SiReact className="skillCardImage" id="react" />,
        title: "React",
        textEN: "Sound knowledge in Componentization, JSX in interfaces, Hooks for state management, API Context in communication between components and Routing with navigation between pages.",
        textPT: "Sólido conhecimentos em Componentização, JSX em interfaces, Hooks para gestão de estado, Context API na comunicação entre componentes e Routing com navegação entre paginas."
    },
    {
        image: <SiNodedotjs className="skillCardImage" id="node" />,
        title: "NodeJS",
        textEN: "Through Node, I had brief contact with Back-End aplications and databases like MongoDB and PostgreSQL.",
        textPT: "Através do Node, tive um breve contato com aplicações do Back-End e banco de dados como MongoDB e PostgreSQL."
    },
    {
        image: <SiFirebase className="skillCardImage" id="firebase" />,
        title: "FireBase",
        textEN: "I'm familiar with multiple functionalities of Firebase, like Realtime Database, Cloud Functions and Hosting.",
        textPT: "Estou familiarizado com diversas funcionalides do Firebase, como Realtime Database, Cloud Functions e Hosting."
    }
];

function Skills() {

    let [clicked, setClicked] = useState(false);
    const { languageEn } = useContext(LanguageContext);

    return (
        <div id="skillsContainer">
            <div id={clicked? "containerSkillsCardsOpened" : "containerSkillsCardsClosed"}>
                {cards.map((item) => (
                    <div className="skillCard">
                        {item.image}
                        <div className="cardTextContainer">
                            <h1 id="skillCardTitle">{item.title}</h1>
                            <p id="skillCardText">{languageEn? item.textEN : item.textPT}</p>
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