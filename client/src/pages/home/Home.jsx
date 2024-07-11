import React from 'react'
import "./Home.css"
import { Diagram, Footer, Main, Navbar,  Partner, Stats } from '../../components/components'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Main/>
        <Diagram/>
        <Stats/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default Home