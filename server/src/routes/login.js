const jwt = require('jsonwebtoken')
const express = require('express');
const bcrypt = require('bcrypt')
const loginRouter = express.Router();
const User =  require('../models/user');

loginRouter.post('/',async(req,res,next)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).json({ error: 'invalid password or email' });
    }
    const passwordCorrerct = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)
    
    const userToken = ({
        email: user.email,
        id: user._id
    })
    const token = jwt.sign(userToken, process.env.SECRET,
        {
            expiresIn: '1h'
        }
    )
    const responseData = ({
        token,
        email: user.email,
        name: user.name,
    })

    res
    .status(200)
    .send(responseData)
})

module.exports = loginRouter