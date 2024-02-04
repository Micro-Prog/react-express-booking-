import mongoose from "mongoose";
import dotenv from 'dotenv';

// dotenv config
dotenv.config();

// db connection function
const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI || "undefined");
        console.log("[FROM DB FUNCTION]: mongodb connected successfully")
    } catch(error) {
        handleError(error);
    }    

};

// MONGO DB event listeners
mongoose.connection.on("connected", () => {
    console.log("[FROM EL]: Mongo DB Connected Without Any Error.")
});

mongoose.connection.on("disconnected", () => {
    console.log("[FROM EL]: Mongo DB Disconnected.")
});


function handleError(error: unknown) {
    throw new Error("Mongo DB Connection Error Occured");
}


module.exports = { dbConnection }
