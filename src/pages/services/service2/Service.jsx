import React from 'react'
import Breadcrumb from '../../../components/crump/Breadcrumb'

export default function Service() {
  return (
    <div>
      <Breadcrumb pageName="Service d'assistance sur site"/>
      <section class="bg-yellow-100 dark:bg-gray-900">
    <div class="relative flex">
        <div class="min-h-screen lg:w-1/3"></div>
        <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

        <div
            class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
                <img class="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" data-aos="fade-right" src="https://img.freepik.com/free-photo/close-up-person-working-call-center_23-2149288225.jpg?t=st=1732105793~exp=1732109393~hmac=e1efd35c3a4e32e36e88f768b683664d9392eb842063ea91d0f63e0a18a049eb&w=996" alt="" />

                <div class="mt-8 lg:px-10 lg:mt-0" data-aos="fade-left">
                    <h1 class="text-2xl lg:text-3xl font-semibold text-yellow-400  ">
                        Service d'assistance sur site
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                      <span className='text-yellow-400'>DBSYS SERVICES</span> fournit, en plus du téléphone et l'accès à distance le support technique sur site. Il existe de nombreux cas dans lesquels la présence physique des agents de support IT qualifiés peut résoudre des problèmes qu'il serait impossible de résoudre autrement.
                    </p>

                    <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                    Depuis 2004, nous avons accumulé une base de connaissances techniques inestimable et 
                    développé des méthodologies et des pratiques optimales.
                    </p>

                </div>
            </div>

            
        </div>
    </div>
</section>
    </div>
  )
}
