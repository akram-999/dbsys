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
          <h1 className="text-center tit dark:text-white " data-aos="zoom-in">Nos <span className='underline decoration-yellow-400'>Partenaires</span></h1>
          

        </div>
        <div className="flex item-center slider">
          <div className="slide-track">
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.url} className='p-10' height="100" width="250" alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="slide-track">
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.url} className='p-10' height="100" width="250" alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="slide-track">
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.url} className='p-10' height="100" width="250" alt={slide.alt} />
              </div>
            ))}
          </div>
          
        </div>
    </div>
  )
}
