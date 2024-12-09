import React from 'react'
import {data} from './datatpv'
import {Link} from 'react-router-dom'
import './pos.css'
import { FaLink } from "react-icons/fa6";

export default function Poslist() {
  return (
    <>
   <div className="items-center p-1 m-8 grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
    
    {data.map((product) => (
       
       <div className='single-team-inner text-center dark:bg-yellow-400' key={product.id} data-aos="zoom-in">
       <div className='thumb'>
         <img src={product.img1} alt='img' />
         <ul className='team-social-inner'>
           <li>
             <Link to={`/solution/tpv-pos/${product.id}`}>
             <FaLink  className='text-white '/>
             </Link>
           </li>
         </ul>
       </div>
       <div className='details'>
         <h5 className='hover:text-yellow-400 dark:text-white'>
           {product.name}
         </h5>
         <p className='dark:text-black'>{product.category}</p>
       </div>
     </div>
        
          
        ))}
         
 
  </div>



    
    </>
  )
}
