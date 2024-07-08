import Booking from "../models/Booking.js"

export const createBooking = async(req,res) => {
    const newBooking = new Booking(req.body)
    try {
        // console.log(req.body)
        const savedBooking = await newBooking.save()
        console.log(savedBooking)

        res.status(200).json({success:true,Message:"Booking saved successfully",data:savedBooking})
    } catch (error) {
        res.status(500).json({success:false,message:"Internal Server error"})
    }
}


export const getBooking = async(req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)

        res.status(200).json({success:true,Message:"Successful",data:book})
    } catch (error) {
     res.status(404).json({success:true,message:"Internal error"})   
    }
}

export const getAllBooking = async(req, res) => {

    try {
        const book = await Booking.findById()
        res.status(200).json({success:true,Message:"Successful",data:book})
    } catch (error) {
     res.status(500).json({success:true,message:"Internal server error"})   
    }
}