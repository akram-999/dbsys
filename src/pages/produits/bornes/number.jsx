import React from 'react'
import { useSpring, animated } from 'react-spring'




function Number ({n}) {
 const {number} = useSpring({
    from : {number : 0},
    number : n, 
    delay:200,
    config:{mass:1,tension:20,friction:10},
 });
 return <animated.div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400'>{number.to((n)=>n.toFixed(0))}</animated.div>
}
function Number2 ({n}) {
 const {number} = useSpring({
    from : {number : 0},
    number : n, 
    delay:200,
    config:{mass:1,tension:20,friction:10},
 });
 return <animated.div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400'>{number.to((n)=>n.toFixed(0))}</animated.div>
}

function Number3 ({n}) {
 const {number} = useSpring({
    from : {number : 0},
    number : n, 
    delay:200,
    config:{mass:1,tension:20,friction:10},
 });
 return <animated.div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400'>{number.to((n)=>n.toFixed(0))}</animated.div>
}

function Number4 ({n}) {
 const {number} = useSpring({
    from : {number : 0},
    number : n, 
    delay:200,
    config:{mass:1,tension:20,friction:10},
 });
 return <animated.div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400'>{number.to((n)=>n.toFixed(0))}</animated.div>
}



export default function number() {

  return (
    <section class="py-10 bg-gray-100 dark:bg-gray-900 sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center" data-aos="fade-down">
            <h3 class="text-2xl font-bold leading-tight  sm:text-4xl lg:text-4xl dark:text-white">Chez certains de <span className='underline decoration-yellow-400'>nos clients</span></h3>
           </div>

        <div class="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-4">
            <div data-aos="zoom-in">


               
                
                
                <h3 class=" font-bold text-7xl">
                    <span class="flex ml-9 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400"> <Number n={20} /> %</span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900 dark:text-neutral-400">VENTES DE BOISSONS</p>
                
            </div>

            <div data-aos="zoom-in">
                <h3 class="font-bold text-7xl">
                    <span class="flex ml-9 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400"> <Number2 n={30} /> % </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900 dark:text-neutral-400">TICKET MOYEN</p>
                
            </div>

            <div data-aos="zoom-in">
                <h3 class="font-bold text-7xl">
                    <span class="flex ml-9 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400"> <Number3 n={50} /> % </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900 dark:text-neutral-400">VENTES SUPPLÉMENTAIRES</p>
                
            </div>

            <div data-aos="zoom-in">
                <h3 class="font-bold text-7xl">
                    <span class="flex ml-9 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400"> <Number4 n={50} /> %  </span>
                </h3>
                <p class="mt-4 text-xl font-medium text-gray-900 dark:text-neutral-400">HAUSSE DES VENTES</p>
                
            </div>
        </div>
    </div>
</section>

  )
}
