import React from 'react'
// import Breadcrumb from '../../../components/crump/Breadcrumb'


export default function Pagers() {
  const Pagers = [
    {
      id:1,
      img:'/gallery/button_call.jpg',
      tittle:'Pagers de serveur',
      description:'LLes solutions de boutons d\'appel offrent un contact instantané entre les clients et les serveurs, assurant aux clients que leurs besoins sont satisfaits par un service rapide et très efficace'
    },
    {
      id:2,
      img:'/gallery/coaster.jpg',
      tittle:'Système de guest coasters',
      description:'C\'est un système d\'appel du serveur au client. Offrir au client une liberté de mouvement et éviter les files d\'attente longues et désagréables'
    },
    {
      id:3,
      img:'/gallery/guest.jpg',
      tittle:'Pagers de serveur',
      description:'Les systèmes de pager du personnel et des serveurs constituent un élément essentiel d’une communication efficace au sein de votre équipe. Alerte rapide des serveurs, hôtesses, personnel de cuisine, cuisiniers et plus'
    },
    {
      id:4,
      img:'/gallery/solt.jpg',
      tittle:'Paging bouton',
      description:'Le serveur reçoit l\'appel sur une horloge ou sur un écran à LED, évitant ainsi des attentes interminables pour le client et des déplacements inutiles du serveur.'
    },
  ]

  const steps = [
    {
      id:1,
      img:'/gallery/step1.jpg',
      description:'Donner au client un localisateur d’invité lorsqu’il passe une commande.'
    },
    {
      id:2,
      img:'/gallery/step2.jpg',
      description:'Demandez au client de placer le localisateur d\'invité sur l\'étiquette de la table de son choix.'
    },
    {
      id:3,
      img:'/gallery/step3.jpg',
      description:'La passerelle recevra les informations de table du localisateur d\'invité'
    },
    {
      id:4,
      img:'/gallery/step4.jpg',
      description:'Les informations de la table s\'afficheront sur le PC ou la tablette.'
    },
    {
      id:5,
      img:'/gallery/step5.jpg',
      description:'Une fois la commande livrée, le serveur place le localisateur d’invité sur le chargeur..'
    },
    {
      id:6,
      img:'/gallery/step6.jpg',
      description:'la table disparaîtra de l\'écran du PC ou de la tablette une fois replacée sur le chargeur.'
    },
  ]

  return (
    <div>
      
     
          <div class="relative overflow-hidden">
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              

              <div class="mt-10 relative max-w-5xl mx-auto">
                <div class="w-full object-cover h-96 sm:h-[480px] bg-[url('https://img.freepik.com/free-photo/top-view-old-device-desk_23-2150756330.jpg?t=st=1733140503~exp=1733144103~hmac=b61c31943c4c64467d1df322498a39f379d40c51f7c06552e5f050647bc42ec8&w=1060')] bg-no-repeat bg-center bg-cover rounded-xl"></div>

                

                <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-yellow-400 to-white p-px rounded-lg dark:to-neutral-900">
                  <div class=" size-48 rounded-lg "></div>
                </div>

                <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-yellow-400 dark:to-gray-900 p-px rounded-full">
                  <div class=" size-48 rounded-full "></div>
                </div>
              </div>

              <div class="max-w-2xl mt-5 text-center mx-auto">
                <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Restaurant Pagers et Coasters</h1>
                <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400 ">' COMMUNICATION SANS EFFORT '</p>
                <p className='dark:text-neutral-400'>Les solutions d’assistance à la clientèle transforment l’expérience de vos clients en leur offrant un moyen efficace et pratique de demander du service , ou d'une simple pression sur le bouton d’assistance on envoie instantanément une alerte au membre du personnel concerné indiquant que le service est requis, le service est plus rapide et transparent, ce qui améliore grandement la perception de l’invité.</p>
              </div>
            </div>
          </div>


          <section class=" avtg">
          <div class="container px-6 py-10 mx-auto">
              <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl text-center dark:text-white" data-aos="zoom-in">Avantages  <span class="underline decoration-yellow-400">client</span></h1>

              

              <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
                  
              {Pagers.map((pag) => (
              <div class="relative flex flex-col items-center border border-solid border-gray-200 rounded-2xl transition-all duration-500 md:flex-row md:max-w-lg " data-aos="zoom-in">
              

                  <div class="block  w-5/6 h-48">
                    <img src={pag.img} alt="Card image" class="h-full w-full  rounded-2xl object-cover" />
                  </div>
                    <div class="p-3">
                    <h4 class="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">{pag.tittle}</h4>
                    <p class="text-sm font-normal text-gray-500 dark:text-neutral-400  transition-all duration-500 leading-5 mb-5"> {pag.description} </p>
                    
                    </div> 
                  
                </div>  
                  ))} 
              </div>
          </div>
      </section>


     
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
 
  <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
    <div class="lg:col-span-3">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Système de localisation des <span className='underline decoration-yellow-400'>tables</span> </h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">' EasyVu™ '</p>
      <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Permettez aux serveurs et au personnel de localiser avec précision les invités et de fournir des services plus rapidement, ce qui permet d'améliorer la satisfaction de vos clients grâce à un service rapide.</p>

     

     
      
    </div>
    

    <div class="lg:col-span-4 mt-10 lg:mt-0">
      <img class="w-full rounded-xl" src="/gallery/eas.jpg" alt="Hero Image" />
    </div>
    
  </div>

</div>



<section class="  avtg">
          <div class="container px-6 py-10 mx-auto">
              <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl text-center dark:text-white" data-aos="zoom-in">Utilisation de votre système de localisation <span className='underline decoration-yellow-400'> des invités EasyVu</span> </h1>

              

              <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3 xl:grid-cols-3">
                  
              {steps.map((step) => (
              <div class="rounded-xl bg-white shadow-lg  shadow-gray-300 overflow-hidden" data-aos="zoom-in">
              <img src={step.img} alt="image" className='text-center px-5'/>
              <div class="w-full p-6 ">
                
                <p class="text-sm font-medium text-gray-600 "> {step.description} </p>
              </div>
              </div>  
                  ))} 
              </div>
          </div>
      </section>



    </div>
  )
}
