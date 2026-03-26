import Marquee from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import axios from "axios"

import Card from './Card'
import '../App.css'

function Testimonials() {
    const { t } = useTranslation()

    const [canHover, setCanHover] = useState(false);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const media = window.matchMedia("(hover: hover)");
        setCanHover(media.matches);

        const listener = e => setCanHover(e.matches);
        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, []);

    useEffect(() => {
        async function getReviews() {
            const revs = await axios.get("https://backend-gamma-kohl-94.vercel.app/api/reviews")
            setReviews(revs.data.reviews)
            console.log(revs);
            
        }
        getReviews()
        
    }, [])

    return(
        <div className='flex flex-col gap-12 py-12 px-6 dark:bg-dark-bg'>
            <h1 className='dark:text-white text-black text-center text-3xl font-bold font-Poppins underline underline-offset-4 decoration-cta-bg decoration-[5px]'>{t("view_home.testimonials.title")}</h1>
            <Marquee pauseOnHover={canHover} gradient={false} speed={25} autoFill={true} className='gap-8 p-5' >
                {   reviews &&
                    reviews.filter(review => review.comment)
                        .map((review, index) => (
                            <Card key={index} index={index} text={review.comment} author={review.reviewer.displayName} role={"Paziente verificato"} image={review.reviewer.profilePhotoUrl} />
                        ))
                }
            </Marquee>
        </div>
    )
}

export default Testimonials