import React from 'react'

export default function About() {
  return (
    <section
    id="about"
    className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] "
  >
    <div className="container">
      <div className="wow fadeInUp" data-wow-delay=".2s">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2" >
            <div className="mb-12 max-w-[540px] lg:mb-0">
              <h2 className="mb-5 text-3xl font-bold leading-tight  dark:text-white sm:text-[40px] sm:leading-[1.2]" data-aos="fade-right" data-aos-duration="800">
              Enthousiasme et innovation à la rencontre de l'expérience...
              </h2>
              <p className="mb-10 text-base leading-relaxed text-body-color dark:text-neutral-400" data-aos="fade-right" data-aos-duration="1300">
              <span className='text-yellow-400'>DBSYS Services</span> est le fruit de 15 années cumulées dans la gestion des flux informatiques , dans la restauration rapide et plus généralement dans le CHR. Ces fondateurs,
               ayant travaillé pour les plus grandes chaines de QSR mondiales, ont relevés divers challenges pour identifier, développer et déployer les meilleures technologies pour accompagner la croissance de grandes marques.
                <br /> <br />
                Fiers d’avoir dans notre portefeuille clients des enseignes tel que McDonald’s Maroc, avec 52 restaurants et plus de 10 000 équipements actifs
              </p>

             
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

      
      <div class="border rounded p-4 wow fadeInUp" data-wow-delay="0.9s">
                <div class="row g-4">
                    <div class="col-lg-4 wow fadeIn" data-wow-delay="0.9s" data-aos="fade-up"
                               data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <div class="h-100">
                            <div class="d-flex">
                                <div class="flex-shrink-0 p-2 text-white  rounded-circle bg-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                                </div>
                                <div class="ps-3 dark:text-neutral-400">
                                    <h4>No Hidden Cost</h4>
                                    {/* <span>Clita erat ipsum lorem sit sed stet duo justo</span> */}
                                </div>
                                <div class="border-end ml-3 d-none d-lg-block"></div>
                            </div>
                            <div class="border-bottom mt-4 d-block d-lg-none"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow fadeIn" data-wow-delay="0.9s" data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                        <div class="h-100">
                            <div class="d-flex">
                                <div class="flex-shrink-0 p-2 text-white  rounded-circle bg-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                  <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                </svg>



                                </div>
                                <div class="ps-3 dark:text-neutral-400">
                                    <h4>Dedicated Team</h4>
                                    {/* <span>Clita erat ipsum lorem sit sed stet duo justo</span> */}
                                </div>
                                <div class="border-end ml-3 d-none d-lg-block"></div>
                            </div>
                            <div class="border-bottom mt-4 d-block d-lg-none"></div>
                        </div>
                    </div>
                    <div class="col-lg-4 wow fadeIn" data-wow-delay="0.9s" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                        <div class="h-100">
                            <div class="d-flex">
                                <div class="flex-shrink-0 p-2 text-white  rounded-circle bg-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                </svg>

                                </div>
                                <div class="ps-3 dark:text-neutral-400">
                                    <h4>24/7 Available</h4>
                                    {/* <span>Clita erat ipsum lorem sit sed stet duo justo</span> */}
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
