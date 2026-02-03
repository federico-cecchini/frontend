import '../App.css';

function Service({img, title, description}) {
    return (
        <article className='border-cta-bg border rounded-xl dark:bg-dark-secondary-bg bg-white md:flex overflow-hidden md:h-72'>
            <div className="md:h-full md:w-72 hidden md:block aspect-square relative">
                {img && <img src={img} alt={title} className='absolute left-0 top-0 w-full h-full object-cover object-center'/>}
            </div>
            <div className="flex p-4 flex-col gap-4 font-Montserrat dark:text-white text-black justify-center">
                <h1 className='font-bold text-2xl'>{title}</h1>
                <p>{description}</p>
            </div>
        </article>
    )
}

export default Service