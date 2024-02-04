import React from 'react';

// import the css file
import './searchitem.css';

import SearchItem1 from '../../assets/images/search_item/search_item-1.png';


const SearchItem = () => {
  return (
    <div className='search_item'>
        <img
            src={SearchItem1}
            alt=''
            className='search_item_img'
        />
        <div className='search_item_description'>
            <h1 className='search_item_title'>Tower Street Apartments</h1>
            <span className='search_item_distance'>500m from center</span>
            <span className='search_item_taxi'>Free airport taxi</span>
            <span className='search_item_subtitle'>Studio Apartments with Air Conditioning</span>
            <span className='search_item_features'>Entire Studio - 1 Bathroom - 21 m2 1 full bed</span>
            <span className='search_item_cancel'>Free cancellation</span>
            <span className='search_item_cancel_subtitle'>You can cancel later</span>
        </div>
        <div className='search_item_details'>
            <div className='search_item_details_rating'>
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className='search_item_details_texts'>
                <span className='search_item_details_price'>$123</span>
                <span className='search_item_details_tax'>Includes taxes and fees</span>
                <button className='search_item_check_button'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem