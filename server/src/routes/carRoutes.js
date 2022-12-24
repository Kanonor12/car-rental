import express from 'express';
import { addCar, deleteCar, getAllCars, getCar, updateCar } from '../controllers/carControllers.js';



const router = express.Router();

// Add car
router.post('/', addCar);

// Get Cars
router.get('/', getAllCars);

// Get Car
router.get('/:id', getCar);

// Update Car
router.put('/:id', updateCar);

// Delete Car
router.delete('/:id', deleteCar);

export default router;