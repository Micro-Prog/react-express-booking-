import express, { NextFunction } from 'express';
import Hotel from '../../utils/db/models/hotel/Hotel';
import createError from '../../error_handling/error/error';
import { createHotel, deleteHotel, getAllHotels, getAllHotelsByCity, getAllHotelsByType, getByIdHotel, updateHotel } from '../../controllers/hotel_controller/hotel.controller';
import { verifyAdmin } from '../../utils/verification/jwt/jwtToken';

// define the router
const router = express.Router();

// define the CREATE route
router.post("/", verifyAdmin as NextFunction, createHotel);

// define the UPDATE route
router.put("/find/:id", verifyAdmin as NextFunction, updateHotel);

// define the DELETE route
router.delete("/find/:id", verifyAdmin as NextFunction, deleteHotel);

// define the GET route for one hotel
router.get("/find/:id", getByIdHotel);

// define the GET ALL route
router.get("/", getAllHotels);

// define the get all routes by city and type
router.get("/countByCity", getAllHotelsByCity);
router.get("/countByType", getAllHotelsByType);


export default router;