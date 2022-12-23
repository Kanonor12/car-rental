import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userControllers.js';


const router = express.Router();

// Get Users
router.get('/', getAllUsers);

// Get User
router.get('/:id', getUser);

// Update User
router.put('/:id', updateUser);

// Delete User
router.delete('/:id', deleteUser);

export default router;