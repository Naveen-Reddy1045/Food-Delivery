import React, { useState } from 'react'
import './Login.css'


const Login = ({ setlogin }) => {
  const [currentstate, setcurrentstate] = useState("Sign Up")

  return (
    <div className='login'>
      <form className="login-container">
        <div className="login-title">
          <h2 className='h22'>{currentstate}</h2>
          <button className='close' onClick={() => { setlogin(false) }} >close</button>
        </div>
        <div className="login-details">
          {currentstate === "Login" ? <></> : <input type='text' placeholder='Enter Your Name' required />}
          <input type='email' placeholder='Enter Your Email' required />
          <input type='password' placeholder='Enter Password' required />
        </div>
        
        <div className="conditions">
          <input type='checkbox' required />
          <p className='pp'>I agree all conditions.</p>
        </div>
        <button className='butt'>{currentstate === "Sign Up" ? "Create Account" : "Login"}</button>
        {currentstate === "Login" ?
        <div className='divv'>Don't have an account? <span onClick={()=>setcurrentstate("Sign Up")}>click here</span></div>
      : <div className='divv'>Already have an account?<span onClick={()=>setcurrentstate("Login")}>Login here</span></div>}
      </form>
    </div>
  )
}

export default Login