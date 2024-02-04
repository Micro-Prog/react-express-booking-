import { Request, Response, NextFunction } from "express";
import Room from "../../utils/db/models/room/Room";
import Hotel from "../../utils/db/models/hotel/Hotel";


// define the create room function
export const createRoom = async (req: Request, res: Response, next: NextFunction) => {

    // read the hotelId and the room from the request body
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {

        // save the room
        const savedRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id}
            }, { new: true });
        } catch (error) {
            next(error);
        }

        res.status(200).json(newRoom);

    } catch (error) {
        next(error);
    }
};

// define the update room by id function
export const updateRoom = async(req: Request, res: Response, next: NextFunction) => {
    try {

        // update the room
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        res.status(200).json(updatedRoom);

    } catch (error) {
        next(error);
    }
};

// define the delete room by id function
export const deleteRoom = async (req: Request, res: Response, next: NextFunction) => {

    // get the hotelid from params
    const hotelId = req.params.hotelid;

    try {

        // find and delete the room
        await Room.findByIdAndDelete(req.params.id);
        
        // then update the related hotel
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            });
        } catch (error) {
            next(error);
        }

        res.status(200).json("Hotel Deleted.");

    } catch (error) {
        next(error);
    }
};

// define the get room by id function
export const getRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        // get room by id
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);

    } catch (error) {
        next(error);
    }
};

// define the get all rooms function
export const getRooms = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // find all rooms
        const rooms = await Room.find();
        res.status(200).json(rooms);

    } catch (error) {
        next(error);
    }
};