import Paragraph from './Paragraph'
import '../App.css'

function Article({title, subtitle, text, img, className}) {
    return (
        <article className={`px-6 py-20 pt-72 md:px-8 md:py-24 xl:px-16 flex flex-col gap-8 dark:bg-dark-bg ${className}`}>
            <div className='font-Poppins font-bold'>
                <h1 className='dark:text-white text-black text-5xl'>{title}</h1>
                <h2 className='text-cta-bg text-3xl'>{subtitle}</h2>
            </div>
            <Paragraph text={text}/>
            { img && <img src={img} alt={title} className='hidden xl:block w-1/2 rounded-xl'/>}
        </article>
    )
}

export default Article