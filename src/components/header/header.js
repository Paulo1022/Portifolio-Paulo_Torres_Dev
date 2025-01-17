import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import { LanguageContext } from "../../contexts/languageContext";
import { MenuContext } from "../../contexts/menuContext";
import USA from "../../assets/flags/united-states.png";
import BRA from "../../assets/flags/brazil-.png";

function Header() {

    let [scrolled, setScrolled] = useState(false);
    const {languageEn, setLanguageEn} = useContext(LanguageContext);
    const {setShowMenu} = useContext(MenuContext);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            };
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const Option = styled.a`
        margin: 0 10px;
        font-size: 20px;
        font-family: 'Montserrat';
        color: ${scrolled? "#F8F9FA" : "black"};
        text-decoration: none;
        cursor: pointer;
        border-radius: 20px;
        transition: 0.5s;
        
        &:hover {
            transform: scale(1.15);
        }
    `;

    const LanguageHeader = styled.div`
        width: 30px;
        height: 30px;
        margin: 7px;
        background-image: url(${languageEn? BRA : USA});
        background-size: cover;
        background-position: 50% 50%;
        cursor: pointer;
    `;

    return (
        <header
            id="headerContainer"
            style={{backgroundColor: scrolled? "transparent" : "#F8F9FA"}}
        >
            <div id="nameTitle">
                &lt;
                <span className="headerSpan" style={{color: scrolled? "#F8F9FA" : "black"}}>Paulo</span>
                _
                <span className="headerSpan" style={{color: scrolled? "#F8F9FA" : "black"}}>Torres</span>
                _Dev /&gt;
            </div>
            <div id="hamburgerContainer" onClick={() => setShowMenu(true)}>
                <RxHamburgerMenu id="hamburgerIcon" style={{color: scrolled? "#F8F9FA" : "black"}}/>
            </div>
            <div id="headerLinks">
                <div id="optionsContainer">
                    <Option href="#bannerContainer">{languageEn? "About Me" : "Sobre Mim"}</Option>
                    <Option href="#projectsContainer">{languageEn? "Projects" : "Projetos"}</Option>
                    <Option href="#skillsContainer">{languageEn? "Skills" : "Habilidades"}</Option>
                </div>
                <LanguageHeader onClick={() => setLanguageEn(!languageEn)} />
                <div id="headerContacts">
                    <a href="https://wa.me/5561998406766" target="blank">
                        <BsWhatsapp
                            className="headerIcon"
                            style={{color: scrolled? "#F8F9FA" : "black"}}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/paulo-torres-1ab888342/" target="blank">
                        <FaLinkedin
                            className="headerIcon"
                            style={{color: scrolled? "#F8F9FA" : "black"}}
                        />
                    </a>
                    <a href="https://github.com/Paulo1022" target="blank">
                        <FaGithub
                            className="headerIcon"
                            style={{color: scrolled? "#F8F9FA" : "black"}}
                        />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;