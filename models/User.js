import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'You must enter a username'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password has to be at least 8 characters long"]
    },
    email: {
        type: String,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "regular"],
        default: "regular",
        required: true
    }
})

const User = mongoose.model('User', userSchema)


export default User