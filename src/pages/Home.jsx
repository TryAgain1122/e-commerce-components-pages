import Slider from '../components/Slider'
import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Categories from '../components/categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home