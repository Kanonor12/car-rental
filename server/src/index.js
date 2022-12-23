import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// Internal imports
import { mongoDBConnect } from './databases/mongoDBConnect.js';

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();

mongoose.set('strictQuery', true);

// Middlewares

app.use(cookieParser())
//app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: false }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }))
app.use(express.urlencoded({extended: false}));
app.use(cors())

//app.use('/posts', router)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    mongoDBConnect()
   
})
