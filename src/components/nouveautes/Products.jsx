import React, {useState} from 'react'
import {data} from './data'
import {Link} from 'react-router-dom'
import './product.css'

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
      <h1 className='text-center  text-2xl'>Découvrez nos derniers produits pour <span className='text-yellow-400'>la collection 2019</span> </h1>
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

    <div className="containerr ">
    <div className="card__container">
      {product.map((product) => (
         
            <article className="card__article " key={product.id} data-aos="zoom-in"> 
               <img src={product.img1} alt="image" className="card__img" />

               <div className="card__data">
                  <h2 className="card__title text-white">{product.name}</h2>
                  <span className="card__description">{product.category}</span>
                  
                  <Link to={`/product/${product.id}`} className="card__button ">En Savoir Plus</Link>
               </div>
            </article>
          
            
          ))}
           
           </div>
           </div>
    </div>
  )
}
