import React from 'react'
import { BsCalendarDateFill } from "react-icons/bs";
import { RiSignalWifiOffFill } from "react-icons/ri";
import { PiVideoFill } from "react-icons/pi";
import { MdOutlineWeb } from "react-icons/md";

export default function Signage() {
  return (
    <div>
      <div class="relative overflow-hidden">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              

              <div class="mt-10 relative max-w-5xl mx-auto">
                <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://www.cayintech.com/fr/images/digital_signage_cases/20171121_p1.jpg')] bg-no-repeat bg-center bg-cover rounded-xl" data-aos="flip-up"></div>

                

                <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-yellow-400 to-white p-px rounded-lg dark:to-neutral-900">
                  <div class=" size-48 rounded-lg "></div>
                </div>

                <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-yellow-400 dark:to-gray-900 p-px rounded-full">
                  <div class=" size-48 rounded-full "></div>
                </div>
              </div>

              <div class="max-w-2xl mt-5 text-center mx-auto" >
                <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white" data-aos="zoom-out-down">Solutions d'affichage dynamique</h1>
                <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400 " data-aos="zoom-out-down">Nous fournissons à nos clients divers systèmes d’affichage dynamique comprenant des écrans d’affichage haute définition ainsi que des solutions logicielles avancées pouvant être utilisées pour gérer de manière dynamique le contenu diffusé sur ces écrans. Les solutions d'affichage numérique que nous fournissons à nos clients sont personnalisées selon leurs besoins.</p>
               </div>
            </div>
          </div>



          <section >
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Avantages clés</h1>

        <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-yellow-400 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-yellow-400 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-yellow-400 rounded-full"></span>
        </div>

        <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                <div class="space-y-3  " data-aos="fade-up">
                    <span class="inline-block p-3 text-yellow-400 bg-yellow-100 rounded-xl dark:text-white dark:bg-yellow-400">
                    <MdOutlineWeb className='h-6 w-6'/>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Modifier de n'importe où</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                    À l'aide de n'importe quel navigateur Web, vous pouvez concevoir, éditer votre contenu
                    </p>
                </div>

                <div class="space-y-3" data-aos="fade-up">
                    <span class="inline-block p-3 text-yellow-400 bg-yellow-100 rounded-xl dark:text-white dark:bg-yellow-400">
                    <PiVideoFill className='h-6 w-6'/>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Utiliser le player de choix</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                    Android, Chrome OS, Windows
                    </p>
                </div>

                <div class="space-y-3" data-aos="fade-up">
                    <span class="inline-block p-3 text-yellow-400 bg-yellow-100 rounded-xl dark:text-white dark:bg-yellow-400">
                    <RiSignalWifiOffFill className='h-6 w-6'/>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Mode hors-ligne</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                    Notre solution continuera à fonctionner même si votre réseau est en panne
                    </p>
                </div>

                <div class="space-y-3" data-aos="fade-up">
                    <span class="inline-block p-3 text-yellow-400 bg-yellow-100 rounded-xl dark:text-white dark:bg-yellow-400">
                    <BsCalendarDateFill className='h-6 w-6'/>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Day parts management</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                    Planifiez du contenu spécifique pour qu'il change automatiquement à des heures et des jours spécifiques
                    </p>
                </div>
            </div>

            <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://img.freepik.com/free-photo/office-desktop-with-laptop-business-man_23-2148174085.jpg?t=st=1733739528~exp=1733743128~hmac=2098c440697dc2eb0c6256e6fc8e3f7854d6f4c341f7a72d4b815703adfbdfd1&w=996" alt="" data-aos="fade-left"/>
            </div>
        </div>
    </div>
</section>



<div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div class="flex items-center justify-center w-full h-96 lg:w-1/2" data-aos="fade-right">
            <img class="object-cover w-full h-full max-w-2xl rounded-md" src="./rotat.png" alt="apple watch photo" />
        </div>
        <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2" data-aos="fade-left">
            

            <div class="max-w-lg lg:mx-12 lg:order-2">
                <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Autres fonctionnalités</h1>
                <div class="mt-2">
                    <span class="inline-block w-40 h-1 bg-yellow-400 rounded-full"></span>
                    <span class="inline-block w-3 h-1 ml-1 bg-yellow-400 rounded-full"></span>
                    <span class="inline-block w-1 h-1 ml-1 bg-yellow-400 rounded-full"></span>
                </div>
                <p class="mt-4 text-gray-600 dark:text-gray-300">Les orientations paysage et portrait sont disponibles. Toute la conception peut être entièrement personnalisée pour correspondre à vos exigences de marque. Ajustez le texte et vos images, puis envoyez-le à distance à votre écran!</p>
                
            </div>

            <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                <span class="w-3 h-3 mx-2 bg-yellow-400 rounded-full lg:mx-0 focus:outline-none"></span>
                <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-yellow-400"></span>
                <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-yellow-400"></span>
                <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-yellow-400"></span>
            </div>
        </div>

       
    </div>
    </div>
  )
}
