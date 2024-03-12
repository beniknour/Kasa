
import React from 'react';
import logo from "../../assets/logo/logo-header.png";
import Nav from "../Nav/Nav";
import './Header.scss';
const Header = () =>{

    return(


        <header className="header">
            <div className='container'>
                <img className='logoKasa' src={logo} alt="Logo de Kasa" />
                <Nav/>
            </div>
        </header>
    );
}


export default Header;