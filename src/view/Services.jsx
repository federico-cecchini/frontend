import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Article from '../components/Article'
import Service from '../components/Service'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import ServiceHero from '../assets/services.jpg'
import '../App.css'

const services = [
    {
        img: './vite.svg',
        title: 'Osteopatia strutturale',
        description: 'Tecniche dirette e precise per ristabilire la mobilità articolare, ridurre il dolore muscolo-scheletrico e migliorare la postura. Ideale per mal di chiena, cervicalgia e traumi sportivi'
    },
    {
        img: './vite.svg',
        title: 'Osteopatia viscerale',
        description: 'Miglioramento della mobilità e funzionalità degli organi interni per alleviare disturbbi digestivi, reflusso, stipsi e tensioni legate allo stress emotivo.'
    }
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