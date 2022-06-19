import React from 'react'
import Annoncement from '../components/Annoncement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <>
        <Annoncement/>
        <Navbar/>
        <Slider/>
        <Categories/>
    </>
  )
}

export default Home