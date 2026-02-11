import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Article from '../components/Article'
import TimeTable from '../components/TimeTable'
import Testimonials from '../components/Testimonials'
import Place from '../components/Place'
import Footer from '../components/Footer'
import '../App.css'

function Home() {
    return(
        <>
            <Nav />
            <Hero title="L'arte di saper" subtitle="ascoltare con le mani" text={"Il benessere non è un lusso. È una scelta. La salute è movimento. Il movimento è vita."}/>
            <section className='relative flex justify-center dark:bg-dark-bg h-[50vh] md:h-[15vh]'>
                <Statistics years={10} patients={9000} percentage={95}/>
            </section>
            <Article title={"La Mia Filosofia:"} subtitle={"Ascolto e Precisione"} text={"L’Osteopatia è una disciplina dedicata all’equilibrio strutturale del corpo.\nCon un approccio scientifico e personalizzato, interviene su muscoli, articolazioni, fasce, visceri e postura per migliorare il movimento, ridurre tensioni e favorire un benessere duraturo.\nIl trattamento è clinicamente orientato, altamente specializzato e mirato alla risoluzione di disfunzioni muscolo-scheletriche attraverso tecniche manuali professionali.\n\nOgni seduta è costruita sul singolo caso e si sviluppa in queste fasi:\n\n1. Anamnesi\nColloquio iniziale per comprendere origine del disturbo, stile di vita, storia clinica ed escludere eventuali controindicazioni mediche.\n\n2. Valutazione\nOsservazione della postura e dei movimenti, test di mobilità e verifiche funzionali per individuare le aree di restrizione.\n\n3. Analisi manuale\nAttraverso la palpazione l’osteopata valuta mobilità articolare, tensioni fasciali e qualità dei tessuti.\n\n4. Trattamento\nTecniche manuali personalizzate — strutturali, miofasciali, cranio-sacrali o viscerali — selezionate in base alle esigenze specifiche della persona.\n\n5. Rivalutazione\nControllo dei miglioramenti e indicazioni post-trattamento su esercizi, posture e gestione quotidiana.\n\nNelle 24-48 ore successive è possibile avvertire lieve affaticamento o indolenzimento: è una normale risposta fisiologica di adattamento.\nIl trattamento è progettato per offrire benefici rapidi anche in caso di dolore acuto o riacutizzazioni.\n\nN.B.\nIl professionista si riserva sempre di valutare se il caso sia idoneo al trattamento osteopatico o richieda intervento medico."}/>
            <section className='dark:bg-dark-secondary-bg bg-light-secondary-bg py-20 px-6 md:px-8 md:py-24 xl:px-16 xl:py-32'id='timeTable'>
                <TimeTable />
            </section>
            <Testimonials />
            <Place />
            <Footer />
        </>
    )
}

export default Home