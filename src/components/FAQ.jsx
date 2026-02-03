import { useState } from 'react';

import '../App.css';

function FAQ({question, answer}) {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <section className='dark:text-white text-black dark:bg-dark-bg bg-light-secondary-bg rounded-xl p-3 cursor-pointer' onClick={() =>setIsOpen(!isOpen)}>
            <h1 className='font-semibold text-xl cursor-pointer truncate'>{question}</h1>
            <p className={`${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'} transition-all duration-300 overflow-hidden`}>{answer}</p>
        </section>
    )
}

export default FAQ;