import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    birthday: {
        day: {
          type: Number,
          required: true,
        },
        month: {
          type: Number,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        }
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    idNumber: {
        type: String,
    },
    passportNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

}, {timestamps: true},);

export default mongoose.model('User', UserSchema);