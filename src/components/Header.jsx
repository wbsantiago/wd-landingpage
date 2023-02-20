import './header.css'
import logowd from "../assets/logo-wd-white.png"
import wppLogo from "../assets/wpp-icon.svg"

function Header() {
    return (
        <div id='home' className='header'>
            <div>
                <img src={logowd} className="header-logo" alt="logo-website" />
            </div>

            <nav className='header-nav' id="navbar">
                <ul className='header-nav-ul'>
                <li><a href="#home" className='navbar-link'>Home</a></li>
                <li><a href="#aboutUs" className='navbar-link'>Sobre Nós</a></li>
                <li><a href="#projects" className='navbar-link'>Projetos</a></li>
                <li><a href="#contact" className='navbar-link'>Contato</a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=5543999876724&text&type=phone_number&app_absent=0" target="_blank"><img width="30px" src={wppLogo} alt="botão que direciona para o WhatsApp" /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header