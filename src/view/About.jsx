import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Article from '../components/Article'
import Degree from '../components/Degree'
import Footer from '../components/Footer'
import AboutHero from '../assets/about.jpg'
import Library from '../assets/library.jpg'
import Degre from '../assets/degree.png'
import Verify from '../assets/Verify.png'
import Osteopath from '../assets/orthopedics.png'
import '../App.css'

const degrees = [
    {
        img: Degre,
        year: "2013",
        title: "Laurea in Scienze Motorie Sportive",
        institution: "SUISM di Torino"
    },
    {
        img: Verify,
        year: "2019",
        title: "Diploma in Osteopatia (D.O.)",
        institution: "SIOTEMA"
    },
    {
        img: Osteopath,
        year: "Oggi",
        title: "Formazione continua",
        institution: "Aggiornamento costante su nuove tecniche"
    },
]

function About() {
    return (
        <>
            <Nav />
            <Hero title="Il Tocco Umano nella\nMedicina di\nPrecisione" subtitle="" text={"Un approccio osteopatico che unisce rigore scientifico ed empatia profonda per il benessere del paziente. Il mio obiettivo non è solo curare il sintomo. ma comprendere la persona."} image={AboutHero}/>
            <section className='dark:!bg-dark-secondary-bg bg-light-secondary-bg flex flex-col xl:flex-row xl:py-28'>
                <Article title={"Formazione e Titoli"} text={"Il mio percorso di studi è iniziato al Politecnico di Torino nel 2008. Dopo due anni ho scoperto che ciò che mi affascinava davvero era la biomeccanica, la “meccanica della vita”, e ho deciso di approfondire la Chinesiologia, la scienza del movimento umano, laureandomi con lode in Scienze Motorie e Sportive presso la SUISM di Torino nel 2013.\nDurante l’università ho avuto il primo approccio all’osteopatia, grazie a un professore ortopedico e osteopata, e ho capito subito che quella sarebbe stata la mia strada. Sei anni più tardi ho conseguito il diploma in Osteopatia, continuando a perfezionarmi con corsi post-graduate in ambito osteopatico, fisioterapico e ortopedico, per offrire trattamenti sicuri, mirati e basati sulle evidenze scientifiche."} img={Library} className={"dark:!bg-dark-secondary-bg xl:w-2/3"}/>
                <div className="flex flex-col gap-6 px-6 pb-24 xl:w-1/3 xl:py-20">
                    {
                        degrees.map((degree, index) => (
                            <Degree 
                                key={index}
                                img={degree.img}
                                year={degree.year}
                                title={degree.title}
                                institution={degree.institution}
                                isLast={index === degrees.length - 1}
                            />
                        ))
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About