
const express = require('express');
const bcrypt = require('bcrypt')
const usersRouter = express.Router();
const User =  require('../models/user');

usersRouter.get('/', async(req,res)=>{
    const users = await User.find({});
    res.json(users) 
})
usersRouter.post('/', async(req,res,next)=>{
    try{
    const {username,email,password,role} = req.body;
     const saltRounds = 10;
     const passwordHash = await bcrypt.hash(password,saltRounds);

     const user = new User({
        username,email,passwordHash,role
     })

     const savedUser = await user.save();
     return res.status(201).json(savedUser)
    }
    catch(error){
        next(error)
    }
})

module.exports = usersRouter