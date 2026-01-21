import Paragraph from './Paragraph'
import '../App.css'

function Article({title, subtitle, text, img}) {
    return (
        <article className='py-20 px-6 md:px-8 xl:px-16 flex flex-col gap-8 dark:bg-dark-bg'>
            <div className='font-Poppins font-bold'>
                <h1 className='dark:text-white text-black text-5xl'>{title}</h1>
                <h2 className='text-cta-bg text-3xl'>{subtitle}</h2>
            </div>
            <Paragraph text={text}/>
        </article>
    )
}

export default Article