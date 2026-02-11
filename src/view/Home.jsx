import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation()

    return(
        <>
            <Nav />
            <Hero title={t("view_home.hero.title")} subtitle={t("view_home.hero.subtitle")} text={t("view_home.hero.text")}/>
            <section className='relative flex justify-center dark:bg-dark-bg h-[50vh] md:h-[15vh]'>
                <Statistics years={10} patients={9000} percentage={95}/>
            </section>
            <Article title={t("view_home.article.title")} subtitle={t("view_home.article.subtitle")} text={t("view_home.article.text")}/>
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