import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import './Navbar.css'

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
                <div className='hidden md:flex mt-2 space-x-11 items-center'>
                <Link to='/' className='text-black hover:text-orange-300 decoration-transparent font-semibold'>ACCUEIL</Link>
                <Link to='/about' className='text-black hover:text-orange-300 decoration-transparent font-semibold'>A PROPOS NOUS</Link>
                <Link to='/' className='text-black hover:text-orange-300 decoration-transparent font-semibold'>NOS SOLUTIONS ET PRODUITS</Link>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5  font-semibold text-gray-900  ">
                        SERVICES
                        <ChevronDownIcon aria-hidden="true" className="mt-1 size-5 text-gray-400" />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <Link
                            to="/service1"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            support helpdesk
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            to="/service2"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Service d'assistance sur site
                          </Link>
                        </MenuItem>
                       
                        
                      </div>
                    </MenuItems>
                  </Menu>
                <Link to='/contact' className='text-black hover:text-orange-300 decoration-transparent font-semibold bt'>CONTACT</Link>
                  
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
              <div className='md:hidden p-3 mt-2 bg-yellow-400 rounded'>
                
                  <Link to='/' className='text-white block p-1 decoration-transparent '>ACCUEIL</Link>
                  <Link to='/' className='text-white block p-1 decoration-transparent '>A PROPOS NOUS</Link>
                  <Link to='/' className='text-white block p-1 decoration-transparent '>NOS SOLUTIONS ET PRODUITS</Link>
                  
                  <Link to='/' className='text-white block p-1 decoration-transparent '>CONTACT</Link>
                  <Menu as="div" className="relative inline-block ">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center gap-x-1.5  font-semibold text-gray-900  ">
                        SERVICES
                        <ChevronDownIcon aria-hidden="true" className="mt-1 size-5 text-gray-400" />
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <Link
                            to="/service1"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            support helpdesk
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            to="/service2"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Service d'assistance sur site
                          </Link>
                        </MenuItem>
                       
                        
                      </div>
                    </MenuItems>
                  </Menu>
                  
              </div>
            )}
    </nav>
  )
}
