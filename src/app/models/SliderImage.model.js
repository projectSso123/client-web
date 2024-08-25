import mongoose from "mongoose";

//  the schema for model
const SliderImageSchema = new mongoose.Schema({
    links: {
        type: [String], // Array of strings
        required: true,
        default: [],
    }
});

// Compile the schema into a model
const SliderImage = mongoose.models.SliderImage ||  mongoose.model('SliderImage', SliderImageSchema);

export default SliderImage ;
