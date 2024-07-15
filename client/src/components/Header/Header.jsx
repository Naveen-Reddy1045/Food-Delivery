import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite items</h2>
        <p>Discover the best food & drinks in your places.</p>
        <div className='buttons'>
          <a href='#explore-menu'>View Menu</a>
          <a href='#food-display'>View Top Dishes</a>
        </div>
      </div>
    </div>
  )
}

export default Header