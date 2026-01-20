import Card from './Card'
import '../App.css'

function Testimonials() {
    return(
        <div className='flex flex-col gap-12 py-12 px-6 dark:bg-dark-bg'>
            <h1 className='dark:text-white text-center text-3xl font-bold font-Poppins underline underline-offset-4 decoration-cta-bg decoration-[5px]'>Cosa dicono di Noi</h1>
            <section>
                <Card text={"Un approccio umano che mette subito a proprio agio. Lo studio è accogliente e pulito. Consigliatissimo!"} author={"Marco R."} role={"Paziente verificato"} image={"./vite.svg"} />
            </section>
        </div>
    )
}

export default Testimonials