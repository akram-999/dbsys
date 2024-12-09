import React from 'react'


export default function Signage() {
  return (
    <div>
      <div class="relative overflow-hidden">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              

              <div class="mt-10 relative max-w-5xl mx-auto">
                <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://img.freepik.com/free-photo/view-people-exchanging-goods_23-2151205656.jpg?t=st=1733735250~exp=1733738850~hmac=59775b9092e292069115d581dbbde0382c8812ce53655efb992a0b2c2344c9b9&w=1060')] bg-no-repeat bg-center bg-cover rounded-xl" data-aos="flip-up"></div>

                

                <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-yellow-400 to-white p-px rounded-lg dark:to-neutral-900">
                  <div class=" size-48 rounded-lg "></div>
                </div>

                <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-yellow-400 dark:to-gray-900 p-px rounded-full">
                  <div class=" size-48 rounded-full "></div>
                </div>
              </div>

              <div class="max-w-2xl mt-5 text-center mx-auto" >
                <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white" data-aos="zoom-out-down">DRIVE THRU</h1>
                <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400 " data-aos="zoom-out-down">Nos partenaires sont les pionniers mondiaux dans les solutions Drive thru pour les restaurants, notre objectif est de fournir à nos clients un système complet comprenant des composants matériels et logiciels, ainsi que des composants pour l’installation, la mise en service et le support client</p>
               </div>
            </div>
          </div>
    </div>
  )
}
