import ReactGA from 'react-ga4';

import '../App.css'

function SecondaryButton({to, text, category}) {
    return <a 
        href={to} 
        className='px-4 py-3 bg-transparent rounded-xl font-medium border-2 border-white border-opacity-15 font-Poppins text-white text-center'
        onClick={() => {
            if (category) {
                ReactGA.event({
                    eventCategory: category,
                    eventAction: "Click",
                    eventLabel: text,
                });
            }
        }}
    >
        {text}
    </a>
}

export default SecondaryButton;