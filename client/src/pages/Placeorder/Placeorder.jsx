import React, { useContext, useState } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../context/Storecontext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Placeorder = () => {
  const { gettotal, token, url, food_list, cartitems } = useContext(Storecontext);
  const navigate = useNavigate();
  const [addr, setaddr] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: ""
  })

  const onchangeaddr = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setaddr(addr => ({ ...addr, [name]: value }));
  }

  const placeHolder = async (event) => {
    event.preventDefault();
    try {
      let orderitems = [];
      food_list.forEach((item) => {
        if (cartitems[item._id] > 0) {
          let iteminfo = item;
          iteminfo["quantity"] = cartitems[item._id];
          orderitems.push(iteminfo);
        }
      })
      let orderdata = {
        address: addr,
        items: orderitems,
        amount: gettotal() + gettotal() / 20
      }
      let res = await axios.post(url + "/api/order/place", orderdata, { headers: { token } });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/userorders');
        
      } else {
        alert("Error");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={placeHolder} className='place-order'>
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="details">
          <input name='firstname' onChange={onchangeaddr} value={addr.firstname} type="text" placeholder='First Name' required />
          <input name='lastname' onChange={onchangeaddr} value={addr.lastname} type="text" placeholder='Last Name' required />
        </div>
        <input name='email' onChange={onchangeaddr} value={addr.email} type="email " placeholder='Email Address' required />
        <input name='street' onChange={onchangeaddr} value={addr.street} type="text" placeholder='Street' required />
        <div className="details">
          <input name='city' onChange={onchangeaddr} value={addr.city} type="text" placeholder='City' required />
          <input name='state' onChange={onchangeaddr} value={addr.state} type="text" placeholder='State' required />
        </div>
        <div className="details">
          <input name='pincode' onChange={onchangeaddr} value={addr.pincode} type="number" placeholder='Enter Pincode' required />
          <input name='country' onChange={onchangeaddr} value={addr.country} type="text" placeholder='Country' required />
        </div>
        <input name='phone' onChange={onchangeaddr} value={addr.phone} type="text" placeholder='Phone' required />
      </div>

      <div className='place-order-right'>
        <div className="cart-total-details">
          <h1>Total Value</h1>
          <div>
            <div className="total-cart">
              <p>Cart Total</p>
              <p>Rs. {gettotal() > 0 ? gettotal() : 0}</p>
            </div>
            <div className="total-cart">
              <p>Delivery Charges</p>
              <p>Rs. {gettotal() > 0 ? gettotal() / 20 : 0}</p>
            </div>
            <hr />
            <div className="total-cart">
              <p>Total Amount</p>
              <p>Rs. {gettotal() > 0 ? gettotal() + gettotal() / 20 : 0}</p>
            </div>
            <button type='submit'>Proceed to payment (Cash on delivery only)</button>

          </div>
        </div>
      </div>
    </form>
  )
}

export default Placeorder