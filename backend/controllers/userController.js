import User from '../models/User.js'

// create a new User
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save()
        res.status(200).json({ success: true, message: 'User Created Successfully', data: savedUser })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create .Try again' })
    }
}


export const updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ success: true, message: 'User Updated Successfully' })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update .Try again' })
    }
}
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'User Deleted Successfully' })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete .Try again' })
    }
}
export const getSingleUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findById(id)
        res.status(200).json({ success: true, message: 'User fetch Successfully', data: user })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch .Try again' })
    }
}

export const getAllUser = async (req, res) => {
    try {

        const users = await User.find({}) 
        // console.log(Users)
        res.status(200).json({ success: true, count: Users.length, message: 'All User fetched successfully', data: users })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch .Try again' })
    }
}
