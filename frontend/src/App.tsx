import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import Home from './pages/homepage/Home';
import HotelsList from './pages/hotels_list/HotelsList';
import SingleHotel from './pages/single_page_hotel/SingleHotel';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<HotelsList />} />
        <Route path='/hotels/:id' element={<SingleHotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
