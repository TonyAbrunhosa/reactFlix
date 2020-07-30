import React from 'react';
import Button from '../Button';
import Logo from '../../assets/img/logo-react.png';
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="ReactFlix logo"/>
            </a>

            <Button href="/" className="ButtonLink">Novo vídeo</Button>
        </nav>
    )
}


export default Menu;