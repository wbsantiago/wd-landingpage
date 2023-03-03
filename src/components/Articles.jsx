import "./articles.css"
import esbocoProject from '../assets/espoço-projeto.png'
import ceoPhotos from '../assets/ceoPhotos.png'


function Articles() {
    return (
        <div id="aboutUs" className="articles">
            <div className="first-article">
                <img 
                    className="image-work" 
                    src={ceoPhotos} 
                    alt='imagem de reunião no escritório'
                >
                </img>
                <div 
                    className='article-text-body'
                >
                    <h2 className="title-first-article">Quem Somos?</h2>
                    <p className="text-first-article">Somos um escritório de arquitetura e engenharia localizado na cidade de Arapongas e região, com foco em projetos residenciais, comerciais, execução de obra e laudos técnicos. Fundado por <span className="bold-text">Willian B. Santiago</span>, graduado em Engenharia Civil e Pós-graduando em Engenharia de Avaliação e Perícias, e <span className="bold-text">Deivid R. Ribeiro</span>, graduado em Arquitetura e Urbanismo, somos uma equipe altamente qualificada e comprometida em oferecer soluções eficientes e personalizadas para nossos clientes.</p>
                </div>   
            </div>
        
        
            <div className="second-article">
                <img 
                    className="image-work2" 
                    src={esbocoProject} 
                    alt='imagem de reunião no escritório'
                >
                </img>
                <div 
                    className='article-text-body'
                >
                    <h2 className="title-second-article">Projetos Elaborados especialmente para você!</h2>
                    <p className="text-second-article">Quando se trata de construir, reformar ou decorar uma casa, muitas vezes os proprietários têm uma visão clara do que querem, mas não sabem como transformar essa visão em realidade. É aí que entra a WD Arquitetura e Engenharia. Com sua expertise e conhecimento técnico, nós podemos ajudar a transformar seus sonhos em uma casa que atenda todas as suas necessidades e desejos.</p>
                </div>   
            </div>
        </div>
    )
}

export default Articles