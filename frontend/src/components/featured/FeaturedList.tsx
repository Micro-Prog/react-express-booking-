import React from 'react'

// import css
import './featured.css'
import Featured1 from '../../assets/images/featured/featured-1.jpg';
import Featured2 from '../../assets/images/featured/featured-2.jpg';
import Featured3 from '../../assets/images/featured/featured-3.jpg';


const FeaturedList = () => {
  return (
    <div className='featured'>
      <div className='featured_item'>
          <img 
              className='featured_img'
              src={Featured1}
          />
          <div className='featured_titles'>
              <h1>Dublin</h1>
              <h2>123 Features</h2>
          </div>
        </div>
        <div className='featured_item'>
          <img 
              className='featured_img'
              src={Featured2}
          />
          <div className='featured_titles'>
              <h1>Frankfurt</h1>
              <h2>123 Features</h2>
          </div>
        </div>
        <div className='featured_item'>
          <img
              className='featured_img' 
              src={Featured3}
          />
          <div className='featured_titles'>
              <h1>Toronto</h1>
              <h2>123 Features</h2>
          </div>
        </div>
    </div>
  )
}

export default FeaturedList