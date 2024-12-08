import React from 'react'
import { FaCheckCircle } from "react-icons/fa";   

export default function About() {
  return (
    <section
    id="about"
    className="bg-gradient-to-t from-yellow-100 to-white dark:to-gray-900 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] "
  >
    <div className="container">
      <div className="wow fadeInUp" data-wow-delay=".2s">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2" >
            <div className="mb-12 max-w-[540px] lg:mb-0">
              <h1 className='text-lg text-yellow-400'>À PROPOS DE NOUS</h1>
              <h2 className="mb-5 text-3xl font-bold leading-tight  dark:text-white sm:text-[40px] sm:leading-[1.2]" data-aos="fade-right" data-aos-duration="800">
              Enthousiasme et innovation à la rencontre de l'expérience...
              </h2>
              <p className="mb-10 text-base leading-relaxed text-body-color dark:text-gray-900" data-aos="fade-right" data-aos-duration="1300">
              <span className='text-yellow-400'>DBSYS Services</span> est le fruit de 15 années cumulées dans la gestion des flux informatiques , dans la restauration rapide et plus généralement dans le CHR. Ces fondateurs,
               ayant travaillé pour les plus grandes chaines de QSR mondiales, ont relevés divers challenges pour identifier, développer et déployer les meilleures technologies pour accompagner la croissance de grandes marques.
                <br /> <br />
                Fiers d’avoir dans notre portefeuille clients des enseignes tel que McDonald’s Maroc, avec 52 restaurants et plus de 10 000 équipements actifs
              </p>


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Left Column */}
  <div>
    <ul className="list-disc pl-6 space-y-3">
      <li className="flex items-center text-gray-700">
        <FaCheckCircle className="text-yellow-400 mr-2" /> Passion
      </li>
      <li className="flex items-center text-gray-700">
        <FaCheckCircle className="text-yellow-400 mr-2" /> Innovation
      </li>
    </ul>
  </div>

  {/* Right Column */}
  <div>
    <ul className="list-disc pl-6 space-y-3">
      <li className="flex items-center text-gray-700">
        <FaCheckCircle className="text-yellow-400 mr-2" /> Experience
      </li>
      <li className="flex items-center text-gray-700">
        <FaCheckCircle className="text-yellow-400 mr-2" /> Proximité
      </li>
    </ul>
  </div>
</div>


             
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2" data-aos="fade-left">
            <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <div
                  className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                >
                  <img
                    src="https://dbsys-services.ma/img/photo/ngk_mural.jpeg"
                    alt="about image"
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                  <img
                    src="https://dbsys-services.ma/img/photo/dmb1_800.jpg"
                    alt="about image"
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-yellow-400 px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                  <div>
                    <span className="block text-5xl font-extrabold text-white">
                      09
                    </span>
                    <span className="block text-base font-semibold text-white">
                    nous avons
                    </span>
                    <span className="block text-base font-medium text-white text-opacity-70">
                    des années d'expérience
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
    
  </section>
  )
}
