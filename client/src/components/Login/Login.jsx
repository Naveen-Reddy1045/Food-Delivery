import React, { useContext, useState } from 'react'
import './Login.css';
import { Storecontext } from '../../context/Storecontext';
import axios from 'axios';


const Login = ({ setlogin }) => {
  const [currentstate, setcurrentstate] = useState("Sign Up");
  const { url, token, settoken } = useContext(Storecontext);

  const [data, setdata] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onchangehandler = (event) => {
    const { name, value } = event.target;
    setdata(data => ({ ...data, [name]: value }))
  }

  const onlogin = async (event) => {
    event.preventDefault();
    let newurl = url;
    if (currentstate === "Login") {
      newurl += "/api/user/login"
    } else {
      newurl += "/api/user/register"
    }

    const response = await axios.post(newurl, data);

    if (response.data.success) {
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token)
      setlogin(false)
    } else {
      alert(response.data.message)
    }

  }


  return (
    <div className='login'>
      <form onSubmit={onlogin} className="login-container">
        <div className="login-title">
          <h2 className='h22'>{currentstate}</h2>
          <button className='close' onClick={() => { setlogin(false) }} >close</button>
        </div>
        <div className="login-details">
          {currentstate === "Login" ? <></> : <input type='text' name='name' onChange={onchangehandler} value={data.name} placeholder='Enter Your Name' required />}
          <input type='email' name='email' placeholder='Enter Your Email' onChange={onchangehandler} value={data.email} required />
          <input type='password' name='password' placeholder='Enter Password' onChange={onchangehandler} value={data.password} required />
        </div>

        <div className="conditions">
          <input type='checkbox' required />
          <p className='pp'>I agree all conditions.</p>
        </div>
        <button className='butt' type='submit'>{currentstate === "Sign Up" ? "Create Account" : "Login"}</button>
        {currentstate === "Login" ?
          <div className='divv'>Don't have an account? <span onClick={() => setcurrentstate("Sign Up")}>click here</span></div>
          : <div className='divv'>Already have an account?<span onClick={() => setcurrentstate("Login")}>Login here</span></div>}
      </form>
    </div>
  )
}

export default Login