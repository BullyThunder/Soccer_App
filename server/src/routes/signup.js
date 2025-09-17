const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user') // твоя модель User


const signupRouter = express.Router()

signupRouter.post('/',async(req,res,next)=>{
    const{email,username,password,name} = req.body;
    if(!email || !username || !password){
        return res.status(400).json({ error: 'All fields are required' })
    }
    const existingName = await User.findOne({username});
    if(existingName){
         return res.status(400).json({ error: 'Username already taken' })
    }
    const passwordHash = await bcrypt.hash(password,10);
    const newUser = new User({
        email,
        username,
        passwordHash,
        name
    })
    await newUser.save();

    const userForToken = ({
        username: newUser.username,
        id: newUser._id
    })
    const token = jwt.sign(userForToken,process.env.SECRET,
        { expiresIn: '1h' }
    )
    const responseData = ({
        message: 'User created successfully',
        token,
        username: newUser.username,
        name: newUser.name
    })
    res
    .status(201).json(responseData)
})

module.exports = signupRouter
