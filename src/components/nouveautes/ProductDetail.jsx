import React from 'react'
import {data} from './data'
import { useParams } from "react-router-dom"
export default function ProductDetail() {
    const {id} = useParams();
    const product = data.find((p)=>p.id===parseInt(id));
  return (
  
<div >
  <div className="pt-6">
    

    
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    {product.img2 && <img src={product.img2} alt={product.alt} className="hidden aspect-[3/4] size-full rounded-lg object-contain lg:block" />}
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        {product.img5 && <img src={product.img5} alt={product.alt} className="aspect-[3/2] size-full rounded-lg object-contain" />}
        {product.img4 && <img src={product.img4} alt={product.alt} className="aspect-[3/2] size-full rounded-lg object-contain" />}
      </div>
      {product.img4 && <img src={product.img3} alt={product.alt} className="aspect-[4/5] size-full object-contain sm:rounded-lg lg:aspect-[3/4]" /> }
    </div>

    
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">{product.name}</h1>
      </div>

     
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h4 className='dark:text-white'>Product information</h4>
        

  
        

        <div className="mt-10">
        
        {product.Color &&
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Color</h3>

            <p className="text-gray-400">{product.Color.join(" , ")}</p>
          </div>
        }

          {product.Ecran &&
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Ecran</h3>

            <ul>
              
              <li className=" dark:text-gray-400"><span className="text-yellow-400  dark:text-yellow-400">Size :</span> {product.Ecran.Taill.join(" , ")}</li>
              <li className=" dark:text-gray-400"><span className="text-yellow-400  dark:text-yellow-400">Resolution :</span>  {product.Ecran.Resolution.join(" , ")}</li>
            </ul>
          </div>
            }

          {product.Processeur &&
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Processeur</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.Processeur.join(" , ")}</p>
          </div>
          
          }      

{product.Memoire &&
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Memoire</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.Memoire.join(" , ")}</p>
          </div>
}

{product.Stockage && 
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Stockage</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.Stockage.join(" , ")}</p>
          </div>
}

{product.Dimensions && 
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Dimensions</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.Dimensions}</p>
          </div>
}

{product.PoidsKg && 
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Poids/Kg</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.PoidsKg}</p>
          </div>
}

{product.Scanner && 
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Scanner</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.Scanner.join(' , ')}</p>
          </div>
}

{product.Imprimante && 
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Imprimante</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.Imprimante}</p>
          </div>
}

{product.TemperaturesOperationnelles && 
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">TemperaturesOperationnelles</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.TemperaturesOperationnelles}</p>
          </div>
}

{product.SystèmeAudio && 
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">SystèmeAudio</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.SystèmeAudio.join(' , ')}</p>
          </div>
}

{product.Connectivite && 
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Connectivite</h3>

            <p className="text-gray-400 dark:text-gray-400">{product.Connectivite}</p>
          </div>
}

         
          </div>
      </div>

      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
       

        <div>
          <h3 className="sr-only dark:text-yellow-400">Description</h3>

          <div className="space-y-6">
            <p className="text-base text-gray-900 dark:text-gray-400">{product.description}</p>
          </div>
        </div>

        {product.Fonctionnalités && 
        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Fonctionnalités</h3>

          <div className="mt-4">
            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">

            {product.Fonctionnalités.map((product) => (
              <li className="text-gray-400"><span className="text-gray-400">{product}</span></li>
            ))}
              
             
            </ul>
          </div>
        </div>
}

{product.AcrelecPC && 
        <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">AcrelecPC</h3>

            <p className="text-gray-400">{product.AcrelecPC.join(" , ")}</p>
          </div>
}
        
{product.touchScreen && 
        <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">touchScreen</h3>

            <p className="text-gray-400">{product.touchScreen.join(" , ")}</p>
          </div>
}
        
      </div>
    </div>
  </div>
</div>

  )
}
