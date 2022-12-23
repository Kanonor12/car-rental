

export const getAllCars = (req,res,next) => {

    try {
        console.log('Getting all users')
        res.status(200).json('Get all cars')
    } catch (error) {
        next(error)
    }
    
}

export const getCar = (req,res,next) => {

    try {
        console.log('Getting single user')
        res.status(200).json('Get single cars')
    } catch (error) {
        next(error) 
    }
 
}

export const updateCar = (req,res,next) => {

    try {
         console.log('Updating single user')
         res.status(200).json('Car has been updated')
    } catch (error) {
        next(error)
    }
   
}

export const deleteCar = (req,res,next) => {

    try {
        console.log('Deleting single user')
        res.status(200).json('Car has been deleted')
    } catch (error) {
        next(error)
    }
    
}