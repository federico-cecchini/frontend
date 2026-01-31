import { useState, useEffect } from 'react'

import '../App.css'

function PhotoGallery({isOpen, setIsClose}) {
    const images = Object.values(import.meta.glob('/src/assets/certificate/*.jpeg', { eager: true })).map(mod => mod.default);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const nextPhoto = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevPhoto = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return(
        <section className={`fixed top-0 left-0 w-screen h-screen bg-[#0000008C] z-30 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
            <div className='relative'>
                <img src={images[currentIndex]} alt="certificate" className='max-w-2xl max-h-screen' />
            </div>
            <button onClick={prevPhoto} className='absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded'>←</button>
            <button onClick={nextPhoto} className='absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded'>→</button>
            <button onClick={() => setIsClose(false)} className='absolute top-5 right-5 bg-white p-2 rounded text-lg font-bold'>✕</button>
        </section>
    )
}

export default PhotoGallery