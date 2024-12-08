import React, {useState} from 'react'
import {data} from './data'
import {Link} from 'react-router-dom'
import './product.css'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function Products() {
    const [product,setProduct] = useState(data)
    const filterProducts = (catPro) =>{
        const update = data.filter((curPro)=>{
          return curPro.category === catPro
        })
        setProduct(update)
    }
  return (
    <div>
      <h1 className="text-lg  text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400 dark:bg-gradient-to-r  dark:from-orange-300 dark:to-yellow-400   " data-aos="zoom-in">NOUVEAUTES</h1>
      <h1 className='text-center  text-2xl dark:text-white'>Découvrez nos derniers produits pour <span className='text-yellow-400'>la collection 2019</span> </h1>
      <div className="flex items-center justify-center my-5 " data-aos="zoom-in">
            <div className=" items-center p-1  dark:border-yellow-400 rounded-xl grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:gap-x-8">
                <button className="px-4 py-2 text-sm font-medium text-white capitalize bg-gradient-to-r from-orange-300 to-yellow-400 md:py-3 rounded-xl md:px-12" type='button' onClick={()=>setProduct(data)}>TOUS LES PRODUITS</button>
                <button className="px-4 py-2 mx-4 text-sm font-medium  capitalize transition-colors duration-300 md:py-3 dark:text-yellow-400 dark:hover:text-white focus:outline-none hover:bg-gradient-to-r from-orange-300 to-yellow-400 hover:text-white rounded-xl md:mx-8 md:px-12" onClick={()=>filterProducts("TPV POS")}>TPV POS</button>
                <button className="px-4 py-2 text-sm font-medium  capitalize transition-colors duration-300 md:py-3 dark:text-yellow-400 dark:hover:text-white focus:outline-none hover:bg-gradient-to-r from-orange-300 to-yellow-400 hover:text-white rounded-xl md:px-12" onClick={()=>filterProducts("BORNES")}>BORNES</button>
                <button className="px-4 py-2 text-sm font-medium  capitalize transition-colors duration-300 md:py-3 dark:text-yellow-400 dark:hover:text-white focus:outline-none hover:bg-gradient-to-r from-orange-300 to-yellow-400 hover:text-white rounded-xl md:px-12" onClick={()=>filterProducts("PAGERS")}>PAGERS</button>
                <button className="px-4 py-2 text-sm font-medium  capitalize transition-colors duration-300 md:py-3 dark:text-yellow-400 dark:hover:text-white focus:outline-none hover:bg-gradient-to-r from-orange-300 to-yellow-400 hover:text-white rounded-xl md:px-12" onClick={()=>filterProducts("DIGITAL SIGNAGE")}>DIGITAL SIGNAGE</button>
                <button className="px-4 py-2 text-sm font-medium  capitalize transition-colors duration-300 md:py-3 dark:text-yellow-400 dark:hover:text-white focus:outline-none hover:bg-gradient-to-r from-orange-300 to-yellow-400 hover:text-white rounded-xl md:px-12" onClick={()=>filterProducts("DT SOLUTIONS")}>DT SOLUTIONS</button>
            </div>
        </div>

    <div className="items-center p-1 m-8 grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 ">
    
      {product.map((product) => (
         
         <div className='single-team-inner text-center' key={product.id}>
         <div className='thumb'>
           <img src={product.img1} alt='img' />
           <ul className='team-social-inner'>
             <li>
               <Link to={`/product/${product.id}`}>
               <FaLink  className='text-white '/>
               </Link>
             </li>
           </ul>
         </div>
         <div className='details'>
           <h5 className='hover:text-yellow-400'>
             {product.name}
           </h5>
           <p>{product.category}</p>
         </div>
       </div>
          
            
          ))}
           
   
    </div>
    </div>
  )
}
