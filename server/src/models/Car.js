import mongoose from "mongoose";

const { Schema } = mongoose;

const CarSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    registrationNumber: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    maxPassengers: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        unavailableDates: {
            type: [date],
        },
        default: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    featured: {
        type: Boolean,
        default: false,
    },

}, {timestamps: true},);

export default mongoose.model('Car', CarSchema);