
import React from 'react';
import logo from "../../assets/logo/logo-header.png";
import Nav from "../Nav/Nav";

const Header = () =>{

    return(


        <header className="headerContainer">
            <img src={logo} alt="Logo de Kasa" />
            <Nav/>
        </header>
    );
}


export default Header;