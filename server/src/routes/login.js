const jwt = require('jsonwebtoken')
const express = require('express');
const bcrypt = require('bcrypt')
const loginRouter = express.Router();
const User =  require('../models/user');

loginRouter.post('/',async(req,res,next)=>{
    const {email,password,role} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({ error: 'invalid password or email' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash)
  if (!isPasswordCorrect) {
    return res.status(401).json({ error: 'invalid email or password' })
  }
    
    const userToken = ({
        email: user.email,
        id: user._id,
         role: user.role
    })
    const token = jwt.sign(userToken, process.env.SECRET,
        {
            expiresIn: '1h'
        }
    )
     res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",       
    sameSite: "none",     
    maxAge: 1000 * 60 * 60,
    })

    const responseData = ({
        email: user.email,
        name: user.name,
        role: user.role
    })

    res
    .status(200)
    .send(responseData)
})

module.exports = loginRouter