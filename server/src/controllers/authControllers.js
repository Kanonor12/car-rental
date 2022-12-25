import User from '../models/User.js'
import bcrypt from 'bcryptjs';

export const register = async (req,res,next) => {

    try {

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        })
       
        const savedUser = await newUser.save();
        res.status(200).json(savedUser)
    } catch (error) {
        next(error)
    }
    
}

export const login = (req,res,next) => {
   

    try {
        console.log('Authenticating user')
        res.status(200).json('User authenticated')
    } catch (error) {
        next(error)
    }
    
}