import './header.css'
import logowd from "../assets/logo-wd-white.png"
import wppLogo from "../assets/wpp-icon.svg"
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

function Header() {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <div id='home' className='header'>
            <div>
                <a href="index.html"><img src={logowd} className="header-logo" alt="logo-website" /></a>
            </div>

            <nav className='header-nav' id="navbar" ref={navRef}>
                
                <a href="#home" onClick={showNavBar} className='navbar-link nav-close-btn'>Home</a>
                <a href="#aboutUs" onClick={showNavBar} className='navbar-link nav-close-btn'>Sobre Nós</a>
                <a href="#projects" onClick={showNavBar} className='navbar-link nav-close-btn'>Projetos</a>
                <a href="#contact" onClick={showNavBar} className='navbar-link nav-close-btn'>Contato</a>
               <a href="https://api.whatsapp.com/send/?phone=5543999876724&text&type=phone_number&app_absent=0" onClick={showNavBar} target="_blank"><img width="30px" src={wppLogo} alt="botão que direciona para o WhatsApp" /></a>
                
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes size={36} />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars size={28} />
            </button>
        </div>
    );
}

export default Header