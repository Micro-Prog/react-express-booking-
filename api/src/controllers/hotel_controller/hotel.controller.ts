import { NextFunction } from "express";
import Hotel from "../../utils/db/models/hotel/Hotel";
import { Express, Request, Response} from 'express';


export const createHotel = async (req: Request, res: Response, next: NextFunction) => {
        // define a new hotel
        const newHotel = new Hotel(req.body);

        try {
    
            // create a new hotel and return it
            const createdHotel = await newHotel.save();
            res.status(200).json(createdHotel);
    
        } catch(error) {
    
            next(error);
    
        }
}

export const updateHotel = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        // find the hotel and update
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        res.status(200).json(updatedHotel);

    } catch(error) {

        next(error);
    
    }
}

export const deleteHotel = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        // find the hotel and delete it
        await Hotel.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("The Hotel Has Been Deleted.")
    } catch (error) {

        next(error);
        
    }
}

export const getByIdHotel = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        // find the hotel by id
        const hotel = await Hotel.findById(
            req.params.id,
        );

        res.status(200).json(hotel);

    } catch (error) {
        next(error);
    }
}

export const getAllHotels = async (req: Request, res: Response, next: NextFunction) => {
    
    // define a custom error
    // const failed = true;
    // if (failed) return next(createError(401, "There is a problem."));

    try {

        // find all hotels
        const hotels = await Hotel.find();

        res.status(200).json(hotels);

    } catch (error) {
        next(error);
    }
}

// define the function for get all hotels by city 
export const getAllHotelsByCity = async (req: Request, res: Response, next: NextFunction) => {
    
    const cities = (<string>req.query.cities)?.split(",");

    // define a custom error
    // const failed = true;
    // if (failed) return next(createError(401, "There is a problem."));

    try {

        // find all hotels with those names
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city: city });
        }));

        res.status(200).json(list);

    } catch (error) {
        next(error);
    }
}
 
// define the function for get all hotels by type 
export const getAllHotelsByType = async (req: Request, res: Response, next: NextFunction) => {
    
    // define a custom error
    // const failed = true;
    // if (failed) return next(createError(401, "There is a problem."));

    try {

        // find all hotels
        const hotels = await Hotel.find();

        res.status(200).json(hotels);

    } catch (error) {
        next(error);
    }
}