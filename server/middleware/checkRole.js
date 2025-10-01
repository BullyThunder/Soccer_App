const express = require('express');
const checkRole = (res,res,next) =>{
    return (res,res,next) =>{
        if(req.user.role != role){
            return res.status(403).json({ message: "Нет доступа" })
        }
    }
}

module.exports = isAdmin;

