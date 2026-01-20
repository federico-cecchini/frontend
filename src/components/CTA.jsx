import { Link } from "react-router";

import '../App.css'

function CTA({to, text}) {
    return <Link to={to} className='px-4 py-3 bg-cta-bg rounded-xl font-bold text-white font-Poppins'>{text}</Link> 
}

export default CTA;