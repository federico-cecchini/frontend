import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

import CTA from './CTA'
import '../App.css'

function Nav() {
    const { t } = useTranslation()

    return(
        <nav className='flex flex-col md:flex-row md:justify-between gap-4 p-6 dark:bg-dark-bg dark:text-white text-black'>
            <div className="flex items-center">
                <img src='./logo.svg' alt="Logo" className="w-14 h-14"/>
                <h1 className='font-Poppins font-bold text-2xl'>Dott. Federico Cecchini Osteopata D.O.</h1>
            </div>
            <section className='flex gap-6 font-Poppins font-medium text-base items-center'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>{t("about")}</Link>
                <CTA to={"/services"} text={t("service")} />
            </section>
        </nav>
    )
}

export default Nav