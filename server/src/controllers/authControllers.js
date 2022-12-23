

export const register = (req,res,next) => {

    try {
        console.log('Registering user')
        res.status(200).json('User registration successful')
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