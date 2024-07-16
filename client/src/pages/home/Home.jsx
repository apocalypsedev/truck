import React from 'react'
import { Diagram, Navbar } from '../../components/components'
import LoginUser from '../../components/footer/Footer'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Diagram/>
        <LoginUser/>
    </div>
  )
}

export default Home