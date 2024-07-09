import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'

const Home = () => {
  const [category,setcategory]=useState("all");
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setcategory={setcategory} />
        <Fooddisplay category={category}/>
    </div>
  )
}

export default Home