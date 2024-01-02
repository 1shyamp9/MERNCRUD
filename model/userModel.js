import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true , 'Please Enter Name'],
    },
    email: {
        type: String,
        require: [true , 'Please Enter Email ID'],
    },
    password: {
        type: String,
        require: [true , 'Please Enter Password'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});
export const User = new mongoose.model('User', userSchema);