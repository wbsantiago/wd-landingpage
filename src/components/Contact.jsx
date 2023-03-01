import "./contact.css"
import * as Label from '@radix-ui/react-label';
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
        </div>
    )
}

export default Contact