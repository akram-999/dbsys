import React , {useState}  from 'react'
import {data} from './data'
import { useParams } from "react-router-dom"

export default function Testpro() {
    const {id} = useParams();
    const product = data.find((p)=>p.id===parseInt(id));

    const [activeImg, setActiveImage] = useState(product.img2)


  return (
    <div >
      

      <div className='flex flex-col justify-around lg:flex-row  lg:items-center'>
            <div className='flex flex-col ml-8 gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-auto aspect-square object-contain rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={product.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(product.img2)}/>
                    <img src={product.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(product.img3)}/>
                    <img src={product.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(product.img4)}/>
                    <img src={product.img5} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(product.img5)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex m-5 flex-col p-5  lg:w-2/4  bg-gradient-to-t from-yellow-100 to-white'>
           
                <div>
                    <span className=' text-yellow-400 font-semibold'>{product.category}</span>
                    <h1 className='text-3xl font-bold'>{product.name}</h1>
                </div>
                <p className='text-gray-700'>
                {product.description}
                </p>

                <h4 className='text-yellow-400 dark:text-white '>Product information</h4>
                
                {product.Color &&
                <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Color</h3>

                    <p className="text-gray-400">{product.Color.join(" , ")}</p>
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

            {product.Ecran &&
                <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Ecran</h3>

                    <ul>
                    
                    <li className=" dark:text-gray-400"><span className="text-yellow-400  dark:text-yellow-400">Size :</span> {product.Ecran.Taill.join(" , ")}</li>
                    <li className=" dark:text-gray-400"><span className="text-yellow-400  dark:text-yellow-400">Resolution :</span>  {product.Ecran.Resolution.join(" , ")}</li>
                    </ul>
                </div>
                    }

         
                {product.Fonctionnalités && 
                    <div >
                        
                    <h3 className="text-sm font-medium text-gray-900 dark:text-yellow-400">Fonctionnalités</h3>

                    <div className="mt-4">
                        
                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">

                        {product.Fonctionnalités.map((product) => (
                        <li className="text-yellow-400"><span className="text-gray-800">{product}</span></li>
                        ))}
                        
                        
                        </ul>

                    </div>
                    </div>
}

            </div>
        </div>
    





    
    
        

  
    

    </div>









   
  )
}
