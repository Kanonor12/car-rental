import express from 'express';
import { deleteCar, getAllCars, getCar, updateCar } from '../controllers/carControllers.js';



const router = express.Router();

// Get Users
router.get('/', getAllCars);

// Get User
router.get('/:id', getCar);

// Update User
router.put('/:id', updateCar);

// Delete User
router.delete('/:id', deleteCar);

export default router;