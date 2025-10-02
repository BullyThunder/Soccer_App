const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user') // твоя модель User


const signupRouter = express.Router()


signupRouter.post('/',async(req,res,next)=>{
    const{email,username,password,name,role} = req.body;
    if(!email || !username || !password){
        return res.status(400).json({ error: 'All fields are required' })
    }
     const existingEmail = await User.findOne({email});
    if(existingEmail){
         return res.status(400).json({ error: 'Email already taken' })
    }
    const existingName = await User.findOne({username});
    if(existingName){
         return res.status(400).json({ error: 'Username already taken' })
    }
    const passwordHash = await bcrypt.hash(password,10);
    const newUser = await new User({
        email,
        username,
        passwordHash,
        name,
        role: role
    })
      try {
    await newUser.save()
    } catch(err) {
    return res.status(500).json({ error: 'Failed to create user' })
    }

    const userForToken = { id: newUser._id, email: newUser.email }
    const token = jwt.sign(userForToken,process.env.SECRET,
        { expiresIn: '1h' }
    )
      res.cookie('token', token, {
    httpOnly: true,    
    secure: true,      
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60, 
    })
    const responseData = ({
        message: 'User created successfully',
        username: newUser.username,
        name: newUser.name
    })
    res
    .status(201).json(responseData)
})

module.exports = signupRouter
