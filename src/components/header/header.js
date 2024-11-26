import React, { useEffect, useState } from "react";
import "./header.css";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import styled from "styled-components";

function Header() {

    let [scrolled, setScrolled] = useState(false);

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
                <Option href="#bannerContainer">About Me</Option>
                <Option href="#projectsContainer">Projects</Option>
                <Option href="#skillsContainer">Skills</Option>
                <div id="contacts">
                    <a href="https://wa.me/5561998844002" target="blank">
                        <BsWhatsapp
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