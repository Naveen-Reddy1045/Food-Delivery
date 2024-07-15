import React, { useContext, useEffect, useState } from 'react'
import './Userorder.css'
import { Storecontext } from '../../context/Storecontext';
import axios from 'axios'

const Userorder = () => {
  const [data, setdata] = useState([]);
  const { token, url } = useContext(Storecontext);

  const getorders = async () => {
    const res = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setdata(res.data.data);

  }

  useEffect(() => {
    if (token) {
      getorders();
    }
  }, [token])

  return (
    <div className='orders'>
      <h2>My Orders</h2>
      <div className="userorders">
        {data.map((orders, index) => {
          return (
            <div key={index} className='each-order'>
              <p>Ordered Date: {new Date(orders.date).toLocaleDateString()} {new Date(orders.date).toLocaleTimeString()}</p>
              <ul>
                {orders.items.map((item, itemindex) => {
                  return (<li key={itemindex}>{item.name + " X " + item.quantity}</li>)
                })}
              </ul>

              <p>Total Amount: Rs.<b>{orders.amount}</b><br /> (including delivery charges)</p>
              <p>No. of Varieties : {orders.items.length}</p>


            </div>

          )
        })}
      </div>
    </div>
  )
}

export default Userorder