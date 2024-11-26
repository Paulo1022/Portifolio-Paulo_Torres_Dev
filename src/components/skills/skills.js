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
    SiNextdotjs,
    SiFirebase 
} from "react-icons/si";

const cards = [
    {image: <SiHtml5 className="skillCardImage" id="html" />, title: "HTML5", text: ""},
    {image: <SiCss3 className="skillCardImage" id="css" />, title: "CSS3", text: ""},
    {image: <SiJavascript className="skillCardImage" id="javascript" />, title: "JavaScript", text: ""},
    {image: <SiReact className="skillCardImage" id="react" />, title: "React", text: ""},
    {image: <SiNodedotjs className="skillCardImage" id="node" />, title: "NodeJS", text: ""},
    {image: <SiNextdotjs className="skillCardImage" id="next" />, title: "NextJS", text: ""},
    {image: <SiFirebase className="skillCardImage" id="firebase" />, title: "FireBase", text: ""}
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