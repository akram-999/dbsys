import React from 'react'
import Breadcrumb from '../../../components/crump/Breadcrumb'

export default function Service() {
  return (
    <div>
      <Breadcrumb pageName="Support helpdesk"/>
      <section class="bg-white dark:bg-gray-900">
      <div class=" px-6 py-10 mx-auto">
        

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-yellow-400 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-yellow-400 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" data-aos="fade-right" src="https://img.freepik.com/free-photo/empty-helpdesk-office-with-telephony-equipment-reception-give-assistance-no-people-telemarketing-space-customer-service-client-support-remote-helpline-headphones_482257-46319.jpg?t=st=1732105017~exp=1732108617~hmac=49b619ef025ebe096e44e8830091c36e5ccb8781cac20e86d153ff4e35691bdc&w=360" alt="client photo" />
                
                <div class="mt-2  md:mx-6 " data-aos="fade-left">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">Support IT Helpdesk 24x7 pour les restaurants</p>
                       
                    </div>

                    <p class="mt-4  leading-relaxed text-white ">Le HELPDESK DBSYS SERVICES comprend que votre restaurant devrait être opérationnel,
                       que ce soit pendant les moments du rush ou non. Les problèmes informatiques se posent souvent le week-end et le soir lorsque vous êtes très occupé. Un problème informatique pendant ces heures peut avoir une incidence sur les impressions de votre restaurant, générant des impressions similaires à un manque de fiabilité ou pouvant même aggraver l'expérience d'un client.Le support DBSYS vous fournit un support informatique 24 heures sur 24 et 7 jours sur 7 depuis notre service d'assistance, ce qui vous permet de compter sur une équipe d'ingénieurs expérimentés, et veillera à ce que tous les problèmes technologiques rencontrés soient résolus dans les meilleurs délais
                    </p>
                    
                    
                </div>
            </div>
        </main>
    </div>
</section>
    </div>
  )
}
