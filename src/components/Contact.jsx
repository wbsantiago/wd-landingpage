import "./contact.css"
import * as Label from '@radix-ui/react-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Contact() {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        honeypot: "",
        message: "",
        replyTo: "@",
        accessKey: "aaaaaaaa-bbbb-cccc-dddd-eeee6666kkkk"
    })

    const [response, setResponse] = useState ({
        type: "",
        message: ""
    })

    const handleChange = async e =>
        setContact({ ...contact, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await fetch("https://api.staticforms.xyz/submit", {
                method: "POST",
                body: JSON.stringify(contact),
                headers: { "Content-Type": "application/json"}
            })
            
            const json = await res.json()
            console.log(contact)

            if (json.sucess) {
                setResponse({
                    type: "success",
                    message: "Thank you for reaching out to us."
                })
            } else {
                setResponse ({
                    type: "error",
                    message: json.message
                })
            } 
        } catch (e) {
            console.log("An error occured", e);
            setResponse({
                type: "error",
                message: "An error occured while submitthing the form"
            });
        }
    }

    return (
        <div id="contact" className="contact">
            <div className="contact-box">
                <div className="contact-box-text">
                    <h3>Entre em contato</h3>
                    <p className="contact-box-description">Bem-vindo ao nosso setor de Contato! Queremos ouvir de você. Compartilhe suas dúvidas, avaliações e necessidades de serviço. Nossa equipe está pronta para ajudá-lo a atingir seus objetivos. </p>
                </div>
                <form className="contact-form" action="https://api.staticforms.xyz/submit" method="post" onSubmit={handleSubmit}>                       
                    <div className="contact-form-wrap">
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="name" ></Label.Root>
                            <input className="Input" type="text" name="name" id="name" autoComplete="off" onChange={handleChange} placeholder="Nome" required/>
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="email"></Label.Root>
                            <input className="Input" type="email" name="email" id="email" onChange={handleChange} placeholder="E-mail" required/>
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="number"></Label.Root>
                            <input className="Input" type="text" name="phone" id="phone" onChange={handleChange} placeholder="Telefone" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="subject"></Label.Root>
                            <input className="Input" type="text" name="subject" id="subject" onChange={handleChange} placeholder="Assunto" required />
                        </div>
                    </div>
                
                    <div className="contact-form-box">
                        <Label.Root className="LabelRoot" htmlFor="message"></Label.Root>
                        <textarea className="textArea" type="text" name="message" id="message" placeholder="Deixe aqui sua mensagem." rows="8" onChange={handleChange} required />
                    </div>  

                    <input type="hidden" name="redirectTo" value="http://localhost:5173/#contact" />
                    <button className="contact-btn" type="submit">Enviar</button>                      
                
                </form>
            </div>
            <footer>
                <div className="footer-div">
                    <div className="footer-div-container">
                        <h3 className="footer-title">Redes Sociais</h3>
                        <div className="footer-div-icons">
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
        </div>
    )
}

export default Contact