import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Storecontext } from '../../context/Storecontext'
import { assets } from '../../assets/assets'

const Navbar = ({setlogin,setsignup}) => {
    const[menu,setmenu]=useState("home");
    const {gettotal,token,settoken}=useContext(Storecontext);
    const navigate=useNavigate();

    const logout=()=>{
        localStorage.removeItem("token");
        settoken("");
        navigate('/')
    }

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
                {!token?
                <button onClick={()=>setlogin(true)} className='log-in'>Log In</button>
            :<div className='navbar-profile'>
                <img src={assets.profile_icon} alt='' />
                <ul className="profile">
                    <li>Orders</li>
                    <li onClick={logout}>Logout</li>
                </ul>
                </div>}
            </div>
            
        </div>
    ) 
}

export default Navbar