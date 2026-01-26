import '../App.css'

function Degree({img, year, title, institution, isLast}) {
    return(
        <div className="flex items-start gap-10">
            <div className="relative justify-center items-center w-14 h-14 hidden xl:flex shrink-0">
                {!isLast && <div className="absolute w-[0.75px] h-[200%] top-full z-0 bg-cta-bg"></div>}
                <div className="absolute dark:bg-dark-secondary-bg w-14 h-14 z-10 rounded-full"></div>
                <img src={img} alt={title} className='bg-degree-bg p-1 rounded-full z-20 relative w-10 h-10'/>
            </div>
            <section className='font-Montserrat'>
                <p className='text-cta-bg font-normal text-2xl'>{year}</p>
                <h1 className='dark:text-white text-black font-bold text-2xl'>{title}</h1>
                <p className='dark:text-white text-black opacity-55 text-xl'>{institution}</p>
            </section>
        </div>
    )
}

export default Degree