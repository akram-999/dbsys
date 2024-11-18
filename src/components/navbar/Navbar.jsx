import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isClick,setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  }

  return (
    <nav className='p-6'>
      <div className='flex item-center justify-between'>
            <div>
                <img src='https://dbsys-services.ma/img/dbsys-logo.png' className='h-12' alt='img'/>
            </div>
            <div >
                <div className='hidden md:flex  space-x-11 items-center'>
                <Link to='/' className='text-black hover:text-orange-300 decoration-transparent'>ACCUEIL</Link>
                <Link to='/' className='text-black hover:text-orange-300 decoration-transparent '>A PROPOS NOUS</Link>
                <Link to='/' className='text-black hover:text-orange-300 decoration-transparent '>NOS SOLUTIONS ET PRODUITS</Link>
                <Link to='/' className='text-black hover:text-orange-300 decoration-transparent '>SERVICES</Link>
                <Link to='/' className='text-black hover:text-orange-300 decoration-transparent '>CONTACT</Link>
                </div>
                <div className='flex space-x-6 items-center '>
               
                <button className='md:hidden' onClick={toggleNavbar}>
                  {isClick ? (
                    
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                      ): 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  }
                </button>
                
            </div>
            </div>

            
            
      </div>
      {isClick && (
              <div className='md:hidden p-3 mt-2 bg-violet-600 rounded'>
                
                  <Link to='/' className='text-white block p-1 decoration-transparent '>ACCUEIL</Link>
                  <Link to='/' className='text-white block p-1 decoration-transparent '>A PROPOS NOUS</Link>
                  <Link to='/' className='text-white block p-1 decoration-transparent '>NOS SOLUTIONS ET PRODUITS</Link>
                  <Link to='/' className='text-white block p-1 decoration-transparent '>SERVICES</Link>
                  <Link to='/' className='text-white block p-1 decoration-transparent '>CONTACT</Link>
                  
              </div>
            )}
    </nav>
  )
}
