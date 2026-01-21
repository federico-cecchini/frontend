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
            <section className='relative flex justify-center dark:bg-dark-bg h-[65vh] md:h-[20vh]'>
                <Statistics years={10} patients={500} percentage={95}/>
            </section>
            <Article title={"La Mia Filosofia:"} subtitle={"Ascolto e Precisione"} text={"Non mi limito a trattare il sintomo, ma cerco la causa scatenante per ripristinare l’armonia del corpo. Attraverso un contatto umano e professionale, costruiamo insieme un percorso verso il benessere duraturo.\nL’Osteopatia è una disciplina dedicata all’equilibrio strutturale del corpo. Con un approccio scientifico e personalizzato, interviene su muscoli, articolazioni, visceri, fasce e postura per ottimizzare il movimento, prevenire tensioni e favorire un benessere duraturo, in modo preciso e mirato."}/>
            <section className='dark:bg-dark-secondary-bg bg-light-secondary-bg py-20 px-6 md:px-8 md:py-24 xl:px-16 xl:py-32'>
                <TimeTable />
            </section>
            <Testimonials />
            <Place />
            <Footer />
        </>
    )
}

export default Home