import React from 'react'
import './FoodItem.css'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
        <div className="food-item-img">
            <img className='image' src={image} alt='' />
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