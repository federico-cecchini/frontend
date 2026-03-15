import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Article from '../components/Article'
import Degree from '../components/Degree'
import Footer from '../components/Footer'
import PhotoGallery from '../components/PhotoGallery'
import AboutHero from '../assets/generic.jpg'
import Library from '../assets/library.jpg'
import Degre from '../assets/degree.png'
import Verify from '../assets/verify.png'
import Osteopath from '../assets/orthopedics.png'
import '../App.css'


function About() {
    
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation()

    const degrees = [
        {
            img: Degre,
            year: "2013",
            title: t("view_about.bachelor.title"),
            institution: t("view_about.bachelor.institute")
        },
        {
            img: Verify,
            year: "2019",
            title: t("view_about.degree.title"),
            institution: t("view_about.degree.institute")
        },
        {
            img: Osteopath,
            year: t("view_about.others.year"),
            title: t("view_about.others.title"),
            institution: t("view_about.others.institute")
        },
    ]

    return (
        <>
            <Helmet>
                <title>Chi sono | Dott. Federico Cecchini Osteopata D.O. | Torino - Collegno - Susa</title>

                <meta name="description" content="Scopri il percorso professionale del Dott. Federico Cecchini, osteopata D.O. laureato in Scienze Motorie presso SUISM Torino e diplomato in osteopatia."/>

                <meta property="og:title" content="Chi sono | Dott. Federico Cecchini Osteopata D.O. | Torino - Collegno - Susa"/>
                <meta property="og:description" content="Scopri il percorso professionale del Dott. Federico Cecchini, osteopata D.O. laureato in Scienze Motorie presso SUISM Torino e diplomato in osteopatia."/>
                <meta property="og:image" content="https://osteopata-federico-cecchini.it/logo.svg"/>
                <meta property="og:url" content="https://osteopata-federico-cecchini.it/about"/>
                <meta property="og:site_name" content="Chi sono | Dott. Federico Cecchini Osteopata D.O. | Torino - Collegno - Susa"/>
                <meta property="og:type" content="website"/>

                <link rel="canonical" href="https://osteopata-federico-cecchini.it/about" />
            </Helmet>

            <PhotoGallery isOpen={isOpen} setIsClose={setIsOpen}/>

            <Nav />
            <Hero title={t("view_about.hero.title")} subtitle={t("view_about.hero.subtitle")} text={t("view_about.hero.text")} image={AboutHero}/>
            <section className='dark:!bg-dark-secondary-bg bg-light-secondary-bg flex flex-col xl:flex-row xl:py-28'>
                <Article title={t("view_about.article.title")} text={t("view_about.article.text")} img={Library} className={"dark:!bg-dark-secondary-bg xl:w-2/3"} category={"Interaction About Paragraph"}/>
                <div className="flex flex-col gap-6 px-6 pb-24 xl:w-1/3 xl:py-20">
                <p className='xl:py-10 whitespace-nowrap text-cta-bg cursor-pointer' onClick={() => setIsOpen(!isOpen)}>{t("view_about.open_gallery")}</p>
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