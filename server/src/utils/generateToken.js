import jwt from 'jsonwebtoken';

const generateToken = (user) => {
    return jwt.sign({id: user._id, isAdmin: user.isAdmin},
         process.env.JWT_SECRET_KEY,
          {expiresIn: "30d"}
         )
}
 export default generateToken

 //{ expires: "30d"}