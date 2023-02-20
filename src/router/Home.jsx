import React from 'react'
import Testimonial from '../Components/Carousel'
import Event from '../Components/Event'
import Hero from '../Components/Hero'
import MiniCard from '../Components/MiniCard'
import WhatDo from '../Components/WhatDo'

const Home = () => {
  return (
    <div>
        <Hero />
        <MiniCard />
        <WhatDo />
        <Event/>
        <Testimonial />
    </div>
  )
}

export default Home