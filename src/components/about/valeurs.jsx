import React from 'react'
import {data} from './data'
import './valeurs.css'

export default function Valeurs() {
  return (
    <>
    <h1 className='text-center m-5'>Nos Valeurs</h1>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 px-4">
        
        {data.map((data) => (
      <div className="woww fadeInUp group mb-12 " data-wow-delay=".15s" key={data.id}>
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-yellow-200">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-yellow-500 bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {data.icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {data.name}
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {data.description}
        </p>
        
      </div>
      ))}
    </div>
    </>
  )
}
