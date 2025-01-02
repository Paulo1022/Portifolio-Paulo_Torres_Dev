import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { LanguageContext } from "../../contexts/languageContext";
import USA from "../../assets/flags/united-states.png";
import BRA from "../../assets/flags/brazil-.png";

function Header() {

    let [scrolled, setScrolled] = useState(false);
    const {languageEn, setLanguageEn} = useContext(LanguageContext);

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

    const Image = styled.div`
        width: 30px;
        height: 30px;
        background-image: url(${languageEn? BRA : USA});
        background-size: cover;
        background-position: 50% 50%;
        cursor: pointer;
    `;

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
            <div id="headerLinks">
                <Image onClick={() => setLanguageEn(!languageEn)} />
                <Option href="#bannerContainer">{languageEn? "About Me" : "Sobre Mim"}</Option>
                <Option href="#projectsContainer">{languageEn? "Projects" : "Projetos"}</Option>
                <Option href="#skillsContainer">{languageEn? "Skills" : "Habilidades"}</Option>
                <div id="contacts">
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