import React from 'react'
import Hero from '../../components/hero/Hero'
import Solution from '../../components/solution/Solution'
import Realisation from '../../components/realisation/Realisation'
import About from '../../components/about/About'
import Partners from '../../components/partners/Partners'
import ProductList from '../../components/nouveautes/Products'
// import Test from '../../components/solution/testsol'




export default function Home() {
  return (
    <div>
      <Hero/>
      <Partners/>
      <About/>
      <Solution/>
      {/* <Test/> */}
      <ProductList/>
      
      <Realisation/>
    </div>
  )
}
