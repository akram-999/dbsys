import React from 'react'
import {data} from './datakiosk'
import {Link} from 'react-router-dom'
import { FaLink } from "react-icons/fa6";

export default function Kiosk() {
  return (
    <div className='m-5'>
      
      <h1 className='text-center dark:text-white' data-aos="fade-down">Notre sélection <span className='text-yellow-400'>des bornes</span>  de commande</h1>

      <div className="items-center p-1 m-8 grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
    
      {data.map((product) => (
         
         <div className='single-team-inner text-center dark:bg-yellow-400' key={product.id} data-aos="zoom-in">
         <div className='thumb'>
           <img src={product.img1} alt='img' className='' />
           <ul className='team-social-inner'>
             <li>
               <Link to={`/solution/bornes/${product.id}`}>
               <FaLink  className='text-white '/>
               </Link>
             </li>
           </ul>
         </div>
         <div className='details '>
           <h5 className='hover:text-yellow-400 dark:text-white'>
             {product.name}
           </h5>
           <p className='dark:text-black'>{product.category}</p>
         </div>
       </div>
          
            
          ))}
           
   
    </div>
    </div>
  )
}
