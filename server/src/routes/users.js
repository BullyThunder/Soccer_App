
const express = require('express');
const bcrypt = require('bcrypt')
const User =  require('../models/user');
const checkRole = require('../../middleware/checkRole');

const usersRouter = express.Router();
usersRouter.use(checkRole('admin'))

usersRouter.get('/', async(req,res)=>{
    const users = await User.find({});
    res.json(users) 
})
usersRouter.post('/', async(req,res,next)=>{
    try{
    const {username,email,password,role} = req.body;
     const saltRounds = 10;
     const passwordHash = await bcrypt.hash(password,saltRounds);
    const userRole = role === 'admin' ? 'admin' : 'user';
     const user = new User({
        username,email,passwordHash,role: userRole
     })

     const savedUser = await user.save();
     return res.status(201).json(savedUser)
    }
    catch(error){
        next(error)
    }
})
usersRouter.delete('/:id', async(req,res,next)=>{
    try{
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res
        .status(200)
        .json({message: "User deleted"})
    }
    catch(error){
        next(error)
    }
})

module.exports = usersRouter