const express = require('express');
const router = express.Router()
const Matches = require('../models/matches')
const fetchBarcelonaMatches = require('../../services/footballApi');
const fetchBarcelonaMatches_last5 = require('../../services/footballApi')
const errorHandler = require('../../middleware/errorHandler')

router.get('/',async(req,res,next)=>{
    try{
        const last5 = await fetchBarcelonaMatches_last5();
        res.json(last5)
    }
    catch(error){
        next(error)
    }
});
router.get('/all_matches', async(req,res,next)=>{
    try{
    const allMatches = await fetchBarcelonaMatches();
    res.json(allMatches)
    }
    catch(error){
        next(error)
    }
})
module.exports = router
/*
router.post('/',(req,res,next)=>{
    const body = req.body;
     if (!body.homeTeam || !body.awayTeam || !body.score) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
    const match =  new Matches({
        homeTeam: body.homeTeam,
        awayTeam: body.awayTeam,
        score: body.score
    })
    match
    .save()
    .then((savedMatch)=>{
        res.json(savedMatch)
    })
    .catch(error => next(error))

})
*/

