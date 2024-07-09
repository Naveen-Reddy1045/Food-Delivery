import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  const [category,setcategory]=useState("all");
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setcategory={setcategory} />
    </div>
  )
}

export default Home