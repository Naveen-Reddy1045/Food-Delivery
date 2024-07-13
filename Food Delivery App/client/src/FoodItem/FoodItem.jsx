import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../assets/assets';
import { Storecontext } from '../context/Storecontext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartitems, addtocart, removefromcart, url } = useContext(Storecontext)

  return (
    <div className='food-item'>
      <div className="food-item-img">
        <img className='image' src={url + "/images/" + image} alt='' />
        {!cartitems[id]
          ? <img className='add' onClick={() => addtocart(id)} src={assets.add_icon_white} alt='' />
          : <div className='food-item-counter'>
            <img onClick={() => removefromcart(id)} src={assets.remove_icon_red} alt='' />
            <p>{cartitems[id]}</p>
            <img onClick={() => addtocart(id)} src={assets.add_icon_green} alt='' />
          </div>
        } 
      </div>
      <div className="food-info">
        <div className="food-name-price">
          <div className='food-name'><p>{name}</p></div>
          <p className="food-price">Rs. {price}</p>
        </div>

        <p className="food-description">{description}</p>
      </div>
    </div>
  )
}

export default FoodItem