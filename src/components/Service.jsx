import '../App.css';

function Service({img, title, description}) {
    return (
        <article className='border-cta-bg border rounded-xl dark:bg-dark-secondary-bg bg-white md:flex overflow-hidden'>
            <div className="xl:w-1/4 md:w-full hidden md:block aspect-square max-h-96">
                {img && <img src={img} alt={title} className='w-full h-full object-cover'/>}
            </div>
            <div className="flex p-4 flex-col gap-4 font-Montserrat dark:text-white text-black justify-center">
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default Service