import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Navbar = ({setlogin,setsignup}) => {
    const[menu,setmenu]=useState("home");
    return (
        <div className='navbar'>
            <div className='logoname'>Ziggy</div>
            <div className='nav-bar'>
                <Link onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#' onClick={()=>setmenu("getapp")} className={menu==="getapp"?"active":""}>Get App</a>
                <a href='#footer' onClick={()=>setmenu("aboutus")} className={menu==="aboutus"?"active":""}>About us</a>
                <a href='#' onClick={()=>setmenu("cart")} className={menu==="cart"?"active":""}>Cart</a>
                {/* <button onClick={()=>setsignup(true)}  className='signup'>Sign Up</button> */}
                <button onClick={()=>setlogin(true)} className='login'>Log In</button>
            </div>
            
        </div>
    )
}

export default Navbar