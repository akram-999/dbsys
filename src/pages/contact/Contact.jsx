import React from 'react'

export default function Contact() {
  return (
    <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-yellow-500 sm:text-4xl lg:text-5xl">Contacter Nous</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Nous vous contacterons par téléphone et email plus tard</p>
        </div>

        <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                <div class="overflow-hidden bg-white rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <p class="mt-6 text-lg font-medium text-gray-900">+212 (0) 0522367316</p>
                        
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p class="mt-6 text-lg font-medium text-gray-900">contact@dbsys-services.ma</p>
                        
                    </div>
                </div>

                <div class="overflow-hidden bg-white rounded-xl">
                    <div class="p-6">
                        <svg class="flex-shrink-0 w-10 h-10 mx-auto text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p class="mt-6 text-lg font-medium leading-relaxed text-gray-900">N° 270 LOT Mandarona Sidi Maarouf , Casablanca</p>
                    </div>
                </div>
            </div>

            <div class="mt-6 overflow-hidden bg-white rounded-xl">
                <div class="px-6 py-12 sm:p-12">
                    <h3 class="text-3xl font-semibold text-center text-gray-900">Envoyez-nous un message</h3>

                    <form action="#" method="POST" class="mt-14">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Votre nom </label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="" id="" placeholder="Entrez votre nom complet" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email </label>
                                <div class="mt-2.5 relative">
                                    <input type="email" name="" id="" placeholder="Entrez votre email" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Téléphone </label>
                                <div class="mt-2.5 relative">
                                    <input type="tel" name="" id="" placeholder="Entrez votre Téléphone" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Nom de l'entreprise </label>
                                <div class="mt-2.5 relative">
                                    <input type="text" name="" id=""  class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                <div class="mt-2.5 relative">
                                    <textarea name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4"></textarea>
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-yellow-400 border border-transparent rounded-md focus:outline-none hover:bg-yellow-500 focus:bg-yellow-600">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}
