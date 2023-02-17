import "./projects.css"
import textImage from "../assets/espoço-projeto.png"
import sobradoImage from "../assets/sobrado-imagem.png"
import houseImage from "../assets/casa-imagem.png" 

function Projects() {
    return (
       
        <div className="projects" id="projects">
            <div className="mid-box">
                <div className="mid-box-intern">
                    <div className="mid-box-intern-text">
                        <p className="mid-box-intern-description">Trabalhamos com transparência e clareza em cada etapa do processo!</p>
                        <h2 className="projects-title">Conheça alguns de nossos Projetos!</h2>
                    </div>
                        <a href="https://api.whatsapp.com/send/?phone=5543999876724&text&type=phone_number&app_absent=0" target="_blank"><input className="mix-box-btn" type="url" name="" id="" value="Mais informações" /></a>
                </div>
            </div>
            <div className="projects-block">
                <div className="projects-description">
                    <h3 className="projects-subtitle">Sobrado Residencial</h3>
                    <p className="projects-text">Sobrado com 3 suítes, garagem subterrânea para 2 carros, área gourmet integrada com sala e cozinha, churrasqueira, piscina e deck. Projeto moderno e funcional.</p>
                    <p className="projects-text">Nossa equipe de profissionais altamente qualificados está pronta para ouvir suas ideias e transformá-las em realidade. Utilizamos técnicas avançadas de planejamento e design para criar projetos que atendam a todas as suas expectativas, desde a escolha dos materiais até a disposição dos móveis.</p>
                </div>
                <img src={sobradoImage} alt="imagem do projeto" className="projects-images"/>
            </div>
            <div className="projects-block">
                <img src={houseImage} alt="imagem do projeto" className="projects-images" />
                <div className="projects-description">
                    <h3 className="projects-subtitle">Residência Térrea</h3>
                    <p className="projects-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit temporibus iusto officia aperiam, quos natus labore commodi porro explicabo, cum exercitationem nihil aspernatur fugiat placeat maiores, dolorum illum. Laborum, ipsum!</p>
                </div>
            </div>
            <div className="projects-block">
                <div className="projects-description">
                    <h3 className="projects-subtitle">Título do projeto</h3>
                    <p className="projects-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit temporibus iusto officia aperiam, quos natus labore commodi porro explicabo, cum exercitationem nihil aspernatur fugiat placeat maiores, dolorum illum. Laborum, ipsum!</p>
                </div>
                <img src={textImage} alt="imagem do projeto" className="projects-images" />
            </div>
            <div className="projects-block">
                <div className="projects-description">
                    <h3 className="projects-subtitle">Título do projeto</h3>
                    <p className="projects-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit temporibus iusto officia aperiam, quos natus labore commodi porro explicabo, cum exercitationem nihil aspernatur fugiat placeat maiores, dolorum illum. Laborum, ipsum!</p>
                </div>
                <img src={textImage} alt="imagem do projeto" className="projects-images" />
            </div>
        </div>
        
    )
}

export default Projects