import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
                <div className="footer-div">
                    <div className="footer-div-container">
                        <h3 className="footer-title">Redes Sociais</h3>
                        <div className="footer-div-icons social-media">
                            <a href="https://www.instagram.com/wd_arquitetura_engenharia/" target="_blank" ><FontAwesomeIcon className="icons-s gap" icon={faInstagram} size="2x"/></a>
                            <a href="https://www.facebook.com/wdarquiteturaeengenharia" target="_blank" ><FontAwesomeIcon className="icons-s gap" icon={faFacebook} size="2x"/></a>
                        </div>
                    </div>
                    <div className="footer-div-container">
                        <h3 className="footer-title">Contatos</h3>
                        <div className="footer-div-icons">
                            <div>
                                <FontAwesomeIcon className="icons-s" icon={faPhone} />
                                <p>+55 (43) 99987-6724</p>
                            </div>
                            <div>
                                <FontAwesomeIcon className="icons-s" icon={faEnvelope} />
                                <p>contato@wd.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-div-container">
                        <h3 className="footer-title">Links</h3>
                        <div className="footer-div-links">
                            <a href="#home" className="footer-div-links-nav">Home</a>
                            <a href="#aboutUs" className="footer-div-links-nav">Sobre Nós</a>
                            <a href="#projects" className="footer-div-links-nav">Projetos</a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>WD Arquitetura e Engenharia 2023. Todos os direitos reservados.</p>
                </div>
            </footer>
    )
}

export default Footer