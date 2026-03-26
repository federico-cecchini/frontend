import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Article from '../components/Article'
import TimeTable from '../components/TimeTable'
import Testimonials from '../components/Testimonials'
import Place from '../components/Place'
import Footer from '../components/Footer'
import HomeImage from '../assets/home.jpeg'
import '../App.css'

function Home() {
    const { t } = useTranslation()

    return(
        <>
            <Helmet>
                <title>Dott. Federico Cecchini Osteopata D.O. | Torino - Collegno - Susa</title>

                <meta name="description" content="Osteopatia a Torino, Collegno e Susa: Trattamenti per il benessere e per l'equilibrio del corpo. Approccio osteopatico che unisce rigore scientifico, praticità ed empatia."/>

                <meta property="og:title" content="Dott. Federico Cecchini Osteopata D.O. | Torino - Collegno - Susa"/>
                <meta property="og:description" content="Osteopatia a Torino, Collegno e Susa: Trattamenti per il benessere e per l'equilibrio del corpo. Approccio osteopatico che unisce rigore scientifico, praticità ed empatia."/>
                <meta property="og:image" content="https://osteopata-federico-cecchini.it/logo.svg"/>
                <meta property="og:url" content="https://osteopata-federico-cecchini.it/"/>
                <meta property="og:site_name" content="Dott. Federico Cecchini Osteopata D.O. | Torino - Collegno - Susa"/>
                <meta property="og:type" content="website"/>

                <link rel="canonical" href="https://osteopata-federico-cecchini.it/" />
            </Helmet>

            <Nav />
            <Hero title={t("view_home.hero.title")} subtitle={t("view_home.hero.subtitle")} text={t("view_home.hero.text")} image={HomeImage}/>
            <section className='relative flex justify-center dark:bg-dark-bg h-[110vh] md:h-[15vh]'>
                <Statistics years={9} patients={10000} percentage={100} hours={1200} office={2} suggested={95}/>
            </section>
            <Article title={t("view_home.article.title")} subtitle={t("view_home.article.subtitle")} text={t("view_home.article.text")} category={"Interaction Home Paragraph"}/>
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