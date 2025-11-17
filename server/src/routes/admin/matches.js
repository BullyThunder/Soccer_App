const express = require('express');
const mongoose = require('mongoose');
const auth = require('../../../middleware/auth.js');
const Match = require('../../models/matches.js');
const checkRole = require('../../../middleware/checkRole.js');

const router = express.Router();

router.use(auth);
router.use(checkRole('admin'));

router.get('/',async(req,res,next)=>{
    try{
    const matches = await Match.find({
        createdBy: req.user.id
    });
    res.json(matches)
    }
    catch(error){
        next(error)
    }

})
router.post('/',async(req,res,next)=>{
    try{
    const {utcDate,homeTeam,awayTeam,score} = req.body;
    if (!utcDate || !homeTeam || !awayTeam){
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const savedMatches = {
        utcDate, 
        homeTeam, 
        awayTeam, 
        score, 
        source: 'custom', 
        createdBy: req.user.id 
    }
    const match = await Match.create(savedMatches);
    res.status(201).json({
        message: 'Match was created',
        match
    });
    }
    catch(error){
        next(error)
    }
})

router.delete('/:id',async(req,res,next)=>{
    try{
    const {id} = req.params;
    console.log("🟡 ID received by front:", id);
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid match id" });
        }
   const deletedMatches = await Match.findByIdAndDelete(id)
    if(!deletedMatches){
       return res
        .status(404)
        .json({ message: "Match not found" })
    }
        return res
            .status(200)
            .json({message: "Match deleted"})
    }      
    catch(error){
        console.error("❌ DELETE error:", error);
        next(error)
    }
})


module.exports = router;