import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import FoodItem from '../../FoodItem/FoodItem'

const Fooddisplay = ({ category }) => {
    const { food_list } = useContext(Storecontext)
    return (
        <div className='food-display' id='food-display'>
            <h1>Top dishes</h1>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === 'all' || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }

                })}
            </div>
        </div>
    )
}

export default Fooddisplay