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
import Occlusion from '../assets/occlusion.jpg'
import Sport from '../assets/sport.jpg'
import Enf from '../assets/enf.jpg'

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
        img: Occlusion,
        title: 'Osteopatia e Occlusione',
        description: 'La relazione tra occlusione e postura è fondamentale. Il trattamento dell’osteopata insieme a quello dell’odontoiatra fa si che questi due sistemi si integrino al meglio per il benessere del paziente.'
    },
    {
        img: Sport,
        title: 'Osteopatia per lo Sport',
        description: 'L\'Osteopatia applicata allo Sport è fondamentale per il miglioramento della prestazione sportiva e per la prevenzione degli infortuni.'
    },
    {
        img: Enf,
        title: 'ENF Terapia',
        description: 'È un\'innovativa elettroterapia che penetra anche nei punti più reconditi, offrendo precisione ineguagliabile.Grazie alle frequenze generate, individua con precisione le fonti di dolore, avviando una terapia di riequilibrio corporeo. Questo processo regolare di modulazione delle onde promuove l’armonia bioelettrica delle membrane cellulari, fondamentali per i tessuti interessati.'
    },
]

const FAQs = [
    {
        question: 'Quanto dura una seduta?',
        answer: 'Ogni visita dura in media tra i 40 e i 60 minuti, ma non guardo mai l’orologio. Mi interessa capire la causa che sta generando il dolore, non solo il sintomo. Preferisco dedicare qualche minuto in più per analizzare nel dettaglio ciò che sta realmente accadendo al tuo corpo, perché la precisione, quando si parla di salute, fa la differenza.'
    },
    {
        question: 'L’osteopatia è dolorosa?',
        answer: 'Assolutamente no. un trattamento ad hoc non deve far male, ma può generare sensazioni diverse: alleggerimento, calore, rilascio, decompressione, migliore libertà di movimento e assenza di dolore. L\'obiettivo non è forzare il corpo, ma accompagnarlo verso il suo equilibrio naturale. Molti pazienti alla fine si alzano dal lettino con una sensazione di leggerezza e chiarezza fisica nuova'
    },
    {
        question: 'Serve portare esami?',
        answer: 'Se hai già risonanze, lastre o referti recenti, portali: mi aiutano a contestualizzare il quadro. Non sono indispensabili, ma possono accelerare l\'analisi. Nel mio studio ogni valutazione parte sempre da una visione globale, non da un singolo esame.'
    },
    {
        question: 'Mi "scrocchierà" tutto il corpo?',
        answer: 'No. Le manipolazioni articolari (i classici "crack") non sono sempre necessarie e vengono eseguite solo se indicate per il paziente e sicure. Nel mio metodo integro approcci dolci e progressivi, orientati al risultato, non allo "scrocchio". In molti casi si lavora su muscoli, fasce e articolazioni senza alcun rumore... ma con effetti concreti.'
    },
    {
        question: 'Come devo vestirmi per svolgere il trattamento?',
        answer: 'Consiglio un abbigliamento comodo: pantalone morbido o tuta, maglia leggera, niente jeans o gonne rigide. Devi sentirti libero di muoverti e rilassarti.'
    },
    {
        question: 'Come devo vestirmi per svolgere il trattamento?',
        answer: 'Consiglio un abbigliamento comodo: pantalone morbido o tuta, maglia leggera, niente jeans o gonne rigide. Devi sentirti libero di muoverti e rilassarti.'
    },
    {
        question: 'Quante sedute dovrò fare per risolvere il mio problema?',
        answer: 'Dipende dal tipo di problema, dalla sua durata e da quanto il corpo risponde al trattamento. Nella maggior parte dei casi, già dopo la prima o seconda seduta si percepisce un netto miglioramento. Il mio approccio non si limita a spegnere il sintomo, ma a risolvere la causa e prevenire le recidive, per cui costruisco un percorso su misura per ogni persona. L’obiettivo è ottenere risultati stabili, non trattamenti infiniti.'
    },
    {
        question: 'Come si svolge la prima visita?',
        answer: 'La prima visita è un vero e proprio check-up del tuo corpo, non un semplice trattamento. Si parte da un dialogo approfondito per comprendere storia, stile di vita e abitudini posturali. Poi passo all’analisi posturale BioTonix 3D per individuare gli squilibri strutturali e funzionali. Infine, valuto manualmente ciò che il corpo comunica e intervengo con tecniche mirate per ristabilire equilibrio e funzionalità. L’obiettivo non è solo togliere il dolore, ma capire perché è comparso e impedire che torni.'
    },
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