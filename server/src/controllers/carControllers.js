import Car from '../models/Car.js'


export const addCar = async (req,res,next) => {

    const newCar = new Car(req.body)

    try {
        const savedCar = await newCar.save()
        res.status(200).json(savedCar)
    } catch (error) {
        next(error)
    }
    
}

export const getAllCars = async (req,res,next) => {

    try {
        const cars = await Car.find()
        res.status(200).json(cars)
    } catch (error) {
        next(error)
    }
    
}

export const getCar = async (req,res,next) => {

    try {
        const car = await Car.findById(req.params.id)
        res.status(200).json(car)
    } catch (error) {
        next(error) 
    }
 
}

export const updateCar = async (req,res,next) => {

    try {
        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
        )
         console.log(updatedCar)
         res.status(200).json(updatedCar)
    } catch (error) {
        next(error)
    }
   
}

export const deleteCar = async (req,res,next) => {

    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id)
        res.status(200).json(`The following Car has been deleted ${deletedCar.brand} ${deletedCar.model}`)
    } catch (error) {
        next(error)
    }
    
}