import React from 'react';

// import the css file
import './homeguest.css';

// import images
import HomeGuest1 from '../../assets/images/home_guest/home_guest-1.png';
import HomeGuest2 from '../../assets/images/home_guest/home_guest-2.jpg';
import HomeGuest3 from '../../assets/images/home_guest/home_guest-3.jpeg';
import HomeGuest4 from '../../assets/images/home_guest/home_guest-4.jpg';



const HomeGuest = () => {
  return (
    <div className='home_guest'>
        <div className='home_guest_item'>
            <img 
                className='home_guest_img'
                src={HomeGuest1}
                />
            <span className='home_guest_name'>the first</span>
            <span className='home_guest_city'>the first city name</span>
            <span className='home_guest_price'>Starting from $230</span>
            <div className='home_guest_rating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='home_guest_item'>
            <img 
                className='home_guest_img'
                src={HomeGuest2}
                />
            <span className='home_guest_name'>the second</span>
            <span className='home_guest_city'>the second city name</span>
            <span className='home_guest_price'>Starting from $230</span>
            <div className='home_guest_rating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='home_guest_item'>
            <img 
                className='home_guest_img'
                src={HomeGuest3}
                />
            <span className='home_guest_name'>the third</span>
            <span className='home_guest_city'>the third city name</span>
            <span className='home_guest_price'>Starting from $230</span>
            <div className='home_guest_rating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className='home_guest_item'>
            <img 
                className='home_guest_img'
                src={HomeGuest4}
                />
            <span className='home_guest_name'>the fourth</span>
            <span className='home_guest_city'>the fourth city name</span>
            <span className='home_guest_price'>Starting from $230</span>
            <div className='home_guest_rating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default HomeGuest