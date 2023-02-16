import "./articles.css"
import imageOffice from '../assets/office-work.jpg'

function Articles() {
    return (
        <div className="articles">
            <div className="first-article">
                <img 
                    className="image-work" 
                    src={imageOffice} 
                    alt='imagem de reunião no escritório'
                >
                </img>
                <div 
                    className='article-text-body'
                >
                    <h2 className="title-first-article">Projetos Elaborados especialmente para você!</h2>
                    <p className="text-first-article">Quando se trata de construir, reformar ou decorar uma casa, muitas vezes os proprietários têm uma visão clara do que querem, mas não sabem como transformar essa visão em realidade. É aí que entra a WD Arquitetura e Engenharia. Com sua expertise e conhecimento técnico, nós podemos ajudar a transformar seus sonhos em uma casa que atenda todas as suas necessidades e desejos.</p>
                </div>   
            </div>
        </div>
    )
}

export default Articles