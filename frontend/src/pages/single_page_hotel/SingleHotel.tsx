import React, { useState } from 'react';

// import the css file
import './singlehotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleArrowLeft, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import IMG1 from '../../assets/images/single_page/single-page-1.jpg';
import IMG2 from '../../assets/images/single_page/single-page-2.png';
import IMG3 from '../../assets/images/single_page/single-page-3.png';
import IMG4 from '../../assets/images/single_page/single-page-4.jpg';
import IMG5 from '../../assets/images/single_page/single-page-5.png';
import IMG6 from '../../assets/images/single_page/single-page-6.png';
import Email from '../../components/maillist/Email';
import Footer from '../../components/footer/Footer';

// define images
const photos = [
  {
    src: IMG1,
  },
  {
    src: IMG2,
  },  
  {
    src: IMG3,
  },  
  {
    src: IMG4,
  },  
  {
    src: IMG5,
  },  
  {
    src: IMG6,
  },
];

const SingleHotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = (index: number) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (props: String) => {
    let newSlideNum;

    if (props == "left") {
      newSlideNum = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNum = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNum);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='singlepage_hotel_container'>
        {
          open && 
          <div className='image_slider'>
            <FontAwesomeIcon 
              icon={faCircleXmark} 
              className='close' 
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon 
              icon={faCircleArrowLeft} 
              className='arrow' 
              onClick={() => handleMove("left")}
            />
            <div className='slider_image_container'>
              <img 
                alt=''
                src={photos[slideNumber].src}
                className='slider_img'
              />
            </div>
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className='arrow' 
              onClick={() => handleMove("right")}
            />
          </div>
        }
        <div className='singlepage_hotel_wrapper'>
          <button className='singlepage_hotel_btn'>Book now!</button>
          <h1 className='singlepage_hotel_title'>Grand Hotel</h1>
          <div className='singlepage_hotel_address'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>E One St 154 Los Ang.</span>
          </div>
          <span className='singlepage_hotel_distance'>
            Excellent Location - 300m from center
          </span>
          <span className='singlepage_hotel_highlight'>
            Book a stay over 100$ and get a free airport taxi ...
          </span>
          <div className='singlepage_images'>
            {
              photos.map((item, index: number) => {
                return (
                  <div className='singlepage_image_container'>
                    <img 
                      onClick={() => handleClick(index)}
                      src={item.src} 
                      alt=''
                      className='hotel_img'
                    />
                  </div>
                )
              })
            }
          </div>
          <div className='hotel_details'>
            <div className='hotel_details_texts'>
                <h1 className='hotel_details_title'>Stay in the heart of madrid</h1>
                <p className='hotel_details_description'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum non, quo consectetur dolorum esse amet iusto iure alias reprehenderit labore doloremque tempora, fuga a obcaecati molestias, explicabo tempore temporibus nostrum?
                </p>
            </div>
            <div className='hotel_details_price'>
              <h1>Perfect for a 5-day stay!</h1>
              <span>
                Labore laborum fugiat ipsum laboris et ex non et.
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Book now!</button>
            </div>
          </div>
        </div>
      </div>
      <Email />
      <Footer />
    </div>
  )
}

export default SingleHotel