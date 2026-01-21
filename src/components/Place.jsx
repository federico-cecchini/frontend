import CTA from './CTA';
import '../App.css'

function Place() {
    return(
        <section className='dark:bg-dark-secondary-bg bg-light-secondary-bg dark:text-white px-6 py-20 md:px-8 md:py-24 xl:px-16 xl:py-32 xl:flex xl:gap-16'>
            <div className="xl:w-1/2 py-8 flex flex-col gap-10">
                <section className='flex flex-col gap-4 font-Montserrat dark:text-white text-black'>
                    <h1 className='font-Poppins font-bold text-3xl'>Dove Siamo</h1>
                    <article className='text-xl opacity-55'>
                        <p className='font-bold'>Studio Minghetti</p>
                        <p className='font-normal'>Via Marco Minghetti, 1, 10093 Collegno TO</p>
                        <p className='font-extralight'>Piano 3, Interno 10</p>
                    </article>
                    <p className='font-bold opacity-55'>+39 348 706 9126</p>
                </section>
                <CTA text={"Ottieni indicazioni"} to={"Maps"} className={"xl:w-fit bg-black dark:!bg-cta-bg"}/>
            </div>
            <div className="w-1/2">
                <h1>Work in Progress...</h1>
            </div>
        </section>
    )
}

export default Place;