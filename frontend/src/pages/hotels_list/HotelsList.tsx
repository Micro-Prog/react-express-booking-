import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

// import the css file
import './hotelslist.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/hotelslist_searchitem/SearchItem';


const HotelsList = () => {


  // location hook
  const location = useLocation();

  const [destination, useDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);


  const [openDate, setOpenDate] = useState(false);
  
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='list_container'>
        <div className='list_wrapper'>
          <div className='list_search'>
            <h1 className='list_title'>Search</h1>
            <div className='list_item'>
              <label>Destination</label>
              <input placeholder={destination} type='text' />
            </div>
            <div className='list_item'>
              <label>Check-in Date</label>
              <span 
                onClick={() => setOpenDate(!openDate)}
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {
                openDate &&
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              }
            </div>
            <div className='list_item'>
              <label>Options</label>
              <div className='list_item_options'>
                <div className='list_option_item'>
                  <span className='list_option_text'>
                    Min Price <small>per night</small>
                  </span>
                  <input type='number' className='list_option_input' />
                </div>
                <div className='list_option_item'>
                  <span className='list_option_text'>
                    Max Price <small>per night</small>
                  </span>
                  <input type='number' className='list_option_input' />
                </div>
                <div className='list_option_item'>
                  <span className='list_option_text'>
                    Adult
                  </span>
                  <input 
                    min={1}
                    placeholder={options.adult}
                    type='number' 
                    className='list_option_input' 
                  />
                </div>
                <div className='list_option_item'>
                  <span className='list_option_text'>
                    Children
                  </span>
                  <input 
                    min={0}
                    placeholder={options.children}
                    type='number' 
                    className='list_option_input' 
                  />
                </div>
                <div className='list_option_item'>
                  <span className='list_option_text'>
                    Room
                  </span>
                  <input 
                    min={1}
                    placeholder={options.room}
                    type='number' 
                    className='list_option_input' 
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='list_results'>
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsList