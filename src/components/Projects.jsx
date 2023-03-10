import "./projects.css"
import sobradoImage from "../assets/sobrado-imagem.png"
import houseImage from "../assets/casa-imagem.png"
import geminada from "../assets/geminadas.png"

function Projects() {
    return (
       
        <div className="projects" id="projects">
            <div className="mid-box">
                <div className="mid-box-intern">
                    <div className="mid-box-intern-text">
                        <p className="mid-box-intern-description">Trabalhamos com transparência e clareza em cada etapa do processo!</p>
                        <h2 className="projects-title">Conheça abaixo alguns de nossos Projetos!</h2>
                    </div>
                        <a href="https://api.whatsapp.com/send/?phone=5543999876724&text&type=phone_number&app_absent=0" target="_blank"><input className="mid-box-btn" name="" id="" value="Mais informações" /></a>
                </div>
            </div>
            <div className="projects-block">
                <div className="projects-description">
                    <h3 className="projects-subtitle">Sobrado Residencial</h3>
                    <p className="projects-text">Sobrado com 3 suítes, garagem subterrânea para 2 carros, área gourmet integrada com sala e cozinha, churrasqueira, piscina e deck. Projeto moderno e funcional.</p>
                </div>
                <img src={sobradoImage} alt="imagem do projeto" className="projects-images"/>
            </div>
            <div className="projects-block">
                <div className="projects-description">
                    <h3 className="projects-subtitle">Residência Térrea</h3>
                    <p className="projects-text">Residência térrea moderna com 2 quartos e 1 suíte master, cozinha conjugada com sala de jantar, sala de estar e área gourmet. A suíte é espaçosa e confortável, oferecendo privacidade e conforto para os moradores.</p>
                </div>
                <img src={houseImage} alt="imagem do projeto" className="projects-images" />
            </div>
            <div className="projects-block">
                <div className="projects-description">
                    <h3 className="projects-subtitle">Casas Geminadas</h3>
                    <p className="projects-text">Projeto incrível com 2 quartos e suíte é perfeita para quem busca um espaço aconchegante. Com uma área gourmet integrada à sala e cozinha, é o lugar ideal para receber amigos e familiares.</p>
                </div>
                <img src={geminada} alt="imagem do projeto" className="projects-images" />
            </div>
        </div>
        
    )
}

export default Projects