import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cluster from 'cluster';
import os from 'os';
//require("os").cpus().length;
// Internal imports
import { mongoDBConnect } from './databases/mongoDBConnect.js';
import userRoute from './routes/userRoutes.js';
import carRoute from './routes/carRoutes.js';
import authRoute from './routes/authRoutes.js';

dotenv.config()

const totalCpus = os.cpus().length

if (cluster.isMaster) {
    console.log(`Number of CPUs are ${totalCpus}`);
    console.log(`Master ${process.pid} is running`);
  
    // Create worker threads
    for (let i = 0; i < totalCpus; i++) {
      cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
      console.log(`Let fork another worker`);
      cluster.fork();
    });
  } else {

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

app.use('/api/auth', authRoute)
app.use('/api/cars', carRoute)
app.use("/api/users", userRoute);



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
  }