import jwt from 'jsonwebtoken';
import { manageError} from '../utils/error.js'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(manageError(401, "You are not authnticated!"));
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return next(manageError(403, "Token is not valid"));
        req.user = user;
        //console.log(req.user)
        next();
    })
}

export const verifyUser = (req, res, next) => {
    console.log("Entered verifyUser")
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return next(manageError(403, "You are not authorized!"));
      }
    });
  };

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        
        if (req.user.isAdmin) {
            next()
        } else {
          
            return next(manageError(403, "You are not authorised!"))
        }
    })
}
