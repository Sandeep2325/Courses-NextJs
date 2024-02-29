import mongoose from "mongoose";

const benifitSchema = new mongoose.Schema({
    priornum: {
        type: String,
        required: [true, "Priornum is required"]
    },
    benifit: {
        type: String,
        required: [true, "Benfit is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
})

const Benifits = mongoose.models.benifits || mongoose.model("benifits", benifitSchema)

export default Benifits;