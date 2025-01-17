import React, { useContext } from "react";
import "./responsiveMenu.css";
import { LanguageContext } from "../../contexts/languageContext";
import { MenuContext } from "../../contexts/menuContext";
import styled from "styled-components";
import USA from "../../assets/flags/united-states.png";
import BRA from "../../assets/flags/brazil-.png";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function ResponsiveMenu() {

    const {languageEn, setLanguageEn} = useContext(LanguageContext);
    const {showMenu, setShowMenu} = useContext(MenuContext);

    const LanguageMenu = styled.div`
        width: 30px;
        height: 30px;
        margin: 7px;
        background-image: url(${languageEn? BRA : USA});
        background-size: cover;
        background-position: 50% 50%;
        cursor: pointer;
    `;

    return (
        <div id="responsiveMenuBg" style={{display: showMenu? "flex" : "none"}}>
            <div id="closeClick" onClick={() => setShowMenu(false)} ></div>
            <div id="responsiveMenu">
                <a
                    className="menuOption"
                    href="#bannerContainer"
                >
                    {languageEn? "About Me" : "Sobre Mim"}
                </a>
                <a
                    className="menuOption"
                    href="#projectsContainer"
                >
                    {languageEn? "Projects" : "Projetos"}
                </a>
                <a
                    className="menuOption"
                    href="#skillsContainer"
                >
                    {languageEn? "Skills" : "Habilidades"}
                </a>
                <LanguageMenu onClick={() => setLanguageEn(!languageEn)} />
                <div id="menuContacts">
                    <a href="https://wa.me/5561998406766" target="blank">
                        <BsWhatsapp
                            className="menuIcon"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/paulo-torres-1ab888342/" target="blank">
                        <FaLinkedin
                            className="menuIcon"
                        />
                    </a>
                    <a href="https://github.com/Paulo1022" target="blank">
                        <FaGithub
                            className="menuIcon"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ResponsiveMenu;