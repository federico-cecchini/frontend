import { useTranslation } from 'react-i18next'

import CTA from './CTA';
import Map from './Map';
import '../App.css'

function Place() {
    const { t } = useTranslation()

    return(
        <section className='dark:bg-dark-secondary-bg bg-light-secondary-bg dark:text-white px-6 py-20 md:px-8 md:py-24 xl:px-16 xl:py-32 xl:flex xl:gap-16'>
            <div className="xl:w-1/2 py-8 flex flex-col gap-10">
                <section className='flex flex-col gap-4 font-Montserrat dark:text-white text-black'>
                    <h1 className='font-Poppins font-bold text-3xl'>{t("view_home.places.title")}</h1>
                    <article className='text-xl opacity-55'>
                        <p className='font-bold'>{t("view_home.places.minghetti.title")}</p>
                        <p className='font-normal'>{t("view_home.places.minghetti.address")}</p>
                        <p className='font-extralight'>{t("view_home.places.minghetti.floor")}</p>
                    </article>
                    <CTA text={t("view_home.places.routes")} to={"https://www.google.com/maps/dir/?api=1&destination=Dott.+Cecchini+Federico+Eugenio+Osteopata+D.O."} className={"xl:w-fit bg-black dark:!bg-cta-bg"} target='_blank'/>
                    <article className='text-xl opacity-55'>
                        <p className='font-bold'>{t("view_home.places.canavoso.title")}</p>
                        <p className='font-normal'>{t("view_home.places.canavoso.address")}</p>
                    </article>
                    <CTA text={t("view_home.places.routes")} to={"https://www.google.com/maps/dir/?api=1&destination=Farmacia+Canavoso+Dr.Marco"} className={"xl:w-fit bg-black dark:!bg-cta-bg"} target='_blank'/>
                    <p className='font-bold opacity-55'>+39 348 706 9126</p>
                </section>
            </div>
            <div className="w-full xl:w-1/2">
                <Map />
            </div>
        </section>
    )
}

export default Place;