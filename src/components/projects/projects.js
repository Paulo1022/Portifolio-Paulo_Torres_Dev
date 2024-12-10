import React, { useState } from "react";
import "./projects.css";
import Looneta from "../../assets/projectsCards/screencapture-Looneta_Site.png";
import Aquaman from "../../assets/projectsCards/screencapture-Aquaman_App.png";
import PetLife from "../../assets/projectsCards/screencapture-PetLife.png";
import StarWars from "../../assets/projectsCards/screencapture-Star_Wars_Personagens.png";
// import YouTube from "../../assets/projectsCards/screencapture-YouTube_Clone.png";

const projectCards = [
    {
        number: 1,
        title: "Banda Looneta Website",
        image: Looneta,
        textEN: "Responsive Institutional Website for promotion of the Band and interaction with users, using CSS 3, JavaScript and React.",
        textPT: "Site institucional responsivo desenvolvido para divulgação da Banda e interação com os usuários, usando CSS 3, JavaScript e React.",
        deploy: "https://looneta-site-6bbae.firebaseapp.com",
        github: "https://github.com/Paulo1022/Looneta-Site"
    },
    {
        number: 2,
        title: "PetLife Website",
        image: PetLife,
        textEN: "Responsive Institutional Website developed for contact with Veterinarian Clinic and Petshop, using HTML 5, CSS 3 and JavaScript.",
        textPT: "Site institucional responsivo desenvolvido para contato com Clinica veterinária e Petshop, usando HTML 5, CSS 3 e JavaScript.",
        deploy: "https://paulo1022.github.io/PetLife/",
        github: "https://github.com/Paulo1022/PetLife"
    },
    {
        number: 3,
        title: "API Star Wars Website",
        image: StarWars,
        textEN: "Responsive Website developed with the objective of consulting information about Star Wars characters, usingHTML 5, CSS 3, public API and JavaScript.",
        textPT: "Site responsivo desenvolvido com objetivo de consulta de informações de personagens dos filmes de Star Wars, usando HTML 5, CSS 3, API pública e JavaScript.",
        deploy: "https://paulo1022.github.io/Star-Wars-Personagens/",
        github: "https://github.com/Paulo1022/Star-Wars-Personagens"
    },
    {
        number: 4,
        title: "Promotional Website for movie Aquaman 2",
        image: Aquaman,
        textEN: "Responsive Hotsite developed as promotion for the movie “Aquaman and the Lost Kingdom”, using CSS 3, JavaScript and React.",
        textPT: "Hotsite responsivo desenvolvido como divulgação do filme “Aquaman 2: O Reino Perdido”, usando CSS 3, JavaScript e React.",
        deploy: "https://aquaman-app.firebaseapp.com/",
        github: "https://github.com/Paulo1022/Aquaman-App"
    },
    // {
    //     number: 5,
    //     title: "Youtube’s Interface Clone",
    //     image: YouTube,
    //     textEN: "Aplication developed after Youtube’s model, using JavaScript, CSS 3, SQL Database and React.",
    //     textPT: "",
    //     deploy: "",
    //     github: "https://github.com/Paulo1022/YouTube-Clone"
    // }
];

function Projects() {

    let [opened, setOpened] = useState(1);

    return (
        <div id="projectsContainer">
            <div id="containerProjectsCards">
                {projectCards.map((item) => (
                    <div
                        className="projectCard"
                        style={{
                            width: opened === item.number ? "600px" : "80px",
                            backgroundImage: `url(${item.image})`
                        }}
                    >
                        <div className="titleContainer">
                            <div
                                className="cardNumber"
                                onClick={() => setOpened(item.number)}
                            >
                                {item.number}
                            </div>
                            <div
                                className="cardTitle"
                                style={{
                                    display: opened === item.number ? "flex" : "none",
                                    width: opened === item.number ? "500px" : "1px"
                                }}
                            >
                                {item.title}
                            </div>
                        </div>
                        <div
                            className="cardText"
                            style={{
                                display: opened === item.number ? "block" : "none",
                                width: opened === item.number ? "570px" : "1px"
                            }}
                        >
                            {item.textPT}
                        </div>
                        <div
                            className="cardLinks"
                            style={{
                                display: opened === item.number ? "flex" : "none",
                                width: opened === item.number ? "370px" : "1px"
                            }}
                        >
                            <a
                                className="linkCard linkDeploy"
                                href={item.deploy}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Deploy
                            </a>
                            <a
                                className="linkCard linkGithub"
                                href={item.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;