import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import Jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        // hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            // photo: req.body.photo,
        })

        await newUser.save();
        // console.log(hash)

        res.status(200).json({ success: true, message: 'User Created successfully' })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, message: 'Internal Server Error' })

    }
}


export const Login = async (req, res) => {
    const email = req.body.email
    console.log(email)
    try {
        const user = await User.findOne({email})
        

        if(!user) {
            return res.status(404).json({message:false , message : 'User not found'})
        }

        const checkCorrectPass = bcrypt.compare(req.body.password,user.password)
        console.log("CheckPass",checkCorrectPass)

        if(!checkCorrectPass) {
           return res.status(401).json({message:false , message : 'Incorrect password or email !!! Please Check '})
        }

        const {password,role,...rest} = user._doc

    //     const token = Jwt.sign({
    //         id:user._id,
    //         role:user.role,
    //     },process.env.JWT_SECRET_KEY)
    const generateToken = (user) => {
        return Jwt.sign({
            id: user._id,
            role: user.role,
        }, process.env.JWT_SECRET_KEY)
    }

    const token = generateToken(user)

    res.cookie('accessToken', token,{
        httpOnly: true,
    }).status(200).json({success:true,message:"Successfully Login",data:{...rest},token,role})

    console.log("Login Toke in authcontroller",token)

    } catch (error) {
    res.status(500).json({success:false,message:"Invalid credentials"})
    }
};
