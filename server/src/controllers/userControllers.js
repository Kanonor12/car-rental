

export const getAllUsers = (req,res,next) => {

    try {
        console.log('Getting all users')
        res.status(200).json('Get all users')
    } catch (error) {
        next(error)
    }   
}

export const getUser = (req,res,next) => {

    try {
        console.log('Getting single user')
        res.status(200).json('Get single user')
    } catch (error) {
        next(error)
    }
    
}

export const updateUser = (req,res,next) => {

    try {
        console.log('Updating single user')
        res.status(200).json('User has been updated')
    } catch (error) {
        next(error)
    }
    
}

export const deleteUser = (req,res,next) => {

    try {
        console.log('Deleting single user')
        res.status(200).json('User has been deleted')
    } catch (error) {
        next(error)
    }
    
}