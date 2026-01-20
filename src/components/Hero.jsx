import CTA from './CTA'
import SecondaryButton from './SecondaryButton'
import '../App.css'

function Hero({title, subtitle, image, text}) {
    return (
        <div className="py-16 px-6 flex flex-col gap-10 text-center bg-cover bg-no-repeat" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37)), url(./background.jpg)`}}>
            <div className="font-Poppins font-bold text-2xl text-white md:text-5xl">
                <h1>{title}</h1>
                <h1 className="bg-gradient-to-r from-gradient-start-bg to-white bg-clip-text text-transparent">{subtitle}</h1>
            </div>
            <section className='md:text-2xl'>
                {
                    text.split('\n').map((line, index) => (
                        <p key={index} className="font-Montserrat font-normal dark:text-white text-black !text-opacity-55">{line}</p>
                    ))
                }
                {image && <img src={image} alt="Hero Image" className="hero-image" />}
            </section>
            <div className="flex flex-col md:flex-row md:justify-center gap-3">
                <CTA to={'whatsapp'} text={"Contattami"}/>
                <SecondaryButton to={'about'} text={"Scopri gli Orari"}/>
            </div>
        </div>
    )
}

export default Hero