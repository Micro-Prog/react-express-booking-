import mongoose, { Schema, mongo } from "mongoose";


const RoomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxCapacity: {
        type: Number,
        required: true,
    },
    roomNums: [{ number: Number, unavailableDates: [ { type: Date } ], }]
},
    { timestamps: true }
);


const Room = mongoose.models.Room || mongoose.model("Room", RoomSchema);
export default Room;