import { Link } from "react-router";

import '../App.css'

function CTA({to, text, className}) {
    return <Link to={to} className={`px-4 py-3 bg-cta-bg rounded-xl font-bold text-white font-Poppins text-center ${className}`}>{text}</Link> 
}

export default CTA;