import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import { Diagram } from './components/components'
import LoginUser from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Diagram/>}/>
          <Route path='/login' element={<LoginUser/>}/>
        </Routes>
    </div>
  )

}
export default App
