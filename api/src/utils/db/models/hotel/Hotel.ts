import mongoose from "mongoose";


// define the hotel schema
const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distanceFromCityCenter: {
        type: String,
        required: true
    },
    photos: {
        type: [String],
        required: false
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String]
    },
    cheapestRoomPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
});

// create the model if not exists and export it
const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema);
export default Hotel;