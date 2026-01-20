import { Link } from "react-router";

import '../App.css'

function SecondaryButton({to, text}) {
    return <Link to={to} className='px-4 py-3 bg-transparent rounded-xl font-medium border-2 border-white border-opacity-15 font-Poppins text-white'>{text}</Link>
}

export default SecondaryButton;