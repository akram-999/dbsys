import React from 'react'
import Poslist from './Poslist'


export default function TpvPos() {
  return (
    <div>
     
      <div class="relative overflow-hidden">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              

              <div class="mt-10 relative max-w-5xl mx-auto">
                <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://img.freepik.com/free-photo/top-view-old-device-desk_23-2150756330.jpg?t=st=1733140503~exp=1733144103~hmac=b61c31943c4c64467d1df322498a39f379d40c51f7c06552e5f050647bc42ec8&w=1060')] bg-no-repeat bg-center bg-cover rounded-xl" data-aos="flip-up"></div>

                

                <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-yellow-400 to-white p-px rounded-lg dark:to-neutral-900">
                  <div class=" size-48 rounded-lg "></div>
                </div>

                <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-yellow-400 dark:to-gray-900 p-px rounded-full">
                  <div class=" size-48 rounded-full "></div>
                </div>
              </div>

              <div class="max-w-2xl mt-5 text-center mx-auto" data-aos="zoom-out-down">
                <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Caisse enregistreuse</h1>
                <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400 ">Partenaire des plus grands fournisseurs matériels de caisse enregistreuse, DBSYS SERVICES propose une gamme étendue de caisses enregistreuse tactiles. Toutes sélectionnées pour vous assurer un encaissement fiable et performant.</p>
                </div>
            </div>
          </div>

          <Poslist/>
    </div>
  )
}
