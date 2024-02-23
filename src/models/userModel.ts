import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please provide a fullname"],
        
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique:true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken:String,
    verifyTokenExpiry:String,

})

const User = mongoose.models.users || mongoose.model
    ("users", userSchema);

export default User;