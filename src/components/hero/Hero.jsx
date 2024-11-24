import React from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'

export default function Hero() {
  return (
  
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-5 ">
 
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    
    <div  data-aos="fade-right">
      <h1 class="block font-bold text-gray-800 sm:text-4xl  lg:leading-tight dark:text-white"><span class="text-yellow-500">DBSYS SERVICES </span> Excellence Technique et Passion au Service de Votre Entreprise </h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Chez DBSYS SERVICES, nous faisons de notre passion, de notre innovation, et de notre expertise les moteurs de notre engagement envers vous. Avec une approche de proximité et une recherche constante de la meilleure technologie, nous accompagnons chaque client en tant que partenaire de confiance, pour transformer leurs ambitions en réussites.</p>

      <div class="mt-7 grid gap-3 w-full sm:inline-flex">
        
              <Link  to='/about'
                className="link"
              >
              <button className='cta'>
                <span className='dark:text-white'>A PROPOS NOUS</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10" className='dark:text-white' >
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
              </Link>
      </div>
      

   
    </div>
    

    <div class="relative ms-4" data-aos="fade-left">
      <img class="w-full rounded-md h-96" src="https://www.reametal.com/wp-content/uploads/Borne_Indoor_MacDonalds2.jpg" alt="Hero Image" />
      <div class="absolute inset-0 -z-[1] bg-gradient-to-tr from-yellow-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-yellow-200 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

      
      <div class="absolute bottom-0 start-0">
        <svg class="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
          <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
          <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
          <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
          <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
          <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
          <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
          <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
          <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
          <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
          <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="49" fill="currentColor"/>
          <rect x="581" width="49" height="64" fill="currentColor"/>
          <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
          <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
          <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
        </svg>
      </div>
   
    </div>
  
  </div>
 
</div>

  )
}
