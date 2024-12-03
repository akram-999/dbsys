import React from 'react'
import {data} from './datatpv'
import {Link} from 'react-router-dom'
import './pos.css'

export default function Poslist() {
  return (
    <>
    <div className="containerr ">
    <div className="card__container">
      {data.map((product) => (
         
            <article className="card__article " key={product.id} data-aos="zoom-in"> 
               <img src={product.img1} alt="image" className="card__img" />

               <div className="card__data">
                  <h2 className="card__title text-white">{product.name}</h2>
                  <span className="card__description">{product.category}</span>
                  
                  <Link to={`/solution/tpv-pos/${product.id}`} className="card__button ">En Savoir Plus</Link>
               </div>
            </article>
          
            
          ))}
           
           </div>
    </div>



    
    </>
  )
}
