import "./contact.css"
import * as Label from '@radix-ui/react-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <div id="contact" className="contact">
            <div className="contact-box-bg">
                <div className="contact-box">
                    <div className="contact-box-text">
                        <h3>Entre em contato</h3>
                        <p className="contact-box-description">Bem-vindo ao nosso setor de Contato! Queremos ouvir de você. Compartilhe suas dúvidas, avaliações e necessidades de serviço. Nossa equipe está pronta para ajudá-lo a atingir seus objetivos. </p>
                        <p className="contact-box-socialcall">Acesse também nossas redes sociais abaixo!</p>
                    </div>
                    <form className="contact-form">                       
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="name">
                            Name
                            </Label.Root>
                            <input className="Input" type="text" id="name" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="email">
                            E-mail
                            </Label.Root>
                            <input className="Input" type="email" id="email" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="number">
                            Telefone
                            </Label.Root>
                            <input className="Input" type="number" id="phone" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="subject">
                            Assunto
                            </Label.Root>
                            <input className="Input" type="text" id="subject" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="message">
                            Mensagem
                            </Label.Root>
                            <textarea className="textArea" type="text" id="message" placeholder="Deixe aqui sua mensagem." rows="10" />
                        </div>  

                        <button className="contact-btn" type="submit">Enviar</button>                      
                    </form>
                </div>
            </div>
            <footer>
                <div className="footer-social-links">
                    <a href="https://www.instagram.com/wd_arquitetura_engenharia/" target="_blank" ><FontAwesomeIcon className="icons-s" icon={faInstagram} size="2x"/></a>
                    <a href="https://www.facebook.com/wdarquiteturaeengenharia" target="_blank" ><FontAwesomeIcon className="icons-s" icon={faFacebook} size="2x"/></a>
                </div>
                <p>WD Arquitetura e Engenharia 2023. Todos os direitos reservados.</p>
                <div>
                    <a className="arrow-footer" href="#home"><FontAwesomeIcon  icon={faArrowAltCircleUp} size="3x" /></a>
                </div>
            </footer>
        </div>
    )
}

export default Contact