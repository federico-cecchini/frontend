import { Link } from 'react-router';

import '../App.css'

function Footer() {
    return (
        <footer className='flex flex-col gap-2 dark:bg-dark-bg dark:text-white text-black px-6 py-8 font-Montserrat'>
            <section className='flex justify-between'>
                <div className="flex flex-col md:flex-row gap-6">
                    <section className='flex items-center whitespace-nowrap'>
                        <img src="./vite.svg" alt="" />
                        <h1 className='font-semibold font-Poppins'>Federico Cecchini</h1>
                    </section>
                    <div className="opacity-55 md:flex md:gap-6 md:items-center">
                        <Link to="/about"><p>Chi siamo</p></Link>
                        <Link to="/services"><p>Servizi</p></Link>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <img src="./vite.svg" alt="" className='w-6'/>
                    <img src="./vite.svg" alt="" className='w-6'/>
                    <img src="./vite.svg" alt="" className='w-6'/>
                </div>
            </section>
            <hr />
            <div className="opacity-55 md:flex md:justify-between">
                <h1>Federico Cecchini. Tutti i diritti riservati</h1>
                <section className='md:flex md:gap-3'>
                    <p>P.IVA: 12057580016</p>
                    <p>Privacy Policy</p>
                </section>
            </div>
        </footer>
    )
}

export default Footer;