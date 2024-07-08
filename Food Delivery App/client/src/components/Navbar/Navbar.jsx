import React from 'react'
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {
    const[menu,setmenu]=useState("home");
    return (
        <div className='navbar'>
            <div className='logoname'>Ziggy</div>
            <div className='nav-bar'>
                <div onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</div>
                <div onClick={()=>setmenu("search")} className={menu==="search"?"active":""}>Search</div>
                <div onClick={()=>setmenu("help")} className={menu==="help"?"active":""}>Help</div>
                <div onClick={()=>setmenu("cart")} className={menu==="cart"?"active":""}>Cart</div>
                <button className='signin'>SignIn</button>
            </div>
            
        </div>
    )
}

export default Navbar