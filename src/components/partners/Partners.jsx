import React from 'react'
import './partners.css'

export default function Partners() {
    const slides = [
        { url: './ph-partners/p1.png', alt: 'TCPOS' },
        { url: './ph-partners/p2.png', alt: 'ACRELEC' },
        { url: './ph-partners/p33.png', alt: 'FEC-FRANCE' },
        { url: './ph-partners/p44.png', alt: 'BOMEX' }
    ]
  return (
    <div>
      <div className="clt ">
          <h2 className="text-center tit text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400 dark:bg-gradient-to-r  dark:from-orange-300 dark:to-yellow-400  " data-aos="zoom-in">Nos Partenaires</h2>
          

        </div>
        <div className="flex item-center slider my-5">
          <div className="slide-track">
            {slides.map((slide, index) => (
              <div key={index} className="slide bg-gray-100 dark:bg-gray-700 mx-2 rounded-lg">
                <img src={slide.url} className='p-10' height="100" width="250" alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="slide-track">
            {slides.map((slide, index) => (
              <div key={index} className="slide bg-gray-100 dark:bg-gray-700 mx-2 rounded-lg">
                <img src={slide.url} className='p-10' height="100" width="250" alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="slide-track">
            {slides.map((slide, index) => (
              <div key={index} className="slide bg-gray-100 mx-2 dark:bg-gray-700 rounded-lg">
                <img src={slide.url} className='p-10' height="100" width="250" alt={slide.alt} />
              </div>
            ))}
          </div>
          
        </div>
    </div>
  )
}
