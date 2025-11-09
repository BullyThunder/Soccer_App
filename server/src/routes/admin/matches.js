const express = require('express');
const auth = require('../../../middleware/auth');
const Match = require('../../models/matches');
const checkRole = require('../../../middleware/checkRole');

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


module.exports = router;