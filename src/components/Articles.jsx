import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import "./articles.css"

import esbocoProject from '../assets/espoço-projeto.png'
import ceoPhotos from '../assets/ceoPhotos.png'
import service from '../assets/services.jpg'	

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
                    <p className="text-first-article">Somos um escritório de arquitetura e engenharia localizado na cidade de Arapongas/PR. Fundado por <span className="bold-text">Willian B. Santiago</span>, graduado em Engenharia Civil e Pós-graduando em Engenharia de Avaliação e Perícias, e <span className="bold-text">Deivid R. Ribeiro</span>, graduado em Arquitetura e Urbanismo, somos uma equipe altamente qualificada e comprometida em oferecer soluções eficientes e personalizadas para nossos clientes.</p>
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
            <div className="divisor"></div>
            <div className="article-services">
                <div className="article-services-divImage">
                    <h2 className='article-services-title' >Serviços</h2>
                    <p className='article-services-description'>Visualize nossa ampla variedade de serviços e uma pequena descrição sobre eles.</p>
                    <img src={service} alt="" className="article-services-image" />
                </div>
                <div className="article-services-list">
                    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                        <Accordion.Item className="AccordionItem" value="item-1">
                            <Accordion.Header className="AccordionHeader">
                                <Accordion.Trigger className='AccordionTrigger'>
                                    Projetos Arquitetônicos
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className='AccordionContent'>
                                Oferecemos serviços de design e planejamento arquitetônico para uma variedade de tipos de projetos, incluindo residenciais, comerciais e industriais. Nós trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades e criar projetos personalizados que atendam às suas expectativas e orçamento.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item className="AccordionItem" value="item-2">
                            <Accordion.Header className="AccordionHeader">
                                <Accordion.Trigger className='AccordionTrigger'>
                                    Projetos Complementares
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className='AccordionContent'>
                                Oferecemos serviços de projetos complementares, como projetos estruturais, elétricos, hidráulicos, sanitários, entre outros. Estes projetos complementares são fundamentais para a segurança, funcionalidade e conforto dos edifícios, e nós garantimos que cada projeto seja personalizado para atender às necessidades do cliente.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item className="AccordionItem" value="item-3">
                            <Accordion.Header className="AccordionHeader">
                                <Accordion.Trigger className='AccordionTrigger'>
                                    Projetos de Interiores
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className='AccordionContent'>
                                Com a nossa vasta experiência em projetos arquitetônicos e de interiores, oferecemos serviços de design de interiores para projetos residenciais e comerciais. Nós trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades e desejos, e criamos soluções personalizadas que são bonitas, funcionais e confortáveis.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item className="AccordionItem" value="item-4">
                            <Accordion.Header className="AccordionHeader">
                                <Accordion.Trigger className='AccordionTrigger'>
                                    Laudos Técnicos
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className='AccordionContent'>
                                Nossos serviços de laudos técnicos são projetados para ajudar nossos clientes a identificar problemas estruturais, de segurança ou ambientais em suas propriedades. Nós oferecemos uma ampla gama de serviços de laudos técnicos, incluindo laudos de vistoria, laudos de inspeção, laudos periciais, entre outros.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item className="AccordionItem" value="item-5">
                            <Accordion.Header className="AccordionHeader">
                                <Accordion.Trigger className='AccordionTrigger'>
                                    Administração e Execução de Obras
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className='AccordionContent'>
                                Oferecemos serviços de gerenciamento e administração de obras para garantir que cada projeto seja executado com eficiência e dentro do prazo e orçamento estabelecidos. Nós trabalhamos em estreita colaboração com empreiteiros e fornecedores para garantir que todas as etapas do projeto sejam executadas com qualidade e dentro dos padrões de segurança e regulamentação.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item className="AccordionItem" value="item-6">
                            <Accordion.Header className="AccordionHeader">
                                <Accordion.Trigger className='AccordionTrigger'>
                                    Consultorias 
                                    <ChevronDownIcon className="AccordionChevron" aria-hidden />
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className='AccordionContent'>
                            Oferecemos serviços de consultoria personalizados para ajudar nossos clientes a tomar decisões informadas em todas as fases de seus projetos. Nossa equipe de consultoria é altamente qualificada e experiente e estará disponível para ajudar em uma variedade de questões relacionadas à arquitetura, engenharia e construção.
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>                        
                </div>
            </div>
        </div>
    )
}

export default Articles