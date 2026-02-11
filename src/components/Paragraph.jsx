import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import '../App.css'

function Paragraph({text}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const pRef = useRef(null)

    const { t } = useTranslation()

    useEffect(() => {
        if (text.split('\n').length > 1){
            setShowButton(true)
            return
        }
        if (pRef.current) {
            const lineHeight = parseInt(window.getComputedStyle(pRef.current).lineHeight)
            const height = pRef.current.scrollHeight
            const lines = Math.ceil(height / lineHeight)
            setShowButton(lines > 3)
        }
    }, [text])

    const paragraphs = text.split('\n').map((para, index) => (
        <p 
            key={index}
            ref={index === 0 ? pRef : null}
            className={`font-Montserrat font-normal dark:text-white text-black !text-opacity-55 text-lg ${!isExpanded && index > 0 ? 'hidden' : ''} ${!isExpanded ? 'line-clamp-3' : ''}`}
        >
            {para}
        </p>
    ));

    return (
        <div>
            <section className='flex flex-col gap-8'>
                {paragraphs}
            </section>
            {showButton && (
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-500 text-sm mt-2"
                >
                    {isExpanded ? t("show_less") : t("show_more")}
                </button>
            )}
        </div>
    )
}

export default Paragraph