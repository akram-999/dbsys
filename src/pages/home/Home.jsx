import React from 'react'
import Hero from '../../components/hero/Hero'
import Solution from '../../components/solution/Solution'
import Realisation from '../../components/realisation/Realisation'
import About from '../../components/about/About'


export default function Home() {
  return (
    <div>
      <Hero/>
      <Solution/>
      <About/>
      <Realisation/>
    </div>
  )
}
