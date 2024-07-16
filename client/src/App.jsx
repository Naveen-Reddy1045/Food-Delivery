import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Placeholder from './pages/Placeorder/Placeorder'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Userorder from './pages/Userorder/Userorder.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [login, setlogin] = useState(false);
  return (
    <>
      <ToastContainer />
      {login ? <Login setlogin={setlogin} /> : <></>}
      <div className='app'>

        <Navbar setlogin={setlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeholder />} />
          <Route path='/userorders' element={<Userorder />} />
        </Routes>


      </div>
      <Footer /></>
  )
}

export default App