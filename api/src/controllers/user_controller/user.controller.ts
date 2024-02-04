import { NextFunction } from "express";
import User from "../../utils/db/models/user/User";
import { Request, Response } from "express";

// define the update user function
export const updateUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        // find the user and update 
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true});

        res.status(200).json(updatedUser);

    } catch (error) {
        next(error);
    }
};

// define the delete user function
export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        // find the user and delete it
        await User.findByIdAndDelete(
            req.params.id,
        );

        res.status(200).json("The User Has Been Deleted.");

    } catch (error) {

        next(error);

    }
};

// define the get by id function
export const getByIdUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        // find the user by id
        const user = await User.findById(
            req.params.id,
        );

        res.status(200).json(user);

    } catch (error) {
        
        next(error);
    
    }
};

// define the get all users function
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

    try {

        // find all users
        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {

        next(error);
    }

};