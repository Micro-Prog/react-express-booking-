import React from 'react'

// import css
import './featured.css'
import Featured1 from '../../assets/images/featured/featured-1.jpg';
import Featured2 from '../../assets/images/featured/featured-2.jpg';
import Featured3 from '../../assets/images/featured/featured-3.jpg';
import useFetch from '../hooks/useFetch/useFetch';


const FeaturedList = () => {

  const { data, error, loading } = useFetch("/hotels/countByCity?cities=berlin,madrid,london");


  return (
    <div className='featured'>
      { loading ? "loading data" :
        <>
          <div className='featured_item'>
              <img 
                  className='featured_img'
                  src={Featured1}
              />
              <div className='featured_titles'>
                  <h1>Berlin</h1>
                  <h2>{data[0]} Features</h2>
              </div>
          </div>
          <div className='featured_item'>
              <img 
                  className='featured_img'
                  src={Featured2}
              />
              <div className='featured_titles'>
                  <h1>Madrid</h1>
                  <h2>{data[1]} Features</h2>
              </div>
          </div>
          <div className='featured_item'>
              <img
                  className='featured_img' 
                  src={Featured3}
              />
              <div className='featured_titles'>
                  <h1>London</h1>
                  <h2>{data[2]} Features</h2>
              </div>
          </div>
        </>
      }
    </div>
  )
}

export default FeaturedList