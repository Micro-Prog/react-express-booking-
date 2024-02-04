import React from 'react';

// import css file
import './propertylist.css';

// import images
import Property1 from '../../assets/images/property_list/property_list-1.jpg';
import Property2 from '../../assets/images/property_list/property_list-2.png';
import Property3 from '../../assets/images/property_list/property_list-3.jpg';
import Property4 from '../../assets/images/property_list/property_list-4.jpg';
import Property5 from '../../assets/images/property_list/property_list-5.jpg';


const PropertyList = () => {
  return (
    <div className='property_list'>
        <div className='property_list_item'>
            <img 
                className='property_img'
                src={Property1}
            />
            <div className='property_titles'>
                <h1>Hotels</h1>
                <h2>333 Hotels</h2>
            </div>
        </div>
        <div className='property_list_item'>
            <img 
                className='property_img'
                src={Property2}
            />
            <div className='property_titles'>
                <h1>Apartments</h1>
                <h2>333 Apartments</h2>
            </div>
        </div>
        <div className='property_list_item'>
            <img 
                className='property_img'
                src={Property3}
            />
            <div className='property_titles'>
                <h1>Resorts</h1>
                <h2>333 Resorts</h2>
            </div>
        </div>
        <div className='property_list_item'>
            <img 
                className='property_img'
                src={Property4}
            />
            <div className='property_titles'>
                <h1>Villas</h1>
                <h2>333 Villas</h2>
            </div>
        </div>
        <div className='property_list_item'>
            <img 
                className='property_img'
                src={Property5}
            />
            <div className='property_titles'>
                <h1>Cabins</h1>
                <h2>333 Cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList