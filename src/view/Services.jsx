import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import '../App.css'
import Article from '../components/Article'

function Services() {
    return (
        <>
            <Nav />
            <Hero title="Ritrova il tuo equilibrio naturale" subtitle="" text={"Ogni corpo racconta una storia. Attraverso trattamenti manuali precisi e personalizzati, aiuto i miei pazienti a ritroare il benessere, eliminare il dolore e ristabilire l’armonia tra mente e corpo."} image={'./vite.svg'}/>
            <Article title={"Percorsi di cura personalizzati"} text={"Il mio intervento è un trattamento osteopatico clinicamente orientato, mirato alla risoluzione di disfunzioni muscolo-scheletriche attraverso tecniche manuali specifiche e altamente specializzate.\nOgni trattamento è personalizzato sul singolo caso, con una valutazione immediata e un intervento mirato.\nL’obiettivo è fornire un beneficio concreto anche in presenza di dolore acuto o riacutizzazione di disturbi cronici."}/>
            <Footer />
        </>
    )
}

export default Services