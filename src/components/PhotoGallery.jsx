import { useState, useEffect } from 'react'

import '../App.css'

function PhotoGallery({ isOpen, setIsClose }) {
  const files = Object.values(
    import.meta.glob('/src/assets/certificate/*.*', { eager: true })
  ).map(mod => mod.default)

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => (document.body.style.overflow = 'unset')
  }, [isOpen])

  const nextPhoto = () =>
    setCurrentIndex((currentIndex + 1) % files.length)

  const prevPhoto = () =>
    setCurrentIndex((currentIndex - 1 + files.length) % files.length)

  const isPdf = (file) => file.toLowerCase().endsWith('.pdf')

  return (
    <section className={`fixed top-0 left-0 w-screen h-screen bg-[#0000008C] z-30 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      
      <div className="relative">
        {isPdf(files[currentIndex]) ? (
          <iframe
            src={files[currentIndex]}
            className="w-[80vw] h-[90vh] bg-white rounded"
            title="certificate-pdf"
          />
        ) : (
          <img
            src={files[currentIndex]}
            alt="certificate"
            className="max-w-[80vw] max-h-screen"
          />
        )}
      </div>

      <button onClick={prevPhoto} className="absolute left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded">←</button>
      <button onClick={nextPhoto} className="absolute right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded">→</button>
      <button onClick={() => setIsClose(false)} className="absolute top-5 right-5 bg-white p-2 rounded text-lg font-bold">✕</button>
    </section>
  )
}

export default PhotoGallery