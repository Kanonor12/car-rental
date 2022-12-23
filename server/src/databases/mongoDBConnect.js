import expres from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import pkg from 'mongoose';

dotenv.config();
const { connection } = pkg;

export const mongoDBConnect = async (req, res, next) => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected at ${connection.host}:${connection.port}`)
    } catch (error) {
        next(error)
    }
}