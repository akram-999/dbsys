import React from 'react'
import Poslist from './Poslist'
import './pos.css'


export default function TpvPos() {
  const Tc = [
    {
      id:1,
      title:"Gestion graphique du restaurant",
      description:'Gère les tables sur l’écran tactile grâce à une vision panoramique des tables, de leur composition et de l’état d’avancement des commandes.'
    },
    {
      id:2,
      title:"Self-Ordering Kiosk",
      description:'Grâce au développement du Kiosque Self-Ordering de TCPOS, le service clients n’a jamais été aussi rapide ! Une interface graphique intuitive guide le client dans ses choix en lui suggérant des articles supplémentaires et en donnant des informations précises sur les produits, ce qui assure une expérience sans stress et diminue drastiquement les files d’attente.'
    },
    {
      id:3,
      title:"Service rapide",
      description:'En intégrant le moniteur de cuisine et le pager, vous accélérez la communication entre la cuisine, le service et les caisses tout en assurant à vos clients un service de meilleure qualité ceci l’incitant à revenir.'
    },
    {
      id:4,
      title:"Omnicanal",
      description:'Avec “Order & Delivery”, vos clients peuvent choisir entre consommer leur repas à l’intérieur de votre restaurant, bénéficier du service take-away ou profiter du service de livraison à domicile en réservant en ligne depuis leur PC, tablette ou smartphone.'
    },
    {
      id:5,
      title:"Informations ingrédients",
      description:'Au moment de la commande, le système informe le patient sur la présence d’éventuels agents allergènes présents dans les aliments.'
    },
    {
      id:6,
      title:"Cartes client",
      description:'Des paiements plus rapides grâce à la fidélisation du client. Toutes les cartes, qu’elles soient prépayées, de crédit, ou simplement d’identification ou à modalité mixte peuvent être utilisées pour le paiement des transactions, indépendamment du type de lecteur utilisé'
    },
  ]
  return (
    <div>
     
      <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
              

              <div className="mt-10 relative max-w-5xl mx-auto">
                <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://img.freepik.com/free-photo/close-up-baker-with-machine_23-2149233717.jpg?t=st=1733303239~exp=1733306839~hmac=f733643c2e70ac9ba8581dfff712230d735019d5c7d1a84e91f3ea5862cf0a8c&w=996')] bg-no-repeat bg-center bg-cover rounded-xl" data-aos="flip-up"></div>

                

                <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-yellow-400 to-white p-px rounded-lg dark:to-neutral-900">
                  <div className=" size-48 rounded-lg "></div>
                </div>

                <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-yellow-400 dark:to-gray-900 p-px rounded-full">
                  <div className=" size-48 rounded-full "></div>
                </div>
              </div>

              <div className="max-w-2xl mt-5 text-center mx-auto" >
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white" data-aos="zoom-out-down">Caisse enregistreuse</h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400 " data-aos="zoom-out-down">Partenaire des plus grands fournisseurs matériels de caisse enregistreuse, DBSYS SERVICES propose une gamme étendue de caisses enregistreuse tactiles. Toutes sélectionnées pour vous assurer un encaissement fiable et performant.</p>
                </div>
            </div>
          </div>

          <Poslist/>


          <div class="max-w-[85rem] mx-auto  mt-12 px-4 sm:px-6 lg:px-8 ">
 
          <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div class="lg:col-span-3" data-aos="fade-right">
              <h3 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white" data-aos="fade-up" data-aos-duration="3000">TCPOS <span className='underline decoration-yellow-400'>SOFTWARE</span> </h3>
              
              <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400" data-aos="fade-up" data-aos-duration="3000">TCPOS vous aide a relever les defis competitifs du marche de l'hotellerie et de la restauration, en vous permettant d'offrir la meilleure qualite a vos clients grace a des solutions POS evolutives, adaptables et projetees vers le futur.</p>

            

            
              
            </div>
            

            <div class="lg:col-span-4 mt-10 lg:mt-0" data-aos="fade-left">
              <img class="w-full rounded-xl" src="/ph-partners/p1.png" alt="Hero Image" />
            </div>
            
          </div>

        </div>



          <div className="container px-6 py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3 xl:grid-cols-3">
            {Tc.map((tc)=> (
                    <div className="card hover:shadow-xl" data-aos="zoom-in">
                        <img className="quotes" src="./sans.png" alt="alternative"/>
                        <div className="card-body">
                            <div className="testimonial-author text-2xl my-2 text-yellow-400">{tc.title}</div>
                            <p className="occupation">{tc.description}</p>
                        </div>
                        <div className="gradient-floor red-to-blue"></div>
                    </div>
                  ))}
                    
            </div>
            </div>
    </div>
  )
}
