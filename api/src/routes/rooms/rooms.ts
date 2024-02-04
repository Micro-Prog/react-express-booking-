import express, { NextFunction } from 'express';
import { verifyAdmin } from '../../utils/verification/jwt/jwtToken';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../../controllers/rooms_controller/rooms.controller';


// define the router
const router = express.Router();

// define the create room route
router.post("/:hotelid", verifyAdmin as NextFunction, createRoom);

// define the update room route 
router.put("/:id", verifyAdmin as NextFunction, updateRoom);

// define the delete room route
router.delete("/:id/:hotelid", verifyAdmin as NextFunction, deleteRoom);

// define the get by id route
router.get("/:id", verifyAdmin as NextFunction, getRoom);

// define the get all rooms route
router.get("/", verifyAdmin as NextFunction, getRooms);


export default router;