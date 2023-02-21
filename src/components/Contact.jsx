import "./contact.css"
import * as Label from '@radix-ui/react-label';

function Contact() {
    return (
        <div id="contact" className="contact">
            <div className="contact-box-bg">
                <div className="contact-box">
                    <div className="contact-box-text">
                        <h3>Entre em contato</h3>
                        <p className="contact-box-description">Bem-vindo ao nosso setor de Contato! Queremos ouvir de você. Compartilhe suas dúvidas, avaliações e necessidades de serviço. Nossa equipe está pronta para ajudá-lo a atingir seus objetivos. Entre em contato conosco hoje!</p>
                        <p className="contact-box-socialcall">Acesse também nossas redes sociais abaixo!</p>
                    </div>
                    <form className="contact-form">                       
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="name">
                            Name
                            </Label.Root>
                            <input className="Input" type="text" id="name" defaultValue="" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="email">
                            E-mail
                            </Label.Root>
                            <input className="Input" type="email" id="email" defaultValue="" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="number">
                            Telefone
                            </Label.Root>
                            <input className="Input" type="number" id="phone" defaultValue="" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="subject">
                            Assunto
                            </Label.Root>
                            <input className="Input" type="text" id="subject" defaultValue="" />
                        </div>
                        <div className="contact-form-box">
                            <Label.Root className="LabelRoot" htmlFor="message">
                            Mensagem
                            </Label.Root>
                            <textarea className="textArea" type="text" id="message" defaultValue="" placeholder="Deixe aqui sua mensagem." rows="10" />
                        </div>  

                        <button className="contact-btn" type="submit">Enviar</button>                      
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact