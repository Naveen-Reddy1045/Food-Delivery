import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Placeholder from './pages/Placeorder/Placeorder'
import Cart from './pages/Cart/Cart'
import Help from './pages/Help/Help'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeholder' element={<Placeholder />} />
        <Route path='/help' element={<Help />} />
      </Routes>
      
    </div>
  )
}

export default App