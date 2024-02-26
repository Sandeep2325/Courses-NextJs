import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide a firstname"],
        
    },
    lastname: {
        type: String,
        required: [true, "Please provide a lastname"],
        
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone"],
        
    },
    subject: {
        type: String,
        required: [true, "Please provide a subject"],
        
    },
    message: {
        type: String,
        required: [true, "Please provide a message"],
        
    },
    base64Image:String,

})

const Contact = mongoose.models.contacts || mongoose.model
    ("contacts", contactSchema);

export default Contact;