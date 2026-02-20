import { Link } from 'react-router';
import { useTranslation } from 'react-i18next'

import instagram_dark from '../assets/instagram_dark.png'
import instagram_light from '../assets/instagram_light.png'
import linkedin_dark from '../assets/linkedin_dark.png'
import linkedin_light from '../assets/linkedin_light.png'
import '../App.css'

function Footer() {
    const { t } = useTranslation()

    return (
        <footer className='flex flex-col gap-2 dark:bg-dark-bg dark:text-white text-black px-6 py-8 font-Montserrat'>
            <section className='flex justify-between'>
                <div className="flex flex-col md:flex-row gap-6">
                    <section className='flex items-center'>
                        <img src='./logo.svg' alt="Logo" className="w-10 h-10"/>
                        <h1 className='font-semibold font-Poppins'>Dott. Federico Cecchini Osteopata D.O.</h1>
                    </section>
                    <div className="opacity-55 flex gap-6 items-center">
                        <Link to="/about">{t("about")}</Link>
                        <Link to="/services">{t("service")}</Link>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <a href="https://www.instagram.com/osteopata_federico_cecchini/"><img src={window.matchMedia('(prefers-color-scheme: dark)') ? instagram_dark : instagram_light} alt="" className='w-6'/></a>
                    <a href="https://www.linkedin.com/in/federico-cecchini-9514602b9/"><img src={window.matchMedia('(prefers-color-scheme: dark)') ? linkedin_dark : linkedin_light} alt="" className='w-6'/></a>
                </div>
            </section>
            <hr />
            <div className="opacity-55 md:flex md:justify-between">
                <h1>Federico Cecchini. {t("footer.all_rights")}</h1>
                <section className='md:flex md:gap-3'>
                    <p>P.IVA: 12057580016</p>
                    <p>Privacy Policy</p>
                </section>
            </div>
        </footer>
    )
}

export default Footer;