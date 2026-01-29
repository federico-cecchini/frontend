import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Article from '../components/Article'
import TimeTable from '../components/TimeTable'
import Testimonials from '../components/Testimonials'
import Place from '../components/Place'
import '../App.css'
import Footer from '../components/Footer'

function Home() {
    return(
        <>
            <Nav />
            <Hero title="Osteopatia per il tuo" subtitle="Benessere Quotidiano" text={"Ritrova l’equilibrio con un approccio umano e preciso.\nUn percorso di cura personalizzato per la tua salute fisica e mentale."}/>
            <section className='relative flex justify-center dark:bg-dark-bg h-[50vh] md:h-[15vh]'>
                <Statistics years={10} patients={9000} percentage={95}/>
            </section>
            <Article title={"La Mia Filosofia:"} subtitle={"Ascolto e Precisione"} text={"L’Osteopatia è una disciplina dedicata all’equilibrio strutturale del corpo. Con un approccio scientifico e personalizzato, interviene su muscoli, articolazioni, visceri, fasce e postura per ottimizzare il movimento, prevenire tensioni e dolori, favorire un benessere duraturo, in modo preciso e mirato. (soft & safe). Il trattamento che offro è un intervento osteopatico, clinicamente orientato e altamente specializzato, mirato a risolvere disfunzioni muscolo-scheletriche con un approccio professionale che appartiene all’ambito sanitario–manuale.\nOgni trattamento è costruito sul singolo caso e si articola in queste fasi:\n1. Anamnesi (Il Colloquio)\nTutto inizia con le parole. L'osteopata agisce come un investigatore per capire l'origine del dolore, che spesso non coincide con il punto in cui viene percepito\n* Storia del sintomo: Da quanto tempo é presente il dolore? Come è insorto?\n* Stile di vita: Lavoro, sport, stress e abitudini alimentari.\n* Storia clinica: Traumi passati, interventi chirurgici, cicatrici o patologie pregresse. Questo serve anche a escludere \"red flags\" (controindicazioni mediche al trattamento).\n\n2. Esame Obiettivo e Valutazione\nQui si passa all'azione. L'osteopata osserva come il tuo corpo si muove nello spazio e la postura che assume\n* Osservazione statica: Valutazione della postura, delle curve della colonna e di eventuali asimmetrie.\n* Test attivi e passivi: Ti verrà chiesto di compiere determinati movimenti per vedere dove il corpo è in restrizione di mobilità. \n* Test di esclusione: Test ortopedici o neurologici per assicurarsi che il problema sia di competenza osteopatica.\n\n3. Palpazione Percettiva e Test Osteopatici\nL'osteopata usa le mani per \"ascoltare\" i tessuti. Ricerca la disfunzione somatica basandosi sui parametri della TART.\n* Mobilità articolare: Verifica il fisiologico Range of Motion delle articolazioni periferiche e delRachide.\n* Tensione fasciale: Valuta lo stato del tessuto connettivo che avvolge muscoli e organi.\n\n4. Il Trattamento (L'Atto Manipolativo)\nIn base a quanto emerso, l'osteopata sceglie le tecniche più adatte. Non esiste un protocollo fisso; il trattamento è personalizzato al 100%. Le tecniche principali includono:\n* Strutturali: Tecniche ad alta velocità e bassa ampiezza HVLA (i famosi \"thrust\" o scrocchi) per ripristinare la mobilità articolare, resettare il Tono muscolare e ridurre il dolore.\n* Miofasciali: Lavoro dolce sui tessuti molli e sulle fasce per equilibrare le tensioni muscolo-fasciali, tendineo-legamentose.\n* Cranio-sacrali: Pressioni lievissime sulle ossa del cranio e sull'osso sacro per equilibrare MRP e le tensioni del rachide.\n* Viscerali: Manipolazioni addominali per migliorare la mobilità e la motilità degli organi e delle fasce che li avvolgono\n\n5. Rivalutazione e Consigli\nDopo il trattamento, l'osteopata controlla se i test iniziali sono migliorati.\n* Verifica: Il dolore è diminuito? Il movimento è più fluido? \n* Consigli post-seduta: Suggerimenti su esercizi da eseguire a casa, posture corrette da assumere sia di giorno che durante la notte.\nNota bene: Nelle 24-48 ore successive è normale avvertire un po' di stanchezza o un leggero indolenzimento (reazione infiammatoria fisiologica). È il corpo che si sta riassestando verso un nuovo equilibrio (Omeostasi).\nIl trattamento è pensato per fornire un beneficio immediato, anche in situazioni di dolore improvviso o di riacutizzazione di un disturbo cronico.\nN.B. Il professionista si riserva in ogni momento di valutare se il caso sia adeguato al trattamento osteopatico o necessiti, per la tutela dell’ospite, di un intervento medico-ospedaliero."}/>
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