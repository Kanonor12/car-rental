import express from 'express';
import { verify } from 'jsonwebtoken';
import { addCar, deleteCar, getAllCars, getCar, updateCar } from '../controllers/carControllers.js';
import { verifyAdmin, verifyUser } from '../utils/privateRoutes.js';



const router = express.Router();

// Add car
router.post('/', verifyAdmin, addCar);

// Get Cars
router.get('/', verifyUser, getAllCars);

// Get Car
router.get('/:id', getCar);

// Update Car
router.put('/:id', verifyAdmin, updateCar);

// Delete Car
router.delete('/:id', verifyAdmin, deleteCar);

export default router;