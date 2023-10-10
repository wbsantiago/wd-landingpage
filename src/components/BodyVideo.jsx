import './bodyVideo.css'

function BodyVideo() {
    return (
        <div className='body'>
            
            <div className='body-top-div'>
                <p className='body-top-text'>Transformando seus sonhos em realidade!</p>
                <h1>WD Arquitetura e Engenharia</h1>
                <div className='body-buttons'>
                    <a href="#projects"><input className='body-button-projects' value="Projetos" /></a>
                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=5543999999999&text&type=phone_number&app_absent=0"><input className='body-button-contact' value="Solicite um orçamento!" /></a>
                </div>
            </div>
        </div>
    )
}

export default BodyVideo