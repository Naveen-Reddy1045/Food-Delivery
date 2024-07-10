import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Placeholder from './pages/Placeorder/Placeorder'
import Cart from './pages/Cart/Cart'
import Help from './pages/Help/Help'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

const App = () => {
  const [login,setlogin]=useState(false);
  const [signup,setsignup]=useState(false);
  return (
    <>
    {login?<Login />:<></>}
    {/* {!signup?<Signup />:<></>} */}
      <div className='app'>

        <Navbar setlogin={setlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeholder />} />
          <Route path='/help' element={<Help />} />
        </Routes>


      </div>
      <Footer /></>
  )
}

export default App