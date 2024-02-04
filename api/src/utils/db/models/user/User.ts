import mongoose from "mongoose";


// define the user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        requred: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true }
);


// create the user if not exists and export it
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;