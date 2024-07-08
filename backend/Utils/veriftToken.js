import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {
    const token = req.cookies.accessToken
    console.log("verifytoken",token)
    if (!token) {
        return res.status(401).json({success:false, message:'You are not Authorized'})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if (err) {
            return res.status(401).json({success:false, message:'Token is invalid'})
        }
        
        req.user = user
        console.log("user in verifytoken",user)
        next()
        
    })
}


export const verifyUser = (req,res,next) => {
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.role === 'admin'){
            // console.log(token,"token in verify user")
            next()
        } 
        else{
            return res.status(401).json({success:false, message:'You are not Authenticated'})
        }
    })
}

export const verifyAdmin = (req,res,next) => {
    verifyToken(req,res,next,()=>{
        if(req.user.role === 'admin'){
            next()
        } 
        else{
            return res.status(401).json({success:false, message:'You are not Authorized'})
        }
    })
}