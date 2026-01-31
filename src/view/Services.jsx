import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Article from '../components/Article'
import Service from '../components/Service'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ServiceHero from '../assets/services.jpg'
import Generic from '../assets/generic.jpg'
import Child from '../assets/child.jpg'
import Pregnant from '../assets/pregnant.jpg'
import Sport from '../assets/sport.jpg'

import '../App.css'

const services = [
    {
        img: Generic,
        title: 'Osteopatia Generale',
        description: 'L\'Osteopatia, recentemente individuata tra le professioni sanitarie, si avvale di un approccio esclusivamente manuale che ha come scopo il miglioramento dello stato di salute della persona. In particolare, attraverso il trattamento manipolativo osteopatico della disfunzione somatica, si occupa di ripristinare la funzionalità e lo stato di salute perduti a causa di un trauma o di una condizione patologica. L\'osteopatia inoltre ha un ruolo importante nella prevenzione e nel mantenimento della salute, e può essere integrata nei percorsi di cura e riabilitazione della medicina convenzionale.'
    },
    {
        img: Child,
        title: 'Osteopatia Pediatrica',
        description: 'L\'Osteopatia Pediatrica è molto utile già dai primi giorni di vita per migliorare il benessere del bimbo dopo il parto. Migliora la qualità del sonno, allevia le coliche e riduce i disturbi legati al reflusso.L\'Osteopatia Pediatrica è anche rivolta ai bimbi più grandi ovviamente fino poi all\'età adulta.'
    },
    {
        img: Pregnant,
        title: 'Osteopatia in Gravidanza',
        description: 'L\'Osteopatia durante la gravidanza aiuta la futura Mamma ad alleviare i dolori dovuti alla variazione della postura e a migliorare la reazione del fisico prima e dopo il parto.'
    },
    {
        img: './vite.svg',
        title: 'Osteopatia e Occlusione',
        description: 'La relazione tra occlusione e postura è fondamentale. Il trattamento dell’osteopata insieme a quello dell’odontoiatra fa si che questi due sistemi si integrino al meglio per il benessere del paziente.'
    },
    {
        img: Sport,
        title: 'Osteopatia per lo Sport',
        description: 'L\'Osteopatia applicata allo Sport è fondamentale per il miglioramento della prestazione sportiva e per la prevenzione degli infortuni.'
    },
]

const FAQs = [
    {
        question: 'Quanto dura una seduta?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        question: 'Cosa devo portare al primo appuntamento?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        question: 'L’osteopatia è dolorosa?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        question: 'Come devo vestirmi?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

function Services() {
    return (
        <>
            <Nav />
            <Hero title="Ritrova il tuo equilibrio \nnaturale" subtitle="" text={"Ogni corpo racconta una storia. Attraverso trattamenti manuali precisi e personalizzati, aiuto i miei pazienti a ritroare il benessere, eliminare il dolore e ristabilire l’armonia tra mente e corpo."} image={ServiceHero}/>
            <Article title={"Percorsi di cura personalizzati"} text={"Il mio intervento è un trattamento osteopatico clinicamente orientato, mirato alla risoluzione di disfunzioni muscolo-scheletriche attraverso tecniche manuali specifiche e altamente specializzate.\nOgni trattamento è personalizzato sul singolo caso, con una valutazione immediata e un intervento mirato.\nL’obiettivo è fornire un beneficio concreto anche in presenza di dolore acuto o riacutizzazione di disturbi cronici."} className={"bg-light-secondary-bg "}/>
            <section className='px-6 md:px-8 dark:bg-dark-bg bg-light-secondary-bg flex flex-col gap-6 pb-20'>
                {
                    services.map((service, index) => (
                        <Service key={index} img={service.img} title={service.title} description={service.description} />
                    ))
                }
            </section>
            <div className="bg-white dark:bg-dark-secondary-bg px-6 md:px-8 py-20 flex flex-col gap-12">
                <h1 className='dark:text-white text-black font-Poppins text-4xl font-bold whitespace-nowrap text-center'>Domande Frequenti</h1>
                {
                    FAQs.map((faq, index) => (
                        <FAQ key={index} question={faq.question} answer={faq.answer} />
                    ))
                }
            </div>
            <Footer />
        </>
    )
}

export default Services