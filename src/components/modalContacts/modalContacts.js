import React, { useContext } from "react";
import styled from "styled-components";
import "./modalContacts.css";
import Contacts from "../contacts/contacts";
import { ModalContext } from "../../contexts/modalContext";

function ModalContacts() {

    const { showModal, setShowModal } = useContext(ModalContext);

    const ContactsModal = styled.div`
        width: 100%;
        height: 100%;
        display: ${showModal? "flex" : "none"};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.6);
    `;

    return (
        <ContactsModal>
            <div id="exit_icon" onClick={()=>setShowModal(false)}></div>
            <Contacts background="white" padding={25} />
        </ContactsModal>
    )
};

export default ModalContacts;