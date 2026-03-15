import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

import '../App.css'

function Nav() {
    const { t } = useTranslation()

    return(
        <nav className='flex flex-col md:flex-row md:justify-between gap-4 p-6 dark:bg-dark-bg dark:text-white text-black'>
            <Link className="flex items-center" to={"/"}>
                <img src='./logo.svg' alt="Logo" className="w-14 h-14"/>
                <h1 className='font-Poppins font-bold text-2xl'>Dott. Federico Cecchini Osteopata D.O.</h1>
            </Link>
            <section className='flex gap-6 font-Poppins font-medium text-base items-center'>
                <Link to={"/"} className={`whitespace-nowrap ${window.location.pathname === "/" ? "px-4 py-3 bg-cta-bg rounded-xl font-bold text-white font-Poppins" : ""}`}>Home</Link>
                <Link to={"/about"} className={`whitespace-nowrap ${window.location.pathname === "/about" ? "px-4 py-3 bg-cta-bg rounded-xl font-bold text-white font-Poppins" : ""}`}>{t("about")}</Link>
                <Link to={"/services"} className={`whitespace-nowrap ${window.location.pathname === "/services" ? "px-4 py-3 bg-cta-bg rounded-xl font-bold text-white font-Poppins" : ""}`}>{t("service")}</Link>
            </section>
        </nav>
    )
}

export default Nav