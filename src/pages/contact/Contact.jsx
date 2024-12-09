import React from 'react'
import Breadcrumb from '../../components/crump/Breadcrumb'
import { BsCalendarDateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>

    <Breadcrumb pageName="contact page"/>

    <section >
    <div class="container px-6 py-12 mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-6">
            <div class="lg:w-1/2 lg:mx-6">
                <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                Contactez - <span className='text-yellow-400'>nous pour
                plus d'infos</span> 
                </h1>

                <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

                <div class="p-4 rounded-lg bg-yellow-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-yellow-400 rounded-lg bg-yellow-100/80 dark:bg-gray-700">
                <MdEmail className='h-6 w-6'/>
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Discuter avec les ventes</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Parlez à notre sympathique équipe.</p>
                <p class="mt-2 text-sm text-yellow-500 dark:text-yellow-400">contact@dbsys-services.ma</p>
                </div>


                <div class="p-4 rounded-lg bg-yellow-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-yellow-400 rounded-lg bg-yellow-100/80 dark:bg-gray-700">
                <BsCalendarDateFill className='h-6 w-6'/>
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Lundi - Vendredi, 8am à 18pm</h2>
                
                
                 </div>


                 <div class="p-4 rounded-lg bg-yellow-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-yellow-400 rounded-lg bg-yellow-100/80 dark:bg-gray-700">
                <FaLocationDot className='h-6 w-6'/>
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Visitez-nous</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Visitez notre siège social..</p>
                <p class="mt-2 text-sm text-yellow-500 dark:text-yellow-400">N° 270 LOT Mandarona Sidi Maarouf, Casablanca</p>
            </div>

            <div class="p-4 rounded-lg bg-yellow-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-yellow-400 rounded-lg bg-yellow-100/80 dark:bg-gray-700">
                <FaPhoneAlt className='h-6 w-6'/>
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Appelez-nous</h2>
             
                <p class="mt-2 text-sm text-yellow-500 dark:text-yellow-400">+212 (0) 0522367316</p>
            </div>

            </div>



                

            



            

                
            </div>

            <div class="mt-8 lg:w-1/2 lg:mx-6" data-aos="fade-left">
                <div
                    class="w-full px-8 py-10 mx-auto overflow-hidden  rounded-lg shadow-2xl dark:bg-gray-50 lg:max-w-xl shadow-yellow-300/50 dark:shadow-yellow-400">
                    <h1 class="text-lg font-medium text-gray-700">Que voulez-vous demander</h1>

                    <form class="mt-6">
                        <div class="flex-1">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-yellow-500">Nom Complet</label>
                            <input type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-yellow-500">Email </label>
                            <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        
                        

                        <div class="w-full mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-yellow-500">Message</label>
                            <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50">
                             envoyer
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

            <div class="overflow-hidden m-5 rounded-lg lg:col-span-2 h-96 lg:h-auto">
                <iframe width="100%" height="600px" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1662.769856911458!2d-7.6450235439678975!3d33.53935099776672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDMyJzIxLjciTiA3wrAzOCc0NC44Ilc!5e0!3m2!1sar!2sma!4v1732794156741!5m2!1sar!2sma"></iframe>
            </div>
</>

  )
}
