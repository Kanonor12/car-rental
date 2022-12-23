import express from 'express';
import { login, register } from '../controllers/authControllers.js';



const router = express.Router();

// Use registration
router.post('/register', register);

// User Authentication
router.get('/login', login);

export default router;