import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from '../../context/Storecontext'

const Placeorder = () => {
  const { gettotal } = useContext(Storecontext);
  return (
    <div className='place-order'>
      <div className='place-order-left'>
        <p className="title">Delivery Information</p>
        <div className="details">
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>
        <input type="email" placeholder='Email Address' required />
        <input type="text" placeholder='Street' required />
        <div className="details">
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>
        <div className="details">
          <input type="number" placeholder='Enter Pincode' required />
          <input type="text" placeholder='Country' required />
        </div>
        <input type="text" placeholder='Phone' required />
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
            <button >Proceed to payment</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Placeorder