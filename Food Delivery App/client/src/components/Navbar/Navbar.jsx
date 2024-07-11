import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { Storecontext } from '../../context/Storecontext'
const Navbar = ({setlogin,setsignup}) => {
    const[menu,setmenu]=useState("home");
    const {gettotal}=useContext(Storecontext);
    return (
        <div className='navbar'>
            <div className='logoname'>Ziggy</div>
            <div className='nav-bar'>
                <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
                <a href='#' onClick={()=>setmenu("getapp")} className={menu==="getapp"?"active":""}>Get App</a>
                <a href='#footer' onClick={()=>setmenu("aboutus")} className={menu==="aboutus"?"active":""}>About us</a>
                <Link to='/cart' onClick={()=>setmenu("cart")} className={(menu==="cart"?"active":"")||(gettotal===0?"":"dot")}>Cart</Link>
                {/* <button onClick={()=>setsignup(true)}  className='signup'>Sign Up</button> */}
                <button onClick={()=>setlogin(true)} className='log-in'>Log In</button>
            </div>
            
        </div>
    ) 
}

export default Navbar