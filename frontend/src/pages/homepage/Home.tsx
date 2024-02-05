import React from 'react'

// home page styles
import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import FeaturedList from '../../components/featured/FeaturedList';
import PropertyList from '../../components/property_list/PropertyList';
import HomeGuest from '../../components/home_guest/HomeGuest';
import Email from '../../components/maillist/Email';
import Footer from '../../components/footer/Footer';


const Home = () => {
  return (
    <div>
      
      {/* navbar */}
      <Navbar />
      
      {/* header */}
      <Header />

      <div className='home_container'>

        {/* Featured List */}
        <FeaturedList />
        
        {/* property list */}
        <h1 className='home_title'>Explore by Type ...</h1>
        <PropertyList />

        {/* home guest */}
        <h1 className='home_title'>Homes guests love</h1>
        <HomeGuest />

        {/* email section */}
        <Email />

        {/* footer */}
        <Footer />

      </div>

    </div>
  )
}

export default Home