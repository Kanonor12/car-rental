import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import { manageError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js';

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

export const login = async (req,res,next) => {
   

    try {
        const user = await User.findOne({email: req.body.email});

        if(!user) return next(manageError( 404, "User not found"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordCorrect) return next(manageError(400, "Wrong password or username"));
        //res.status(200).json(`User ${user.name} ${user.lastname} authenticated`)

        const token = generateToken(user)

        const { password , isAdmin, ...otherDetails} = user._doc;
        res.cookie('access_token', token, {httpOnly: true})
        .status(200).json({details: {...otherDetails}, isAdmin})
    } catch (error) {
        next(error)
    }
    
}