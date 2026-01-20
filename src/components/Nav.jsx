import { Link } from 'react-router'

import CTA from './CTA'
import '../App.css'

function Nav() {
    return(
        <nav className='flex flex-col md:flex-row md:justify-between gap-4 p-6 dark:bg-dark-bg dark:text-white text-black'>
            <div className="flex gap-2 items-center">
                <img src='./vite.svg'/>
                <h1 className='font-Poppins font-bold text-2xl whitespace-nowrap'>Federico Cecchini</h1>
            </div>
            <section className='flex gap-6 font-Poppins font-medium text-base items-center'>
                <Link to={"#"}>Home</Link>
                <Link to={"about"}>Chi siamo</Link>
                <CTA to={"services"} text={"Servizi"} />
            </section>
        </nav>
    )
}

export default Nav