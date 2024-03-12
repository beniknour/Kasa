
import React from 'react';
import logo from "../../assets/logo/logo.png"
import './Footer.scss';
const Footer = () =>{

    return(


        <footer className="footerContainer">
            <img src={logo} alt="Logo de Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>


        </footer>
    );
}
export default Footer;