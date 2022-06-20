import React from 'react'
import Annoncement from '../components/Annoncement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
// import SlidePrac from '../components/SliderPrac'


const Home = () => {
  return (
    <>
        <Annoncement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        {/* <SlidePrac/> */}
        <Products/>
    </>
  )
}

export default Home