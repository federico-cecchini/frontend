import Marquee from 'react-fast-marquee'

import Card from './Card'
import '../App.css'

function Testimonials() {
    return(
        <div className='flex flex-col gap-12 py-12 px-6 dark:bg-dark-bg'>
            <h1 className='dark:text-white text-black text-center text-3xl font-bold font-Poppins underline underline-offset-4 decoration-cta-bg decoration-[5px]'>Cosa dicono di Noi</h1>
            <Marquee pauseOnHover={true} gradient={false} speed={25} autoFill={true} className='gap-8 p-5'>
                <Card text={"Un approccio umano che mette subito a proprio agio. Lo studio è accogliente e pulito. Consigliatissimo!"} author={"Marco R."} role={"Paziente verificato"} image={"./vite.svg"} />
                <Card text={"Mi ha aiutato a recuperare dopo un infortunio sportivo. Molto preparato e sempre disponibile."} author={"Giulia M."} role={"Paziente verificato"} image={"./vite.svg"} />
                <Card text={"Federico è un professionista eccezionale. Ha risolto il mio mal di schiena cronico con poche sedute..."} author={"Mina G."} role={"Paziente verificato"} image={"./vite.svg"} />
            </Marquee>
        </div>
    )
}

export default Testimonials