// @ts-nocheck

import React, { useState } from 'react';

// header css
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBus, faCab, faCalendar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

// date range library`
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// format function
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


const Header = (props: {type?: String}) => {

    const navigate = useNavigate();

    // open date state
    const [openDate, setOpenDate] = useState(false);

    // define a state for date range
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    // open options
    const [openOptions, setOpenOptions] = useState(false);

    // options
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    // destination
    const [destination, setDestination] = useState("");

    // set options
    const setOptionsCounter = (name: String, operation: String) => {

        // if (operation === 'decrease' && options[name] == 1) return;

        setOptions((prev) => {
            return {
                ...prev, 
                [name as keyof typeof options]: operation === 'increase' ? options[name as keyof typeof options] + 1 : options[name as keyof typeof options] - 1,
            }
        })
    };

    // navigate function
    const handleSearchBtn = () => {
        navigate("/hotels", { state: { destination, date, options }});
    }

  return (
    <div className='header'>
        <div className={props.type === "list" ? "header_container list_style" : "header_container"}>
            <div className='header_list'>
                <div className='header_list_item active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className='header_list_item'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className='header_list_item'>
                    <FontAwesomeIcon icon={faBus} />
                    <span>Cars</span>
                </div>
                <div className='header_list_item'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Tourist Attractions</span>
                </div>
                <div className='header_list_item'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Taxis</span>
                </div>
            </div>
            { props.type !== "list" &&
                <>
                    <h1 className='header_title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p className='header_description'>
                        Aliquip voluptate duis magna consectetur minim adipisicing.
                    </p>
                    <button className='header_btn'>Sign in / Register</button>
                    <div className='header_search'>
                        <div className='header_search_item'>
                            <FontAwesomeIcon icon={faBed} className='header_icon' />
                            <input
                                type='text'
                                placeholder='Type where are you going'
                                className='header_search_input'
                                onChange={e => setDestination(e.target.value)}
                            />
                        </div>
                        <div className='header_search_item'>
                            <FontAwesomeIcon icon={faCalendar} className='header_icon' />
                            <span
                                onClick={() => setOpenDate(!openDate)} 
                                className='header_search_text'>
                                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}
                            </span>
                            {
                                openDate &&
                                    <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date_range'
                                />
                            }
                        </div>
                        <div className='header_search_item'>
                            <FontAwesomeIcon icon={faPerson} className='header_icon' />
                            <span 
                                onClick={() => setOpenOptions(!openOptions)}
                                className='header_search_text'
                            >
                                {
                                    `${options.adult} adult - ${options.children} children - ${options.room} room`
                                }
                            </span>
                            { openOptions &&
                                <div className='options'>
                                    <div className='option_item'>
                                        <span className='option_text'>Adult</span>
                                        <div className='option_selector'>
                                            <button 
                                                disabled={options.adult <= 1}
                                                onClick={() => setOptionsCounter("adult", "decrease")}
                                                className='option_counter_button'
                                            >
                                                -
                                            </button>
                                            <span className='option_counter_number'>{options.adult}</span>
                                            <button 
                                                onClick={() => setOptionsCounter("adult", "increase")}
                                                className='option_counter_button'
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className='option_item'>
                                        <span className='option_text'>Children</span>
                                        <div className='option_selector'>
                                            <button 
                                                disabled={options.children <= 0}
                                                onClick={() => setOptionsCounter("children", "decrease")}
                                                className='option_counter_button'
                                            >
                                                -
                                            </button>
                                            <span className='option_counter_number'>{options.children}</span>
                                            <button 
                                                onClick={() => setOptionsCounter("children", "increase")}
                                                className='option_counter_button'
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className='option_item'>
                                        <span className='option_text'>Room</span>
                                        <div className='option_selector'>
                                            <button 
                                                disabled={options.room <= 1}
                                                onClick={() => setOptionsCounter("room", "decrease")}
                                                className='option_counter_button'>
                                                -
                                            </button>
                                            <span className='option_counter_number'>{options.room}</span>
                                            <button 
                                                onClick={() => setOptionsCounter("room", "increase")}
                                                className='option_counter_button'
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div>
                            <button 
                                className="header_btn" 
                                onClick={handleSearchBtn}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </>
            }

        </div>
    </div>
  )
}

export default Header