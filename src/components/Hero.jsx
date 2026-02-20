import { useTranslation } from 'react-i18next'

import CTA from './CTA'
import SecondaryButton from './SecondaryButton'
import BackgroundHero from '../assets/background.jpg'
import '../App.css'

function Hero({title, subtitle, image, text}) {
    const { t } = useTranslation()

    return (
        <section className={`py-16 px-6 xl:px-16 flex ${image ? 'justify-between gap-10' : 'justify-center'} bg-center bg-no-repeat`} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5)), url(${BackgroundHero})`}}>
            <div className='flex flex-col gap-10'>
                <div className={`font-Poppins font-bold text-2xl text-white md:text-5xl ${image ? 'text-left' : 'text-center'}`}>
                    {
                        title.split('\\n').map((line, index) => (
                            <h1 key={index}>{line}</h1>
                        ))
                    }
                    <h1 className="bg-gradient-to-r from-gradient-start-bg to-white bg-clip-text text-transparent">{subtitle}</h1>
                </div>
                <section className='md:text-2xl'>
                    {
                        text.split('\n').map((line, index) => (
                            <p key={index} className={`font-Montserrat font-normal text-white !text-opacity-55 text-xl ${image ? 'text-left' : 'text-center'}`}>{line}</p>
                        ))
                    }
                </section>
                <div className={`flex flex-col md:flex-row md:justify-center gap-3 ${image ? 'md:!justify-start' : ''}`}>
                    <CTA to={'https://api.whatsapp.com/send/?phone=+393487069126&text=Buongiorno%2C%20vorrei%20prenotare%20una%20prima%20visita'} text={t("hero.contact")} target='_blank'/>
                    <SecondaryButton to={'/#timeTable:~:text=Chiuso-,Orari%20di%20Apertura,-Ricevo%20su%20appuntamento'} text={t("hero.times")}/>
                </div>
            </div>
            {image && <img src={image} alt="Hero Image" className="hidden xl:block w-96 h-96 rounded-xl" />}
        </section>
    )
}

export default Hero