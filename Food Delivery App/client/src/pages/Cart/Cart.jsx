import React, { useContext } from 'react'
import './Cart.css'
import { Storecontext } from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartitems, food_list, removefromcart,gettotal } = useContext(Storecontext);
  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitems[item._id] > 0) {
            return (
              <div className='cart-items-title each-cart-item'>
                <img src={item.image} alt='' />
                <p>{item.name}</p>
                <p>Rs.{item.price*10}</p>
                <p>{cartitems[item._id]}</p>
                <p>Rs.{item.price*10 * cartitems[item._id]}</p>
                <button onClick={() => removefromcart(item._id)}>Remove</button>
              </div>
            )
          }
        })}
      </div>
      <br />
      <div className="cart-bottom">
      <div className="cart-total-details">
        <h2>Total Value</h2>
        <div>
          <div className="total-cart">
            <p>Cart Total</p>
            <p>Rs. {gettotal()>0?10*gettotal():0}</p>
          </div>
          <div className="total-cart">
            <p>Delivery Charges</p>
            <p>Rs. {gettotal()>0?gettotal()/20:0}</p>
          </div>
          <hr />
          <div className="total-cart">
            <p>Total Amount</p>
            <p>Rs. {gettotal()>0?10*gettotal()+gettotal()/20:0}</p>
          </div>
          
        </div>
        <button onClick={()=>{navigate('/order')}}>Proceed to payment</button>
      </div>
      </div>
    </div>

  )
}

export default Cart