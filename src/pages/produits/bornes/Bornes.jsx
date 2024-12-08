import React from 'react'
// import Breadcrumb from '../../../components/crump/Breadcrumb'
import Numers from './number'
import Kiosk from './Kiosk'

export default function Bornes() {
  return (
    <div>
      <div class="relative overflow-hidden">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              

              <div class="mt-10 relative max-w-5xl mx-auto">
                <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://dbsys-services.ma/img/parallax/kiosk.jpg')] bg-no-repeat bg-center bg-cover rounded-xl" data-aos="flip-up"></div>

                

                <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-yellow-400 to-white p-px rounded-lg dark:to-neutral-900">
                  <div class=" size-48 rounded-lg "></div>
                </div>

                <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-yellow-400 dark:to-gray-900 p-px rounded-full">
                  <div class=" size-48 rounded-full "></div>
                </div>
              </div>

              <div class="max-w-2xl mt-5 text-center mx-auto" >
                <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white" data-aos="zoom-out-down">LES BORNES DE COMMANDE</h1>
                <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400 " data-aos="zoom-out-down">Que ce soit pour l’intérieur ou l’extérieur, les bornes de commande à écran tactile sont conçues pour augmenter le confort client et mieux gérer les flux de consommateurs lors des heures de grande affluence.</p>
                <p className='dark:text-neutral-400' data-aos="zoom-out-down">Notre gamme de bornes libre-service a été conçue pour s’adapter à de nombreux secteurs d’activité, tel que : la restauration rapide, l’hôtellerie, les loisirs et le commerce de détail.</p>
              </div>
            </div>
          </div>

          <Numers/>

          <Kiosk/>
    </div>
  )
}
