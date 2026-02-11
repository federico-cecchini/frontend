import { useTranslation } from 'react-i18next'

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


function Services() {
    const { t } = useTranslation()
    
    const services = [
        {
            img: Generic,
            title: t("view_service.service.general.title"),
            description: t("view_service.service.general.desc")
        },
        {
            img: Child,
            title: t("view_service.service.child.title"),
            description: t("view_service.service.child.desc")
        },
        {
            img: Pregnant,
            title: t("view_service.service.pregnant.title"),
            description: t("view_service.service.pregnant.desc")
        },
        {
            img: Occlusion,
            title: t("view_service.service.occlusion.title"),
            description: t("view_service.service.occlusion.desc")
        },
        {
            img: Sport,
            title: t("view_service.service.sport.title"),
            description: t("view_service.service.sport.desc")
        },
        {
            img: Enf,
            title: t("view_service.service.enf.title"),
            description: t("view_service.service.enf.desc")
        }
    ]
    
    const FAQs = [
        {
            question: t("view_service.faqs.last.question"),
            answer: t("view_service.faqs.last.answer")
        },
        {
            question: t("view_service.faqs.hurt.question"),
            answer: t("view_service.faqs.hurt.answer")
        },
        {
            question: t("view_service.faqs.exams.question"),
            answer: t("view_service.faqs.exams.answer")
        },
        {
            question: t("view_service.faqs.body.question"),
            answer: t("view_service.faqs.body.answer")
        },
        {
            question: t("view_service.faqs.wear.question"),
            answer: t("view_service.faqs.wear.answer")
        },
        {
            question: t("view_service.faqs.number.question"),
            answer: t("view_service.faqs.number.answer")
        },
        {
            question: t("view_service.faqs.first.question"),
            answer: t("view_service.faqs.first.answer")
        }
    ]

    return (
        <>
            <Nav />
            <Hero title={t("view_service.hero.title")} subtitle={t("view_service.hero.subtitle")} text={t("view_service.hero.text")} image={ServiceHero}/>
            <Article title={t("view_service.article.title")} text={t("view_service.article.text")} className={"bg-light-secondary-bg "}/>
            <section className='px-6 md:px-8 dark:bg-dark-bg bg-light-secondary-bg flex flex-col gap-6 pb-20'>
                {
                    services.map((service, index) => (
                        <Service key={index} img={service.img} title={service.title} description={service.description} />
                    ))
                }
            </section>
            <div className="bg-white dark:bg-dark-secondary-bg px-6 md:px-8 py-20 flex flex-col gap-12">
                <h1 className='dark:text-white text-black font-Poppins text-4xl font-bold whitespace-nowrap text-center'>{t("view_service.faqs.title")}</h1>
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