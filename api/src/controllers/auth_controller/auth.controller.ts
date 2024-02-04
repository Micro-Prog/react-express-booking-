import { NextFunction, Request, Response } from "express"
import User from "../../utils/db/models/user/User";
import bcrypt from 'bcryptjs';
import createError from "../../error_handling/error/error";
import jwt from 'jsonwebtoken';


// define the register route
export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // hashing the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        // create a new user in the database
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).send("User created successfully.");

    } catch (error) {
        next(error);
    }
};

// define the login function 
export const login = async (req: Request, res: Response, next: NextFunction) => {

    // if not JWT_SECRET
    if (!process.env.JWT_SECRET) {
        return next(createError(500, "Some Requirements Not Defined."));
    }

    try {

        // find the username and throw an error if not exists
        const user = await User.findOne({ username: req.body.username });
        
        if (!user) {
            return next(createError(404, "Wrong Credentials"));
        }

        // compare the password
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password,
        );

        if (!isPasswordCorrect) {
            return next(createError(400, "Wrong Credentials"));
        }

        // process a jwt token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)

        // remove the password and isAdmin properties
        const { password, isAdmin, ...Details } = user._doc;

        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json(Details);

    } catch (error) {
        next(error);
    }
};