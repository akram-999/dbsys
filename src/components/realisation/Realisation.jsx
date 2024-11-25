import React from 'react'
import './realisation.css'


export default function Realisation() {
  return (
 
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
    <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
    Nos <span className='underline decoration-yellow-400'>réalisations</span>
    </h2>
    {/* <p class="mt-3 text-gray-800 dark:text-neutral-200">
      The powerful and flexible theme for all kinds of businesses.
    </p> */}
  </div>
 


  

  <div class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8 im">
    <div class="hidden md:block col-span-4 md:col-span-3 ">
      <img class="rounded-xl " src="https://dbsys-services.ma/img/photo/dmb1_800.jpg" alt="Features Image" />
    </div>


    <div class="col-span-4 md:col-span-3">
      <img class="rounded-xl md:h-80" src="https://dbsys-services.ma/img/photo/ngk_mural.jpeg" alt="Features Image" />
    </div>


    <div class="col-span-4 md:col-span-3">
      <img class="rounded-xl md:h-96" src="https://dbsys-services.ma/img/photo/800_600_ngk.jpg" alt="Features Image" />
    </div>
   

    <div class="col-span-4 md:col-span-3">
      <img class="rounded-xl" src="https://dbsys-services.ma/img/photo/all_800_600.jpg" alt="Features Image" />
    </div>
    
  </div>
  
</div>

  )
}
