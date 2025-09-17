const express = require('express');
const router = express.Router()
const Matches = require('../models/matches')

router.get('/',(req,res)=>{
    res.send('All_Matches')
});

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

module.exports = router