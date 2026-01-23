import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Article from '../components/Article'
import Degree from '../components/Degree'
import Footer from '../components/Footer'
import AboutHero from '../assets/about.jpg'
import '../App.css'

const degrees = [
    {
        img: "./vite.svg",
        year: "2010",
        title: "Laurea in Scienze Motorie Sportive",
        institution: "Università di Bologna"
    },
    {
        img: "./vite.svg",
        year: "2016",
        title: "Diploma in Osteopatia (D.O.)",
        institution: "Scuola Italiana di Osteopatia"
    },
    {
        img: "./vite.svg",
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
                <Article title={"Formazione e Titoli"} text={"Il mio percorso accademico è stato guidato da una costante ricerca dell’eccellenza. Credo che la formazione continua si al’unico modo per garantire ai miei pazienti le cure migliori e più aggiornate."} img={"./vite.svg"} className={"dark:!bg-dark-secondary-bg xl:w-2/3"}/>
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