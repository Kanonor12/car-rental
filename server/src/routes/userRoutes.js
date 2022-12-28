import express from 'express';
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userControllers.js';

import { verifyUser, verifyAdmin, verifyToken} from '../utils/privateRoutes.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
    res.send("Hello user, you are authenticated")
    next()
})

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send("Hello user, you are authenticated and you can delete your account")
    next()
})

// Get Users
router.get('/', verifyAdmin, getAllUsers);

// Get User
router.get('/:id', verifyUser, getUser);

// Update User
router.put('/:id', verifyAdmin, updateUser);

// Delete User
router.delete('/:id',verifyAdmin, deleteUser);

export default router;